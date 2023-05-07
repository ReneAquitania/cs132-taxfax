import Navbar from './Navbar';
import Footer from './Footer';
import About from './pages/About';
import Overview from './pages/Overview';
import Data from './pages/Data';
import Methods from './pages/Methods';
import Results from './pages/Results';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App flex flex-wrap min-h-screen">
        <Navbar />
        <div className="content min-w-full">
          <Routes>
            <Route path="/overview" element={<Overview />}></Route>
            <Route path="/data" element={<Data />}></Route>
            <Route path="/methods" element={<Methods />}></Route>
            <Route path="/results" element={<Results />}></Route>
            <Route path="/about-us" element={<About />}></Route>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
