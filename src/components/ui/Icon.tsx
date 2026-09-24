import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Dribbble,
  Code2,
  Box,
  Camera,
  Plane,
  Film,
  Music,
  Languages as LanguagesIcon,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  mail: Mail,
  dribbble: Dribbble,
  code: Code2,
  box: Box,
  camera: Camera,
  plane: Plane,
  film: Film,
  music: Music,
  languages: LanguagesIcon,
  whatsapp: MessageCircle,
};

export default function Icon({
  name,
  className,
  size = 18,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Cmp = map[name] ?? Code2;
  return <Cmp className={className} size={size} aria-hidden />;
}
