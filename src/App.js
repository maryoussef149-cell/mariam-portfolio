import React, { useEffect, useState } from 'react';
import './index.css';

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

const PIPELINE = ['git push', 'github actions', 'docker build', 'docker hub', 'aws ec2', 'nginx'];

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
    <div style={styles.termWrap}>
      <div style={styles.termHeader}>
        <span style={{ ...styles.dot, background: '#ff5f56' }} />
        <span style={{ ...styles.dot, background: '#ffbd2e' }} />
        <span style={{ ...styles.dot, background: '#27c93f' }} />
        <span style={styles.termTitle}>bash — pipeline.sh</span>
      </div>
      <div style={styles.termBody}>
        {lines.slice(0, visible).map((l, i) => (
          <div key={i} style={{ fontFamily: 'JetBrains Mono', fontSize: 12, lineHeight: '1.8', color: l.color || '#e2e8f0' }}>
            {l.prompt && <span style={{ color: '#58a6ff' }}>→ </span>}
            {l.cmd || l.text}
          </div>
        ))}
        {visible >= lines.length && (
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 12, lineHeight: '1.8' }}>
            <span style={{ color: '#58a6ff' }}>→ </span>
            <span style={styles.cursor} />
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={styles.page}>
      {/* Nav */}
      <nav style={styles.nav}>
        <span style={styles.navLogo}>~/mariam-ayman $</span>
        <ul style={styles.navLinks}>
          {['about', 'projects', 'skills', 'contact'].map(l => (
            <li key={l}><a href={`#${l}`} style={styles.navLink}>{l}</a></li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <section style={styles.hero} id="about">
        <div style={styles.heroGrid}>
          <div>
            <div style={styles.heroTag}> available for opportunities</div>
            <div style={styles.heroName}>Mariam Ayman</div>
            <div style={styles.heroTitle}>DevOps Engineer</div>
            <p style={styles.heroDesc}>Building and automating infrastructure. CI/CD pipelines, containerization, and cloud deployments on AWS.</p>
            <div style={styles.btnGroup}>
              <a href="#projects" style={styles.btnPrimary}>view projects →</a>
              <a href="#skills" style={styles.btnOutline}>skills →</a>
            </div>
          </div>
          <TerminalWindow />
        </div>
      </section>

      {/* Pipeline */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionTag}>02</span>
          <span style={styles.sectionTitle}>pipeline</span>
          <div style={styles.sectionLine} />
        </div>
        <div style={styles.pipeline}>
          {PIPELINE.map((step, i) => (
            <React.Fragment key={step}>
              <div style={styles.pipeStep}>
                <div style={styles.pipeBox}>
                  <div style={styles.pipeDot} />
                  {step}
                </div>
                <span style={styles.pipeLabel}>{['trigger','ci/cd','containerize','registry','deploy','serve'][i]}</span>
              </div>
              {i < PIPELINE.length - 1 && <div style={styles.pipeArrow}>→</div>}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section style={styles.section} id="projects">
        <div style={styles.sectionHeader}>
          <span style={styles.sectionTag}>03</span>
          <span style={styles.sectionTitle}>projects</span>
          <div style={styles.sectionLine} />
        </div>
        <div style={styles.projectsGrid}>
          {PROJECTS.map(p => (
            <div key={p.name} style={styles.projectCard}>
              <div style={styles.projectTop}>
                <span style={styles.projectIcon}>{p.icon}</span>
                <span style={styles.projectBadge}>{p.status}</span>
              </div>
              <div style={styles.projectName}>{p.name}</div>
              <p style={styles.projectDesc}>{p.desc}</p>
              <div style={styles.tagRow}>
                {p.tags.map(t => <span key={t} style={styles.tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section style={styles.section} id="skills">
        <div style={styles.sectionHeader}>
          <span style={styles.sectionTag}>04</span>
          <span style={styles.sectionTitle}>skills</span>
          <div style={styles.sectionLine} />
        </div>
        <div style={styles.skillsGrid}>
          {Object.entries(SKILLS).map(([group, items]) => (
            <div key={group} style={styles.skillGroup}>
              <div style={styles.skillGroupTitle}> {group}</div>
              {items.map(s => (
                <div key={s} style={styles.skillItem}>
                  <div style={styles.skillDot} />
                  {s}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={styles.section} id="contact">
        <div style={styles.sectionHeader}>
          <span style={styles.sectionTag}>05</span>
          <span style={styles.sectionTitle}>contact</span>
          <div style={styles.sectionLine} />
        </div>
        <div style={styles.contactRow}>
          {[
            { icon: '⌥', label: 'github.com/maryoussef149-cell' },
            { icon: '⊞', label: 'linkedin.com/in/mariam-ayman' },
            { icon: '✉', label: 'mariam@email.com' },
          ].map(c => (
            <div key={c.label} style={styles.contactItem}>
              <span style={{ color: '#58a6ff', fontSize: 16 }}>{c.icon}</span>
              <span>{c.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: { background: '#0a0e13', minHeight: '100vh', color: '#e2e8f0' },
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', borderBottom: '1px solid #1e2d3d', background: '#0d1117' },
  navLogo: { fontFamily: 'JetBrains Mono', fontSize: 13, color: '#58a6ff' },
  navLinks: { display: 'flex', gap: '1.5rem', listStyle: 'none' },
  navLink: { fontFamily: 'JetBrains Mono', fontSize: 12, color: '#8b949e', textDecoration: 'none' },
  hero: { padding: '4rem 2rem 3rem', borderBottom: '1px solid #1e2d3d' },
  heroGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: 900 },
  heroTag: { fontFamily: 'JetBrains Mono', fontSize: 11, color: '#3fb950', letterSpacing: '0.1em', marginBottom: '0.75rem' },
  heroName: { fontSize: 32, fontWeight: 600, color: '#e2e8f0', lineHeight: 1.1, marginBottom: '0.5rem' },
  heroTitle: { fontFamily: 'JetBrains Mono', fontSize: 14, color: '#58a6ff', marginBottom: '1rem' },
  heroDesc: { fontSize: 13, color: '#8b949e', lineHeight: 1.6, maxWidth: 320, marginBottom: '1.5rem' },
  btnGroup: { display: 'flex', gap: '0.75rem', flexWrap: 'wrap' },
  btnPrimary: { fontFamily: 'JetBrains Mono', fontSize: 11, padding: '8px 16px', borderRadius: 4, background: '#238636', color: '#fff', textDecoration: 'none' },
  btnOutline: { fontFamily: 'JetBrains Mono', fontSize: 11, padding: '8px 16px', borderRadius: 4, border: '1px solid #30363d', color: '#58a6ff', textDecoration: 'none' },
  termWrap: { background: '#0d1117', border: '1px solid #30363d', borderRadius: 8, overflow: 'hidden' },
  termHeader: { background: '#161b22', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1px solid #30363d' },
  dot: { width: 10, height: 10, borderRadius: '50%', display: 'inline-block' },
  termTitle: { fontFamily: 'JetBrains Mono', fontSize: 11, color: '#8b949e', marginLeft: 6 },
  termBody: { padding: '1.25rem' },
  cursor: { display: 'inline-block', width: 8, height: 14, background: '#58a6ff', animation: 'blink 1s infinite', verticalAlign: 'middle' },
  section: { padding: '2.5rem 2rem', borderBottom: '1px solid #1e2d3d' },
  sectionHeader: { display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' },
  sectionTag: { fontFamily: 'JetBrains Mono', fontSize: 11, color: '#8b949e' },
  sectionTitle: { fontSize: 16, fontWeight: 500, color: '#e2e8f0' },
  sectionLine: { flex: 1, height: 1, background: '#1e2d3d' },
  pipeline: { display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 0 },
  pipeStep: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 },
  pipeBox: { background: '#0d1117', border: '1px solid #30363d', borderRadius: 6, padding: '8px 14px', fontFamily: 'JetBrains Mono', fontSize: 11, color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' },
  pipeDot: { width: 6, height: 6, borderRadius: '50%', background: '#3fb950' },
  pipeLabel: { fontFamily: 'JetBrains Mono', fontSize: 10, color: '#8b949e' },
  pipeArrow: { fontSize: 14, color: '#30363d', padding: '0 6px', marginBottom: 16 },
  projectsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  projectCard: { background: '#0d1117', border: '1px solid #30363d', borderRadius: 8, padding: '1.25rem', cursor: 'pointer' },
  projectTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' },
  projectIcon: { fontSize: 20, color: '#58a6ff' },
  projectBadge: { fontFamily: 'JetBrains Mono', fontSize: 10, padding: '2px 8px', borderRadius: 20, background: '#1c2128', border: '1px solid #30363d', color: '#3fb950' },
  projectName: { fontSize: 14, fontWeight: 500, color: '#e2e8f0', marginBottom: '0.4rem' },
  projectDesc: { fontSize: 12, color: '#8b949e', lineHeight: 1.5, marginBottom: '0.75rem' },
  tagRow: { display: 'flex', flexWrap: 'wrap', gap: 6 },
  tag: { fontFamily: 'JetBrains Mono', fontSize: 10, padding: '2px 8px', borderRadius: 3, background: '#1c2128', color: '#8b949e', border: '1px solid #21262d' },
  skillsGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' },
  skillGroup: { background: '#0d1117', border: '1px solid #30363d', borderRadius: 6, padding: '1rem' },
  skillGroupTitle: { fontFamily: 'JetBrains Mono', fontSize: 10, color: '#58a6ff', letterSpacing: '0.1em', marginBottom: '0.75rem' },
  skillItem: { display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#8b949e', marginBottom: 6 },
  skillDot: { width: 5, height: 5, borderRadius: '50%', background: '#3fb950', flexShrink: 0 },
  contactRow: { display: 'flex', gap: '1rem', flexWrap: 'wrap' },
  contactItem: { display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'JetBrains Mono', fontSize: 12, color: '#8b949e' },
};