# Sergey Azarov — Senior Product Designer

Source code for my portfolio site — built with **Vite + React 19**, React Router, and a custom design system (Clash Display + Inter + JetBrains Mono on a cobalt-blue palette).

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # preview the prod build locally
```

## Project structure

```
index.html                Entry point: fonts, SEO, root mount
public/
  img/                    All case-study images and visuals
src/
  main.jsx                React mount + BrowserRouter
  App.jsx                 Routes + dev-only Agentation toolbar
  hooks.js                Scroll-to-top + reveal/counter/progress effects
  styles/style.css        Design system: tokens, type, layout, all components
  components/
    Nav.jsx               Top navigation
    Footer.jsx            "Let's work together" footer
    CaseShell.jsx         Wrapper used by every case page
  pages/
    Home.jsx              Landing — hero, stats, work, experience, about
    CaseZendesk.jsx       Case 01 — Zendesk theme design system (+22%)
    CaseDemo.jsx          Case 02 — Demo redesign (+40% leads)
    CaseSushi.jsx         Case 03 — SXO for food delivery (+44%)
```

## Design tokens

All colors, fonts, spacing and radii are CSS variables in the `:root` block at the top of `src/styles/style.css`. Tweak `--accent`, `--bg`, `--ink` etc. to re-skin the whole site.

## In-browser feedback (dev only)

[Agentation](https://agentation.com) is mounted in development mode (`App.jsx`). Click the toolbar, select an element, write a comment — the connected MCP-server (`.mcp.json`) forwards annotations back to the coding agent.

## Notes on imagery

A few analytics screenshots in the Sushi case contain the original product UI in Russian — that text is baked into the screenshots and would need to be re-exported to translate.
