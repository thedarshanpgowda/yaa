import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/Landingpage';
import About from './components/About';
import Contact from './components/Contact';
import ProjectPage from './components/Project';
import Testimonials from './components/Testimonals';
import ProjectShowcase from './components/ProjectShowcase';
import Services from './components/Services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/testimonals' element={<Testimonials />} />
        <Route path='/showProjects' element={<ProjectShowcase />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects/:id' element={<ProjectPage />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
