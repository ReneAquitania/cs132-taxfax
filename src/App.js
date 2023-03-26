import Navbar from './Navbar';
import About from './About';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/cs132-taxfax" element={<About />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
