import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/Landingpage';
import About from './components/About';
import Contact from './components/Contact';
import ProjectPage from './components/Project';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects/:id' element={<ProjectPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
