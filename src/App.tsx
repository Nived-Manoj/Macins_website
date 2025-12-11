import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import DuplicateContact from './components/DuplicateContact';
import FounderSection from './components/FounderSection';
import PropertyDetail from './components/PropertyDetail'; 
import BMSRetroPage from "./components/BMSRetrofitPage";
import MEPServicesPage from './components/MEPServicesPage ';
// Create a HomePage component with all your sections
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FounderSection/>
      <Services />
      <Portfolio />
      <Sustainability />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/#contact" element={<HomePage />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/bms-retrofit" element={<BMSRetroPage />} />
           <Route path="/mep_service" element={<MEPServicesPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;