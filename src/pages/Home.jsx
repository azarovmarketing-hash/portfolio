import { Link } from 'react-router-dom'
import { asset } from '../lib/asset.js'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { usePageEffects } from '../hooks.js'

export default function Home() {
  usePageEffects()
  return (
    <>
      <Nav />
      <main id="top">

        <section className="hero container">
          <div className="hero__top reveal">
            <span className="eyebrow">Senior Product Designer · SaaS &amp; Complex UI</span>
            <span className="hero__avail"><span className="ad" />Open to new opportunities</span>
          </div>

          <h1 className="display">
            <span className="ln line-rise"><span>Sergey</span></span>
            <span className="ln line-rise" data-d="1"><span><em>Azarov</em></span></span>
          </h1>

          <div className="hero__grid">
            <p className="hero__bio reveal" data-d="1">
              I design <b>SaaS products and complex interfaces</b> — and I make them
              move the numbers. Nine years growing
              <b> revenue, conversion, and leads</b>, with a UX-analyst's eye for metrics
              and a background in Search Experience Optimization.
            </p>
            <div className="hero__actions reveal" data-d="2">
              <a href="#work" className="btn btn--accent">View selected work <span className="arrow">↗</span></a>
              <div className="hero__contacts">
                <a className="pill" href="https://t.me/tripledes" target="_blank" rel="noopener noreferrer">Telegram</a>
                <a className="pill" href="mailto:azarovmarketing@gmail.com">Email</a>
              </div>
            </div>
          </div>
        </section>

        <div className="marquee reveal" aria-hidden="true">
          <div className="marquee__track">
            {Array.from({ length: 2 }).flatMap((_, i) => [
              <span className="marquee__item" key={`pd${i}`}>Product Design</span>,
              <span className="marquee__item" key={`ds${i}`}>Design Systems</span>,
              <span className="marquee__item" key={`ux${i}`}>UX Research</span>,
              <span className="marquee__item" key={`sa${i}`}>SaaS</span>,
              <span className="marquee__item" key={`sx${i}`}>Search Experience Optimization</span>,
              <span className="marquee__item" key={`us${i}`}>Usability Testing</span>,
              <span className="marquee__item" key={`dl${i}`}>Design Leadership</span>,
            ])}
          </div>
        </div>

        <section className="section--tight">
          <div className="container">
            <div className="stats reveal">
              <div className="stat">
                <div className="stat__num"><span data-count="9">0</span></div>
                <div className="stat__label">Years in product &amp; UX design</div>
              </div>
              <div className="stat">
                <div className="stat__num"><span className="sym">+</span><span data-count="22">0</span><span className="sym">%</span></div>
                <div className="stat__label">Auto-sales from a flagship-product redesign</div>
              </div>
              <div className="stat">
                <div className="stat__num"><span className="sym">+</span><span data-count="40">0</span><span className="sym">%</span></div>
                <div className="stat__label">Sales-team leads after a demo redesign</div>
              </div>
              <div className="stat">
                <div className="stat__num"><span className="sym">+</span><span data-count="44">0</span><span className="sym">%</span></div>
                <div className="stat__label">Orders from search via SXO &amp; UX audit</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="container">
            <div className="sec-head">
              <div className="reveal">
                <span className="eyebrow">01 — Selected work</span>
                <h2 style={{ marginTop: 18 }}>Case studies where design moved the metric.</h2>
              </div>
              <p className="sec-head__aside reveal" data-d="1">Three projects spanning B2B SaaS and B2C — from a design system built under platform constraints to conversion work driven by research.</p>
            </div>

            <div className="work">

              <Link to="/case/zendesk" className="work-card reveal">
                <div className="work-card__media">
                  <span className="work-card__chip"><span className="up">+22%</span> auto-sales</span>
                  <img src={asset('img/z-theme-card.png')} alt="Zendesk theme product page redesign" />
                </div>
                <div className="work-card__body">
                  <span className="work-card__idx">CASE 01 / Lotus Themes · B2B SaaS</span>
                  <h3 className="work-card__title">A Zendesk theme design system, built from scratch</h3>
                  <p className="work-card__desc">Redesigned the flagship product and created a token system where colors adapt to a single setting — cutting settings from 25 to 20 while making them far more flexible.</p>
                  <div className="work-card__tags">
                    <span className="tag-mini">Design System</span>
                    <span className="tag-mini">Product Design</span>
                    <span className="tag-mini">Usability</span>
                  </div>
                  <span className="work-card__link">Read the case <span className="arrow">↗</span></span>
                </div>
              </Link>

              <Link to="/case/demo" className="work-card reveal">
                <div className="work-card__media">
                  <span className="work-card__chip"><span className="up">+40%</span> sales leads</span>
                  <img src={asset('img/d-extensions.png')} alt="Zendesk theme demo redesign" />
                </div>
                <div className="work-card__body">
                  <span className="work-card__idx">CASE 02 / Lotus Themes · B2B</span>
                  <h3 className="work-card__title">Turning a product demo into a real sales channel</h3>
                  <p className="work-card__desc">94% of marketplace users never reached the site. I rebuilt the demo widget into a full touchpoint with cart sync, add-ons, and live chat — opening a new lead source.</p>
                  <div className="work-card__tags">
                    <span className="tag-mini">B2B</span>
                    <span className="tag-mini">Product Design</span>
                    <span className="tag-mini">Research</span>
                  </div>
                  <span className="work-card__link">Read the case <span className="arrow">↗</span></span>
                </div>
              </Link>

              <Link to="/case/sushi" className="work-card reveal">
                <div className="work-card__media">
                  <span className="work-card__chip"><span className="up">+44%</span> orders</span>
                  <img src={asset('img/s-conversion.png')} alt="Asian cuisine delivery conversion growth" />
                </div>
                <div className="work-card__body">
                  <span className="work-card__idx">CASE 03 / Asian-cuisine chain · B2C</span>
                  <h3 className="work-card__title">Search Experience Optimization for food delivery</h3>
                  <p className="work-card__desc">Came in for SEO, found the real problem in UX. A funnel audit and checkout redesign lifted overall conversion by 2.5% — about +10,000 orders a month.</p>
                  <div className="work-card__tags">
                    <span className="tag-mini">B2C</span>
                    <span className="tag-mini">SXO</span>
                    <span className="tag-mini">Usability</span>
                  </div>
                  <span className="work-card__link">Read the case <span className="arrow">↗</span></span>
                </div>
              </Link>

            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <div className="sec-head">
              <div className="reveal">
                <span className="eyebrow">02 — Experience</span>
                <h2 style={{ marginTop: 18 }}>Nine years, four teams, one focus.</h2>
              </div>
              <p className="sec-head__aside reveal" data-d="1">From front-end and web design to leading a product-design team in a B2B SaaS CRM.</p>
            </div>

            <div className="exp">

              <div className="exp__row reveal">
                <div className="exp__period">May 2024 — <span className="now">Present</span></div>
                <div className="exp__main">
                  <h3><a href="https://www.kommo.com/" target="_blank" rel="noopener noreferrer">Kommo</a></h3>
                  <div className="exp__role">Lead Product Designer</div>
                  <p className="exp__desc">Leading product design at a CRM platform serving entrepreneurs across the US and Latin America. I run a team of 5 designers and ship AI features.</p>
                  <ul className="exp__bullets">
                    <li>Shipped a <a href="https://www.kommo.com/support/getting-started/new-left-menu/" target="_blank" rel="noopener noreferrer"><b>new version of the navigation menu</b></a> for the CRM</li>
                    <li>Working on the <a href="https://storybook.kommo.com/?path=/docs/getting-started-getting-started--docs" target="_blank" rel="noopener noreferrer"><b>design-system redesign</b></a></li>
                    <li>Own the <b>user onboarding experience</b> end-to-end</li>
                  </ul>
                </div>
              </div>

              <div className="exp__row reveal">
                <div className="exp__period">Apr 2021 — Apr 2024</div>
                <div className="exp__main">
                  <h3><a href="https://www.lotusthemes.com/" target="_blank" rel="noopener noreferrer">Lotus Themes</a></h3>
                  <div className="exp__role">UX/UI Product Designer · Jan 2022 — Apr 2024</div>
                  <div className="exp__role">User Experience Analyst · Apr 2021 — Jan 2022</div>
                  <p className="exp__desc">Built layouts and design systems in Figma and generated growth hypotheses for the products — after starting as the team's UX analyst, studying user behavior and validating design decisions with data.</p>
                  <ul className="exp__bullets">
                    <li>Grew <b>auto-sales by 22%</b> with a flagship-product redesign</li>
                    <li>Built a <b>Zendesk theme design system</b> from scratch</li>
                    <li>Grew <b>sales-team leads by 40%</b> with a demo redesign</li>
                  </ul>
                </div>
              </div>

              <div className="exp__row reveal">
                <div className="exp__period">Jan 2017 — Apr 2021</div>
                <div className="exp__main">
                  <h3>WEBELEMENT</h3>
                  <div className="exp__role">Web Designer</div>
                  <p className="exp__desc">Designed websites and interfaces end-to-end at a digital agency, working directly with business owners, the development team, and clients to find solutions that improved the product.</p>
                  <ul className="exp__bullets">
                    <li>Supervised the build process against the mockups</li>
                    <li>Ran user-behavior analytics</li>
                    <li>Optimized site conversion rates</li>
                  </ul>
                </div>
              </div>

              <div className="exp__row reveal">
                <div className="exp__period">Feb 2015 — Sep 2015</div>
                <div className="exp__main">
                  <h3>Ember Tek</h3>
                  <div className="exp__role">Frontend Developer · Part-time</div>
                  <p className="exp__desc">Interned alongside my university studies — developed website designs and built landing pages and online stores.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <span className="eyebrow reveal">03 — Beyond work</span>
            <div className="beyond" style={{ marginTop: 36 }}>
              <div className="reveal">
                <h2>Design doesn't clock&nbsp;out.</h2>
                <p>In my free time I build design pet-projects, mentor juniors and help them <em>get</em> UX, and run freelance usability audits with concrete recommendations for improving interfaces.</p>
                <p>I hosted a design hackathon in Batumi — teams took apps from idea to final mockups. With mixed experience levels, we shipped two app prototypes in six hours.</p>
                <p>I also love writing music on synthesizers, digging into their interfaces, and catching inspiration from them.</p>
              </div>
              <figure className="beyond__media reveal" data-d="1">
                <img src={asset('img/hackathon.png')} alt="Presenting an app at the Batumi design hackathon" />
                <figcaption className="beyond__cap">Presenting our app for finding the right crowd for a party — Batumi hackathon.</figcaption>
              </figure>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
