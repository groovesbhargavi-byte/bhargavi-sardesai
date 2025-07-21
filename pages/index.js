// pages/index.js
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Connect from '../components/Connect';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <div
      className="
        min-h-screen w-full
        bg-no-repeat
        bg-cover
        bg-[position:70%_30%]
        bg-fixed
      "
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="bg-black/20">
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

