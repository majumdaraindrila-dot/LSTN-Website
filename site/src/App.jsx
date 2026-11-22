import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Community from './pages/Community'
import Careers from './pages/Careers'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import { Privacy, Imprint } from './pages/Legal'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="community" element={<Community />} />
        <Route path="careers" element={<Careers />} />
        <Route path="partners" element={<Partners />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="imprint" element={<Imprint />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
