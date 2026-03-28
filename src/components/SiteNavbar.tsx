import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

const SiteNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldShowDarkStyle = !isHomePage || isScrolled;

  const productLinks = [
    { name: "Biochar", path: "/products/biochar" },
    { name: "Light Diesel Oil", path: "/products/ldo" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      shouldShowDarkStyle 
        ? "py-2 bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-100" 
        : "py-4 md:py-6 bg-transparent"
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* --- LOGO AREA --- */}
        <Link to="/" className="flex items-center gap-3 md:gap-5 group">
          <div className="relative">
            {!shouldShowDarkStyle && (
              <div className="absolute inset-0 bg-[#74C69D]/10 blur-2xl rounded-full opacity-60" />
            )}
            <img 
              src={logo} 
              alt="Primetech Logo" 
              className={`relative z-10 transition-all duration-500 object-contain ${
                shouldShowDarkStyle ? "h-8 md:h-12" : "h-10 md:h-20"
              }`}
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-black tracking-tighter leading-none transition-all duration-500 ${
              shouldShowDarkStyle ? "text-[#1B4332] text-base md:text-xl" : "text-white text-lg md:text-2xl"
            }`}>
              PRIMETECH
            </span>
            <span className="text-[#74C69D] text-[7px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase mt-0.5">
              Infra & Energy
            </span>
          </div>
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/" className={`text-sm font-black uppercase tracking-widest hover:text-[#74C69D] ${shouldShowDarkStyle ? "text-[#1B4332]" : "text-white"}`}>
            Home
          </Link>

          {/* NESTED DROPDOWN: "Our Products" */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <button className={`flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-all hover:text-[#74C69D] ${shouldShowDarkStyle || isDropdownOpen ? "text-[#1B4332]" : "text-white"}`}>
              Our Products <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Floating Pop-out Menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden py-4 z-[110]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {productLinks.map((link) => (
                    <Link 
                      key={link.path} 
                      to={link.path} 
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-8 py-3 text-xs font-black text-[#1B4332] hover:bg-gray-50 hover:text-[#74C69D] transition-colors uppercase tracking-widest"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/contact" className={`text-sm font-black uppercase tracking-widest hover:text-[#74C69D] ${shouldShowDarkStyle ? "text-[#1B4332]" : "text-white"}`}>
            Contact Us
          </Link>
          <Link to="/contact" className="bg-[#74C69D] text-[#1B4332] px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 shadow-xl transition-all">
            Get Quote
          </Link>
        </div>

        <button className="lg:hidden text-[#74C69D] p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer with Nested Links */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: "auto" }} 
            exit={{ opacity: 0, height: 0 }} 
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-5">
              <Link to="/" className="text-[#1B4332] font-black uppercase text-sm tracking-widest" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              
              {/* Mobile Nested Section */}
              <div className="flex flex-col gap-3 pl-2">
                <span className="text-[#74C69D] font-black uppercase text-[10px] tracking-[0.3em]">Products</span>
                {productLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className="text-[#1B4332] font-black uppercase text-xs tracking-widest pl-4 border-l-2 border-gray-100" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <Link to="/contact" className="text-[#1B4332] font-black uppercase text-sm tracking-widest" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default SiteNavbar;
