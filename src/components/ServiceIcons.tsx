// Line-style SVG icons for service cards. 24x24 viewbox, 1.4 stroke.

type IconProps = { className?: string };

const base = "w-9 h-9 stroke-current fill-none";

export const ShieldIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <path d="M12 2L4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const NetworkIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <circle cx="12" cy="6" r="2" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="18" r="2" />
    <path d="M12 8v4M11 13l-4 4M13 13l4 4" />
  </svg>
);

export const BuildingIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <path d="M3 21V8l9-5 9 5v13" />
    <path d="M9 21v-7h6v7" />
    <path d="M3 21h18" />
  </svg>
);

export const RadarIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <path d="M12 12L19 5" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" />
  </svg>
);

export const DocIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <path d="M14 3H6v18h12V7l-4-4z" />
    <path d="M14 3v4h4" />
    <path d="M9 12h6M9 15h6M9 18h4" />
  </svg>
);

export const LockIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <rect x="4" y="10" width="16" height="11" rx="1.5" />
    <path d="M8 10V7a4 4 0 018 0v3" />
    <circle cx="12" cy="15.5" r="1.2" />
  </svg>
);

export const ChartIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <path d="M3 3v18h18" />
    <path d="M7 15l4-5 3 3 5-7" />
  </svg>
);

export const UsersIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M15 20c0-2 2-3.5 4-3.5s2 0.5 2 0.5" />
  </svg>
);

export const BankIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <path d="M3 9l9-5 9 5" />
    <path d="M5 9v9M19 9v9M9 9v9M15 9v9" />
    <path d="M3 21h18" />
  </svg>
);

export const FlowIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <rect x="3" y="3" width="6" height="6" />
    <rect x="15" y="15" width="6" height="6" />
    <path d="M9 6h6a3 3 0 013 3v6" />
  </svg>
);

export const DeskIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <rect x="3" y="4" width="18" height="12" rx="1.5" />
    <path d="M3 16l2 4M21 16l-2 4M9 16v4M15 16v4" />
  </svg>
);

export const GavelIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <path d="M14 4l6 6-3 3-6-6 3-3z" />
    <path d="M11 7L4 14l3 3 7-7" />
    <path d="M3 21h12" />
  </svg>
);

export const PulseIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <path d="M3 12h4l2-6 4 12 2-6h6" />
  </svg>
);

export const GlobeIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
  </svg>
);

export const SearchIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l5 5" strokeLinecap="round" />
  </svg>
);

export const DashboardIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <rect x="3" y="3" width="8" height="8" rx="1" />
    <rect x="13" y="3" width="8" height="5" rx="1" />
    <rect x="13" y="10" width="8" height="11" rx="1" />
    <rect x="3" y="13" width="8" height="8" rx="1" />
  </svg>
);

export const CodeIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" strokeLinecap="round" />
  </svg>
);

export const GraduationIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <path d="M2 9l10-5 10 5-10 5z" />
    <path d="M6 11v5a6 4 0 0012 0v-5" />
    <path d="M22 9v6" strokeLinecap="round" />
  </svg>
);

export const WalletIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <rect x="3" y="6" width="18" height="13" rx="2" />
    <path d="M3 10h18" />
    <circle cx="17" cy="14.5" r="1" fill="currentColor" />
  </svg>
);

export const PackageIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <path d="M3 7l9-4 9 4v10l-9 4-9-4z" />
    <path d="M3 7l9 4 9-4M12 11v10" />
  </svg>
);

export const FileCheckIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <path d="M14 3H6v18h12V7l-4-4z" />
    <path d="M14 3v4h4" />
    <path d="M9 14l2 2 4-4" strokeLinecap="round" />
  </svg>
);

export const BuildingTwoIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <rect x="4" y="3" width="16" height="18" />
    <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M11 21v-4h2v4" />
  </svg>
);

export const TargetIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} strokeWidth="1.2">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5.5" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);
