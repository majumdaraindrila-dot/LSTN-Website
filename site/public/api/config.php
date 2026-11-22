<?php
/**
 * Contact form settings — EDIT BEFORE GOING LIVE.
 * This file is blocked from public access by .htaccess.
 */
return [
    // Where enquiries are delivered
    'to_email'   => 'info@lifesciencestechnetwork.com',

    // Sender address. MUST be a mailbox on the same domain as the website
    // (e.g. website@lifesciencestechnetwork.com) or mail may be rejected as spam.
    'from_email' => 'website@lifesciencestechnetwork.com',
    'from_name'  => 'LSTN Website',

    // Optional: send each topic to a different inbox
    'topic_recipients' => [
        // 'partnerships' => 'partners@lifesciencestechnetwork.com',
        // 'careers'      => 'careers@lifesciencestechnetwork.com',
    ],

    // Only accept submissions from these site origins (leave empty to skip the check)
    'allowed_origins' => [
        'https://www.lifesciencestechnetwork.com',
        'https://lifesciencestechnetwork.com',
    ],

    // Basic rate limit per IP address
    'max_per_hour' => 5,
];
