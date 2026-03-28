import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Vikram Singh",
    role: "Agricultural Business Owner, Haryana",
    text: "Primetech's biochar has completely transformed our soil quality. Crop yields have improved by over 30% and we've significantly reduced our fertilizer costs. Truly a game-changing product.",
    rating: 5,
  },
  {
    name: "Anil Mehta",
    role: "Industrial Plant Manager, Rajasthan",
    text: "We switched to Primetech's Light Diesel Oil for our boiler operations and the results have been outstanding. Cleaner combustion, better efficiency, and noticeably reduced maintenance cycles.",
    rating: 5,
  },
  {
    name: "Deepak Choudhary",
    role: "Construction Firm Director, Punjab",
    text: "Reliable delivery, consistent quality, and excellent customer support. Primetech provides industrial-grade LDO that keeps our heavy equipment running at peak performance.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const verticalList = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Branding & Impact */}
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#1B4332] mb-6 leading-tight">
              Trusted by <br />
              <span className="text-[#74C69D]">Industry Leaders</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Businesses across India rely on our premium biochar and LDO products to power their operations sustainably.
            </p>
            {/* KEY LINE */}
            <div className="p-6 bg-[#F0F4F0] border-l-8 border-[#1B4332] rounded-r-2xl shadow-sm">
              <p className="text-[#1B4332] font-bold italic text-lg">
                "Sustainable energy solutions for a better tomorrow."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Vertical Scroll */}
        <div className="md:w-1/2 h-[500px] relative overflow-hidden mask-fade-edges">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10" />

          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex flex-col gap-6"
          >
            {verticalList.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative group transition-all hover:border-[#74C69D]/50"
              >
                <Quote size={40} className="text-[#74C69D]/10 absolute top-4 right-6 group-hover:text-[#74C69D]/30 transition-colors" />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-[#74C69D] text-[#74C69D]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{t.text}"</p>
                <div>
                  <p className="font-black text-[#1B4332]">{t.name}</p>
                  <p className="text-sm text-[#74C69D] font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;