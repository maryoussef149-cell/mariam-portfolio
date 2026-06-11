import React, { useEffect, useState } from 'react';

const SKILLS = {
  cloud: ['AWS EC2', 'Security Groups', 'IAM', 'S3'],
  'ci/cd': ['GitHub Actions', 'Docker', 'Docker Hub', 'Nginx'],
  systems: ['Linux (Ubuntu)', 'SSH', 'Bash', 'Git'],
};

const PROJECTS = [
  {
    name: 'CI/CD Pipeline — Forrest Gump',
    desc: 'End-to-end automated deployment pipeline. Push to main → Docker build → EC2 deploy in under 60 seconds.',
    tags: ['GitHub Actions', 'Docker', 'AWS EC2', 'Nginx'],
    status: 'live',
    icon: '⬡',
  },
  {
    name: 'This Portfolio Site',
    desc: 'Portfolio site with its own CI/CD pipeline. Built and deployed using the same infrastructure it showcases.',
    tags: ['React', 'Vercel', 'GitHub Actions', 'Docker'],
    status: 'in progress',
    icon: '</>',
  },
];

const CERTIFICATES = [
  { name: 'AWS: Intro to Cloud Computing', issuer: 'Manara Tech', link: 'https://drive.google.com/file/d/1M9FukHKUvqvEfTyoFmQhMx-SRo__IuXn/view?usp=drive_link', color: '#FF9900' },
  { name: 'DevOps Learning Path', issuer: 'Manara Tech', link: 'https://drive.google.com/file/d/1XQnAuAnkzAt_9WUjPtwDBQsZDVEt_JR6/view?usp=drive_link', color: '#58a6ff' },
  { name: 'React JS', issuer: 'ITI / Mahara Tech', link: 'https://drive.google.com/file/d/1hukLBXM0CgJmtmG0RDxcTs7MdjQULYZ4/view?usp=drive_link', color: '#39d0d8' },
  { name: 'Ubuntu Linux Essentials', issuer: 'ITI / Mahara Tech', link: 'https://drive.google.com/file/d/183vgI-3EopKJEEQRGuyKnGnjJiQBwUsN/view?usp=drive_link', color: '#3fb950' },
  { name: 'UI/UX Design', issuer: 'Sprints x Microsoft', link: 'https://drive.google.com/file/d/1PGfUGMZs_vZN6HV1Z195k6PidaCUEsMC/view?usp=drive_link', color: '#d29922' },
];

const PIPELINE = [
  { label: 'git push', sub: 'trigger' },
  { label: 'github actions', sub: 'ci/cd' },
  { label: 'docker build', sub: 'containerize' },
  { label: 'docker hub', sub: 'registry' },
  { label: 'aws ec2', sub: 'deploy' },
  { label: 'nginx', sub: 'serve' },
];

const CONTACT = [
  { icon: '⌥', label: 'github.com/maryoussef149-cell', href: 'https://github.com/maryoussef149-cell' },
  { icon: '⊞', label: 'linkedin.com/in/mariam-a-mosad', href: 'https://www.linkedin.com/in/mariam-a-mosad-824507372' },
  { icon: '✉', label: 'maryoussef49@gmail.com', href: 'mailto:maryoussef49@gmail.com' },
];

function TerminalWindow() {
  const lines = [
    { prompt: true, cmd: 'git push origin main' },
    { prompt: false, text: '[main b10b9fd] deploy', color: '#8b949e' },
    { prompt: false, text: '' },
    { prompt: false, text: '✓ build    completed in 22s', color: '#3fb950' },
    { prompt: false, text: '✓ push     → docker hub', color: '#3fb950' },
    { prompt: false, text: '✓ deploy   → aws ec2 (7s)', color: '#3fb950' },
    { prompt: false, text: '' },
    { prompt: false, text: '✓ status: live ✦', color: '#39d0d8' },
  ];
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    if (visible < lines.length) {
      const t = setTimeout(() => setVisible(v => v + 1), 300);
      return () => clearTimeout(t);
    }
  }, [visible, lines.length]);
  return (
    <div style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ background: '#161b22', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1px solid #30363d' }}>
        {['#ff5f56','#ffbd2e','#27c93f'].map(c => <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, display: 'inline-block' }} />)}
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#8b949e', marginLeft: 6 }}>bash — pipeline.sh</span>
      </div>
      <div style={{ padding: '1.25rem' }}>
        {lines.slice(0, visible).map((l, i) => (
          <div key={i} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, lineHeight: '1.8', color: l.color || '#e2e8f0' }}>
            {l.prompt && <span style={{ color: '#58a6ff' }}>→ </span>}
            {l.cmd || l.text}
          </div>
        ))}
        {visible >= lines.length && (
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, lineHeight: '1.8' }}>
            <span style={{ color: '#58a6ff' }}>→ </span>
            <span style={{ display: 'inline-block', width: 8, height: 14, background: '#58a6ff', verticalAlign: 'middle' }} />
          </div>
        )}
      </div>
    </div>
  );
}

