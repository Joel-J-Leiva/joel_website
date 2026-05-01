import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Photography from './pages/Photography';
import Achievements from './pages/Achievements';
import NCyTEChallenge from './pages/NCyTEChallenge';
import DFIRTriage from './pages/DFIRTriage';
import PiHole from './pages/PiHole';
import HomeLab from './pages/HomeLab';
import PhysicalServer from './pages/PhysicalServer';
import NGOThreatIntel from './pages/NGOThreatIntel';
import CyberRadio from './pages/CyberRadio';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/ncyte-career-challenge" element={<NCyTEChallenge />} />
          <Route path="projects/dfir-triage-station" element={<DFIRTriage />} />
          <Route path="projects/pi-hole-dns-filtering" element={<PiHole />} />
          <Route path="projects/home-lab-networking" element={<HomeLab />} />
          <Route path="projects/physical-server-nvr" element={<PhysicalServer />} />
          <Route path="projects/ngo-threat-intel" element={<NGOThreatIntel />} />
          <Route path="projects/cyber-radio" element={<CyberRadio />} />
          <Route path="photography" element={<Photography />} />
          <Route path="achievements" element={<Achievements />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
