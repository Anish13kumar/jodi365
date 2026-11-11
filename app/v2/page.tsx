"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Menu, Play, Share2, X } from "lucide-react";

/* ─── Brand icons (lucide no longer ships these) ─────────────────────── */
type IconProps = { size?: number };
const InstagramIcon = ({ size = 20 }: IconProps) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>;
const LinkedinIcon = ({ size = 20 }: IconProps) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 8.5H2V22h3V8.5ZM3.5 2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM13 8.5H9.5V22H13v-7.2c0-2 1-3.2 2.8-3.2 1.6 0 2.2 1.1 2.2 3.2V22h3.5v-8c0-3.8-1.8-5.8-4.9-5.8-1.5 0-2.8.6-3.6 1.9V8.5Z" /></svg>;
const YoutubeIcon = ({ size = 20 }: IconProps) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="4" /><path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" /></svg>;
const XIcon = ({ size = 20 }: IconProps) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" /></svg>;

/* ─── Content ─────────────────────────────────────────────────────────── */
const SITE = "https://www.jodi365.com";
const productNav = [
  { href: `${SITE}/#why-choose-jodi365`, label: "Why Jodi365" },
  { href: `${SITE}/success-stories`, label: "Success stories" },
  { href: `${SITE}/press`, label: "Press" },
];
const pageNav = [
  { href: "#beyond", label: "Beyond the CV" },
  { href: "#journey", label: "The journey" },
  { href: "#conversations", label: "In conversation" },
  { href: "#message", label: "Founder’s message" },
];

const marquee = [
  {
    href: "https://x.com/LeMansCup/status/2064615469101814189",
    image: "/images/jodi365-racing-car.jpg", w: 2000, h: 2500, pos: "50% 52%",
    alt: "Ajith Kumar beside his Le Mans Cup car, with Jodi365 branding on the front fender",
    tag: "Brand association",
    title: "Ajith Kumar × RedAnt Racing",
    body: "The Jodi365 name, carried on the car at the Michelin Le Mans Cup. A visible association with Ajith Kumar’s racing team.",
    cta: "See the original photograph",
  },
  {
    href: "https://timesofindia.indiatimes.com/entertainment/tamil/movies/news/acting-is-still-not-on-the-radar-but-never-say-never-s-anil-kumar/articleshow/129495256.cms",
    image: "/images/coco-and-nut.jpg", w: 600, h: 700, pos: "50% 30%",
    alt: "Artwork for the romantic comedy Coco & Nut",
    tag: "Announced film appearance",
    title: "A Hollywood cameo, playing himself.",
    body: "A matchmaker in a love story. Anil’s announced role in Coco & Nut brings his real-life work to the screen.",
    cta: "Read in The Times of India",
  },
  {
    href: "https://www.startupsingam.com/",
    image: "/images/startup-singam.jpg", w: 800, h: 800, pos: "50% 0%",
    alt: "S. Anil Kumar announced as an investor on Startup Singam Season 2",
    tag: "Investor on TV",
    title: "Backing founders on Startup Singam.",
    body: "An investor on Season 2 of Tamil Nadu’s entrepreneurship show, bringing the experience of building a business.",
    cta: "Discover Startup Singam",
  },
];

const press = [
  { name: "BBC", logo: "bbc.png", year: "2020", url: "https://www.bbc.com/culture/article/20200806-indian-matchmaking-the-reality-show-that-s-divided-viewers" },
  { name: "The Hindu", logo: "the-hindu.png", year: "2015", url: "https://www.thehindu.com/news/cities/chennai/giving-a-cool-twist-to-arranged-marriages/article7387919.ece" },
  { name: "YourStory", logo: "yourstory.png", year: "2026", url: "https://yourstory.com/2026/06/the-accidental-matchmaker-phd-hydrodynamics-matrimonial-service" },
  { name: "The Times of India", logo: "times-of-india.png", year: "2026", url: "https://timesofindia.indiatimes.com/entertainment/tamil/movies/news/acting-is-still-not-on-the-radar-but-never-say-never-s-anil-kumar/articleshow/129495256.cms" },
];

