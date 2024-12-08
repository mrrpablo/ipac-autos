import { Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import FeaturedCars from './components/FeaturedCars';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import MercedesGear from './components/MercedesGear';
import Loader from './../src/components/Loader';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process (e.g., fetching data or waiting for assets)
    const fakeLoad = setTimeout(() => {
      setLoading(false); // Stop loading after simulated delay
    }, 2000);

    return () => clearTimeout(fakeLoad); // Cleanup on unmount
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen bg-[#071A2B]'>
        <Loader />
      </div>
    );
  }
  return (
    <div className='bg-[#071A2B] text-white font-bricolage'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/featured-cars' element={<FeaturedCars />} />
        <Route path='/mercedes-gear' element={<MercedesGear />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
