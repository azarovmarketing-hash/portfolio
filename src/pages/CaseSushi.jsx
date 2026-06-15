import { Link } from 'react-router-dom'
import { asset } from '../lib/asset.js'
import CaseShell from '../components/CaseShell.jsx'
import { usePageEffects } from '../hooks.js'

export default function CaseSushi() {
  usePageEffects()
  return (
    <CaseShell>
      <section className="case-hero container">
        <div className="case-hero__meta reveal">
          <span className="pill">Case 03</span>
          <span className="pill">B2C</span>
          <span className="pill">SXO</span>
          <span className="pill">Usability</span>
        </div>
        <h1 className="reveal" data-d="1">How I grew orders <em>44%</em> for an Asian-cuisine chain</h1>
        <p className="case-hero__sub reveal" data-d="2">The client came in for SEO. I ran a UX audit instead — and found where search traffic was quietly leaking out of the funnel. This is Search Experience Optimization: ranking matters, but only if the experience converts.</p>

        <dl className="case-facts reveal" data-d="2">
          <div><dt>Client</dt><dd>Asian-cuisine chain · B2C</dd></div>
          <div><dt>My role</dt><dd>Product Designer · SXO</dd></div>
          <div><dt>Discipline</dt><dd>Search Experience Optimization</dd></div>
          <div><dt>Headline result</dt><dd>+44% orders from search</dd></div>
        </dl>
      </section>

      <figure className="case-cover container reveal">
        <img src={asset('img/s-results.png')} alt="Analytics showing growth in conversion and sales from search" />
      </figure>

      <div className="container">
        <div className="case-body">

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">Overview</div>
              <div className="reveal" data-d="1">
                <h2>SEO got them found. UX got them paid.</h2>
                <p>On this project I worked on <strong>SXO — Search Experience Optimization</strong>. The client originally came for SEO promotion, but I ran a UX audit and found plenty of problems and opportunities to make the interface genuinely easier to use. Better rankings only pay off if the experience that follows actually converts.</p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">Discovery</div>
              <div className="reveal" data-d="1">
                <h2>Where the funnel leaked</h2>
                <p>I mapped the user journey through the funnel. The biggest drop-off was at checkout. After talking with the business, I proposed my own version of the cart — the existing one was full of confusing conditions and data that got in the way of placing an order.</p>
                <p>To pressure-test it, I also ran <strong>5 hallway tests</strong> and surveyed several people I knew who'd actually used the service's delivery.</p>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">Audit findings</div>
              <div className="reveal" data-d="1">
                <h2>What was getting in the way</h2>
                <ul className="list">
                  <li>An inconvenient category page and product cards</li>
                  <li>A minimum order amount existed — yet users could still proceed to checkout</li>
                  <li>Extra, unnecessary steps in the checkout flow</li>
                  <li>Elements sitting too close together in the mobile version</li>
                  <li>Confusing delivery wording — a "within city limits" option that duplicated delivery to any other region</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="block__grid">
              <div className="block__kicker reveal">Solution</div>
              <div className="reveal" data-d="1">
                <h2>What I changed</h2>
                <ol className="steps">
                  <li>Rebuilt the product cards — added the information users needed, made CTAs obvious, and introduced a quantity selector</li>
                  <li>Turned checkout into a clear stepper, added several payment options, and removed the extra steps</li>
                  <li>Ran a UX audit and shipped fixes specifically for the mobile version</li>
                  <li>Fixed the delivery wording and removed elements that made choosing a region harder</li>
                  <li>With the developers, audited and improved load speed — boosting the site's PageSpeed Insights score</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="results reveal">
            <span className="eyebrow">Results</span>
            <h2>Faster, clearer, and far more orders</h2>
            <div className="results__grid">
              <div>
                <div className="results__num"><span className="sym">+</span>44<span className="sym">%</span></div>
                <div className="results__txt">Growth in conversion and sales from search engines</div>
              </div>
              <div>
                <div className="results__num"><span className="sym">+</span>2.5<span className="sym">%</span></div>
                <div className="results__txt">Lift in overall conversion across the site</div>
              </div>
              <div>
                <div className="results__num"><span className="sym">+</span>10k</div>
                <div className="results__txt">Additional orders per month from that conversion lift</div>
              </div>
              <div>
                <div className="results__num">↑</div>
                <div className="results__txt">Faster load times and a higher PageSpeed Insights score</div>
              </div>
            </div>
          </div>

          <div className="fig-row reveal">
            <figure className="fig"><img src={asset('img/s-conversion.png')} alt="Weekly conversion rising after the redesign" /><figcaption>Conversion climbing week over week after launch.</figcaption></figure>
            <figure className="fig"><img src={asset('img/s-orders.png')} alt="Order volume growth from search" /><figcaption>Order volume from search, trending up.</figcaption></figure>
          </div>

        </div>
      </div>

      <div className="container">
        <Link to="/case/zendesk" className="next-case reveal">
          <div className="nc-label">Back to the start — Case 01</div>
          <div className="nc-title">A Zendesk theme design system <span className="arrow">→</span></div>
        </Link>
      </div>
    </CaseShell>
  )
}
