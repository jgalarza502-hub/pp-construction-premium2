"use client";

import { FormEvent, useEffect, useState } from "react";

const services = [
  ["Concrete", "Slabs, patios, walkways, foundations, and other residential or commercial concrete projects."],
  ["Fencing", "Dependable fencing installation for homes, properties, and commercial spaces."],
  ["Land Grading & Clearing", "Site preparation, grading, clearing, and property improvement."],
  ["Concrete Demolition", "Careful removal of old or damaged concrete with cleanup included."],
  ["Haul-Off Services", "Removal of construction debris, dirt, concrete, and unwanted materials."],
];

const projects = [
  ["/images/project-1.jpg", "Large Concrete Slab"],
  ["/images/project-2.jpg", "Foundation Preparation"],
  ["/images/project-3.jpg", "Finished Concrete Work"],
  ["/images/project-4.jpg", "Decorative Patio"],
  ["/images/project-5.jpg", "Curved Walkway"],
  ["/images/project-6.jpg", "Site Preparation"],
  ["/images/project-7.jpg", "Concrete Detail"],
  ["/images/project-8.jpg", "Residential Project"],
  ["/images/project-9.jpg", "Foundation Work"],
  ["/images/project-10.jpg", "Project Progress"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.14 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Estimate request from ${data.get("name") || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\n\nProject details:\n${data.get("message")}`
    );
    window.location.href = `mailto:pconstruction075@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav shell">
          <a className="brand" href="#home" aria-label="P&P Construction home">
            <span className="brand-mark">P&amp;P</span>
            <span><strong>P&amp;P Construction</strong><small>Canton, Texas</small></span>
          </a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? "✕" : "☰"}</button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {[["About","about"],["Services","services"],["Projects","projects"],["Contact","contact"]].map(([label,id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a className="button small" href="#contact">Free Estimate</a>
          </div>
        </nav>
      </header>

      <section className="hero" id="home">
        <img src="/images/hero.jpg" alt="P&P Construction concrete project" />
        <div className="hero-overlay" />
        <div className="hero-content shell">
          <p className="eyebrow">Canton, Texas • English &amp; Español</p>
          <h1>Built to last.<br/><span>Built with pride.</span></h1>
          <p className="hero-copy">Concrete, fencing, land grading and clearing, concrete demolition, and haul-off services throughout Canton and surrounding areas.</p>
          <div className="hero-actions">
            <a className="button" href="#contact">Get a Free Estimate</a>
            <a className="button secondary" href="#projects">View Our Work</a>
          </div>
          <div className="contact-pills">
            <a href="tel:4695955008">☎ Aaron Piña · (469) 595-5008</a>
            <a href="tel:9035214273">☎ Fernando Palomares · (903) 521-4273</a>
          </div>
        </div>
      </section>

      <section className="section dark" id="about">
        <div className="shell split reveal">
          <div className="about-photo"><img src="/images/business-card.jpg" alt="P&P Construction business card" /></div>
          <div>
            <p className="eyebrow">About P&amp;P Construction</p>
            <h2>Built by two friends.<br/><span>Dedicated to doing it right.</span></h2>
            <p>P&amp;P Construction was founded by Aaron Piña and Fernando Palomares with a shared commitment to dependable service, honest communication, and quality work.</p>
            <p>Every project receives careful attention from preparation through completion. We proudly serve Canton, Texas, and surrounding communities.</p>
            <div className="badge-grid">
              <div>✓ Free estimates</div><div>✓ English &amp; Spanish</div><div>✓ Local service</div><div>✓ Quality-focused work</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="shell reveal">
          <p className="eyebrow">What We Do</p>
          <h2>Reliable services for<br/><span>your property.</span></h2>
          <div className="cards">
            {services.map(([title,desc],i) => <article className="card" key={title}><b>0{i+1}</b><h3>{title}</h3><p>{desc}</p><a href="#contact">Request an estimate →</a></article>)}
          </div>
        </div>
      </section>

      <section className="section dark" id="process">
        <div className="shell reveal">
          <p className="eyebrow">Our Process</p>
          <h2>A clear path from<br/><span>estimate to completion.</span></h2>
          <div className="process">
            {[["01","Free Estimate","We discuss your project, needs, and location."],["02","Planning","We prepare the scope, site, and project details."],["03","Construction","We complete the work with care and attention."],["04","Final Walkthrough","We review the finished project with you."]].map(([n,t,d]) => <div className="process-step" key={n}><strong>{n}</strong><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="shell reveal">
          <p className="eyebrow">Featured Work</p>
          <h2>Quality work you can<br/><span>see for yourself.</span></h2>
          <div className="gallery">
            {projects.map(([src,title],i) => <button key={src} className={i===0 || i===4 ? "wide" : ""} onClick={() => setSelected(src)}><img src={src} alt={title}/><span>{title}</span></button>)}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="shell contact-grid reveal">
          <div>
            <p className="eyebrow">Start Your Project</p>
            <h2>Request your<br/><span>free estimate.</span></h2>
            <p>Tell us what you need and one of the owners will follow up with you.</p>
            <div className="contact-list">
              <a href="tel:4695955008"><strong>Aaron Piña</strong><span>(469) 595-5008</span></a>
              <a href="tel:9035214273"><strong>Fernando Palomares</strong><span>(903) 521-4273</span></a>
              <a href="mailto:pconstruction075@gmail.com"><strong>Email</strong><span>pconstruction075@gmail.com</span></a>
              <div><strong>Service Area</strong><span>Canton, TX &amp; surrounding areas</span></div>
            </div>
          </div>
          <form onSubmit={submitEstimate} className="estimate-form">
            <label>Name<input name="name" required /></label>
            <label>Phone<input name="phone" type="tel" required /></label>
            <label>Email<input name="email" type="email" /></label>
            <label>Service<select name="service"><option>Concrete</option><option>Fencing</option><option>Land Grading & Clearing</option><option>Concrete Demolition</option><option>Haul-Off Services</option></select></label>
            <label className="full">Project Details<textarea name="message" rows={5} required /></label>
            <button className="button full" type="submit">Create Estimate Email</button>
            <small className="full">This opens your email app with the request already filled out.</small>
          </form>
        </div>
      </section>

      <footer><div className="shell footer-grid"><div className="brand"><span className="brand-mark">P&amp;P</span><span><strong>P&amp;P Construction</strong><small>Built to last. Built with pride.</small></span></div><p>© 2026 P&amp;P Construction</p><p>Canton, Texas &amp; surrounding areas</p></div></footer>

      <a className="floating-call" href="tel:4695955008" aria-label="Call P&P Construction">☎</a>
      {selected && <div className="lightbox" onClick={() => setSelected(null)}><button aria-label="Close">✕</button><img src={selected} alt="Expanded project"/></div>}
    </main>
  );
}
