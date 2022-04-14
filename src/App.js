// css
import './App.css';

// pages
import { Home } from './pages/Home/Home.js';
import { Mortgage } from './pages/Mortgage/Mortgage';
import { Auto } from './pages/Auto/Auto';

// components
import { Nav } from './components/Nav/Nav.js';
import { Footer } from './components/Footer/Footer.js';

// react-router
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' exact element={<Home />} />

        <Route path='/mortgage' element={<Mortgage />} />

        <Route path='/auto' element={<Auto />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
