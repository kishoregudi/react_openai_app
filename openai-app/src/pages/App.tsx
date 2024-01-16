import '../styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import Home from '../components/home';
import Features from '../components/features';
import Contact from '../components/contact';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <br />
    </div>
  )
}