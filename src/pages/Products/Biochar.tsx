import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, Leaf, TrendingUp, FlaskConical, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import productImage from "@/assets/biocharproduct.png";
import processImage from "@/assets/biocharprocess.jpeg";
import soilImage from "@/assets/biocharsoil.jpeg";
import marketImage from "@/assets/biocharchart.png";

const Biochar = () => {
  const features = [
    "Carbon-negative material — sequesters CO₂ for centuries",
    "Improves soil fertility and water retention",
    "Reduces dependency on synthetic fertilizers",
    "Enhances crop yield by up to 30%",
    "Produced from sustainable organic feedstocks",
    "Compliant with global ESG and sustainability standards",
  ];

  return (
    <div className="min-h-screen bg-white">
      <SiteNavbar />
      <main className="pt-24 md:pt-40 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          
          <Link to="/" className="inline-flex items-center gap-2 text-[#74C69D] font-black uppercase text-[10px] mb-6 md:mb-10 hover:gap-4 transition-all">
            <ArrowLeft size={16} /> Back to home
          </Link>

          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            <div className="w-full lg:w-1/2 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl h-60 md:h-[500px] lg:h-[600px] order-1">
              <img src={productImage} alt="Premium Biochar Product" className="w-full h-full object-cover" />
            </div>

            <div className="w-full lg:w-1/2 order-2">
              <h1 className="text-3xl md:text-7xl font-black text-[#1B4332] uppercase tracking-tighter mb-6 leading-none">
                Biochar
              </h1>
              <p className="text-gray-500 text-sm md:text-xl leading-relaxed mb-8 border-l-4 border-[#74C69D] pl-4 italic">
                A carbon-rich, porous material produced through the thermochemical decomposition of organic biomass in an oxygen-limited environment — one of the most powerful tools for carbon removal and sustainable agriculture.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <CheckCircle className="text-[#74C69D] shrink-0 mt-0.5" size={18} />
                    <span className="text-[#1B4332] font-bold text-xs md:text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="w-full sm:w-auto text-center inline-block bg-[#1B4332] text-white px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#74C69D] transition-all shadow-xl">
                Get Quotation
              </Link>
            </div>
          </div>

          {/* What is Biochar */}
          <section className="mt-20 md:mt-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="text-[#74C69D]" size={28} />
                  <h2 className="text-2xl md:text-4xl font-black text-[#1B4332] tracking-tighter">What is Biochar?</h2>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  Biochar is a stable, carbon-rich material created through <strong>pyrolysis</strong> — the thermal decomposition of organic matter at temperatures between 300–700°C in the near-absence of oxygen. Unlike ordinary charcoal, biochar is specifically engineered for environmental and agricultural applications.
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  When applied to soil, biochar acts as a powerful amendment that enhances nutrient retention, improves water-holding capacity, and promotes beneficial microbial activity. Its highly porous structure creates an ideal habitat for soil microorganisms, leading to healthier root systems and increased crop productivity.
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Most importantly, biochar locks atmospheric carbon into a stable solid form that persists in soil for <strong>hundreds to thousands of years</strong>, making it one of the most scalable and permanent carbon dioxide removal (CDR) technologies available today. This positions biochar at the forefront of climate change mitigation strategies worldwide.
                </p>
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-xl h-60 md:h-[400px]">
                <img src={soilImage} alt="Biochar Enriched Soil" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>

          {/* Production Process */}
          <section className="mt-20 md:mt-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-[2rem] overflow-hidden shadow-xl h-60 md:h-[400px]">
                <img src={processImage} alt="Biochar Pyrolysis Process" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <FlaskConical className="text-[#74C69D]" size={28} />
                  <h2 className="text-2xl md:text-4xl font-black text-[#1B4332] tracking-tighter">Production Process</h2>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  Our biochar is manufactured using <strong>advanced pyrolysis technology</strong> — a thermochemical conversion process that heats organic biomass to high temperatures in an oxygen-depleted environment. This carefully controlled process breaks down complex organic molecules into three primary outputs: solid biochar, bio-oil, and syngas.
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  The resulting biochar retains approximately <strong>50% of the original carbon</strong> content in a highly stable, aromatic form that resists biological and chemical degradation. By varying the feedstock source and pyrolysis conditions (temperature, heating rate, residence time), we engineer biochar with specific properties tailored to different applications — from agriculture to environmental remediation.
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Our production facilities maintain strict quality control protocols, ensuring every batch meets consistency standards for carbon content, porosity, pH, and ash content. The process is energy-efficient, with syngas and bio-oil byproducts captured and utilized to fuel the pyrolysis system itself, creating a near-closed-loop production cycle.
                </p>
              </div>
            </div>
          </section>

          {/* Market Overview */}
          <section className="mt-20 md:mt-32">
            <div className="text-center mb-10">
              <div className="flex items-center gap-3 justify-center mb-4">
                <TrendingUp className="text-[#74C69D]" size={28} />
                <h2 className="text-2xl md:text-4xl font-black text-[#1B4332] tracking-tighter">Biochar Market Overview</h2>
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                The global biochar market has experienced remarkable growth, expanding from approximately <strong>$600 million</strong> to a projected <strong>multi-billion dollar industry</strong> within the coming years. This surge is fueled by increasing corporate investment in carbon removal technologies, growing demand for sustainable agricultural inputs, and the rising importance of ESG (Environmental, Social, and Governance) compliance across industries.
              </p>
            </div>
            <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1B4332]/10">
              <img src={marketImage} alt="Biochar Market Growth Projection Data" className="w-full h-auto object-contain bg-white" />
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-[#F0F4F0] p-6 rounded-2xl text-center">
                <h4 className="text-2xl font-black text-[#1B4332]">$600M+</h4>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Current Market Size</p>
              </div>
              <div className="bg-[#F0F4F0] p-6 rounded-2xl text-center">
                <h4 className="text-2xl font-black text-[#1B4332]">15%+ CAGR</h4>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Projected Growth Rate</p>
              </div>
              <div className="bg-[#F0F4F0] p-6 rounded-2xl text-center">
                <h4 className="text-2xl font-black text-[#1B4332]">100+ Years</h4>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Carbon Storage Duration</p>
              </div>
            </div>
          </section>

          {/* Feedstocks */}
          <section className="mt-20 md:mt-32 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Sprout className="text-[#74C69D]" size={28} />
              <h2 className="text-2xl md:text-4xl font-black text-[#1B4332] tracking-tighter">Feedstocks We Process</h2>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-3xl">
              The quality and characteristics of biochar are directly influenced by the feedstock used. We source and process a wide range of organic materials to produce application-specific biochar grades:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Wood Residues", items: "Wood chips, sawdust, bark, forestry trimmings, lumber mill waste" },
                { title: "Agricultural Waste", items: "Rice husk, sugarcane bagasse, wheat straw, corn stover, cotton stalks" },
                { title: "Organic Biomass", items: "Green waste, composting byproducts, municipal organic waste, algal biomass" },
                { title: "Nut Shells & Husks", items: "Coconut shells, almond husks, cashew shells, peanut hulls, palm kernel shells" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="text-lg font-black text-[#1B4332] mb-3">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.items}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Biochar;
