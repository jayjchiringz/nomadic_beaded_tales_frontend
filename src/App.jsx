/*import Hero from './components/Hero';*/
import About from './components/About';
import Footer from './components/Footer';
import HeroCarousel from './components/HeroCarousel';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="font-sans">
      <HeroCarousel />
      <About />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;
