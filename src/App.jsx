import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
         <Hero />
           <Products />
           <Features />
             <Footer />
             <section id="home"></section>
<section id="products"></section>
<section id="features"></section>
<section id="contact"></section>

    
    </div>
  );
}

export default App;

