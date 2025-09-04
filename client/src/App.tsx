import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Products";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import "./App.css";

function App() {
  const handleSignIn = (): void => {
    console.log("Sign In clicked");
    alert("Sign In functionality coming soon!");
  };

  return (
    <>
      {/* Navigation Header */}
      <Navbar onSignInClick={handleSignIn} />

      {/* Page Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;