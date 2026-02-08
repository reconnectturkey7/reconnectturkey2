import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { StickyCTA } from './components/layout/StickyCTA';
import { Home } from './pages/Home';
import { FreeAnalysis } from './pages/FreeAnalysis';
import { Services } from './pages/Services';
import { Process } from './pages/Process';
import { LandDevelopment } from './pages/LandDevelopment';
import { Contractors } from './pages/Contractors';
import { DemoReports } from './pages/DemoReports';
import { FAQ } from './pages/FAQ';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { KVKK } from './pages/KVKK';
import { AnalysisConfirmation } from './pages/AnalysisConfirmation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-navy-900 text-foreground flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ucretsiz-on-analiz" element={<FreeAnalysis />} />
            <Route path="/hizmetler" element={<Services />} />
            <Route path="/surec" element={<Process />} />
            <Route path="/arsa-kat-karsiligi" element={<LandDevelopment />} />
            <Route path="/muteahhitler" element={<Contractors />} />
            <Route path="/ornek-raporlar" element={<DemoReports />} />
            <Route path="/sss" element={<FAQ />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/gizlilik" element={<Privacy />} />
            <Route path="/kullanim-kosullari" element={<Terms />} />
            <Route path="/kvkk" element={<KVKK />} />
            <Route path="/analiz-onay" element={<AnalysisConfirmation />} />
          </Routes>
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </Router>
  );
}

export default App;
