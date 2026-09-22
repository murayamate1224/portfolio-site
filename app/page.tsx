"use client";

import { useEffect, useState } from "react";

const services = [
  ["01", "Product Design", "UX strategy, wireframes, polished interfaces, and design systems that bring clarity to complex workflows."],
  ["02", "Frontend Development", "Responsive, accessible interfaces built with modern frameworks and performance-first principles."],
  ["03", "Backend & APIs", "Reliable architecture, data modeling, automation, and integrations that support real products at scale."],
];

const projects = [
  ["SaaS", "2024", "Aster", "A workflow management platform for remote teams, redesigned to simplify planning, reporting, and collaboration.", "visualOne"],
  ["Brand Platform", "2023", "Northstar Studio", "A premium portfolio and conversion-focused site crafted to elevate a creative agency's digital presence.", "visualTwo"],
  ["Web App", "2024", "Orbit Metrics", "A data-rich dashboard experience that turned fragmented reporting into a clean, actionable decision layer.", "visualThree"],
];

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "PostgreSQL", "Figma", "Design Systems", "UX Research"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="pageShell">
      <header className="siteHeader">
        <div className="container navWrap">
          <a href="#top" className="brand" aria-label="Home"><span className="brandMark">M</span><span>My Portfolio</span></a>
          <button className="navToggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
          <nav className={`siteNav ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
            {["About", "Work", "Services", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero"><div className="container heroGrid">
          <div className="heroCopy reveal">
            <p className="eyebrow">Full-Stack Developer • Designer</p>
            <h1>I design and build digital products that feel as good as they work.</h1>
            <p className="lede">I help startups and teams ship polished, high-performing experiences from concept to launch — blending product thinking, engineering precision, and visual craft.</p>
            <div className="ctaRow"><a className="button primary" href="#work">View my work</a><a className="button secondary" href="#contact">Let&apos;s talk</a></div>
            <ul className="quickStats"><li><strong>6+</strong><span>Years building</span></li><li><strong>35+</strong><span>Projects launched</span></li><li><strong>12</strong><span>Products shipped</span></li></ul>
          </div>
          <div className="heroCard reveal"><div className="profilePanel"><div className="avatarRing"><div className="avatar">M</div></div><div className="cardCopy"><p className="label">Available for freelance work</p><h2>Product-minded developer</h2><p>Building smart interfaces, resilient systems, and memorable brand experiences.</p></div><div className="miniMetrics"><div><span>Frontend</span><strong>React / Next.js</strong></div><div><span>Backend</span><strong>Node / APIs</strong></div><div><span>Design</span><strong>UI / UX Systems</strong></div></div></div></div>
        </div></section>

        <section id="about" className="sectionSpace"><div className="container twoCol"><div className="sectionHeading reveal"><p className="eyebrow">About</p><h2>Designing thoughtful products with technical depth.</h2></div><div className="aboutCopy reveal"><p>I&apos;m a full-stack developer and designer who enjoys turning abstract ideas into clear, scalable digital experiences. I care equally about usability, performance, and visual polish — because the best product work is both useful and delightful.</p><p>My work sits at the intersection of product strategy, interface design, and elegant engineering. From dashboards and SaaS products to brand-led marketing experiences, I build systems that help people move faster and feel confident doing it.</p></div></div></section>

        <section id="services" className="sectionSpace"><div className="container"><div className="sectionHeading centered reveal"><p className="eyebrow">What I do</p><h2>Full-stack execution with a designer&apos;s eye.</h2></div><div className="serviceGrid">{services.map(([number, title, description]) => <article className="serviceCard reveal" key={title}><div className="icon">{number}</div><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

        <section id="work" className="sectionSpace"><div className="container"><div className="sectionHeading reveal"><p className="eyebrow">Selected work</p><h2>Projects designed for clarity, growth, and momentum.</h2></div><div className="projectGrid">{projects.map(([type, date, title, description, visual]) => <article className="projectCard reveal" key={title}><div className={`projectVisual ${visual}`} /><div className="projectBody"><div className="projectMeta"><span>{type}</span><span>{date}</span></div><h3>{title}</h3><p>{description}</p><a href="#contact">Case study</a></div></article>)}</div></div></section>

        <section className="sectionSpace"><div className="container"><div className="sectionHeading reveal"><p className="eyebrow">Toolbox</p><h2>Built with the tools that help teams move with speed and precision.</h2></div><div className="tagList reveal">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></section>

        <section id="contact" className="sectionSpace"><div className="container contactPanel reveal"><div><p className="eyebrow">Let&apos;s build something great</p><h2>Need a developer who can design, build, and ship?</h2></div><a className="button primary" href="mailto:hello@yourportfolio.dev">hello@yourportfolio.dev</a></div></section>
      </main>

      <footer className="siteFooter"><div className="container footerWrap"><p>© {year} My Portfolio</p><div className="footerLinks"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a><a href="mailto:hello@yourportfolio.dev">Email</a></div></div></footer>
    </div>
  );
}
