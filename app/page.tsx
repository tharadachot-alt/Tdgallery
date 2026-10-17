import Image from "next/image";
import Reveal from "@/components/Reveal";
import RollingSphere from "@/components/RollingSphere";
import { JasperField, Orb, StoneDivider, Watercolor } from "@/components/Jasper";

/* ===== ช่องทางติดต่อ (แก้ลิงก์จริงตรงนี้) ===== */
const CONTACTS = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
};

const HIGHLIGHTS = [
  {
    palette: "sand" as const,
    title: "A gallery, not a shop",
    body: "Take your time and browse at your own pace — no rush, no hard sell. If a piece speaks to you, simply reach out and we'll talk.",
  },
  {
    palette: "clay" as const,
    title: "Zen calm, natural patterns",
    body: "A quiet, minimal space that lets the patterns of stones like Ocean Jasper from Madagascar take center stage.",
  },
  {
    palette: "sky" as const,
    title: "Hand-picked by an artist's eye",
    body: "Every sphere and every painting is chosen with care — each piece is one of a kind.",
  },
];

const FAQS = [
  {
    q: "I'm interested in a piece. What should I do?",
    a: "Tap “Contact Us” and send us a message on Facebook or Instagram telling us which piece you like. We'll reply with details and pricing.",
  },
  {
    q: "Are the spheres genuine natural stone?",
    a: "Yes. Every sphere is natural stone polished into a round form. The colors and patterns are entirely natural, so no two spheres are alike.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes. Both stones and paintings are carefully packed. Shipping cost depends on weight and destination — feel free to ask in English or Thai.",
  },
  {
    q: "Can I see more photos or a video?",
    a: "Of course. Let us know which piece you're curious about, and we'll share photos and video in natural light so you can see the patterns clearly.",
  },
];

function ContactButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={`group inline-flex items-center gap-3 rounded-full bg-clay px-7 py-3.5 font-medium tracking-wide text-paper shadow-[0_10px_30px_-12px_rgb(164_78_44/0.6)] transition-all duration-500 hover:bg-clay-deep hover:shadow-[0_14px_34px_-12px_rgb(164_78_44/0.7)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay ${className}`}
    >
      Contact Us
      <span className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true">
        →
      </span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
      <p className="mb-3 text-eyebrow uppercase tracking-[0.3em] text-sky-deep">{eyebrow}</p>
      <h2 className="font-serif text-h2 leading-snug text-ink">{title}</h2>
      {sub && <p className="mt-4 text-ink-soft">{sub}</p>}
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      {/* ===== แถบเมนูบน ===== */}
      <header className="sticky top-0 z-30 border-b border-line/60 bg-cream/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
          <a href="#top" className="flex items-center gap-2 font-serif text-lg tracking-wide">
            <Orb palette="clay" rings={4} className="w-6" />
            Thada Gallery
          </a>
          <div className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
            <a href="#about" className="transition-colors hover:text-clay">Philosophy</a>
            <a href="#collection" className="transition-colors hover:text-clay">Collection</a>
            <a href="#faq" className="transition-colors hover:text-clay">FAQ</a>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-clay/40 px-4 py-1.5 text-sm text-clay-deep transition-colors hover:bg-clay hover:text-paper"
          >
            Contact Us
          </a>
        </nav>
      </header>

      <main id="top" className="flex-1">
        {/* ===== ส่วนหัว ===== */}
        <section className="stone-texture relative overflow-hidden">
          <JasperField className="absolute inset-0" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-6 pt-16 sm:px-8 md:grid-cols-[1.1fr_1fr] md:pb-8 md:pt-24">
            <Reveal>
              <p className="mb-5 text-eyebrow uppercase tracking-[0.35em] text-sky-deep">
                Stone Spheres · Watercolor
              </p>
              <h1 className="font-serif text-display font-light leading-[1.15] text-ink">
                Thada
                <br />
                <span className="text-clay">Gallery</span>
              </h1>
              <p className="mt-6 max-w-md text-lead leading-relaxed text-ink-soft">
                A quiet space to admire patterns that nature spent millions of years
                painting — polished stone spheres and watercolors, chosen one by one.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <ContactButton />
                <a href="#collection" className="text-sm text-ink-soft underline decoration-line underline-offset-8 transition-colors hover:text-clay">
                  View collection
                </a>
              </div>
            </Reveal>

            <Reveal delay={200} className="relative mx-auto w-full max-w-md">
              <div className="breathe absolute -inset-6 rounded-full bg-sky-soft/50 blur-2xl" aria-hidden="true" />
              <div className="gallery-frame relative overflow-hidden rounded-[2.5rem] border border-line bg-paper p-3 shadow-[0_30px_60px_-30px_rgb(59_47_39/0.35)]">
                <div className="overflow-hidden rounded-[2rem]">
                  <Image
                    src="/sphere-collection.jpg"
                    alt="Two polished Ocean Jasper spheres with orange orbs on a brown background, resting on a wood slice"
                    width={1280}
                    height={1280}
                    loading="eager"
                    fetchPriority="high"
                    sizes="(min-width: 768px) 28rem, 90vw"
                    className="h-auto w-full"
                  />
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-ink-soft">Ocean Jasper · Madagascar</p>
            </Reveal>
          </div>
          <div className="relative mx-auto max-w-6xl px-5 pb-12 sm:px-8 md:pb-16">
            <RollingSphere />
          </div>
        </section>

        {/* ===== จุดเด่น 3 ข้อ ===== */}
        <section id="about" className="scroll-mt-20 bg-paper px-5 py-20 sm:px-8 md:py-28">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Look first, feel first, then let's talk"
            sub="We want this to feel like a quiet gallery you can wander into any time."
          />
          <ul className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 md:gap-8">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal as="li" key={h.title} delay={i * 150} className="group rounded-3xl border border-line/70 bg-cream p-8 transition-colors duration-700 hover:border-clay-soft">
                <Orb palette={h.palette} className="mb-6 w-14 transition-transform duration-1000 group-hover:rotate-45" />
                <h3 className="font-serif text-h3 leading-snug">{h.title}</h3>
                <p className="mt-3 text-ink-soft">{h.body}</p>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* ===== ผลงาน ===== */}
        <section id="collection" className="scroll-mt-20 px-5 py-20 sm:px-8 md:py-28">
          <SectionHeading
            eyebrow="Collection"
            title="In the gallery"
            sub="Each piece is one of a kind. Prices vary by size and pattern — please contact the seller."
          />

          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-12">
            <Reveal as="article" className="gallery-frame overflow-hidden rounded-[2rem] border border-line bg-paper">
              <div className="relative overflow-hidden">
                <Image
                  src="/sphere-collection.jpg"
                  alt="Polished Ocean Jasper spheres beside a rough piece of the same stone"
                  width={1280}
                  height={1280}
                  sizes="(min-width: 768px) 36rem, 100vw"
                  className="aspect-[4/3] h-auto w-full object-cover"
                />
              </div>
              <div className="p-7 sm:p-9">
                <p className="text-eyebrow uppercase tracking-[0.3em] text-clay">Stone Sphere</p>
                <h3 className="mt-2 font-serif text-h3">Polished natural stone spheres</h3>
                <p className="mt-3 text-ink-soft">
                  Stones polished into perfect spheres to reveal their patterns from every angle —
                  especially Ocean Jasper, with orbs that bloom like flowers across the surface.
                  Set on a simple wooden stand, each one becomes a work of art.
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-5 text-sm">
                  <span className="text-ink-soft">Price</span>
                  <a href="#contact" className="text-clay-deep underline underline-offset-4 hover:text-clay">Contact the seller</a>
                </div>
              </div>
            </Reveal>

            <Reveal as="article" delay={150} className="gallery-frame overflow-hidden rounded-[2rem] border border-line bg-paper">
              <div className="relative overflow-hidden">
                <Watercolor className="aspect-[4/3] h-auto w-full" />
              </div>
              <div className="p-7 sm:p-9">
                <p className="text-eyebrow uppercase tracking-[0.3em] text-sky-deep">Watercolor</p>
                <h3 className="mt-2 font-serif text-h3">Watercolor paintings</h3>
                <p className="mt-3 text-ink-soft">
                  Original watercolors by the gallery&apos;s artist, capturing the softness of
                  light, water and nature in calm tones — made for a quiet corner of your home.
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-5 text-sm">
                  <span className="text-ink-soft">Price</span>
                  <a href="#contact" className="text-clay-deep underline underline-offset-4 hover:text-clay">Contact the seller</a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <StoneDivider />

        {/* ===== คำถามที่พบบ่อย ===== */}
        <section id="faq" className="scroll-mt-20 px-5 py-20 sm:px-8 md:py-28">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mx-auto max-w-3xl space-y-4">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 100}>
                <details className="group rounded-2xl border border-line bg-paper px-6 py-5 transition-colors duration-500 open:border-sky">
                  <summary className="flex items-center justify-between gap-4 font-medium">
                    {f.q}
                    <span className="faq-icon shrink-0 text-xl text-clay transition-transform duration-500" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-ink-soft">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===== ติดต่อเรา ===== */}
        <section id="contact" className="scroll-mt-20 px-5 pb-24 sm:px-8">
          <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-sky-deep px-6 py-16 text-center text-paper sm:px-12 md:py-20">
            <Orb palette="clay" rings={6} className="drift absolute -left-8 -top-8 w-32 opacity-50 sm:w-44" />
            <Orb palette="sand" rings={5} className="drift-slow absolute -bottom-10 -right-6 w-36 opacity-40 sm:w-52" />
            <div className="relative">
              <p className="text-eyebrow uppercase tracking-[0.35em] text-sky-soft">Contact the Gallery</p>
              <h2 className="mt-3 font-serif text-h2 leading-snug">Found a piece you love? Let&apos;s talk.</h2>
              <p className="mx-auto mt-4 max-w-xl text-sky-soft">
                Ask about pricing, request more photos, or just chat about stones and art —
                we&apos;re always happy to hear from you.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={CONTACTS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-full bg-paper px-7 py-3.5 font-medium text-ink transition-all duration-500 hover:-translate-y-0.5 hover:bg-cream sm:w-auto"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#1877F2]" aria-hidden="true">
                    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07z" />
                  </svg>
                  Facebook
                </a>
                <a
                  href={CONTACTS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-full bg-clay px-7 py-3.5 font-medium text-paper transition-all duration-500 hover:-translate-y-0.5 hover:bg-clay-deep sm:w-auto"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 0 0-2.13 1.38A5.86 5.86 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13a5.86 5.86 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.13-1.38 5.86 5.86 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.13A5.86 5.86 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* ===== ส่วนท้าย ===== */}
      <footer className="border-t border-line bg-cream-deep px-5 py-10 text-center text-sm text-ink-soft sm:px-8">
        <div className="mb-3 flex items-center justify-center gap-2 font-serif text-base text-ink">
          <Orb palette="clay" rings={4} className="w-5" />
          Thada Gallery
        </div>
        <p>Stone spheres · Watercolors · Chosen with care</p>
        <p className="mt-2">© 2026 Thada Gallery</p>
      </footer>
    </>
  );
}
