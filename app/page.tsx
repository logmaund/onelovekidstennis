const sessionDates = [
  "June 30",
  "July 2",
  "July 7",
  "July 9",
  "July 14",
  "July 16",
  "July 21",
  "July 23",
  "July 28",
  "July 30",
  "August 4",
  "August 6",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="One Love Kids Tennis home">
          <span className="brand-mark" aria-hidden="true">1</span>
          <span>
            <strong>One Love</strong>
            <small>Kids Tennis</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#programs">Programs</a>
          <a href="#coach">Meet Coach Matt</a>
          <a href="#contact">Contact</a>
          <a className="nav-cta" href="/2026-registration-form.pdf">Registration form</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Summer tennis in Cape May, New Jersey</p>
          <h1>Grow their game.<br /><em>Love every point.</em></h1>
          <p className="hero-intro">
            A joyful youth tennis program where players ages 4–18 build skills,
            confidence, and friendships at the Historic Cape May Tennis Club.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/2026-registration-form.pdf">View registration form</a>
            <a className="button button-secondary" href="#programs">Explore programs</a>
          </div>
          <ul className="quick-facts" aria-label="Program highlights">
            <li><strong>Ages 4–18</strong><span>All experience levels</span></li>
            <li><strong>6 weeks</strong><span>Two clinics each week</span></li>
            <li><strong>PTR certified</strong><span>Professional instruction</span></li>
          </ul>
        </div>
        <div className="court-card" aria-label="Decorative tennis court illustration">
          <div className="court">
            <span className="court-line court-line-one" />
            <span className="court-line court-line-two" />
            <span className="court-line court-line-three" />
            <span className="tennis-ball ball-one" />
            <span className="tennis-ball ball-two" />
          </div>
          <p><span>Play.</span><span>Learn.</span><span>Belong.</span></p>
        </div>
      </section>

      <section className="trust-strip" aria-label="Program location">
        <p>Hosted at</p>
        <strong>Historic Cape May Tennis Club</strong>
        <span>1020 Washington Street · Cape May, NJ</span>
      </section>

      <section className="section programs" id="programs">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Find their court</p>
            <h2>Programs for every young player</h2>
          </div>
          <p>
            From a first swing to more advanced match play, each clinic combines
            purposeful coaching with the fun that keeps kids coming back.
          </p>
        </div>

        <aside className="placeholder-notice">
          <strong>Schedule note</strong>
          <span>The 2026 details below are temporary placeholders. Updated dates and pricing will be posted when confirmed.</span>
        </aside>

        <div className="program-grid">
          <article className="program-card pee-wee">
            <div className="card-number">01</div>
            <p className="card-label">Ages 4–7</p>
            <h3>Pee Wee Clinic</h3>
            <p className="program-time">4:00–5:00 PM</p>
            <p>Play-based instruction introduces movement, coordination, rallying, and court confidence in a supportive group.</p>
            <dl>
              <div><dt>Full session</dt><dd>$280</dd></div>
              <div><dt>Weekly</dt><dd>$60</dd></div>
            </dl>
          </article>

          <article className="program-card junior">
            <div className="card-number">02</div>
            <p className="card-label">Ages 8–18</p>
            <h3>Junior Clinic</h3>
            <p className="program-time">5:00–6:30 PM</p>
            <p>Beginner through advanced players develop technique, point play, strategy, fitness, and a lasting love of the game.</p>
            <dl>
              <div><dt>Full session</dt><dd>$420</dd></div>
              <div><dt>Weekly</dt><dd>$85</dd></div>
            </dl>
          </article>
        </div>

        <div className="schedule-card">
          <div>
            <p className="eyebrow">Placeholder schedule</p>
            <h3>Six weeks. Twelve chances to play.</h3>
            <p>Private hourly lessons and hitting sessions are also available.</p>
          </div>
          <ol className="date-list">
            {sessionDates.map((date, index) => <li key={date}><span>{String(index + 1).padStart(2, "0")}</span>{date}</li>)}
          </ol>
        </div>
      </section>

      <section className="section coach" id="coach">
        <div className="coach-visual" aria-hidden="true">
          <span className="big-one">1</span>
          <p>One game.<br />One community.<br />One love.</p>
        </div>
        <div className="coach-copy">
          <p className="eyebrow">Meet your coach</p>
          <h2>Matt Gilbert</h2>
          <p className="lead">PTR Certified Professional and lifelong student of the game.</p>
          <p>
            Matt began playing tennis at age ten and went on to compete at Harry Hopman&apos;s International Tennis Academy and NCAA Division I tennis at Loyola University Maryland. He later earned his PTR Professional Teaching Certificate and became a teaching professional at Cape May Tennis Club.
          </p>
          <p>
            As the longtime head coach of Middle Township High School boys tennis, Matt has led championship teams and earned Coach of the Year honors. One Love brings that experience to young players through expert instruction, encouragement, and plenty of fun.
          </p>
          <ul className="credentials">
            <li>PTR Certified</li>
            <li>Division I player</li>
            <li>Championship coach</li>
          </ul>
        </div>
      </section>

      <section className="register-band" id="register">
        <div>
          <p className="eyebrow">Space is limited</p>
          <h2>Reserve your player&apos;s spot</h2>
          <p>Download the temporary 2026 form, then print and mail it to Cape May Tennis Club.</p>
        </div>
        <a className="button button-light" href="/2026-registration-form.pdf">Download registration form</a>
      </section>

      <section className="section contact" id="contact">
        <div>
          <p className="eyebrow">Questions? Let&apos;s talk.</p>
          <h2>We&apos;d love to hear from you.</h2>
        </div>
        <div className="contact-grid">
          <a href="tel:+16096025195"><span>Call Matt</span><strong>(609) 602-5195</strong></a>
          <a href="mailto:matthewrgilbert@yahoo.com"><span>Email</span><strong>matthewrgilbert@yahoo.com</strong></a>
          <a href="https://maps.google.com/?q=1020+Washington+Street+Cape+May+NJ+08204"><span>Find us</span><strong>1020 Washington Street<br />Cape May, NJ 08204</strong></a>
        </div>
      </section>

      <footer>
        <a className="brand brand-footer" href="#top">
          <span className="brand-mark" aria-hidden="true">1</span>
          <span><strong>One Love</strong><small>Kids Tennis</small></span>
        </a>
        <p>Summer youth tennis at the Historic Cape May Tennis Club.</p>
        <p>© 2026 One Love Kids Tennis. All rights reserved.</p>
      </footer>
    </main>
  );
}
