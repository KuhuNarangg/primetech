import React, { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Factory, Users, MapPin, ThumbsUp } from "lucide-react";

const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const displayValue = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) spring.set(numericValue);
  }, [isInView, numericValue, spring]);

  return (
    <motion.span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {value.replace(/[0-9]/g, "")}
    </motion.span>
  );
};

const stats = [
  { icon: Factory, value: "200+", label: "Tons Delivered" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: MapPin, value: "10+", label: "States Served" },
  { icon: ThumbsUp, value: "99%", label: "Client Satisfaction" },
];

const StatsSection = () => {
  return (
    <section className="relative py-40 overflow-hidden bg-white">
      {/* FULL-WIDTH GREEN LAYER */}
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.2, ease: "circOut" }}
        viewport={{ once: true }}
        style={{ originX: 0 }}
        className="absolute inset-y-8 left-0 w-full bg-[#74C69D]/10 z-0 border-y border-[#74C69D]/10" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group p-10 lg:p-12 rounded-[3rem] bg-white/95 backdrop-blur-xl border border-white shadow-2xl shadow-[#1B4332]/5 hover:bg-[#1B4332] transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F0F4F0] flex items-center justify-center mx-auto mb-8 group-hover:bg-[#74C69D] group-hover:rotate-6 transition-all duration-300">
                <stat.icon size={32} className="text-[#1B4332] group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-5xl lg:text-6xl font-black text-[#1B4332] group-hover:text-white mb-2 transition-colors tracking-tighter">
                <AnimatedNumber value={stat.value} />
              </h3>
              
              <p className="text-gray-500 group-hover:text-gray-300 text-[11px] font-black uppercase tracking-[0.25em] transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;