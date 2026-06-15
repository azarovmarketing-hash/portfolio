import { Link } from 'react-router-dom'
import { asset } from '../lib/asset.js'
import CaseShell from '../components/CaseShell.jsx'
import { usePageEffects } from '../hooks.js'

export default function CaseDemo() {
  usePageEffects()
  return (
    <CaseShell>
      <section className="case-hero container">
        <div className="case-hero__meta reveal">
          <span className="pill">Case 02</span>
          <span className="pill">B2B</span>
          <span className="pill">Product Design</span>
          <span className="pill">Research</span>
        </div>
        <h1 className="reveal" data-d="1">How I grew sales-team leads <em>40%</em> by redesigning the demo</h1>
        <p className="case-hero__sub reveal" data-d="2">Every theme has a demo — used to preview pages, colors, and layout presets before buying. The problem: for a huge segment of users, the demo was the <em>only</em> thing they ever saw.</p>

        <dl className="case-facts reveal" data-d="2">
          <div><dt>Company</dt><dd>Lotus Themes · B2B</dd></div>
          <div><dt>My role</dt><dd>Research &amp; Product Design</dd></div>
          <div><dt>Surface</dt><dd>Theme demo &amp; control widget</dd></div>
          <div><dt>Headline result</dt><dd>+40% sales-team leads</dd></div>
        </dl>
      </section>

      <figure className="case-cover container reveal">
        <img src={asset('img/d-extensions.png')} alt="The redesigned theme demo with an extensions tab and add-to-cart" />
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
              <div className="block__kicker reveal">The problem</div>
              <div className="reveal" data-d="1">
                <h2>A whole audience the site never reached</h2>
                <p>Not every traffic source lands users on the site with the cart. Marketplace users live entirely inside the demo, without ever touching the website — yet they still need to understand our services and themes. The demo had to do the selling on its own.</p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">My role</div>
              <div className="reveal" data-d="1">
                <h2>What I owned</h2>
                <ul className="list">
                  <li>Research how users actually behave inside the demo</li>
                  <li>Find the problems they run into</li>
                  <li>Redesign the widget used to control the theme</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">Discovery</div>
              <div className="reveal" data-d="1">
                <h2>Following the journey across domains</h2>
                <p>To understand the demo's role in the purchase, we connected <a href="https://dreamdata.io/" target="_blank" rel="noopener noreferrer">DreamData</a>, which unified data across domains so we could trace sessions from first touch all the way to purchase.</p>
                <div className="callout callout--warn">
                  <span className="ic">⚠️</span>
                  <p>Demo visitors came from the Zendesk marketplace. <strong>94% of them never visited the site</strong> — the demo was their only touchpoint with us.</p>
                </div>
              </div>
            </div>
            <figure className="fig reveal">
              <img src={asset('img/d-widget-before.png')} alt="The original theme control widget, covering most of the screen" />
              <figcaption>The original widget — bulky and not very informative.</figcaption>
            </figure>
          </div>

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">Research</div>
              <div className="reveal" data-d="1">
                <h2>What was wrong with the widget</h2>
                <p>To see how people used the widget, I studied behavior through session recordings in <a href="https://www.hotjar.com/" target="_blank" rel="noopener noreferrer">Hotjar</a>. Users didn't understand how to use it, it covered most of the screen, and when toggling settings it was unclear what was actually changing.</p>
                <p>We ran unmoderated tests with clients who'd agreed to interviews after finishing customization projects — and they confirmed the hypothesis. They also noted the widget showed <em>few settings</em>: the product has far more, but the perception of "not much to customize" could be a reason to walk away.</p>
                <div className="callout callout--warn">
                  <span className="ic">⚠️</span>
                  <p>The widget covered the screen, exposed only some settings, made it feel like there were few, and said nothing about our add-on services.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">The bet</div>
              <div className="reveal" data-d="1">
                <h2>Make the demo a touchpoint, not a showcase</h2>
                <p>To reach the segment that only ever sees the demo, we hypothesized it should become a full touchpoint rather than a passive showcase — and we'd sync it with the cart. Then we explored many interface options; each had its issues, but we found a solution for every one.</p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">Navigation</div>
              <div className="reveal" data-d="1">
                <h2>Borrow what users already know</h2>
                <p>We made the control-panel trigger identical to Zendesk's own interface — instantly intuitive, because users already know how it works. We also added page navigation so they can preview how different theme pages look, mirroring Zendesk's navigation.</p>
              </div>
            </div>
            <figure className="fig reveal">
              <img src={asset('img/d-navigation.png')} alt="Demo navigation modeled on the Zendesk interface" />
              <figcaption>Navigation modeled on Zendesk — no learning curve.</figcaption>
            </figure>
          </div>

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">Show, don't list</div>
              <div className="reveal" data-d="1">
                <h2>Sell the result, not the option count</h2>
                <p>The product has so many settings that we can't show them all in the demo. So instead of showing their <em>number</em>, we showed the <em>result</em> — a sped-up GIF of branding being applied in seconds.</p>
              </div>
            </div>
            <figure className="fig reveal">
              <img src={asset('img/d-customization.gif')} alt="Sped-up GIF showing how quickly a theme can be customized" />
              <figcaption>A slice of the GIF — how fast a theme comes together.</figcaption>
            </figure>
          </div>

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">Upsell &amp; support</div>
              <div className="reveal" data-d="1">
                <h2>Extensions and a direct line to sales</h2>
                <p>We added a dedicated tab for add-on functionality, each item shown with a description and an add-to-cart button. Because some are fairly complex, we grouped them into categories by goal.</p>
                <p>We also let users get a consultation right inside the demo via chat with the sales team — so any question about settings or add-ons has an immediate path to a person.</p>
              </div>
            </div>
            <figure className="fig reveal">
              <img src={asset('img/d-extensions.png')} alt="Extensions tab with descriptions and add-to-cart, plus in-demo chat" />
              <figcaption>Add-ons with clear value and a one-click path to cart.</figcaption>
            </figure>
          </div>

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">Validation</div>
              <div className="reveal" data-d="1">
                <h2>Testing old vs. new</h2>
                <p>We tested with clients who agreed to interviews after customization, asking them to compare the old and new versions. They liked the new widget's placement — and were genuinely intrigued by add-on products they hadn't known existed.</p>
              </div>
            </div>
          </div>

          <div className="results reveal">
            <span className="eyebrow">Results</span>
            <h2>After launching the new widget &amp; chat</h2>
            <div className="results__grid">
              <div>
                <div className="results__num"><span className="sym">+</span>40<span className="sym">%</span></div>
                <div className="results__txt">More leads to the sales team, straight from the demo</div>
              </div>
              <div>
                <div className="results__num">94<span className="sym">%</span></div>
                <div className="results__txt">Of demo users were previously unreachable — now they convert in place</div>
              </div>
              <div>
                <div className="results__num">+1</div>
                <div className="results__txt">Entirely new lead source opened from the marketplace segment</div>
              </div>
              <div>
                <div className="results__num">↑ ↑</div>
                <div className="results__txt">Site visits and subsequent purchases both increased</div>
              </div>
            </div>
            <figure className="fig" style={{ marginBottom: 0, marginTop: 28 }}>
              <img src={asset('img/d-results.png')} alt="Growth in sales-team leads after the demo redesign" style={{ borderColor: 'rgba(236,238,241,.18)' }} />
            </figure>
          </div>

        </div>
      </div>

      <div className="container">
        <Link to="/case/sushi" className="next-case reveal">
          <div className="nc-label">Next case — 03</div>
          <div className="nc-title">Search Experience Optimization, +44% orders <span className="arrow">→</span></div>
        </Link>
      </div>
    </CaseShell>
  )
}
