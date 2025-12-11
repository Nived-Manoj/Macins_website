import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import MacinsInteriorFitout from './components/MacinsInteriorFitout ';
import MacinsEnergySolutions from './components/MacinsEnergySolutions';
import EVChargerPage from './components/EVChargerPage';
import FabricationPage from './components/FabricationPage';
import MacinsRealEstate from './components/MacinsRealEstate';
import CivilWorksPage from './components/CivilWorksPage';
import ThankYouScreen from './components/ThankYouScreen';

// Create a HomePage component with all your sections
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FounderSection />
      <Services />
      <Portfolio />
      <Sustainability />
      <Testimonials />
      <Contact />
    </>
  );
}

// Create a Layout component that conditionally renders Footer
function Layout() {
  const location = useLocation();
  const hideFooter = location.pathname === '/thankyou';

  return (
    <div className="min-h-screen bg-white">
       {!hideFooter &&  <Navbar />}
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/#contact" element={<HomePage />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/bms-retrofit" element={<BMSRetroPage />} />
        <Route path="/mep_service" element={<MEPServicesPage />} />
        <Route path="/fitout" element={<MacinsInteriorFitout />} />
        <Route path="/energysolutions" element={<MacinsEnergySolutions />} />
        <Route path="/evcharge" element={<EVChargerPage />} />
        <Route path="/fabrication" element={<FabricationPage />} />
        <Route path="/realestate" element={<MacinsRealEstate />} />
        <Route path="/civilworks" element={<CivilWorksPage />} />
        <Route path="/thankyou" element={<ThankYouScreen
          onGoHome={() => window.location.href = '/'}
          whatsappNumber="+971554560554"
        />} />
      </Routes>
      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;