function SectionHeader({ num, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#8b949e' }}>{num}</span>
      <span style={{ fontSize: 18, fontWeight: 600, color: '#e2e8f0' }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: '#1e2d3d' }} />
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Space+Grotesk:wght@300;400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0a0e13; color: #e2e8f0; font-family: 'Space Grotesk', sans-serif; }
        a { transition: color 0.2s, opacity 0.2s; }
        a:hover { opacity: 0.8; }
        .nav-links-desktop { display: flex; gap: 1.5rem; list-style: none; }
        .hamburger { display: none; background: none; border: none; color: #8b949e; font-size: 20px; cursor: pointer; padding: 4px; }
        .mobile-menu { display: none; flex-direction: column; gap: 1rem; padding: 1rem 2rem; background: #0d1117; border-bottom: 1px solid #1e2d3d; }
        .mobile-menu.open { display: flex; }
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
        .projects-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .certs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
        .skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; }
        .pipeline-row { display: flex; align-items: center; flex-wrap: nowrap; gap: 0; overflow-x: auto; padding-bottom: 0.5rem; }
        .contact-row { display: flex; gap: 2rem; flex-wrap: wrap; }
        .project-card { background: #0d1117; border: 1px solid #30363d; border-radius: 8px; padding: 1.5rem; transition: border-color 0.2s; }
        .project-card:hover { border-color: #58a6ff; }
        .cert-card { display: flex; align-items: center; gap: 1rem; background: #0d1117; border: 1px solid #30363d; border-radius: 8px; padding: 1rem 1.25rem; text-decoration: none; transition: border-color 0.2s; }
        .cert-card:hover { border-color: #58a6ff; }
        @media (max-width: 768px) {
          .nav-links-desktop { display: none; }
          .hamburger { display: block; }
          .hero-grid { grid-template-columns: 1fr; gap: 2rem; }
          .projects-grid { grid-template-columns: 1fr; }
          .certs-grid { grid-template-columns: 1fr; }
          .skills-grid { grid-template-columns: 1fr 1fr; }
          .pipeline-row { flex-wrap: wrap; gap: 0.5rem; justify-content: flex-start; }
          .pipe-arrow { display: none; }
          .contact-row { flex-direction: column; gap: 1rem; }
          .hero-name { font-size: 28px !important; }
          .section-pad { padding: 2rem 1.25rem !important; }
          .hero-pad { padding: 2.5rem 1.25rem !important; }
          .nav-pad { padding: 1rem 1.25rem !important; }
        }
        @media (max-width: 480px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <nav style={{ background: '#0d1117', borderBottom: '1px solid #1e2d3d', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="nav-pad" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: '#58a6ff' }}>~/mariam-ayman $</span>
          <ul className="nav-links-desktop">
            {['about','projects','certificates','skills','contact'].map(l => (
              <li key={l}><a href={`#${l}`} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#8b949e', textDecoration: 'none' }}>{l}</a></li>
            ))}
          </ul>
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)}>☰</button>
        </div>
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          {['about','projects','certificates','skills','contact'].map(l => (
            <a key={l} href={`#${l}`} onClick={() => setMenuOpen(false)} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: '#8b949e', textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
      </nav>

      <section className="hero-pad" id="about" style={{ padding: '4rem 2rem 3rem', borderBottom: '1px solid #1e2d3d' }}>
        <div className="hero-grid" style={{ maxWidth: 960, margin: '0 auto' }}>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#3fb950', letterSpacing: '0.1em', marginBottom: '0.75rem' }}> available for opportunities</div>
            <div className="hero-name" style={{ fontSize: 36, fontWeight: 700, color: '#e2e8f0', lineHeight: 1.1, marginBottom: '0.5rem' }}>Mariam Ayman</div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 15, color: '#58a6ff', marginBottom: '1rem' }}>DevOps Engineer</div>
            <p style={{ fontSize: 14, color: '#8b949e', lineHeight: 1.7, maxWidth: 380, marginBottom: '2rem' }}>Building and automating infrastructure. CI/CD pipelines, containerization, and cloud deployments on AWS.</p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="#projects" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, padding: '10px 20px', borderRadius: 4, background: '#238636', color: '#fff', textDecoration: 'none' }}>view projects →</a>
              <a href="#contact" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, padding: '10px 20px', borderRadius: 4, border: '1px solid #30363d', color: '#58a6ff', textDecoration: 'none' }}>contact →</a>
            </div>
          </div>
          <TerminalWindow />
        </div>
      </section>

      <section className="section-pad" style={{ padding: '2.5rem 2rem', borderBottom: '1px solid #1e2d3d' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionHeader num="02" title="pipeline" />
          <div className="pipeline-row">
            {PIPELINE.map((step, i) => (
              <React.Fragment key={step.label}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: 6, padding: '8px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3fb950' }} />
                    {step.label}
                  </div>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#8b949e' }}>{step.sub}</span>
                </div>
                {i < PIPELINE.length - 1 && <div className="pipe-arrow" style={{ fontSize: 14, color: '#30363d', padding: '0 6px', marginBottom: 16 }}>→</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" id="projects" style={{ padding: '2.5rem 2rem', borderBottom: '1px solid #1e2d3d' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionHeader num="03" title="projects" />
          <div className="projects-grid">
            {PROJECTS.map(p => (
              <div key={p.name} className="project-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ fontSize: 22, color: '#58a6ff' }}>{p.icon}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, padding: '3px 10px', borderRadius: 20, background: '#1c2128', border: '1px solid #30363d', color: '#3fb950' }}>{p.status}</span>
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#e2e8f0', marginBottom: '0.5rem' }}>{p.name}</div>
                <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.6, marginBottom: '1rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tags.map(t => <span key={t} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, padding: '3px 8px', borderRadius: 3, background: '#1c2128', color: '#8b949e', border: '1px solid #21262d' }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" id="certificates" style={{ padding: '2.5rem 2rem', borderBottom: '1px solid #1e2d3d' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionHeader num="04" title="certificates" />
          <div className="certs-grid">
            {CERTIFICATES.map(c => (
              <a key={c.name} href={c.link} target="_blank" rel="noreferrer" className="cert-card">
                <div style={{ width: 3, height: 40, borderRadius: 2, background: c.color, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: '#e2e8f0', marginBottom: 4 }}>{c.name}</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#8b949e' }}>{c.issuer}</div>
                </div>
                <span style={{ color: '#8b949e', fontSize: 14, flexShrink: 0 }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" id="skills" style={{ padding: '2.5rem 2rem', borderBottom: '1px solid #1e2d3d' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionHeader num="05" title="skills" />
          <div className="skills-grid">
            {Object.entries(SKILLS).map(([group, items]) => (
              <div key={group} style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: 6, padding: '1.25rem' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#58a6ff', letterSpacing: '0.1em', marginBottom: '0.75rem' }}> {group}</div>
                {items.map(s => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#8b949e', marginBottom: 8 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#3fb950', flexShrink: 0 }} />
                    {s}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" id="contact" style={{ padding: '2.5rem 2rem' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionHeader num="06" title="contact" />
          <div className="contact-row">
            {CONTACT.map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: '#8b949e', textDecoration: 'none' }}>
                <span style={{ color: '#58a6ff', fontSize: 18 }}>{c.icon}</span>
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}