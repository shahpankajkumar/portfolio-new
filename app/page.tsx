import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import Services from '@/components/sections/services';
import Testimonials from '@/components/sections/testimonials';
import Blog from '@/components/sections/blog';
import Contact from '@/components/sections/contact';
import CallToAction from '@/components/sections/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Blog />
      <CallToAction />
      <Contact />
    </>
  );
}