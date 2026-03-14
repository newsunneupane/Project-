import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; 
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop"; 

function App(){
  return(
    <div className="bg-white text-black min-h-screen">
      <Navbar/>

      {/* Hero Section */}
      <section id="hero">
        <Hero/>
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <Pricing/>
      </section>

      {/* Features Section */}
      <section id="features">
        <Features/>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials/>
      </section>

      <Footer/>
      <BackToTop/>
    </div>
  )
}

export default App;