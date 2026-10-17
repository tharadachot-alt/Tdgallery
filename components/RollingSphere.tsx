"use client";

import { useEffect, useRef } from "react";

const SIZE = 64;

/** ลาย Ocean Jasper สีเหลือง (มาดากัสการ์) — วงจุดซ้อนชั้น */
const ORBS = [
  { cx: 30, cy: 32, r: 17 },
  { cx: 70, cy: 26, r: 13 },
  { cx: 60, cy: 66, r: 19 },
  { cx: 20, cy: 72, r: 12 },
  { cx: 92, cy: 56, r: 10 },
  { cx: 40, cy: 98, r: 11 },
];

/** ลูกหินการ์ตูนกลิ้งไปมาช้า ๆ บนเส้นพื้น */
export default function RollingSphere() {
  const trackRef = useRef<HTMLDivElement>(null);

  // คำนวณองศาการหมุนให้ตรงกับระยะทางที่กลิ้ง (ไม่ลื่นไถล)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const distance = track.clientWidth - SIZE;
      const degrees = (distance / (Math.PI * SIZE)) * 360;
      track.style.setProperty("--roll-distance", `${distance}px`);
      track.style.setProperty("--roll-degrees", `${degrees}deg`);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={trackRef} className="roll-track relative h-[78px] w-full" aria-hidden="true">
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
            <rect width="100" height="100" fill="#efc24a" />
            <path d="M0 48 Q 30 40 52 50 T 100 46 L100 56 Q 70 62 50 56 T 0 58 Z" fill="#e2a93a" opacity="0.7" />
            {ORBS.map((o, i) => (
              <g key={i}>
                <circle cx={o.cx} cy={o.cy} r={o.r} fill="#a7b27a" />
                <circle cx={o.cx + 0.6} cy={o.cy + 0.5} r={o.r * 0.72} fill="#fbf3dc" />
                <circle cx={o.cx + 0.4} cy={o.cy + 0.9} r={o.r * 0.48} fill="#c8643b" />
                <circle cx={o.cx + 0.6} cy={o.cy + 1} r={o.r * 0.2} fill="#fbf3dc" />
              </g>
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
