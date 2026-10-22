import CopyEmail from "@/components/CopyEmail";
import HoursOverlap from "@/components/HoursOverlap";
import MotionLayer from "@/components/MotionLayer";
import SiteHeader from "@/components/SiteHeader";
import { EXPERIENCE, OPEN_SOURCE, OTHER_CLIENTS, PERSON, PROJECTS, SKILLS, STATS } from "@/data/site";

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" className="arrow">
      <path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a href="#open-source" className="skip">
        Skip to work
      </a>
      <MotionLayer />
      <SiteHeader cv={PERSON.cv} />

      <main id="top">
        <section className="hero container">
          <p className="status" data-reveal>
            <span className="status-dot" aria-hidden="true" />
            Available for remote roles
          </p>
          <h1 className="hero-title" data-reveal>
            Ghaith Alkawadri
          </h1>
          <p className="hero-headline" data-reveal>
            {PERSON.headline}
          </p>
          <p className="hero-intro" data-reveal>
            {PERSON.intro}
          </p>
          <div className="hero-actions" data-reveal>
            <a className="btn" href={`mailto:${PERSON.email}`}>
              Get in touch
            </a>
            <a className="btn btn-ghost" href="#open-source">
              See my work
            </a>
          </div>

          <dl className="stats" data-reveal>
            {STATS.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="open-source" className="section container" aria-labelledby="oss-title">
          <div className="section-head" data-reveal>
            <h2 id="oss-title">Open source</h2>
            <p>Linux desktop software I write and maintain in my own time.</p>
          </div>
          <div className="oss-grid">
            {OPEN_SOURCE.map((o) => (
              <a key={o.name} className="oss-card" href={o.url} target="_blank" rel="noreferrer" data-reveal>
                <span className="oss-top">
                  <h3>{o.name}</h3>
                  {o.stars ? (
                    <span className="oss-stars">
                      ★ {o.stars}
                      {o.downloads ? ` · ${o.downloads} downloads` : ""}
                    </span>
                  ) : (
                    <Arrow />
                  )}
                </span>
                <p>{o.summary}</p>
                <ul className="tags">
                  {o.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </section>

        <section id="work" className="section container" aria-labelledby="work-title">
          <div className="section-head" data-reveal>
            <h2 id="work-title">Client work</h2>
            <p>Some of the client projects I&apos;ve worked on as a developer. Design by the clients and their agencies.</p>
          </div>

          <div className="projects">
            {PROJECTS.map((p) => (
              <article key={p.id} className="project" data-reveal>
                <div className="project-text">
                  <p className="project-meta">
                    {p.role}
                    {p.years ? ` · ${p.years}` : ""}
                  </p>
                  <h3>{p.name}</h3>
                  <p className="project-summary">{p.summary}</p>
                  <ul className="tags" aria-label="Stack">
                    {p.stack.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <a className="text-link" href={p.url} target="_blank" rel="noreferrer">
                    {p.domain} <Arrow />
                  </a>
                </div>

                <a className="browser" href={p.url} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true">
                  <span className="browser-bar">
                    <span className="browser-dots">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className="browser-url">{p.domain}</span>
                  </span>
                  <span className="browser-view">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt="" width={960} height={p.imageHeight} loading="lazy" />
                  </span>
                </a>
              </article>
            ))}
          </div>

          <p className="more-clients" data-reveal>
            Also WordPress work for other clients, including {OTHER_CLIENTS.join(", ")}.
          </p>
        </section>

        <section id="experience" className="section container" aria-labelledby="exp-title">
          <div className="section-head" data-reveal>
            <h2 id="exp-title">Experience</h2>
            <a className="text-link" href={PERSON.cv} download>
              Full CV (PDF) <Arrow />
            </a>
          </div>
          <ol className="timeline">
            {EXPERIENCE.map((e) => (
              <li key={e.role} data-reveal>
                <p className="timeline-years">{e.years}</p>
                <div>
                  <h3>{e.role}</h3>
                  <p className="timeline-org">{e.org}</p>
                  <ul>
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <div className="skills" data-reveal>
            {SKILLS.map((s) => (
              <div key={s.group}>
                <h3>{s.group}</h3>
                <ul className="tags">
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section container contact" aria-labelledby="contact-title">
          <div className="contact-main" data-reveal>
            <h2 id="contact-title">Let&apos;s work together</h2>
            <p>
              I&apos;m looking for a remote developer role, on the web or on Linux and Python tooling. The quickest way
              to reach me is email.
            </p>
            <a className="contact-email" href={`mailto:${PERSON.email}`}>
              {PERSON.email}
            </a>
            <div className="hero-actions">
              <a className="btn" href={`mailto:${PERSON.email}`}>
                Send an email
              </a>
              <CopyEmail email={PERSON.email} />
              <a className="btn btn-ghost" href={PERSON.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div className="hours-card" data-reveal>
            <h3>Working hours</h3>
            <HoursOverlap />
          </div>
        </section>
      </main>

      <footer className="footer container">
        <p>© 2026 {PERSON.name}</p>
        <p>{PERSON.base}</p>
      </footer>
    </>
  );
}
