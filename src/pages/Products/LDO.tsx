import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, Flame, Droplets, Settings, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import productImage from "@/assets/dieseloilproduct.png";
import industryImage from "@/assets/dieseloilindustry.png";
import heroImage from "@/assets/herodieseloil.png";

const LDO = () => {
  const features = [
    "High cetane number for efficient ignition",
    "Low sulphur content for cleaner emissions",
    "Low viscosity for smooth fuel delivery",
    "Excellent lubricity for reduced engine wear",
    "Superior thermal stability under load",
    "Cost-effective industrial fuel solution",
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
              <img src={productImage} alt="Light Diesel Oil Product" className="w-full h-full object-cover" loading="lazy" />
            </div>

            <div className="w-full lg:w-1/2 order-2">
              <h1 className="text-3xl md:text-7xl font-black text-[#1B4332] uppercase tracking-tighter mb-6 leading-none">
                Light Diesel Oil
              </h1>
              <p className="text-gray-500 text-sm md:text-xl leading-relaxed mb-8 border-l-4 border-[#74C69D] pl-4 italic">
                A refined petroleum product derived from crude oil distillation, composed of medium hydrocarbon chains including alkanes, cycloalkanes, and aromatics — engineered for reliable industrial heat and power generation.
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

          {/* Types of LDO */}
          <section className="mt-20 md:mt-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Droplets className="text-[#74C69D]" size={28} />
                  <h2 className="text-2xl md:text-4xl font-black text-[#1B4332] tracking-tighter">Types of LDO</h2>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  Light Diesel Oil is available in two primary grades, each suited for different industrial requirements and budget considerations:
                </p>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="text-xl font-black text-[#1B4332] mb-2">Black LDO</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Contains higher sulphur content and is the more <strong>cost-effective option</strong> for industrial applications where emission standards are less stringent. Commonly used in heavy industrial boilers, brick kilns, and furnaces where raw heating power is the primary requirement. Its darker appearance comes from residual carbon compounds retained during the refining process.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="text-xl font-black text-[#1B4332] mb-2">Yellow LDO</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      A <strong>premium-grade fuel</strong> with significantly lower sulphur content, resulting in cleaner combustion and reduced emissions. While priced higher than Black LDO, it offers superior performance, less equipment wear, and compliance with stricter environmental regulations. Ideal for applications where clean burning and equipment longevity are priorities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-xl h-60 md:h-[400px]">
                <img src={heroImage} alt="Light Diesel Oil Drums" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </section>

          {/* Properties & Benefits */}
          <section className="mt-20 md:mt-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-[2rem] overflow-hidden shadow-xl h-60 md:h-[400px]">
                <img src={industryImage} alt="LDO Industrial Applications" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="text-[#74C69D]" size={28} />
                  <h2 className="text-2xl md:text-4xl font-black text-[#1B4332] tracking-tighter">Properties & Benefits</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-black text-[#1B4332] mb-1">Key Properties</h4>
                    <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
                      <li className="flex gap-2"><CheckCircle size={14} className="text-[#74C69D] shrink-0 mt-1" /> <strong>High Cetane Number</strong> — ensures rapid ignition and smooth combustion in diesel engines and burners</li>
                      <li className="flex gap-2"><CheckCircle size={14} className="text-[#74C69D] shrink-0 mt-1" /> <strong>Low Sulfur Content</strong> — minimizes harmful SOx emissions and acid rain contribution</li>
                      <li className="flex gap-2"><CheckCircle size={14} className="text-[#74C69D] shrink-0 mt-1" /> <strong>Low Viscosity</strong> — enables efficient fuel atomization and consistent flow through fuel systems</li>
                      <li className="flex gap-2"><CheckCircle size={14} className="text-[#74C69D] shrink-0 mt-1" /> <strong>Good Lubricity</strong> — protects fuel injection components and extends equipment service life</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-[#1B4332] mb-1 mt-4">Performance Benefits</h4>
                    <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
                      <li className="flex gap-2"><CheckCircle size={14} className="text-[#74C69D] shrink-0 mt-1" /> Cleaner combustion with significantly reduced particulate emissions</li>
                      <li className="flex gap-2"><CheckCircle size={14} className="text-[#74C69D] shrink-0 mt-1" /> Superior fuel efficiency translating to lower operational costs</li>
                      <li className="flex gap-2"><CheckCircle size={14} className="text-[#74C69D] shrink-0 mt-1" /> Reduced engine wear and extended maintenance intervals</li>
                      <li className="flex gap-2"><CheckCircle size={14} className="text-[#74C69D] shrink-0 mt-1" /> Improved overall equipment performance and reliability under load</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Applications & Uses */}
          <section className="mt-20 md:mt-32 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Truck className="text-[#74C69D]" size={28} />
              <h2 className="text-2xl md:text-4xl font-black text-[#1B4332] tracking-tighter">Applications & Uses</h2>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-3xl">
              Light Diesel Oil is a versatile fuel deployed across a wide spectrum of industrial, agricultural, and construction applications. Its reliability and cost-effectiveness make it a preferred choice for operations requiring consistent energy output.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Industrial Boilers & Furnaces", desc: "Primary fuel for large-scale industrial heating systems, ceramic kilns, and thermic fluid heaters used in manufacturing." },
                { title: "Power Generators", desc: "Reliable fuel for standby and continuous-duty diesel generators in factories, commercial buildings, and remote installations." },
                { title: "Construction Equipment", desc: "Powers heavy earth-moving machinery, concrete mixers, cranes, and construction-site generators for uninterrupted project execution." },
                { title: "Agricultural Machinery", desc: "Fuels tractors, irrigation pump sets, harvesters, and other farm equipment critical for large-scale agricultural operations." },
                { title: "Mining Equipment", desc: "Dependable energy source for drilling rigs, haul trucks, excavators, and processing equipment in mining operations." },
                { title: "Low RPM & Stationary Engines", desc: "Ideal for low-speed marine engines, irrigation pump sets, and industrial stationary power units requiring steady, efficient combustion." },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="text-lg font-black text-[#1B4332] mb-3">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
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

export default LDO;
