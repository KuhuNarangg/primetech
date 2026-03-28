import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero.png";

const slides = [
  { title: "Powering a Sustainable Future", accent: ["Sustainable", "Future"], desc: "Premium Biochar and Light Diesel Oil solutions engineered for industry, agriculture, and environmental impact." },
  { title: "Carbon Negative Innovation", accent: ["Carbon", "Negative"], desc: "Advanced pyrolysis-derived biochar that locks carbon for centuries — driving measurable climate action." },
  { title: "Industrial Energy Excellence", accent: ["Industrial", "Excellence"], desc: "High-performance Light Diesel Oil for reliable power generation, machinery, and industrial heating systems." }
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
    exit: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } }
  };

  const wordVars: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, y: -15, filter: "blur(8px)", transition: { duration: 0.4 } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1B4332]">
      <motion.div initial={{ scale: 1.25 }} animate={{ scale: 1 }} transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#1B4332]/95 z-10" />
        <img src={heroImage} alt="Biochar and Energy Solutions" className="w-full h-full object-cover" loading="lazy" />
      </motion.div>

      {/* pt-32 on mobile, pt-48 on desktop */}
      <div className="relative z-20 container mx-auto px-6 text-center pt-32 md:pt-48 pb-16">
        <AnimatePresence mode="wait">
          <div key={index}>
            <motion.h1 
              variants={containerVars} initial="hidden" animate="visible" exit="exit" 
              className="text-3xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8 leading-tight tracking-tighter drop-shadow-2xl"
            >
              {slides[index].title.split(" ").map((word, i) => (
                <motion.span key={i} variants={wordVars} className={`inline-block mr-2 md:mr-5 ${slides[index].accent.includes(word) ? "text-[#74C69D]" : ""}`}>
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p className="text-sm md:text-2xl text-gray-100 max-w-4xl mx-auto mb-10 md:mb-14 font-medium leading-relaxed drop-shadow-lg">
              {slides[index].desc}
            </motion.p>
          </div>
        </AnimatePresence>

        <motion.div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-20">
          <Link to="/products" className="group bg-[#74C69D] text-[#1B4332] font-black px-8 md:px-12 py-3.5 md:py-5 rounded-full text-base md:text-xl shadow-2xl transition-all flex items-center justify-center gap-2">
            Explore Products <ArrowRight size={20} />
          </Link>
          <Link to="/contact" className="border-2 border-white/40 text-white backdrop-blur-md font-bold px-8 md:px-12 py-3.5 md:py-5 rounded-full text-base md:text-xl transition-all">
            Get in Touch
          </Link>
        </motion.div>

        {/* TAGLINE */}
        <motion.div className="mt-8 md:mt-12 flex flex-col items-center">
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 md:px-10 py-3 md:py-4 rounded-full border border-white/10 shadow-lg">
            <ShieldCheck className="text-[#74C69D]" size={18} />
            <p className="text-[#74C69D] text-[9px] md:text-base font-black uppercase tracking-[0.2em] md:tracking-[0.5em] text-center">
              Sustainable energy solutions for a better tomorrow
            </p>
          </div>
          <div className="mt-6 h-10 w-[1px] bg-gradient-to-b from-[#74C69D]/40 to-transparent shadow-glow" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
