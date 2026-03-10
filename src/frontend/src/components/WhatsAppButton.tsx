import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
  ocid?: string;
}

export default function WhatsAppButton({
  size = "md",
  text = "Chat on WhatsApp",
  className = "",
  ocid = "whatsapp.button",
}: WhatsAppButtonProps) {
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-7 py-4 text-lg",
  };

  return (
    <a
      href="https://wa.me/61488841883"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid={ocid}
      className={`whatsapp-btn inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors shadow-lg ${
        sizeClasses[size]
      } ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {text}
    </a>
  );
}
