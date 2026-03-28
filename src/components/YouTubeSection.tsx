import React from "react";
import { TrendingUp, Globe, Award } from "lucide-react";

const YouTubeSection = () => {
  return (
    <section className="py-20 bg-[#F0F4F0]">
      <div className="container mx-auto px-4 text-center">
        <div className="section-marker mb-6 inline-block">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1B4332] mb-4">
            Biochar Market Overview
          </h2>
        </div>
        
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
          The global biochar market is projected to grow from <strong>~$600 million</strong> to a <strong>multi-billion dollar industry</strong>, driven by corporate sustainability investments and global carbon removal demand. <br />
          <span className="font-bold text-[#2D6A4F] mt-4 block text-xl">"Investing in biochar is investing in the future."</span>
        </p>

        {/* Data Cards instead of the bad graph image */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#F0F4F0] rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="text-[#1B4332]" size={32} />
            </div>
            <h3 className="text-4xl font-black text-[#1B4332] mb-2">15%+</h3>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">CAGR Growth</p>
            <p className="text-gray-400 text-sm mt-4">Steadily compounding annual growth rate driven by agricultural demand.</p>
          </div>

          <div className="bg-[#1B4332] p-10 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-300 transform md:scale-105">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="text-[#74C69D]" size={32} />
            </div>
            <h3 className="text-5xl font-black text-white mb-2">$3.5B</h3>
            <p className="text-[#74C69D] font-bold uppercase tracking-widest text-sm">Projected Value</p>
            <p className="text-gray-300 text-sm mt-4">Estimated global market valuation by the end of the decade.</p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#F0F4F0] rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="text-[#1B4332]" size={32} />
            </div>
            <h3 className="text-4xl font-black text-[#1B4332] mb-2">100+</h3>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Years Storage</p>
            <p className="text-gray-400 text-sm mt-4">Reliable carbon sequestration locking CO₂ away for centuries.</p>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-16 uppercase tracking-widest">
          Primetech Infra and Energy | GST: 06ABJFP1626R1ZP
        </p>
      </div>
    </section>
  );
};

export default YouTubeSection;