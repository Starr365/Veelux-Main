import Navbar from "./components/layout/Navbar";
import Hero from "./components/homepage/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <Navbar />
      <Hero />
    </main>
  );
}
