import Navbar from './Navbar';
import Footer from './Footer';
import About from './pages/About';
import Overview from './pages/Overview';
import Data from './pages/Data';
import Methods from './pages/Methods';
import Results from './pages/Results';
import PrivacyPolicy from './pages/PrivacyPolicy';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App flex flex-wrap min-h-screen">
        <Navbar />
        <div className="content min-w-full">
          <Routes>
            <Route path="/cs132-taxfax/overview" element={<Overview />}></Route>
            <Route path="/cs132-taxfax/data" element={<Data />}></Route>
            <Route path="/cs132-taxfax/methods" element={<Methods />}></Route>
            <Route path="/cs132-taxfax/results" element={<Results />}></Route>
            <Route path="/cs132-taxfax/about-us" element={<About />}></Route>
            <Route path='cs132-taxfax/privacy-policy' element={<PrivacyPolicy />}></Route>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
