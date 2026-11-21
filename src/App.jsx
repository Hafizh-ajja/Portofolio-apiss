import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TornDivider from './components/TornDivider'
import ScrollProgress from './components/ScrollProgress'
import IntroLoader from './components/IntroLoader'
import { navLinks, marqueeItems, footerMarqueeItems } from './data/nav'

export default function App() {
  return (
    <>
      <div className="bg-atmosphere" aria-hidden="true" />
      <IntroLoader />
      <ScrollProgress />
      <Marquee items={marqueeItems} />
      <Navbar links={navLinks} />

      <Hero photoSrc="/assets/me.jpeg" />
      <TornDivider />

      <About />
      <TornDivider />

      <Skills />
      <TornDivider />

      <Certificates />
      <TornDivider />

      <Projects />
      <TornDivider />

      <Contact />
      <Marquee items={footerMarqueeItems} reverse alt />
      <Footer />
    </>
  )
}
