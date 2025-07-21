// pages/index.js
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Connect from '../components/Connect';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* 🔒 Fixed background image (works on ALL devices) */}
      <div className="fixed inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Background"
          className="w-full h-full object-cover object-[75%]"
        />
      </div>

      {/* 🔳 Overlay to darken the image if needed */}
      <div className="fixed inset-0 z-10 bg-black/30" />

      {/* 🔼 Actual page content, scrolls above the fixed background */}
      <div className="relative z-20">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Connect />
        <Footer />
      </div>
    </div>
  );
}


