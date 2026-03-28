import { motion, Variants } from "framer-motion";
import { TreePine, Wheat, Leaf, Shell } from "lucide-react";

const feedstocks = [
  { icon: TreePine, title: "Wood Residues", desc: "Wood chips, sawdust, and forestry waste are processed into high-grade biochar through controlled pyrolysis." },
  { icon: Wheat, title: "Agricultural Waste", desc: "Rice husk, sugarcane bagasse, and crop residues are transformed into nutrient-rich biochar for soil enhancement." },
  { icon: Leaf, title: "Organic Biomass", desc: "Various organic biomass sources including green waste and composting byproducts for consistent biochar production." },
  { icon: Shell, title: "Nut Shells & Husks", desc: "Coconut shells, almond husks, and other nut-based materials yield dense, high-carbon biochar ideal for filtration." }
];

const cardVars: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
};

const FeedstockSection = () => {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-[#1B4332] mb-4 tracking-tighter"
          >
            Biochar <span className="text-[#74C69D]">Feedstocks</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Our biochar is produced from a diverse range of organic feedstocks, 
            ensuring versatile applications and consistent quality across every batch.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {feedstocks.map((item, i) => (
            <motion.div 
              key={i}
              custom={i}
              variants={cardVars}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white p-8 rounded-[2.5rem] shadow-xl shadow-[#1B4332]/5 border border-transparent hover:border-[#74C69D]/30 transition-all text-center"
            >
              <div className="w-16 h-16 bg-[#F0F4F0] text-[#1B4332] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1B4332] group-hover:text-[#74C69D] transition-colors">
                <item.icon size={30} />
              </div>
              <h3 className="text-xl font-black text-[#1B4332] mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedstockSection;