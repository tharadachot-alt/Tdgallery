"use client";

import { useEffect, useRef } from "react";

const SIZE = 64;
/** ความเร็วกลิ้ง (พิกเซลต่อวินาที) — ยิ่งน้อยยิ่งช้า */
const SPEED = 22;

/** สุ่มแบบคงที่ (ได้ลายเดิมทุกครั้ง) */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

/** วงกลมเบี้ยว ๆ แบบวาดมือ */
function blob(cx: number, cy: number, r: number, seed: number, wobble = 0.16) {
  const rand = seeded(seed);
  const n = 9;
  const pts = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    const rr = r * (1 - wobble / 2 + rand() * wobble);
    return [cx + Math.cos(a) * rr, cy + Math.sin(a) * rr];
  });
  // เส้นโค้งนุ่ม ๆ ผ่านทุกจุด
  let d = "";
  for (let i = 0; i < n; i++) {
    const [x0, y0] = pts[(i - 1 + n) % n];
    const [x1, y1] = pts[i];
    const [x2, y2] = pts[(i + 1) % n];
    const [x3, y3] = pts[(i + 2) % n];
    if (i === 0) d += `M${x1.toFixed(1)} ${y1.toFixed(1)}`;
    const c1x = x1 + (x2 - x0) / 6;
    const c1y = y1 + (y2 - y0) / 6;
    const c2x = x2 - (x3 - x1) / 6;
    const c2y = y2 - (y3 - y1) / 6;
    d += `C${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
  }
  return d + "Z";
}

/** ลาย Ocean Jasper สีเหลือง (มาดากัสการ์) — วงขนาดเดิม แต่เบี้ยว ๆ เปรอะ ๆ */
const ORBS = [
  { cx: 30, cy: 32, r: 17, ring: "#9fae6e", mid: "#c8643b" },
  { cx: 70, cy: 26, r: 13, ring: "#c98a4b", mid: "#7fa7b8" },
  { cx: 60, cy: 66, r: 19, ring: "#9fae6e", mid: "#e07a4f" },
  { cx: 20, cy: 72, r: 12, ring: "#7fa7b8", mid: "#c8643b" },
  { cx: 92, cy: 56, r: 10, ring: "#c98a4b", mid: "#9fae6e" },
  { cx: 40, cy: 98, r: 11, ring: "#9fae6e", mid: "#c8643b" },
];

const rand = seeded(42);
const SPECKS = Array.from({ length: 26 }, (_, i) => ({
  cx: rand() * 100,
  cy: rand() * 100,
  r: 0.8 + rand() * 1.8,
  fill: ["#8a5a2b", "#fbf3dc", "#9fae6e", "#c8643b"][i % 4],
}));

/** ลูกหินการ์ตูนกลิ้งช้า ๆ จากซ้ายสุดไปขวาสุดของ banner */
export default function RollingSphere() {
  const trackRef = useRef<HTMLDivElement>(null);

  // คำนวณระยะ เวลา และองศาการหมุนให้ตรงกับระยะทาง (ไม่ลื่นไถล)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const distance = track.clientWidth + SIZE * 2;
      const degrees = (distance / (Math.PI * SIZE)) * 360;
      track.style.setProperty("--roll-start", `${-SIZE * 1.5}px`);
      track.style.setProperty("--roll-end", `${track.clientWidth + SIZE * 0.5}px`);
      track.style.setProperty("--roll-degrees", `${degrees}deg`);
      track.style.setProperty("--roll-duration", `${distance / SPEED / 0.88}s`);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={trackRef} className="roll-track relative h-[78px] w-full overflow-hidden" aria-hidden="true">
      {/* เส้นพื้น */}
      <span className="absolute inset-x-0 bottom-1 h-px bg-line" />
      <div className="roll-move absolute bottom-1 left-0" style={{ width: SIZE, height: SIZE }}>
        {/* เงา */}
        <span className="absolute -bottom-1 left-1/2 h-2 w-12 -translate-x-1/2 rounded-full bg-ink/15 blur-[2px]" />
        {/* ลายหินที่หมุน */}
        <svg viewBox="0 0 100 100" className="roll-spin absolute inset-0">
          <defs>
            <clipPath id="sphere-clip">
              <circle cx="50" cy="50" r="47" />
            </clipPath>
          </defs>
          <g clipPath="url(#sphere-clip)">
            <rect width="100" height="100" fill="#f0c44c" />
            <path d={blob(50, 50, 40, 7, 0.5)} fill="#f6d36b" opacity="0.8" />
            <path d="M0 46 Q 28 36 50 48 T 100 42 L100 54 Q 72 62 50 56 T 0 58 Z" fill="#e2a93a" opacity="0.6" />
            {ORBS.map((o, i) => (
              <g key={i}>
                <path d={blob(o.cx, o.cy, o.r, i * 11 + 3)} fill={o.ring} />
                <path d={blob(o.cx + 1, o.cy + 0.6, o.r * 0.74, i * 11 + 5, 0.22)} fill="#fbf3dc" />
                <path d={blob(o.cx + 0.4, o.cy + 1.2, o.r * 0.5, i * 11 + 7, 0.24)} fill={o.mid} />
                <path d={blob(o.cx + 1.2, o.cy + 1, o.r * 0.22, i * 11 + 9, 0.3)} fill="#fbf3dc" />
              </g>
            ))}
            {SPECKS.map((s, i) => (
              <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill={s.fill} opacity="0.75" />
            ))}
          </g>
        </svg>
        {/* แสงเงาและเส้นขอบแบบการ์ตูน (ไม่หมุน) */}
        <svg viewBox="0 0 100 100" className="absolute inset-0">
          <path d="M80 22 A 47 47 0 0 1 22 86 A 40 40 0 0 0 80 22 Z" fill="#7a4a1c" opacity="0.18" />
          <ellipse cx="33" cy="27" rx="12" ry="7" fill="#fff" opacity="0.75" transform="rotate(-35 33 27)" />
          <circle cx="50" cy="50" r="47" fill="none" stroke="#3b2f27" strokeWidth="3.5" />
        </svg>
      </div>
    </div>
  );
}
