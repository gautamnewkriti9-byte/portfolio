import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Leadership from '@/components/sections/Leadership'
import WhyHireMe from '@/components/sections/WhyHireMe'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="relative">
      {/* Global ambient background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[100px]" />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Leadership />
      <WhyHireMe />
      <Contact />
      <Footer />
    </main>
  )
}
