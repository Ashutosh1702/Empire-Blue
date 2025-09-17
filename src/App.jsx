import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/NavBar";
import HomePage from "./components/Home/HomePage";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
   useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true, // whether animation should happen only once
    });
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'about':
        return <About />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
