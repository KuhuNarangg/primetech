import { motion } from "framer-motion";
import InquiryForm from "@/components/InquiryForm";
import { Phone, Mail, MapPin } from "lucide-react";

const contactDetails = [
  { icon: Phone, label: "Phone", val: "+91 99960 92220", color: "text-[#74C69D]" },
  { icon: Mail, label: "Email", val: "primetechinfraenergy@gmail.com", color: "text-[#74C69D]" },
  { icon: MapPin, label: "Location", val: "Haryana, India", color: "text-[#74C69D]" }
];

const ContactPage = () => {
  return (
    <main className="pt-28 pb-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black text-[#1B4332] mb-6 tracking-tighter">
            Get in <span className="text-[#74C69D]">Touch</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-lg font-medium">
            Discuss your energy and sustainability requirements with our team.
          </p>
        </motion.div>

        {/* --- INTERACTIVE INFO CARDS --- */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {contactDetails.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex items-center gap-6"
            >
              <div className="w-16 h-16 bg-[#1B4332] rounded-2xl flex items-center justify-center shrink-0">
                <item.icon size={28} className="text-[#74C69D]" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                <p className="text-[#1B4332] font-bold text-sm md:text-base break-all">{item.val}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FLOATING INQUIRY FORM --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <InquiryForm />
        </motion.div>
      </div>
    </main>
  );
};

export default ContactPage;
