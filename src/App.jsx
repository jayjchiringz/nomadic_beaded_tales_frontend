import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';
import Footer from './components/Footer';
import HeroCarousel from './components/HeroCarousel';
import ProductGrid from './components/ProductGrid';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function Home() {
  return (
    <>
      <HeroCarousel />
      <About />
      <ProductGrid />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="font-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminLogin onLogin={() => window.location.href = "/dashboard"} />} />
          <Route
            path="/dashboard"
            element={
              localStorage.getItem("admin_logged_in") ? (
                <AdminDashboard />
              ) : (
                <AdminLogin onLogin={() => window.location.href = "/dashboard"} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
