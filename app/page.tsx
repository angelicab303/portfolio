import Header from '@/components/ui/Header'
import Hero from '@/components/sections/Hero'
import ProjectSection from '@/components/ProjectSection'
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
      <div className="section-divider"></div>
      
      {/* Work Experience Section */}
      <div id="work">
        <WorkSection />
      </div>
      
      {/* Full-width section divider */}
      <div className="section-divider"></div>
      
      <div className="main-content">
        <ProjectSection />
        
        {/* Hobbies Section */}
        <div id="projects" className="work-header">
          <h1>Personal Projects & Hobbies</h1>
        </div>
        
        <HobbySection />
        
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