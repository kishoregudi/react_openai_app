import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../styles/App.css';
import ChatQueryForm from '../components/chatQueryForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import Home from '../components/home';
import Features from '../components/features';
import Contact from '../components/contact';

export default function App() {
  const handleFormSubmit = (formData: { textAreaValue: string }) => {
    console.log('Form submitted with textarea value:', formData.textAreaValue);
    // Perform any logic when the form is submitted
  };
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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className=''>Azure Open AI + Vite + React</h1>
      <ChatQueryForm onSubmit={handleFormSubmit} />
      <br />
    </div>
  )
}