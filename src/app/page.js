import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PartnersSection from '../components/PartnersSection'; // New import
import ProgramsSection from '../components/ProgramsSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <PartnersSection /> {/* The new trust banner goes here */}
      <ProgramsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}