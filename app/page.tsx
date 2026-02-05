import Header from '@/components/ui/Header'
import Hero from '@/components/sections/Hero'
import ProjectSection from '@/components/sections/ProjectSection'
import HobbySection from '@/components/sections/HobbySection'
import Contact from '@/components/sections/Contact'
import Intro from '@/components/sections/Intro'
import WorkSection from '@/components/sections/WorkSection'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <div id="about">
        <Intro />
      </div>
      
      {/* Full-width section divider */}
      <div className="w-[80vw] h-px mb-[30px] mx-auto transition-colors duration-300" style={{ backgroundColor: 'var(--accent-border)' }} />
      
      {/* Work Experience Section */}
      <div id="work">
        <WorkSection />
      </div>
      
      {/* Full-width section divider */}
      <div className="section-divider"></div>
      
      {/* Projects Section */}
      <div id="projects">
        <ProjectSection />
      </div>
      
      {/* Full-width section divider */}
      <div className="section-divider"></div>
      
      <div className="main-content">
        {/* Gallery Section - Add your gallery component here */}
        <div id="gallery" className="work-header">
          <h1>Gallery</h1>
        </div>
        
        {/* Contact Section */}
        <Contact />
      </div>
    </main>
  )
}