const education = [
  { institution: "IIT Madras", degree: "B.Tech", detail: "Engineering · Institute Blue" },
  { institution: "University of Iowa", degree: "M.S.", detail: "Mechanical engineering" },
  { institution: "University of Michigan", degree: "Ph.D.", detail: "Computational hydrodynamics" },
  { institution: "Chicago Booth", degree: "MBA", detail: "Entrepreneurship & strategy · 2009" },
];

const conversations = [
  { id: "lM5Y3myQ4dk", image: "conversation-galatta.jpg", platform: "Galatta", language: "Tamil", title: "An honest conversation about finding your person.", description: "A candid conversation on relationships, compatibility, and what really matters when choosing a partner." },
  { id: "rin7XedRx8s", image: "conversation-build.jpg", platform: "Best Place to Build", language: "English", title: "The unlikely journey of an accidental matchmaker.", description: "From a research career to building Jodi365: entrepreneurship, conviction, and the people behind a business." },
  { id: "4ywrfQEyHh4", image: "conversation-desifire.jpg", platform: "Desi Fire", language: "English", title: "Rethinking modern love, one conversation at a time.", description: "Modern Indian relationships, life across cultures, and creating meaningful connections." },
  { id: "8JcBEDHLWGE", image: "conversation-mvp.jpg", platform: "MVP by Vanshika", language: "English", title: "Compatibility, expectations, and the choices that matter.", description: "Modern marriage, the expectations we bring to relationships, and choosing a partner with care." },
];

const channels = [
  { href: "https://www.instagram.com/aktxm/", name: "Instagram", handle: "@aktxm", Icon: InstagramIcon },
  { href: "https://x.com/aktxt", name: "X", handle: "@aktxt", Icon: XIcon },
  { href: "https://www.youtube.com/@s-anil-kumar", name: "YouTube", handle: "@s-anil-kumar", Icon: YoutubeIcon },
  { href: "https://www.linkedin.com/in/sakumar/", name: "LinkedIn", handle: "in/sakumar", Icon: LinkedinIcon },
];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function Eyebrow({ children, tone = "gold" }: { children: React.ReactNode; tone?: "gold" | "light" }) {
  return <p className={`v2-eyebrow ${tone === "light" ? "is-light" : ""}`}>{children}</p>;
}

