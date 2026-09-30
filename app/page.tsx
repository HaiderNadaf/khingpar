import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Bar from "./components/Bar";
import Gallery from "./components/Gallery";
import Amenities from "./components/Amenities";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Menu />
        <Bar />
        <Gallery />
        <Amenities />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
