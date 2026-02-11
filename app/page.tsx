import Navbar from "./components/layout/Navbar";
import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import Products from "./components/homepage/Products";
import WhyChoose from "./components/homepage/WhyChoose";
import Testimonials from "./components/homepage/Testimonials";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyChoose />
      <Testimonials />
      <Footer />
    </main>
  );
}
