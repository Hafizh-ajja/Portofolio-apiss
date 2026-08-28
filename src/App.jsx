import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TornDivider from './components/TornDivider'
import { navLinks, marqueeItems } from './data/nav'

export default function App() {
  return (
    <>
      <Marquee items={marqueeItems} />
      <Navbar links={navLinks} />

      <Hero photoSrc="/public/assets/ex-pp.png"/>
      <TornDivider />

      <About />
      <TornDivider />

      <Skills />
      <TornDivider />

      <Projects />
      <TornDivider />

      <Contact />
      <Footer />
    </>
  )
}