/* ─── Page ────────────────────────────────────────────────────────────── */
export default function FounderV2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [video, setVideo] = useState<number | null>(null);
  const [shared, setShared] = useState<"idle" | "copied">("idle");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  // Reveal-on-scroll. Content stays visible if JS never runs.
  useEffect(() => {
    document.documentElement.classList.add("v2-js");
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll("[data-v2-reveal]").forEach(el => io.observe(el));
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      document.documentElement.style.setProperty("--v2-progress", `${max > 0 ? (scrollY / max) * 100 : 0}%`);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => { io.disconnect(); removeEventListener("scroll", onScroll); document.documentElement.classList.remove("v2-js"); };
  }, []);

  // Video dialog
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (video !== null && !d.open) { lastFocus.current = document.activeElement as HTMLElement; d.showModal(); }
    if (video === null && d.open) { d.close(); lastFocus.current?.focus(); }
  }, [video]);

  // Mobile menu: close on Escape / resize to desktop
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    const onResize = () => { if (innerWidth > 980) setMenuOpen(false); };
    addEventListener("keydown", onKey); addEventListener("resize", onResize);
    return () => { removeEventListener("keydown", onKey); removeEventListener("resize", onResize); };
  }, [menuOpen]);

  const share = async () => {
    const data = { title: "Jodi365", text: "Know someone single? Jodi365 is a thoughtful place to begin.", url: `${SITE}/` };
    try {
      if (navigator.share) { await navigator.share(data); return; }
      await navigator.clipboard.writeText(data.url);
      setShared("copied"); setTimeout(() => setShared("idle"), 2500);
    } catch (err) {
      if ((err as DOMException)?.name === "AbortError") return;
      location.href = `mailto:?subject=${encodeURIComponent("A thoughtful way to find your person")}&body=${encodeURIComponent(data.url)}`;
    }
  };

  const lead = conversations[0];

  return <div className="v2">
    <a className="v2-skip" href="#v2-main">Skip to content</a>
    <div className="v2-progress" aria-hidden="true" />

    {/* ── Header: product navigation, founder page is one page of the product ── */}
    <header className="v2-header">
      <div className="v2-shell v2-header-inner">
        <a className="v2-brand" href={SITE} aria-label="Jodi365 home"><img src="/images/jodi365-logo.png" alt="Jodi365 — for quality singles" width="148" height="47" /></a>
        <nav className="v2-nav" aria-label="Jodi365">
          {productNav.map(l => <a key={l.label} href={l.href} {...ext}>{l.label}</a>)}
          <a href="/v2" aria-current="page">Our founder</a>
        </nav>
        <a className="v2-btn v2-btn-primary v2-header-cta" href={`${SITE}/contact-us`} {...ext}>Get in touch</a>
        <button className="v2-menu-btn" aria-expanded={menuOpen} aria-controls="v2-menu" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(o => !o)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      <div id="v2-menu" className="v2-menu" hidden={!menuOpen}>
        <div className="v2-shell">
          <p className="v2-menu-label">On this page</p>
          {pageNav.map(l => <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}<ArrowRight size={18} /></a>)}
          <p className="v2-menu-label">Jodi365</p>
          {productNav.map(l => <a key={l.label} href={l.href} {...ext}>{l.label}<ArrowUpRight size={18} /></a>)}
          <a className="v2-btn v2-btn-primary" href={`${SITE}/contact-us`} {...ext}>Get in touch <ArrowUpRight size={18} /></a>
        </div>
      </div>
    </header>

    <main id="v2-main">
      {/* ── 01 Hero: who he is. No credentials yet. ── */}
      <section className="v2-hero" aria-labelledby="v2-name">
        <div className="v2-shell v2-hero-grid">
          <div className="v2-hero-copy">
            <Eyebrow>Founder · Researcher · Investor · Occasional actor</Eyebrow>
            <h1 id="v2-name">S. Anil Kumar</h1>
            <span className="v2-rule" aria-hidden="true" />
            <p className="v2-lead">A human-first approach to finding the right partner, built on judgment, intuition, and an understanding of what truly matters.</p>
            <p className="v2-hero-sub">Founder & CEO of Jodi365, matchmaking for quality Indian singles worldwide since 2009.</p>
            <div className="v2-actions">
              <a className="v2-btn v2-btn-primary" href={`${SITE}/contact-us`} {...ext}>Get in touch <ArrowUpRight size={18} /></a>
              <a className="v2-btn v2-btn-outline" href="#journey">Read his story <ArrowRight size={18} /></a>
            </div>
            <button className="v2-watch" onClick={() => setVideo(0)}>
              <span className="v2-watch-icon"><Play size={14} fill="currentColor" /></span>
              <span>Watch him in conversation <span className="v2-muted">· Galatta, in Tamil</span></span>
            </button>
          </div>
          <figure className="v2-hero-portrait">
            <div className="v2-portrait-wrap"><div className="v2-portrait-frame"><img src="/images/anil-founder-portrait-v4.webp" alt="S. Anil Kumar wearing a tan blazer and white shirt against a warm neutral background" width="1122" height="1402" fetchPriority="high" /></div></div>
            <figcaption>Chennai, India</figcaption>
          </figure>
        </div>
      </section>

      {/* ── 02 Beyond the CV: the hook ── */}
      <section className="v2-section v2-beyond" id="beyond" aria-labelledby="v2-beyond-title">
        <div className="v2-shell">
          <header className="v2-head v2-head-center" data-v2-reveal>
            <Eyebrow>Beyond the CV</Eyebrow>
            <h2 id="v2-beyond-title">Wait — <em>that’s the same person?</em></h2>
          </header>
          <div className="v2-marquee">
            {marquee.map(card => <a key={card.title} className="v2-mcard" href={card.href} {...ext} data-v2-reveal>
              <div className="v2-mcard-img"><img src={card.image} alt={card.alt} width={card.w} height={card.h} loading="lazy" style={{ objectPosition: card.pos }} /></div>
              <div className="v2-mcard-body">
                <p className="v2-tag">{card.tag}</p>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <span className="v2-mcard-link">{card.cta}<ArrowUpRight size={17} /></span>
              </div>
            </a>)}
          </div>
        </div>
      </section>

      {/* ── 03 Featured in: recognised in seconds, no reading required ── */}
      <section className="v2-featured" aria-labelledby="v2-featured-title">
        <div className="v2-shell">
          <h2 id="v2-featured-title" className="v2-eyebrow is-light v2-featured-title">Featured in</h2>
          <ul className="v2-logos">
            {press.map(p => <li key={p.name}><a href={p.url} {...ext} aria-label={`${p.name} coverage, ${p.year}`}><img src={`/images/logos/${p.logo}`} alt="" loading="lazy" /><span>{p.year}</span></a></li>)}
          </ul>
          <p className="v2-featured-note">On modern matchmaking, entrepreneurship, and the story behind Jodi365.</p>
        </div>
      </section>

      {/* ── 04 The journey ── */}
      <section className="v2-section v2-journey" id="journey" aria-labelledby="v2-journey-title">
        <div className="v2-shell v2-journey-grid">
          <div className="v2-journey-copy" data-v2-reveal>
            <Eyebrow>The journey</Eyebrow>
            <h2 id="v2-journey-title">The journey to <em>Jodi365</em></h2>
            <span className="v2-rule" aria-hidden="true" />
            <p className="v2-lead">Finding a partner is one of life’s biggest decisions. Anil believed it deserved more care.</p>
            <p>He knew the challenge personally. Driven professionals could build accomplished careers and still struggle to find the right person to share their lives with.</p>
            <p>In 2009 he founded Jodi365 to offer a more thoughtful way forward. Conceived in Chicago and built in Chennai, it brought his scientific training and entrepreneurial experience to modern Indian matchmaking.</p>
            <dl className="v2-facts">
              <div><dt>Founded</dt><dd>2009</dd></div>
              <div><dt>Conceived in</dt><dd>Chicago</dd></div>
              <div><dt>Built in</dt><dd>Chennai</dd></div>
            </dl>
          </div>
          <figure className="v2-journey-photo" data-v2-reveal>
            <img src="/images/founding-days.jpg" alt="Anil sketching the first version of Jodi365 on a whiteboard, Mumbai, December 2009" width="640" height="480" loading="lazy" />
            <figcaption><span>Mumbai, December 2009</span><span>The idea takes shape.</span></figcaption>
          </figure>
        </div>
      </section>

      {/* ── 05 Education: compact, after the proof ── */}
      <section className="v2-section v2-education" aria-labelledby="v2-edu-title">
        <div className="v2-shell">
          <header className="v2-head v2-head-center" data-v2-reveal>
            <Eyebrow>13 years · 4 degrees · 4 institutions</Eyebrow>
            <h2 id="v2-edu-title">The foundation behind the founder.</h2>
          </header>
          <ol className="v2-timeline" data-v2-reveal>
            {education.map(e => <li key={e.institution}>
              <span className="v2-dot" aria-hidden="true" />
              <span className="v2-degree">{e.degree}</span>
              <span className="v2-inst">{e.institution}</span>
              <span className="v2-edu-detail">{e.detail}</span>
            </li>)}
          </ol>
          <p className="v2-center"><a className="v2-link" href="https://www.anil-kumar.com/" {...ext}>Full academic and professional background <ArrowUpRight size={16} /></a></p>
        </div>
      </section>

      {/* ── 06 In conversation: Galatta leads ── */}
      <section className="v2-section v2-conversations" id="conversations" aria-labelledby="v2-conv-title">
        <div className="v2-shell">
          <header className="v2-head v2-head-split" data-v2-reveal>
            <div>
              <Eyebrow>In conversation</Eyebrow>
              <h2 id="v2-conv-title">Hear how <em>he thinks.</em></h2>
            </div>
            <a className="v2-link" href="https://www.youtube.com/@s-anil-kumar" {...ext}>All conversations on YouTube <ArrowUpRight size={16} /></a>
          </header>
          <div className="v2-conv-grid">
            <button className="v2-conv-lead" onClick={() => setVideo(0)} data-v2-reveal aria-label={`Play: ${lead.platform}, ${lead.title}`}>
              <span className="v2-thumb">
                <img src={`/images/${lead.image}`} alt="" width="1280" height="720" loading="lazy" />
                <span className="v2-play"><Play size={22} fill="currentColor" /></span>
                <span className="v2-lang">{lead.language}</span>
              </span>
              <span className="v2-conv-meta">{lead.platform} · Featured</span>
              <span className="v2-conv-title">{lead.title}</span>
              <span className="v2-conv-desc">{lead.description}</span>
            </button>
            <ul className="v2-conv-list">
              {conversations.slice(1).map((c, i) => <li key={c.id} data-v2-reveal>
                <button onClick={() => setVideo(i + 1)} aria-label={`Play: ${c.platform}, ${c.title}`}>
                  <span className="v2-thumb">
                    <img src={`/images/${c.image}`} alt="" width="1280" height="720" loading="lazy" />
                    <span className="v2-play is-sm"><Play size={14} fill="currentColor" /></span>
                  </span>
                  <span className="v2-conv-text">
                    <span className="v2-conv-meta">{c.platform}</span>
                    <span className="v2-conv-title is-sm">{c.title}</span>
                  </span>
                </button>
              </li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 07 Follow along: a follow prompt, kept deliberately small ── */}
      <section className="v2-section v2-follow" aria-labelledby="v2-follow-title">
        <div className="v2-shell v2-follow-grid">
          <div data-v2-reveal>
            <Eyebrow>Follow along</Eyebrow>
            <h2 id="v2-follow-title">Short takes, <em>straight from Anil.</em></h2>
            <p className="v2-follow-intro">Thoughts on modern relationships and building Jodi365, on his own channels.</p>
            <ul className="v2-channels">
              {channels.map(({ href, name, handle, Icon }) => <li key={name}><a href={href} {...ext}>
                <span className="v2-channel-icon"><Icon /></span>
                <span className="v2-channel-name">{name}</span>
                <span className="v2-channel-handle">{handle}</span>
                <ArrowUpRight size={18} />
              </a></li>)}
            </ul>
          </div>
          <a className="v2-clip" href="https://x.com/aktxt" {...ext} data-v2-reveal aria-label="Watch Anil’s short clip on X">
            <img src="/images/anil-founder-2026-video.jpg" alt="Anil in a short video. Caption: You’re not a swipeable item in a shopping catalog!" width="675" height="1200" loading="lazy" />
            <span className="v2-play"><Play size={20} fill="currentColor" /></span>
            <span className="v2-clip-label"><XIcon size={14} /> Latest clip</span>
          </a>
        </div>
      </section>

      {/* ── 08 Founder's message: the human close ── */}
      <section className="v2-section v2-message" id="message" aria-labelledby="v2-msg-title">
        <div className="v2-shell">
          <article className="v2-letter" data-v2-reveal>
            <span className="v2-quote-mark" aria-hidden="true">“</span>
            <Eyebrow>A message from the founder</Eyebrow>
            <h2 id="v2-msg-title">I don’t just build algorithms.<br /><em>I build relationships.</em></h2>
            <div className="v2-letter-body">
              <p>I have personally known the challenges that driven career professionals face in finding the right partner. Given my background, I have also been keenly aware of the additional challenges that entrepreneurs, celebrities, and others in the public eye face when looking for love.</p>
              <p>These experiences motivated me, in 2009, to found a thoughtful, refreshingly different matchmaking service in Jodi365.</p>
              <p>Every introduction I make reflects decades of experience in understanding what makes people connect, and what makes partnerships last.</p>
            </div>
            <footer className="v2-signoff">
              <img src="/images/anil-founder-avatar-v4.webp" alt="" width="320" height="400" loading="lazy" />
              <div>
                <p className="v2-sig-name">S. Anil Kumar</p>
                <p className="v2-sig-role">Founder & CEO, Jodi365</p>
                <p className="v2-sig-creds">B.Tech IIT Madras · M.S. Iowa · Ph.D. Michigan · MBA Chicago Booth</p>
              </div>
              <a className="v2-icon-link" href="https://www.linkedin.com/in/sakumar/" {...ext} aria-label="Connect with S. Anil Kumar on LinkedIn"><LinkedinIcon size={18} /></a>
            </footer>
          </article>
        </div>
      </section>

      {/* ── 09 Soft close: word of mouth ── */}
      <section className="v2-cta" aria-labelledby="v2-cta-title">
        <div className="v2-shell v2-cta-inner" data-v2-reveal>
          <h2 id="v2-cta-title">Know someone single?<br /><em>Tell them about Jodi365.</em></h2>
          <p>No hard sell. Just a thoughtful place to begin.</p>
          <div className="v2-actions v2-actions-center">
            <button className="v2-btn v2-btn-gold" onClick={share}>{shared === "copied" ? <Check size={18} /> : <Share2 size={18} />}{shared === "copied" ? "Link copied" : "Share Jodi365"}</button>
            <a className="v2-btn v2-btn-ghost" href={SITE} {...ext}>Learn about Jodi365 <ArrowUpRight size={18} /></a>
          </div>
          <p className="v2-sr" aria-live="polite">{shared === "copied" ? "The Jodi365 link was copied to your clipboard." : ""}</p>
        </div>
      </section>
    </main>

    <footer className="v2-footer">
      <div className="v2-shell">
        <div className="v2-footer-top">
          <div className="v2-footer-brand">
            <img src="/images/jodi365-logo.png" alt="Jodi365 — for quality singles" width="148" height="47" loading="lazy" />
            <p>Meaningful connections for quality Indian singles worldwide. Founded by S. Anil Kumar in 2009: conceived in Chicago, built in Chennai.</p>
          </div>
          <nav className="v2-footer-col" aria-label="About Jodi365">
            <p>About</p>
            <a href="/v2" aria-current="page">Our founder</a>
            {productNav.map(l => <a key={l.label} href={l.href} {...ext}>{l.label}</a>)}
          </nav>
          <nav className="v2-footer-col" aria-label="Follow Anil">
            <p>Follow Anil</p>
            {channels.map(c => <a key={c.name} href={c.href} {...ext}>{c.name}</a>)}
          </nav>
          <nav className="v2-footer-col" aria-label="Get in touch">
            <p>Get in touch</p>
            <a href={`${SITE}/contact-us`} {...ext}>Contact Jodi365</a>
            <a href={`${SITE}/privacy-policy`} {...ext}>Privacy policy</a>
          </nav>
        </div>
        <div className="v2-footer-bottom">
          <span>© {new Date().getFullYear()} FreeElective LLC. All rights reserved.</span>
          <span>Meaningful connections, since 2009.</span>
        </div>
      </div>
    </footer>

    <dialog ref={dialogRef} className="v2-dialog" aria-labelledby="v2-video-title" onClose={() => setVideo(null)} onClick={e => { if (e.target === e.currentTarget) setVideo(null); }}>
      {video !== null && <div className="v2-dialog-inner">
        <button className="v2-dialog-close" onClick={() => setVideo(null)} aria-label="Close video"><X size={20} /></button>
        <div className="v2-video"><iframe src={`https://www.youtube-nocookie.com/embed/${conversations[video].id}?autoplay=1&rel=0`} title={conversations[video].title} allow="autoplay; encrypted-media; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
        <div className="v2-dialog-text">
          <p className="v2-conv-meta">{conversations[video].platform} · {conversations[video].language}</p>
          <h2 id="v2-video-title">{conversations[video].title}</h2>
          <a className="v2-link" href={`https://www.youtube.com/watch?v=${conversations[video].id}`} {...ext}>Watch on YouTube <ArrowUpRight size={16} /></a>
        </div>
      </div>}
    </dialog>
  </div>;
}
