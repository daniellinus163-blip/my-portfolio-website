import Image from "next/image";

type VDLogoProps = {
  size?: number;
  className?: string;
  priority?: boolean;
};

export function VDLogo({ size = 32, className = "", priority = false }: VDLogoProps) {
  return (
    <Image
      src="/vd-logo.png"
      alt="Vibecode Dan logo"
      width={size}
      height={size}
      priority={priority}
      className={`object-contain ${className}`}
      style={{ filter: "drop-shadow(0 0 12px rgba(0, 229, 255, 0.55)) drop-shadow(0 0 24px rgba(124, 58, 237, 0.35))" }}
    />
  );
}
