import { motion } from "framer-motion";
import { Leaf, Flame, Recycle } from "lucide-react";

const highlights = [
  { icon: Leaf, title: "Sustainable Biochar", desc: "Premium carbon-negative biochar solutions that improve soil health, sequester carbon, and support sustainable agriculture." },
  { icon: Flame, title: "Industrial Energy", desc: "High-quality Light Diesel Oil for efficient industrial heating, power generation, and heavy machinery operations." },
  { icon: Recycle, title: "End-to-End Service", desc: "From sourcing and production to delivery and technical support — complete energy solutions tailored to your needs." },
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#1B4332] mb-6 tracking-tighter">
            About <span className="text-[#74C69D]">Primetech Infra and Energy</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Primetech Infra and Energy is a trusted name in sustainable energy and industrial products. We specialize in 
            premium-grade Biochar and Light Diesel Oil, delivering reliable solutions that power industries while 
            protecting the environment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -12,
                boxShadow: "0 25px 50px -12px rgba(27, 67, 50, 0.15)"
              }}
              className="group bg-white rounded-[2rem] p-10 border border-gray-100 transition-all duration-300 text-center cursor-default"
            >
              <div className="w-20 h-20 bg-[#F0F4F0] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#1B4332] group-hover:rotate-6 transition-all duration-500">
                <item.icon size={36} className="text-[#1B4332] group-hover:text-[#74C69D] transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-[#1B4332] mb-4 tracking-tight">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;