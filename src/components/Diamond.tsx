import clsx from "@/lib/cx";

export default function Diamond({
  className,
  size = 8
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      aria-hidden
      className={clsx(
        "inline-block rotate-45 bg-cyan-brand shadow-[0_0_12px_rgba(20, 123, 88,0.6)]",
        className
      )}
      style={{ width: size, height: size }}
    />
  );
}

