import { motion } from "framer-motion";
import engineeringImage from "@/assets/biocharpyrolosis.png";

const features = [
  { title: "Advanced Pyrolysis Process", desc: "Organic material is thermally decomposed in oxygen-limited conditions, converting biomass into stable, carbon-rich biochar." },
  { title: "Long-Term Carbon Storage", desc: "Biochar locks carbon in a stable form for hundreds of years, making it one of the most effective carbon sequestration methods." },
  { title: "ESG & Sustainability Compliance", desc: "Our processes align with global ESG standards, helping businesses meet their sustainability targets and carbon neutrality goals." },
  { title: "Stringent Quality Assurance", desc: "Every batch undergoes rigorous testing for carbon content, porosity, and purity to ensure consistent industrial-grade quality." }
];

const EngineeringSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT SIDE: Technical Details */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-[#1B4332] mb-10 leading-[1.1] tracking-tighter">
            Engineered for <br />
            <span className="text-[#74C69D]">Sustainable Excellence</span>
          </h2>
          <div className="space-y-10">
            {features.map((f, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="h-3 w-3 bg-[#74C69D] rounded-full mt-3 shrink-0 group-hover:scale-150 transition-transform duration-300" />
                <div>
                  <h4 className="text-2xl font-black text-[#1B4332] mb-2">{f.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE: Animated Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glassmorphism Background Glow */}
          <div className="absolute -inset-10 bg-[#74C69D]/10 rounded-full blur-3xl" />
          
          {/* IMAGE CONTAINER */}
          <div className="relative aspect-square rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl z-10">
            <img 
              src={engineeringImage} 
              alt="Biochar Pyrolysis Production Process" 
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute bottom-8 left-8 bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EngineeringSection;