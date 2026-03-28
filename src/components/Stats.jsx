import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  const stats = [
    { label: "Plants Installed", value: "50", suffix: "+" },
    { label: "Happy Clients", value: "100", suffix: "+" },
    { label: "States Served", value: "15", suffix: "+" },
    { label: "Client Satisfaction", value: "99", suffix: "%" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-6 rounded-2xl bg-[#F0F4F0] border border-[#74C69D]/20 shadow-sm"
          >
            <h3 className="text-4xl font-black text-[#1B4332] mb-2">
              <Counter value={stat.value} />{stat.suffix}
            </h3>
            <p className="text-gray-600 font-bold uppercase text-xs tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Stats;