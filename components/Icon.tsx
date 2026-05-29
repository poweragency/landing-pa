import {
  Cpu,
  Layers,
  Dumbbell,
  Magnet,
  Clapperboard,
  Rocket,
  Inbox,
  FileText,
  Wrench,
  Bot,
  Link2,
  BarChart3,
  ShieldCheck,
  Sigma,
  Activity,
  FlaskConical,
  LineChart,
  Target,
  Store,
  Bell,
  Send,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  cpu: Cpu,
  layers: Layers,
  dumbbell: Dumbbell,
  magnet: Magnet,
  clapperboard: Clapperboard,
  rocket: Rocket,
  inbox: Inbox,
  file: FileText,
  wrench: Wrench,
  bot: Bot,
  link: Link2,
  chart: BarChart3,
  shield: ShieldCheck,
  sigma: Sigma,
  activity: Activity,
  flask: FlaskConical,
  lineChart: LineChart,
  target: Target,
  store: Store,
  bell: Bell,
  send: Send,
};

export default function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = MAP[name] ?? Sparkles;
  return <Cmp className={className} strokeWidth={1.6} aria-hidden />;
}
