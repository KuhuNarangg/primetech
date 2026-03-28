import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Leaf, Flame, ArrowRight } from "lucide-react";

import biocharImg from "@/assets/biocharproduct.png";
import ldoImg from "@/assets/dieseloilproduct.png";

const products = [
  {
    id: "biochar",
    path: "/products/biochar",
    title: "Biochar",
    image: biocharImg,
    desc: "Carbon-negative biochar produced through advanced pyrolysis — enhancing soil health, sequestering carbon, and driving sustainable agriculture.",
    icon: <Leaf className="text-[#1B4332]" />,
    features: ["Carbon sequestration", "Soil enrichment", "Water retention", "Reduced fertilizer use"]
  },
  {
    id: "ldo",
    path: "/products/ldo",
    title: "Light Diesel Oil",
    image: ldoImg,
    desc: "High-performance LDO engineered for industrial heating, power generation, and heavy machinery — delivering cleaner combustion and superior efficiency.",
    icon: <Flame className="text-[#1B4332]" />,
    features: ["High cetane number", "Low sulphur content", "Cleaner combustion", "Better fuel efficiency"]
  },
];

const ProductSection = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-black text-[#1B4332] uppercase tracking-tighter leading-tight">
            Our Products
          </h2>
          <div className="w-16 md:w-24 h-1.5 bg-[#74C69D] mx-auto mt-4 rounded-full" />
        </div>

        {/* Responsive Grid */}
        <div className="flex flex-col gap-16 md:gap-24">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-8 md:gap-12 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* IMAGE AREA */}
              <div className="w-full lg:w-1/2 h-60 sm:h-80 md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative group">
                  <img 
                    loading="lazy"
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/5" />
              </div>

              {/* INFO AREA */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    {React.cloneElement(product.icon as React.ReactElement, { size: 30 })}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black text-[#1B4332] uppercase tracking-tighter">
                    {product.title}
                  </h3>
                </div>
                
                <p className="text-gray-500 text-sm md:text-lg mb-6 leading-relaxed italic border-l-4 border-[#74C69D] pl-4">
                  {product.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-[#74C69D] shrink-0 mt-0.5" />
                      <span className="text-[#1B4332] font-bold text-xs md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile-Friendly Button */}
                <Link 
                  to={product.path}
                  className="w-full sm:w-auto text-center group inline-flex items-center justify-center gap-3 bg-[#1B4332] text-white px-8 md:px-10 py-4 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-[#74C69D] hover:text-[#1B4332] transition-all shadow-xl"
                >
                  View More Details 
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
