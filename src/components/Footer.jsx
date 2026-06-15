export default function Footer() {
  return (
    <footer className="foot" id="contact">
      <div className="container" style={{ paddingTop: 'clamp(60px,8vw,110px)' }}>
        <span className="eyebrow reveal">Let's work together</span>
        <h2 className="foot__cta reveal" data-d="1">Have a product<br />worth <em>getting right?</em></h2>
        <div className="foot__contacts reveal" data-d="2">
          <a href="mailto:azarovmarketing@gmail.com" className="is-primary">azarovmarketing@gmail.com <span>↗</span></a>
          <a href="https://t.me/tripledes" target="_blank" rel="noopener noreferrer">Telegram <span>↗</span></a>
        </div>
        <div className="foot__bottom">
          <span>© {new Date().getFullYear()} Sergey Azarov — Senior Product Designer</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
