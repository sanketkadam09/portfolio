import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Achievements from './components/Achievements.jsx'
import DeveloperProfiles from './components/DeveloperProfiles.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('sk-theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch (e) {
    /* storage unavailable */
  }
  return 'dark'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('sk-theme', theme)
    } catch (e) {
      /* storage unavailable */
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <DeveloperProfiles />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
