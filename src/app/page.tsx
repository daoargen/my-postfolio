import Header from "@/components/Header"
import About from "@/sections/About"
import Projects from "@/sections/Projects"
import Skills from "@/sections/Skills"

import Certifications from "@/sections/Certifications"
import Contact from "@/sections/Contact"
import Footer from "@/components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
