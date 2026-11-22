import {
  CalendarDays, MonitorSmartphone, TrendingUp, ChartNoAxesCombined, Coins, Building2, Eye, Handshake,
  Users, UserRoundSearch, Presentation, Lightbulb, Mail, MapPin, Target, Infinity as InfinityIcon,
  Telescope, Sparkles, Network, Globe,
} from 'lucide-react'

/** Map of semantic icon names (used in content files) to icon components. */
const map = {
  events: CalendarDays,
  platform: MonitorSmartphone,
  career: TrendingUp,
  data: ChartNoAxesCombined,
  venture: Coins,
  cities: Building2,
  visibility: Eye,
  bizdev: Handshake,
  match: UserRoundSearch,
  leadership: Presentation,
  connections: Users,
  knowledge: Lightbulb,
  opportunities: Sparkles,
  growth: TrendingUp,
  reach: Target,
  longterm: InfinityIcon,
  explore: Telescope,
  network: Network,
  globe: Globe,
  mail: Mail,
  pin: MapPin,
}

export default function Icon({ name, ...props }) {
  const C = map[name] || Sparkles
  return <C aria-hidden="true" strokeWidth={1.6} {...props} />
}

export function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

export function CircleIcon(props) {
  // Generic "community" mark used for the Circle platform link
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  )
}
