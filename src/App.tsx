import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Sustainability from './components/Sustainability';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {/* <Stats /> */}
      <About />
      <Services />
      <Portfolio />
      <Projects/>
      <Sustainability />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
