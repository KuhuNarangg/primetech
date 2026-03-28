import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919996092220"; 
  const message = encodeURIComponent("Hello Primetech Infra and Energy, I am interested in your products.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-5 bottom-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1da851] shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
};

export default WhatsAppButton;
