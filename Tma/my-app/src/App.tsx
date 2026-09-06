import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Index } from './pages/Index';
import { OurStory } from './pages/Our-Story';
import { Programs } from './pages/Programs';
import { Services } from './pages/Services';
import { Events } from './pages/Events';
import { News } from './pages/News';
import { Contact } from './pages/Contact';
import { Mentors } from './pages/Mentors';
import './App.css';
import './Rounded.css';
import './HomeRestore.css';
import './HeroSlider.css';
import './HeroSliderScale.css';
import './MegaMenuDesign.css';
import './Founder.css';
import './FooterSpacing.css';
import './MentorGrid.css';
import './AcademyBento.css';
import './BentoComplete.css';

export default function App() {
  return <BrowserRouter><div className="app-container"><Navbar /><main className="main-content"><Routes>
    <Route path="/" element={<Index />} /><Route path="/our-story" element={<OurStory />} />
    <Route path="/programs" element={<Programs />} /><Route path="/services" element={<Services />} />
    <Route path="/our-mentors" element={<Mentors />} /><Route path="/events" element={<Events />} />
    <Route path="/news" element={<News />} /><Route path="/contact" element={<Contact />} />
    <Route path="*" element={<Index />} />
  </Routes></main><Footer /></div></BrowserRouter>;
}
