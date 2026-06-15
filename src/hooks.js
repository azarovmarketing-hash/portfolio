import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scroll-to-top on route change; supports #anchors.
 */
export function useScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
}

/**
 * Re-run reveal observer + counter animations + nav scrolled state
 * whenever the route changes (because new DOM nodes appear).
 */
export function usePageEffects() {
  const { pathname } = useLocation()
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // --- nav scrolled + reading progress ---
    const nav = document.querySelector('.nav')
    const bar = document.querySelector('.progress')
    const onScroll = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 24)
      if (bar) {
        const h = document.documentElement
        const max = h.scrollHeight - h.clientHeight
        bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%'
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    // --- reveal on scroll ---
    const revealEls = document.querySelectorAll('.reveal, .line-rise')
    let io
    if (reduce || !('IntersectionObserver' in window)) {
      revealEls.forEach(el => el.classList.add('in'))
    } else {
      io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
      revealEls.forEach(el => io.observe(el))
    }

    // --- count-up numbers ---
    function animateCount(el) {
      const target = parseFloat(el.getAttribute('data-count'))
      const dec = (el.getAttribute('data-dec') | 0)
      const dur = 1500
      let start = null
      function step(ts) {
        if (!start) start = ts
        const p = Math.min((ts - start) / dur, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        const val = target * eased
        el.textContent = dec ? val.toFixed(dec) : Math.round(val).toString()
        if (p < 1) requestAnimationFrame(step)
        else el.textContent = dec ? target.toFixed(dec) : target.toString()
      }
      requestAnimationFrame(step)
    }
    const counters = document.querySelectorAll('[data-count]')
    let cio
    if (reduce || !('IntersectionObserver' in window)) {
      counters.forEach(el => {
        const t = parseFloat(el.getAttribute('data-count'))
        const d = (el.getAttribute('data-dec') | 0)
        el.textContent = d ? t.toFixed(d) : t.toString()
      })
    } else {
      cio = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            animateCount(e.target)
            cio.unobserve(e.target)
          }
        })
      }, { threshold: 0.6 })
      counters.forEach(el => cio.observe(el))
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (io) io.disconnect()
      if (cio) cio.disconnect()
    }
  }, [pathname])
}
