import { Link } from 'react-router-dom'
import { asset } from '../lib/asset.js'
import CaseShell from '../components/CaseShell.jsx'
import { usePageEffects } from '../hooks.js'

export default function CaseZendesk() {
  usePageEffects()
  return (
    <CaseShell>
      <section className="case-hero container">
        <div className="case-hero__meta reveal">
          <span className="pill">Case 01</span>
          <span className="pill">Design System</span>
          <span className="pill">Product Design</span>
          <span className="pill">Usability</span>
        </div>
        <h1 className="reveal" data-d="1">How I grew auto-sales <em>22%</em> and built a Zendesk theme design system</h1>
        <p className="case-hero__sub reveal" data-d="2">The product lets clients brand their Zendesk help center fast — no coding, no developers. My job: redesign the themes, simplify the settings, unite design with engineering, and take it all the way to release.</p>

        <dl className="case-facts reveal" data-d="2">
          <div><dt>Company</dt><dd>Lotus Themes · B2B</dd></div>
          <div><dt>My role</dt><dd>Product Designer &amp; Design System</dd></div>
          <div><dt>Platform</dt><dd>Zendesk help-center themes</dd></div>
          <div><dt>Headline result</dt><dd>+22% revenue from auto-sales</dd></div>
        </dl>
      </section>

      <figure className="case-cover container reveal">
        <img src={asset('img/z-design-system.png')} alt="The Zendesk theme design system: darken/lighten logic, spacing scale, typography and surfaces" />
      </figure>

      <div className="container">
        <div className="case-body">

          <div className="block">
            <div className="callout callout--accent reveal">
              <span className="ic">💡</span>
              <p><strong>Lotus Themes</strong> builds and maintains help-center themes on the Zendesk platform. Clients include <strong>Google, Netflix, Hootsuite, NBA, and Rockstar Games</strong>.</p>
            </div>
          </div>

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">My role</div>
              <div className="reveal" data-d="1">
                <h2>What I owned</h2>
                <ol className="steps">
                  <li>Research the audience's needs and prioritize product features</li>
                  <li>Shape a shared product vision with the CTO and engineering team</li>
                  <li>Understand Zendesk's constraints and build a design system from scratch</li>
                  <li>Run usability testing of the theme settings in the admin panel</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">The problem</div>
              <div className="reveal" data-d="1">
                <h2>Why a redesign was overdue</h2>
                <ul className="list">
                  <li>The product had fallen behind competitors in design and functionality</li>
                  <li>Settings lacked logic and weren't obvious to users</li>
                  <li>You couldn't customize every parameter and element of the theme</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">Discovery</div>
              <div className="reveal" data-d="1">
                <h2>Listening to clients who never talk back</h2>
                <p>The company has two client types: those who buy template solutions and those who need complex customization. We focus on the first.</p>
                <div className="callout callout--warn">
                  <span className="ic">⚠️</span>
                  <p><strong>Template clients rarely engage after purchase</strong> — they don't want to spend time on interviews. We solved this with <strong>reverse design</strong>: we collected every client help center from the past year and analyzed what they'd changed in the templates.</p>
                </div>
                <p>I also reviewed existing interviews with clients from different countries, the most common support requests, and the most-visited help-center pages — the ones people open after purchase to set things up themselves.</p>
              </div>
            </div>
            <figure className="fig bleed reveal">
              <img src={asset('img/z-discovery.jpg')} alt="Discovery research materials and analysis" />
              <figcaption>Reverse-design research — analyzing real client help centers.</figcaption>
            </figure>
          </div>

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">Competitor research</div>
              <div className="reveal" data-d="1">
                <h2>Finding work that isn't public</h2>
                <p>To learn which competitor features our clients actually needed, I had to find competitors' work first — and none of it is publicly available.</p>
                <div className="callout callout--accent">
                  <span className="ic">🔎</span>
                  <p>With my <strong>SEO background</strong> I plugged in <strong>Ahrefs</strong> and collected backlinks to competitors' clients — every template carried a "designed by" credit link, so the backlink trail led straight to live examples. :)</p>
                </div>
                <p>We found <em>lost clients</em> — people who considered us but chose a competitor — and used reverse design to form hypotheses about why. From all of it, we built a prioritized list of customizations and features to bring into the new products.</p>
              </div>
            </div>
            <figure className="fig reveal">
              <img src={asset('img/z-competitors.png')} alt="Competitor research, lost clients, and the prioritized feature list" />
              <figcaption>Competitor research, lost clients, and the feature list with prioritization.</figcaption>
            </figure>
          </div>

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">Design system</div>
              <div className="reveal" data-d="1">
                <h2>A system where color is a variable, not a value</h2>
                <p>The hard part: colors can't be static — they have to shift based on the single color a client picks in settings. At the same time, we had to minimize the number of settings to keep customization simple.</p>
                <div className="callout callout--warn">
                  <span className="ic">⚠️</span>
                  <p>Every variable in Zendesk matters to developers for customization and performance — so the design system had to use <strong>as few tokens as possible</strong>.</p>
                </div>
              </div>
            </div>

            <h3 style={{ maxWidth: 1000, marginInline: 'auto' }}>Static &amp; user tokens</h3>
            <p style={{ maxWidth: '62ch' }}>To separate the variables exposed in settings from the ones used internally, we created two token types. Some can be changed in settings to recolor elements; the others stay static for elements that should never change color.</p>
            <figure className="fig reveal">
              <img src={asset('img/z-tokens.png')} alt="Static and user-editable tokens in the design system" />
              <figcaption>Two token types — user-editable vs. static.</figcaption>
            </figure>

            <h3 style={{ maxWidth: 1000, marginInline: 'auto' }}>Elements that adjust automatically</h3>
            <p style={{ maxWidth: '62ch' }}>So users don't have to set each parameter by hand, we created tokens generated automatically from a single source value — for example, the corner radius for inner and outer elements derived from one input.</p>
            <figure className="fig reveal">
              <img src={asset('img/z-auto-tokens.png')} alt="Tokens that auto-generate from a single source value" />
              <figcaption>One input, many derived values — less to configure.</figcaption>
            </figure>
          </div>

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">Flexibility</div>
              <div className="reveal" data-d="1">
                <h2>Variability built into the layout</h2>
                <p>To make the template more flexible, we added content-offset settings that let clients give the theme exactly the look they want, plus alternate block displays for even more variation — all without exposing more complexity than necessary.</p>
              </div>
            </div>
            <figure className="fig reveal">
              <img src={asset('img/z-layout.png')} alt="Layout variability options in the theme" />
              <figcaption>Content offsets and alternate block displays create range from one system.</figcaption>
            </figure>
          </div>

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">Guardrails</div>
              <div className="reveal" data-d="1">
                <h2>Protecting users from themselves</h2>
                <p>We listed the tokens that can heavily affect appearance and added logic to handle values that are too large or too small.</p>
                <p>For example: if a user sets a 100px corner radius, the result still caps at 24px so elements don't go fully round; menus can't exceed 8px, and so on. We applied the same guardrails to typography and color — e.g. a base font size that's too large, or a transparent color.</p>
              </div>
            </div>
            <figure className="fig reveal">
              <img src={asset('img/z-errors.png')} alt="Guardrail logic clamping extreme setting values" />
              <figcaption>Smart clamps keep any combination of settings looking intentional.</figcaption>
            </figure>
          </div>

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">Delivery</div>
              <div className="reveal" data-d="1">
                <h2>Design audit &amp; usability testing</h2>
                <p>To keep the build matching the mockups — so clients got the ease of use we intended — I set up a design-review process. We split the work into small steps and turned each into a Story in Jira. After developers shipped a Story, I checked it against the mockups, then it went to QA for functional testing.</p>
                <p>For usability testing, we gave users a test template plus images of the intended result, then scored them on how closely they matched the source and how long setup took.</p>
              </div>
            </div>
            <figure className="fig reveal">
              <img src={asset('img/z-settings.png')} alt="The theme settings panel tested for usability" />
              <figcaption>The settings we tested for clarity and ease of use.</figcaption>
            </figure>
            <p style={{ maxWidth: '62ch' }}>Based on feedback, we refined some setting descriptions and removed an extra layer of abstraction for the background — users didn't understand what it controlled, and it complicated customization. Instead of a third layer, we used a fixed gray that passes contrast checks on both light and dark backgrounds, with nothing to configure.</p>
          </div>

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">Go-to-market</div>
              <div className="reveal" data-d="1">
                <h2>Telling the story on the site</h2>
                <p>We designed a new theme card on the website built around the new, simpler settings — showing users just how easily they can customize.</p>
              </div>
            </div>
            <figure className="fig reveal">
              <img src={asset('img/z-theme-card.png')} alt="Redesigned theme product page focused on simple customization" />
              <figcaption>The redesigned product page, leading with simplicity.</figcaption>
            </figure>
            <p style={{ maxWidth: '62ch' }}>After launch, the card's heatmap improved — users viewed more information and engaged with it more. Add-to-cart sessions, and then leads, increased.</p>
            <div className="fig-row reveal">
              <figure className="fig"><img src={asset('img/z-scroll.png')} alt="Scroll/heatmap improvement after launch" /><figcaption>Scroll &amp; engagement on the card improved.</figcaption></figure>
              <figure className="fig"><img src={asset('img/z-leads.png')} alt="Leads growth after launch" /><figcaption>Add-to-cart sessions and leads went up.</figcaption></figure>
            </div>
          </div>

          <div className="results reveal">
            <span className="eyebrow">Results</span>
            <h2>What the redesign delivered</h2>
            <div className="results__grid">
              <div>
                <div className="results__num"><span className="sym">+</span>22<span className="sym">%</span></div>
                <div className="results__txt">Growth in revenue from the product's auto-sales</div>
              </div>
              <div>
                <div className="results__num">25 → 20</div>
                <div className="results__txt">Fewer settings — while making customization far more flexible</div>
              </div>
              <div>
                <div className="results__num"><span className="sym">−</span>15<span className="sym">%</span></div>
                <div className="results__txt">Less variable usage with greater flexibility — a win for developers</div>
              </div>
              <div>
                <div className="results__num">0 → 1</div>
                <div className="results__txt">Design system built from scratch; flagship redesigned idea-to-release</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container">
        <Link to="/case/demo" className="next-case reveal">
          <div className="nc-label">Next case — 02</div>
          <div className="nc-title">Turning a demo into a sales channel <span className="arrow">→</span></div>
        </Link>
      </div>
    </CaseShell>
  )
}
