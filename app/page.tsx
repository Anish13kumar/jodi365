"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, Copy, Heart, Menu, Play, Plus, X, BookOpen, GraduationCap, Quote, ShieldCheck } from "lucide-react";

function Instagram({ size = 18, className }: { size?: number; className?: string }) {
  return <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>;
}
function Linkedin({ size = 18, className }: { size?: number; className?: string }) {
  return <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 8.5H2V22h3V8.5ZM3.5 2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM13 8.5H9.5V22H13v-7.2c0-2 1-3.2 2.8-3.2 1.6 0 2.2 1.1 2.2 3.2V22h3.5v-8c0-3.8-1.8-5.8-4.9-5.8-1.5 0-2.8.6-3.6 1.9V8.5Z" /></svg>;
}

const links = [
  { href: "#beyond", label: "Beyond matchmaking" },
  { href: "#foundation", label: "The foundation" },
  { href: "#conversations", label: "In conversation" },
  { href: "#note", label: "Founder’s message" },
];
const conversations = [
  { id: "lM5Y3myQ4dk", image: "conversation-galatta.jpg", platform: "GALATTA", category: "LOVE, LIFE & EVERYTHING BETWEEN", title: "An honest conversation about finding your person.", language: "Tamil", description: "Anil joins Galatta for a candid conversation on relationships, compatibility, and what really matters when choosing a partner." },
  { id: "rin7XedRx8s", image: "conversation-build.jpg", platform: "BEST PLACE TO BUILD", category: "THE FOUNDER’S JOURNEY", title: "The unlikely journey of an accidental matchmaker.", language: "English", description: "From a research career to building Jodi365: a long-form conversation about entrepreneurship, conviction, and the people behind a business." },
  { id: "4ywrfQEyHh4", image: "conversation-desifire.jpg", platform: "DESI FIRE", category: "A DIFFERENT PERSPECTIVE", title: "Rethinking modern love, one conversation at a time.", language: "English", description: "A thoughtful exchange on modern Indian relationships, life across cultures, and creating meaningful connections." },
  { id: "8JcBEDHLWGE", image: "conversation-mvp.jpg", platform: "MVP BY VANSHIKA", category: "CHOOSING YOUR PERSON", title: "Compatibility, expectations, and the choices that matter.", language: "English", description: "Anil discusses modern marriage, the expectations we bring to relationships, and choosing a partner with care." },
];
const education = [
  { logo: "iit-madras.png", institution: "IIT Madras", degree: "B.Tech", subject: "Engineering", detail: "An engineering foundation at one of India’s leading technical institutions. Anil also received the Institute Blue, recognising his contribution beyond academics.", recognition: "Institute Blue", place: "Chennai, India", number: "01" },
  { logo: "iowa.png", institution: "University of Iowa", degree: "M.S.", subject: "Mechanical engineering", detail: "A master’s in mechanical engineering expanded his research experience in the United States, bringing a disciplined, analytical approach to complex questions.", recognition: "Master of Science", place: "Iowa City, USA", number: "02" },
  { logo: "michigan.png", institution: "University of Michigan", degree: "Ph.D.", subject: "Computational hydrodynamics", detail: "Doctoral research in computational hydrodynamics developed a rigorous scientific perspective: look closely, question assumptions, and understand what the evidence says.", recognition: "Doctoral research", place: "Ann Arbor, USA", number: "03" },
  { logo: "chicago-booth.png", institution: "Chicago Booth", degree: "MBA", subject: "Entrepreneurship & strategic management", detail: "At the University of Chicago Booth School of Business, Anil focused on entrepreneurship and strategic management. A 2009 graduate, he received the KPMG Award for Leadership and Scholarship and the Dean’s Award of Distinction.", recognition: "Dean’s Award of Distinction", place: "Chicago, USA", number: "04" },
];
const press = [
  { name: "BBC", logo: "bbc.png", type: "CULTURE & SOCIETY", date: "August 2020", title: "Indian Matchmaking: The reality show that’s divided viewers", description: "A wider conversation about modern Indian matchmaking, choice, and the changing expectations around finding a partner.", url: "https://www.bbc.com/culture/article/20200806-indian-matchmaking-the-reality-show-that-s-divided-viewers" },
  { name: "The Hindu", logo: "the-hindu.png", type: "CHENNAI & COMMUNITY", date: "July 2015", title: "Giving a cool twist to arranged marriages", description: "An early look at Jodi365’s approach to helping Indian singles connect on their own terms.", url: "https://www.thehindu.com/news/cities/chennai/giving-a-cool-twist-to-arranged-marriages/article7387919.ece" },
  { name: "YourStory", logo: "yourstory.png", type: "THE ENTREPRENEUR’S JOURNEY", date: "June 2026", title: "The accidental matchmaker", description: "From a Ph.D. in hydrodynamics to building a matrimonial service: the story of the person and the purpose behind Jodi365.", url: "https://yourstory.com/2026/06/the-accidental-matchmaker-phd-hydrodynamics-matrimonial-service" },
  { name: "The Times of India", logo: "times-of-india.png", type: "FILM & CULTURE", date: "March 2026", title: "“Acting is still not on the radar, but never say never”", description: "Anil talks about his announced cameo as a professional matchmaker in the romantic comedy Coco & Nut.", url: "https://timesofindia.indiatimes.com/entertainment/tamil/movies/news/acting-is-still-not-on-the-radar-but-never-say-never-s-anil-kumar/articleshow/129495256.cms" },
  { name: "Chicago Booth", logo: "chicago-booth.png", type: "ALUMNI PROFILE", date: "Fall 2021", title: "Inspirations at Work and Play", description: "Chicago Booth profiles the engineer, researcher, and entrepreneur behind Jodi365, and the interests that shape his outlook.", url: "https://www.chicagobooth.edu/magazine/entrepreneurs-inspirations-at-work-and-play" },
];
function Flower({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M31.8 31.8C6 38-5 15.8 8.4 5.4 21.6-5 34 7.7 31.8 31.8ZM32.2 31.8C26-6 54-7 60 9.6c5.1 15.4-8.9 25-27.8 22.2ZM32.2 32.2C58 26 69 48.2 55.6 58.6 42.4 69 30 56.3 32.2 32.2ZM31.8 32.2C38 70 10 71 4 54.4-1.1 39 12.9 29.4 31.8 32.2Z" fill="currentColor"/></svg>;
}
function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`section-label ${light ? "light" : ""}`}><span className="label-dot" />{children}</div>;
}
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [activeEducation, setActiveEducation] = useState<number | null>(null);
  const [activePress, setActivePress] = useState(2);
  const [racingEvidenceOpen, setRacingEvidenceOpen] = useState(false);
  const [evidenceZoomed, setEvidenceZoomed] = useState(true);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [carouselAtStart, setCarouselAtStart] = useState(true);
  const [carouselAtEnd, setCarouselAtEnd] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);
  const mobileDialogRef = useRef<HTMLDialogElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const pressSelectorRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const isModalOpen = contactOpen || activeVideo !== null || racingEvidenceOpen;
  const updateCarousel = () => {
    const el = carouselRef.current;
    if (el) {
      setCarouselAtStart(el.scrollLeft < 5);
      setCarouselAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 5);
    }
  };
  useEffect(() => {
    const observer = new ResizeObserver(updateCarousel);
    if (carouselRef.current) observer.observe(carouselRef.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => {
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll-progress", `${max > 0 ? (window.scrollY / max) * 100 : 0}%`);
      document.body.classList.toggle("has-scrolled", window.scrollY > 25);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll("[data-reveal]").forEach(el => revealObserver.observe(el));
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`); });
    }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
    document.querySelectorAll("section[id]").forEach(el => sectionObserver.observe(el));
    return () => { window.removeEventListener("scroll", onScroll); revealObserver.disconnect(); sectionObserver.disconnect(); };
  }, []);
  useEffect(() => {
    if (isModalOpen) { lastFocus.current = mobileDialogRef.current?.contains(document.activeElement) ? menuToggleRef.current : document.activeElement as HTMLElement; modalRef.current?.showModal(); document.body.style.overflow = "hidden"; }
    else { modalRef.current?.close(); document.body.style.overflow = ""; lastFocus.current?.focus(); }
    return () => { document.body.style.overflow = ""; };
  }, [isModalOpen]);
  useEffect(() => {
    if (menuOpen) {
      mobileDialogRef.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      mobileDialogRef.current?.close();
      if (!isModalOpen) document.body.style.overflow = "";
    }
    const onResize = () => { if (window.innerWidth > 980) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("resize", onResize); document.body.style.overflow = ""; };
  }, [menuOpen, isModalOpen]);
  useEffect(() => {
    const selector = pressSelectorRef.current;
    if (!selector) return;
    const keepSelectedVisible = () => {
      const selected = selector.querySelector<HTMLButtonElement>('[aria-pressed="true"]');
      if (!selected || selector.scrollWidth <= selector.clientWidth) return;
      selector.scrollTo({ left: Math.max(0, selected.offsetLeft - (selector.clientWidth - selected.offsetWidth) / 2), behavior: "instant" });
    };
    keepSelectedVisible();
    const observer = new ResizeObserver(keepSelectedVisible);
    observer.observe(selector);
    return () => observer.disconnect();
  }, [activePress]);
  const closeModal = () => { setContactOpen(false); setActiveVideo(null); setRacingEvidenceOpen(false); };
  const closeEducation = () => {
    const trigger = document.querySelector<HTMLButtonElement>(".education-item.selected");
    setActiveEducation(null);
    trigger?.focus({ preventScroll: true });
  };
  const moveCarousel = (direction: number) => {
    const container = carouselRef.current;
    if (container) {
      const card = container.children[0] as HTMLElement;
      const gap = parseFloat(getComputedStyle(container).gap) || 24;
      container.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    }
  };
  const shareStory = async () => {
    try { await navigator.clipboard.writeText("https://www.jodi365.com/"); setCopied(true); window.setTimeout(() => setCopied(false), 2500); }
    catch { window.open("mailto:?subject=A%20thoughtful%20way%20to%20find%20your%20person&body=https%3A%2F%2Fwww.jodi365.com%2F", "_self"); }
  };
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="reading-progress" aria-hidden="true" />
    <header className="site-header"><div className="header-inner">
      <a className="brand" href="https://www.jodi365.com/" aria-label="Jodi365 home"><img src="/images/jodi365-logo.png" alt="Jodi365 — for quality singles" width="158" height="52" /></a>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <a key={link.href} className={activeSection === link.href ? "active" : ""} href={link.href}>{link.label}</a>)}</nav>
      <button className="button button-blue header-cta" onClick={() => setContactOpen(true)}>Let’s connect <ArrowUpRight size={16} /></button>
      <button ref={menuToggleRef} className="menu-toggle" aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </div></header>
    <dialog ref={mobileDialogRef} className="mobile-menu-dialog" aria-label="Site menu" onCancel={() => setMenuOpen(false)}><div className="mobile-menu-header"><a href="https://www.jodi365.com/" aria-label="Jodi365 home"><img src="/images/jodi365-logo.png" alt="Jodi365" width="133" height="44" /></a><button className="menu-toggle" aria-label="Close navigation" onClick={() => setMenuOpen(false)}><X size={22} /></button></div><nav className="mobile-nav" aria-label="Mobile navigation"><span className="eyebrow">MEET THE FOUNDER</span>{links.map((link, i) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}><span>0{i + 1}</span>{link.label}<ArrowUpRight /></a>)}<button className="button button-blue" onClick={() => { setMenuOpen(false); setContactOpen(true); }}>Let’s connect <ArrowUpRight size={18} /></button><p>Meaningful connections. Thoughtfully made.</p></nav></dialog>
    <main id="main">
      <section className="hero section-shell" id="founder">
        <div className="hero-topline"><div className="breadcrumb"><a href="https://www.jodi365.com/">Jodi365</a><span>/</span><span>Meet our founder</span></div></div>
        <div className="hero-grid">
          <div className="hero-heading"><SectionLabel>FOUNDER & CEO · JODI365</SectionLabel><h1>S. Anil<br /><span>Kumar.</span></h1></div>
          <div className="hero-visual">
            <div className="portrait-frame"><img className="hero-portrait" src="/images/anil-founder-portrait-v4.webp" alt="S. Anil Kumar wearing a tan blazer and white shirt against a warm neutral background" width="1122" height="1402" fetchPriority="high" /><div className="portrait-shade" /><button className="hero-watch" onClick={() => setActiveVideo(0)} aria-label="Watch Anil’s Galatta interview"><span className="hero-watch-play"><Play size={18} fill="currentColor" /></span><span><strong>Meet the mind behind Jodi365</strong><span>Watch the conversation</span></span><ArrowUpRight size={19} /></button></div>
            <div className="image-caption"><span>S. Anil Kumar · Entrepreneur & matchmaker</span><span>Chennai, India</span></div>
          </div>
          <div className="hero-copy">
            <p className="hero-statement">A scientific mind.<br />A deeply human purpose.</p>
            <p className="hero-description">Researcher, entrepreneur, and matchmaker. Helping people find a life partner with the thought and care that decision deserves.</p>
            <div className="hero-actions"><a className="text-link" href="#story">His journey <ArrowUpRight size={17} /></a></div>
            <div className="hero-credentials"><GraduationCap size={20} /><span>IIT Madras <i /> Iowa <i /> Michigan <i /> Chicago Booth</span></div>
          </div>
        </div>
        <div className="hero-proof"><div><span className="proof-number">2009</span><span>The year a more thoughtful<br />approach to matchmaking began.</span></div><div><span className="proof-number">4 degrees</span><span>Engineering, research, and business.<br />A perspective built across disciplines.</span></div><div><span className="proof-number">One purpose</span><span>Meaningful connections for<br />Indian singles, worldwide.</span></div></div>
      </section>

      <section className="beyond" id="beyond"><div className="section-shell">
        <div className="section-heading" data-reveal><div><SectionLabel light>ENTREPRENEUR. INVESTOR. OCCASIONAL ACTOR.</SectionLabel><h2>Beyond<br /><span className="heading-accent">matchmaking.</span></h2></div><p>The partnerships, projects, and people<br />that reveal another side of Anil.</p></div>
        <div className="beyond-grid">
          <article className="feature-card racing-card" data-reveal>
            <button className="feature-image racing-evidence-trigger" onClick={() => { setEvidenceZoomed(true); setRacingEvidenceOpen(true); }} aria-label="Inspect the Jodi365 logo on the racing car"><img src="/images/jodi365-racing-car.jpg" alt="Ajith Kumar beside his Le Mans Cup car, with Jodi365 branding above the front headlight" loading="lazy" width="2000" height="2500" /><span className="image-label">JODI365 ON THE TRACK</span><span className="image-inspect">Inspect the logo <Plus size={15} /></span></button>
            <div className="feature-content"><span className="feature-kicker">BRAND ASSOCIATION</span><h3>Ajith Kumar ×<br />RedAnt Racing</h3><p>The Jodi365 name, carried on the car. A visible association with Ajith Kumar and RedAnt Racing on the Le Mans Cup circuit.</p><a className="feature-link" href="https://x.com/LeMansCup/status/2064615469101814189" target="_blank" rel="noopener noreferrer">See the original photograph <ArrowUpRight size={19} /></a></div>
          </article>
          <a className="feature-card film-card" href="https://timesofindia.indiatimes.com/entertainment/tamil/movies/news/acting-is-still-not-on-the-radar-but-never-say-never-s-anil-kumar/articleshow/129495256.cms" target="_blank" rel="noopener noreferrer" data-reveal>
            <div className="feature-image"><img src="/images/coco-and-nut.jpg" alt="Coco & Nut romantic comedy cast artwork" loading="lazy" width="600" height="700" /><span className="image-label">COCO & NUT</span></div>
            <div className="feature-content"><span className="feature-kicker">ANNOUNCED FILM APPEARANCE</span><h3>A Hollywood cameo.<br />Playing himself.</h3><p>A matchmaker in a love story. Anil’s announced role in <em>Coco & Nut</em> brings his real-life work to the screen.</p><span className="feature-link">Read in The Times of India <ArrowUpRight size={19} /></span></div>
          </a>
          <a className="feature-card investor-card" href="https://www.startupsingam.com/" target="_blank" rel="noopener noreferrer" data-reveal>
            <div className="feature-image"><img src="/images/startup-singam.jpg" alt="S. Anil Kumar as an investor on Startup Singam Season 2" loading="lazy" width="800" height="800" /><span className="image-label">SEASON 2</span></div>
            <div className="feature-content"><span className="feature-kicker">INVESTOR & ENTREPRENEUR</span><h3>Backing founders.<br />On Startup Singam.</h3><p>Bringing experience in building a business to Tamil Nadu’s entrepreneurship show, as a Season 2 investor.</p><span className="feature-link">Discover Startup Singam <ArrowUpRight size={19} /></span></div>
          </a>
        </div>
      </div></section>

      <section className="press-section" id="press"><div className="section-shell">
        <div className="section-heading" data-reveal><div><SectionLabel>IN THE PRESS</SectionLabel><h2>His story,<br /><span className="heading-accent">told elsewhere.</span></h2></div><p>Reporting, interviews, and an alumni profile.<br />Explore the perspectives behind the headlines.</p></div>
        <div className="press-module" data-reveal>
        <div ref={pressSelectorRef} className="press-selector" aria-label="Choose a publication">{press.map((item, i) => <button key={item.name} className={`press-logo-button ${activePress === i ? "selected" : ""}`} onClick={() => setActivePress(i)} aria-pressed={activePress === i} aria-label={`Explore ${item.name} coverage`}><img src={`/images/logos/${item.logo}`} alt={item.name} width="226" height="70" loading="lazy" /><span>{activePress === i ? "Currently reading" : "Explore coverage"}<ArrowDown size={14} /></span></button>)}</div>
        <div className="press-feature" key={activePress} aria-live="polite"><div className="press-feature-intro"><BookOpen size={28} strokeWidth={1.4} /><span>{press[activePress].type}</span><strong>{press[activePress].name}</strong><span>{press[activePress].date}</span></div><div className="press-feature-body"><h3>{press[activePress].title}</h3><p>{press[activePress].description}</p><a className="text-link" href={press[activePress].url} target="_blank" rel="noopener noreferrer">Read the feature <ArrowUpRight size={18} /></a></div><span className="press-feature-number" aria-hidden="true">0{activePress + 1}</span></div>
        </div>
      </div></section>

      <section className="story section-shell" id="story">
        <div className="story-image-block" data-reveal><div className="story-photo"><img src="/images/founding-days.jpg" alt="Anil developing the early idea for Jodi365 at a whiteboard in Mumbai, December 2009" width="640" height="480" loading="lazy" /></div><div className="photo-caption"><span>Mumbai, December 2009</span><span>The idea takes shape.</span></div><div className="founding-year">Since <strong>2009.</strong></div></div>
        <div className="story-copy" data-reveal><SectionLabel>THE JOURNEY TO JODI365</SectionLabel><h2>A personal challenge.<br /><span className="heading-accent">A lasting purpose.</span></h2><p className="story-intro">Finding a partner is one of life’s biggest decisions. Anil believed the experience deserved more care.</p><p>He knew the challenge personally. Driven professionals could build accomplished careers and still struggle to find the right person to share their lives with.</p><p>In 2009, he founded Jodi365 to offer a more thoughtful way forward. Conceived in Chicago and built in Chennai, it brought his scientific background and entrepreneurial experience to modern Indian matchmaking.</p><a className="text-link" href="#note">Read his personal message <ArrowRight size={18} /></a></div>
      </section>

      <section className="education" id="foundation"><div className="section-shell">
        <div className="section-heading" data-reveal><div><h2>The foundation<br /><span className="heading-accent">behind the founder.</span></h2></div><p>Four institutions. Three disciplines.<br /> A lifetime of asking better questions.</p></div>
        <div className="education-stats" data-reveal>
          <div><strong>13</strong><div className="stat-copy"><span className="stat-label">Years of study</span><p>From IIT Madras to Chicago Booth.</p></div></div>
          <div><strong>4</strong><div className="stat-copy"><span className="stat-label">Academic degrees</span><p>Engineering, research, and business.</p></div></div>
          <div><strong>4</strong><div className="stat-copy"><span className="stat-label">Institutions</span><p>Across India and the United States.</p></div></div>
        </div>
        <div className="education-grid" data-reveal>{education.map((item, i) => <button className={`education-item ${activeEducation === i ? "selected" : ""}`} key={item.institution} onClick={() => setActiveEducation(activeEducation === i ? null : i)} aria-expanded={activeEducation === i} aria-controls={activeEducation === i ? `education-${i}` : undefined}><span className="education-top"><span>{item.number} / ACADEMIC CHAPTER</span><Plus size={19} className={activeEducation === i ? "rotated" : ""} /></span><span className="education-mark"><img src={`/images/logos/${item.logo}`} alt="" width="180" height="80" loading="lazy" /></span><span className="education-institution">{item.institution}</span><span className="education-degree">{item.degree}</span><span className="education-subject">{item.subject}</span><span className="education-location">{item.place}<ArrowUpRight size={17} /></span></button>)}</div>
        {activeEducation !== null && <div className="education-detail" id={`education-${activeEducation}`} role="region" aria-label={`${education[activeEducation].institution} details`}><div><span className="eyebrow">{education[activeEducation].institution}</span><h3>{education[activeEducation].subject}</h3><span className="academic-recognition"><GraduationCap size={18} />{education[activeEducation].recognition}</span></div><p>{education[activeEducation].detail}</p><button className="icon-button" onClick={closeEducation} aria-label="Close education details"><X size={18} /></button></div>}
        <a className="education-source" href="https://www.anil-kumar.com/" target="_blank" rel="noopener noreferrer"><ShieldCheck size={17} /> Explore Anil’s academic and professional background <ArrowUpRight size={16} /></a>
      </div></section>

      <section className="conversations" id="conversations"><div className="section-shell">
        <div className="section-heading" data-reveal><div><SectionLabel light>IN CONVERSATION</SectionLabel><h2>Hear how<br /><span className="heading-accent">he thinks.</span></h2></div><div className="conversation-heading-side"><p>Long-form conversations about relationships,<br />entrepreneurship, and choosing a partner.</p><div className="carousel-controls"><button className="icon-button" onClick={() => moveCarousel(-1)} disabled={carouselAtStart} aria-label="Previous conversation"><ArrowLeft size={21} /></button><button className="icon-button" onClick={() => moveCarousel(1)} disabled={carouselAtEnd} aria-label="Next conversation"><ArrowRight size={21} /></button></div></div></div>
        <div className="conversation-grid" ref={carouselRef} onScroll={updateCarousel}>{conversations.map((conversation, i) => <button key={conversation.id} className="conversation-card" onClick={() => setActiveVideo(i)} aria-label={`Watch ${conversation.platform}: ${conversation.title}`} data-reveal><div className="conversation-thumb"><img src={`/images/${conversation.image}`} alt={`${conversation.platform} interview with S. Anil Kumar`} width="1280" height="720" loading="lazy" /><span className="conversation-play"><Play size={21} fill="currentColor" /></span><span className="language-badge">{conversation.language}</span></div><div className="conversation-meta"><span>{conversation.platform}</span><ArrowUpRight size={19} /></div><h3>{conversation.title}</h3><span className="conversation-category">Watch the conversation <ArrowRight size={15} /></span></button>)}</div>
        <a className="text-link light-link" href="https://www.youtube.com/@s-anil-kumar" target="_blank" rel="noopener noreferrer">All conversations on YouTube <ArrowUpRight size={18} /></a>
      </div></section>

      <section className="social section-shell" id="social">
        <div className="social-intro" data-reveal><SectionLabel>JODI365, BEYOND THE SCREEN</SectionLabel><h2>Connections<br /><span className="heading-accent">in the real world.</span></h2><p>The Jodi365 name travels beyond matchmaking. Here it is with Ajith Kumar, on his racing suit, as part of the brand’s association with the world of motorsport.</p><a className="text-link" href="https://www.instagram.com/aktxm/" target="_blank" rel="noopener noreferrer"><Instagram size={20} /> More from Anil <ArrowUpRight size={18} /></a><div className="social-brand-note"><img src="/images/jodi365-logo.png" alt="Jodi365" width="158" height="52" /><span>A shared presence.<br />On the suit. On the circuit.</span></div></div>
        <a className="social-proof-image" href="https://www.instagram.com/aktxm/" target="_blank" rel="noopener noreferrer" data-reveal><img src="/images/ajith-jodi365-le-mans-clean.jpg" alt="Ajith Kumar in his racing suit, with the Jodi365 logo clearly visible on his chest and sleeve" width="2000" height="2500" loading="lazy" /><span className="social-photo-caption"><span><strong>Ajith Kumar</strong><span>The Jodi365 connection, in plain sight.</span></span><ArrowUpRight size={22} /></span></a>
      </section>

      <section className="founder-note" id="note"><div className="section-shell note-layout">
        <div className="note-intro" data-reveal><SectionLabel light>A MESSAGE FROM OUR FOUNDER</SectionLabel><h2>A personal<br /><span className="heading-accent">commitment.</span></h2><p>The reason Jodi365 exists,<br />in Anil’s own words.</p><div className="note-identity"><img src="/images/anil-founder-avatar-v4.webp" alt="S. Anil Kumar" width="320" height="400" loading="lazy" /><div><strong>S. Anil Kumar</strong><span>Founder & CEO, Jodi365</span></div></div><span className="note-since">Built with purpose, since 2009.</span></div>
        <article className="note-letter" data-reveal><Quote className="letter-quote-icon" size={48} strokeWidth={1} /><h3>I don’t just build algorithms.<br /><em>I build relationships.</em></h3><div className="letter-rule" /><p>I have personally known the challenges that driven career professionals face in finding the right partner. Given my background, I have also been keenly aware of the additional challenges that entrepreneurs, celebrities, and others in the public eye face when looking for love.</p><p>These experiences motivated me, in 2009, to found a thoughtful, refreshingly different matchmaking service in Jodi365.</p><p className="letter-emphasis">Every introduction I make reflects decades of experience in understanding what makes people connect, and what makes partnerships last.</p><div className="letter-signoff"><div><span className="signature">Anil</span><strong>S. Anil Kumar</strong><span>Founder & CEO</span></div><a href="https://www.linkedin.com/in/sakumar/" target="_blank" rel="noopener noreferrer" className="letter-linkedin" aria-label="Connect with S. Anil Kumar on LinkedIn"><Linkedin size={19} /><ArrowUpRight size={17} /></a></div></article>
      </div></section>

      <section className="closing-cta"><div className="section-shell closing-inner" data-reveal><SectionLabel>YOUR NEXT CHAPTER</SectionLabel><h2>Good people.<br /><span>A meaningful connection.</span></h2><p>Looking for yourself, or someone you care about?<br />Get to know Jodi365.</p><div className="closing-actions"><a className="button button-white" href="https://www.jodi365.com/" target="_blank" rel="noopener noreferrer">Discover Jodi365 <ArrowUpRight size={19} /></a><button className="button button-transparent" onClick={shareStory}>{copied ? <Check size={18} /> : <Copy size={18} />}{copied ? "Link copied" : "Share a possibility"}</button></div><div className="share-feedback" aria-live="polite">{copied ? "Jodi365’s link is ready to share." : ""}</div></div></section>
    </main>
    <footer className="site-footer section-shell"><div className="footer-top"><div className="footer-brand"><a href="https://www.jodi365.com/" aria-label="Jodi365 home"><img src="/images/jodi365-logo.png" alt="Jodi365 — for quality singles" width="158" height="52" /></a><p>Meaningful connections.<br />Thoughtfully made, since 2009.</p></div><div className="footer-links"><span>THE JODI365 WORLD</span><a href="#story">Our founder</a><a href="https://www.jodi365.com/#why-choose-jodi365" target="_blank" rel="noopener noreferrer">Why Jodi365 <ArrowUpRight size={12} /></a><a href="https://www.jodi365.com/success-stories" target="_blank" rel="noopener noreferrer">Success stories <ArrowUpRight size={12} /></a></div><div className="footer-links"><span>KEEP THE CONVERSATION GOING</span><a href="https://www.linkedin.com/in/sakumar/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={12} /></a><a href="https://www.instagram.com/aktxm/" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={12} /></a><a href="https://www.youtube.com/@s-anil-kumar" target="_blank" rel="noopener noreferrer">YouTube <ArrowUpRight size={12} /></a></div><button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })} aria-label="Back to top"><ArrowUpRight size={22} /><span>BACK TO TOP</span></button></div><div className="footer-bottom"><span>© {new Date().getFullYear()} FreeElective LLC. All rights reserved.</span><span>MADE FOR MEANINGFUL CONNECTIONS <Heart size={12} /></span><a href="https://www.jodi365.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy policy <ArrowUpRight size={12} /></a></div></footer>
    <dialog ref={modalRef} className={`experience-dialog ${activeVideo !== null ? "video-dialog" : racingEvidenceOpen ? "evidence-dialog" : "contact-dialog"}`} onCancel={closeModal} onClick={(event) => { if (event.target === event.currentTarget) closeModal(); }} aria-labelledby="dialog-title"><div className="dialog-inner"><button className="dialog-close icon-button" onClick={closeModal} aria-label="Close dialog"><X size={22} /></button>{activeVideo !== null ? <><div className="video-wrap"><iframe src={`https://www.youtube-nocookie.com/embed/${conversations[activeVideo].id}?autoplay=1&rel=0`} title={conversations[activeVideo].title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div><div className="video-detail"><span className="eyebrow">{conversations[activeVideo].platform} · {conversations[activeVideo].language}</span><h2 id="dialog-title">{conversations[activeVideo].title}</h2><p>{conversations[activeVideo].description}</p><a className="text-link" href={`https://www.youtube.com/watch?v=${conversations[activeVideo].id}`} target="_blank" rel="noopener noreferrer">Watch on YouTube <ArrowUpRight size={16} /></a></div></> : racingEvidenceOpen ? <div className="evidence-content"><div className="evidence-header"><SectionLabel>THE ASSOCIATION, UP CLOSE</SectionLabel><h2 id="dialog-title">Jodi365, on the racing car.</h2><p>An original photograph from the official Michelin Le Mans Cup account.</p><div className="evidence-controls" aria-label="Photo view"><button aria-pressed={evidenceZoomed} onClick={() => setEvidenceZoomed(true)}>Logo detail <Plus size={16} /></button><button aria-pressed={!evidenceZoomed} onClick={() => setEvidenceZoomed(false)}>Full photograph <ArrowUpRight size={16} /></button></div></div><div className={`evidence-stage ${evidenceZoomed ? "zoomed" : ""}`}><img src="/images/jodi365-racing-car.jpg" alt={evidenceZoomed ? "Close view of the original Jodi365 logo above the racing car’s front headlight" : "Full original photograph of Ajith Kumar and his Le Mans Cup car"} width="2000" height="2500" /></div><div className="evidence-footer"><span>Michelin Le Mans Cup · 10 June 2026</span><a className="text-link" href="https://x.com/LeMansCup/status/2064615469101814189" target="_blank" rel="noopener noreferrer">View original source <ArrowUpRight size={16} /></a></div></div> : <div className="contact-content"><Flower /><SectionLabel>GOOD THINGS BEGIN WITH A HELLO</SectionLabel><h2 id="dialog-title">Let’s make a<br /><em>meaningful connection.</em></h2><p>Looking for your person, curious about Jodi365, or have a conversation in mind? There’s a place to begin.</p><a className="contact-option" href="https://www.jodi365.com/contact-us" target="_blank" rel="noopener noreferrer"><span className="contact-option-icon"><Heart size={21} /></span><span><strong>Find your person</strong><span>Speak with the Jodi365 team</span></span><ArrowUpRight size={22} /></a><a className="contact-option" href="https://www.linkedin.com/in/sakumar/" target="_blank" rel="noopener noreferrer"><span className="contact-option-icon"><Linkedin size={21} /></span><span><strong>Start a conversation</strong><span>Connect with Anil on LinkedIn</span></span><ArrowUpRight size={22} /></a><span className="contact-footnote">A LITTLE CURIOSITY CAN GO A LONG WAY.</span></div>}</div></dialog>
  </>;
}
