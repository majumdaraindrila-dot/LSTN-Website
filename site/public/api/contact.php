<?php
/**
 * LSTN contact form handler — for PHP shared hosting (e.g. Blacknight).
 * Receives the website form (multipart POST) and emails it via PHP mail().
 * Configure settings in config.php. Returns JSON: { "ok": true } or { "ok": false, "error": "…" }.
 * No data is stored on the server except a short-lived, anonymised rate-limit counter.
 */
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('X-Robots-Tag: noindex');

function respond(int $code, array $body): void {
    http_response_code($code);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

$config = require __DIR__ . '/config.php';

// Origin check
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (!empty($config['allowed_origins']) && $origin !== '' && !in_array($origin, $config['allowed_origins'], true)) {
    respond(403, ['ok' => false, 'error' => 'Forbidden']);
}

// Spam traps: honeypot field must be empty, form must take > 3 seconds to fill in
if (!empty($_POST['website']) || (int)($_POST['elapsed'] ?? 0) < 3) {
    respond(200, ['ok' => true]); // pretend success for bots
}

// Rate limit (hashed IP, stored in the system temp dir)
$ipHash = hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? '') . __DIR__);
$rlFile = sys_get_temp_dir() . '/lstn_rl_' . $ipHash;
$now = time();
$hits = array_filter(
    is_file($rlFile) ? (array)json_decode((string)file_get_contents($rlFile), true) : [],
    fn($t) => $t > $now - 3600
);
if (count($hits) >= (int)$config['max_per_hour']) {
    respond(429, ['ok' => false, 'error' => 'Too many requests']);
}

// Validate input
$clean = fn(string $k, int $max) => trim(mb_substr(str_replace(["\r", "\0"], '', (string)($_POST[$k] ?? '')), 0, $max));
$name    = $clean('name', 200);
$email   = $clean('email', 200);
$org     = $clean('organization', 200);
$topic   = $clean('topic', 40);
$label   = $clean('topicLabel', 80);
$message = trim(mb_substr((string)($_POST['message'] ?? ''), 0, 5000));
$consent = ($_POST['consent'] ?? '') === 'yes';

$topics = ['general', 'partnerships', 'community', 'events', 'careers'];
if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($message) < 10 || !in_array($topic, $topics, true) || !$consent) {
    respond(422, ['ok' => false, 'error' => 'Invalid input']);
}
// Prevent header injection
if (preg_match('/[\r\n]/', $name . $email)) {
    respond(422, ['ok' => false, 'error' => 'Invalid input']);
}

$to = $config['topic_recipients'][$topic] ?? $config['to_email'];
$subject = '=?UTF-8?B?' . base64_encode("[LSTN Website] {$label} enquiry from {$name}") . '?=';
$body = "New enquiry from the LSTN website\n"
      . "----------------------------------------\n"
      . "Name:         {$name}\n"
      . "Email:        {$email}\n"
      . "Organization: " . ($org !== '' ? $org : '—') . "\n"
      . "Enquiry type: {$label}\n"
      . "Consent:      Privacy Policy accepted\n"
      . "Sent:         " . date('Y-m-d H:i T') . "\n"
      . "----------------------------------------\n\n"
      . $message . "\n";

$headers = [
    'From: ' . $config['from_name'] . ' <' . $config['from_email'] . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: LSTN-Website',
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers), '-f' . $config['from_email']);
if (!$sent) {
    respond(500, ['ok' => false, 'error' => 'Mail could not be sent']);
}

$hits[] = $now;
@file_put_contents($rlFile, json_encode(array_values($hits)));
respond(200, ['ok' => true]);
