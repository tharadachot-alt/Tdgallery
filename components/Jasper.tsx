/**
 * ลวดลายแรงบันดาลใจจากหิน Ocean Jasper (มาดากัสการ์)
 * — วงกลมซ้อนเป็นชั้น ๆ (orbicular) แบบที่เห็นบนผิวหินจริง
 */

type Palette = "clay" | "sky" | "moss" | "sand";

const PALETTES: Record<Palette, string[]> = {
  clay: ["#c8643b", "#e9a27e", "#d9805a", "#f3c7ae", "#c8643b"],
  sky: ["#4f7a8c", "#a9c6d2", "#7fa7b8", "#e3edf0", "#7fa7b8"],
  moss: ["#6f7a4f", "#b9c095", "#8e9a6b", "#e4e3c8", "#8e9a6b"],
  sand: ["#b9a383", "#ece1cf", "#d4c2a3", "#f6efe3", "#d4c2a3"],
};

type OrbProps = {
  palette?: Palette;
  className?: string;
  rings?: number;
};

export function Orb({ palette = "clay", className = "", rings = 5 }: OrbProps) {
  const colors = PALETTES[palette];
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {Array.from({ length: rings }).map((_, i) => {
        const r = 48 - i * (40 / rings);
        // ขยับจุดศูนย์กลางเล็กน้อย ให้ดูเป็นธรรมชาติเหมือนหินจริง
        const cx = 50 + (i % 2 === 0 ? 1.2 : -1) * i * 0.6;
        const cy = 50 + i * 0.7;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill={colors[i % colors.length]}
            opacity={i === 0 ? 0.95 : 0.9}
          />
        );
      })}
      <circle cx="51.5" cy="53" r="3" fill={colors[0]} opacity="0.85" />
    </svg>
  );
}

/** กลุ่มลายหินสำหรับตกแต่งพื้นหลัง */
export function JasperField({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <Orb palette="clay" className="drift absolute -left-4 top-[3%] w-14 opacity-60 sm:w-20" />
      <Orb palette="sky" rings={6} className="drift-slow absolute -right-4 top-[2%] w-16 opacity-50 sm:w-28" />
      <Orb palette="moss" rings={4} className="drift absolute top-[48%] -left-3 w-10 opacity-50 sm:w-12" />
      <Orb palette="sand" className="drift-slow absolute top-[55%] -right-4 w-12 opacity-60 sm:w-14" />
    </div>
  );
}

/** เส้นคั่นแบบหินกรวดเรียง (สไตล์ Zen) */
export function StoneDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2" aria-hidden="true">
      <span className="h-px w-12 bg-line sm:w-20" />
      <Orb palette="sand" rings={3} className="w-3" />
      <Orb palette="clay" rings={4} className="w-5" />
      <Orb palette="sky" rings={3} className="w-3" />
      <span className="h-px w-12 bg-line sm:w-20" />
    </div>
  );
}

/** ภาพกราฟิกแนวสีน้ำ (ใช้แทนรูปจนกว่าจะมีรูปผลงานจริง) */
export function Watercolor({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true" focusable="false">
      <defs>
        <filter id="wc" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="3" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="28" />
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
          <feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.38  0 0 0 0 0.3  0 0 0 0.08 0" />
        </filter>
      </defs>
      <rect width="400" height="300" fill="#fbf7f0" />
      <g filter="url(#wc)">
        <ellipse cx="200" cy="215" rx="230" ry="70" fill="#c9dce3" opacity="0.8" />
        <ellipse cx="120" cy="190" rx="110" ry="40" fill="#7fa7b8" opacity="0.45" />
        <circle cx="270" cy="100" r="46" fill="#e9a27e" opacity="0.75" />
        <circle cx="270" cy="100" r="26" fill="#c8643b" opacity="0.55" />
        <path d="M0 200 Q 90 150 170 185 T 400 175 L 400 300 L 0 300 Z" fill="#8e9a6b" opacity="0.35" />
      </g>
      <rect width="400" height="300" filter="url(#grain)" />
    </svg>
  );
}
