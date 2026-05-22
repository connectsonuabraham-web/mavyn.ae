import Image from "next/image";
import cx from "@/lib/cx";

type Size = "sm" | "md" | "lg" | "xl";

const sizeMap: Record<Size, { width: number; height: number }> = {
  sm: { width: 100, height: 40 },
  md: { width: 150, height: 60 },
  lg: { width: 180, height: 72 },
  xl: { width: 220, height: 88 }
};

export default function Logo({
  className,
  light = false,
  stacked = true,
  size = "md"
}: {
  className?: string;
  light?: boolean;
  stacked?: boolean;
  size?: Size;
}) {
  const s = sizeMap[size];

  return (
    <div className={cx("relative", className)}>
      <Image
        src="/images/ChatGPT Image May 21, 2026, 08_27_03 PM.png"
        alt="MAVYN"
        width={s.width}
        height={s.height}
        className="object-contain"
        priority
        unoptimized
      />
    </div>
  );
}
