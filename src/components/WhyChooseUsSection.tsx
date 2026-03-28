import { Award, Leaf, Cpu, PenTool, Layers, ClipboardList, HeadsetIcon, Zap, BadgeDollarSign } from "lucide-react";

const reasons = [
  { icon: Leaf, title: "Eco-Friendly Products", desc: "Our biochar solutions are carbon-negative, actively removing CO₂ from the atmosphere while enriching soils and boosting crop yields." },
  { icon: Cpu, title: "Advanced Production Technology", desc: "State-of-the-art pyrolysis and distillation processes ensure consistent quality and maximum efficiency in every batch." },
  { icon: PenTool, title: "Tailored Solutions", desc: "Customized biochar blends and LDO grades designed to meet your specific industrial, agricultural, or environmental requirements." },
  { icon: Layers, title: "Multi-Industry Expertise", desc: "From agriculture and construction to mining and power generation — our products serve diverse sectors with equal reliability." },
  { icon: ClipboardList, title: "Quality Assurance", desc: "Every product undergoes rigorous quality testing to ensure compliance with industry standards and deliver peak performance." },
  { icon: HeadsetIcon, title: "Dedicated Support", desc: "Our expert team provides ongoing technical assistance, ensuring you get the most value from our energy solutions." },
  { icon: Zap, title: "Fast & Reliable Delivery", desc: "Efficient logistics and supply chain management ensure timely delivery of products directly to your facility." },
  { icon: BadgeDollarSign, title: "Cost-Effective Energy", desc: "Optimized production processes and competitive pricing ensure maximum return on your investment without compromising quality." },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Why Choose <span className="text-eco-gradient">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover what sets Primetech Infra and Energy apart as a leader in sustainable energy and industrial products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 eco-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
