import { MessageCircle, Phone } from "lucide-react";
import { doctorProfile } from "../data/doctorProfile";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Zalo button */}
      <a
        href={`https://zalo.me/${doctorProfile.zalo}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Chat Zalo với bác sĩ"
        title="Chat Zalo"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Phone button */}
      <a
        href={`tel:${doctorProfile.phone}`}
        className="w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Gọi điện cho bác sĩ"
        title="Gọi điện"
      >
        <Phone className="w-7 h-7" />
      </a>
    </div>
  );
}