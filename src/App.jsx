import { Routes, Route } from 'react-router-dom'
import { Agentation } from 'agentation'
import Home from './pages/Home.jsx'
import CaseZendesk from './pages/CaseZendesk.jsx'
import CaseDemo from './pages/CaseDemo.jsx'
import CaseSushi from './pages/CaseSushi.jsx'
import { useScrollToTop } from './hooks.js'

export default function App() {
  useScrollToTop()
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case/zendesk" element={<CaseZendesk />} />
        <Route path="/case/demo" element={<CaseDemo />} />
        <Route path="/case/sushi" element={<CaseSushi />} />
      </Routes>
      {import.meta.env.DEV && <Agentation />}
    </>
  )
}
