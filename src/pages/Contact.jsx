import { FaXTwitter } from "react-icons/fa6";
import { LiaTelegram } from "react-icons/lia";
import { RiWhatsappLine } from "react-icons/ri";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Let's Work Together
        </h2>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's discuss your next project and
          create something amazing together.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="https://wa.me/2348131596593"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-3 rounded-2xl hover:bg-green-600 transition-all transform hover:scale-105 flex items-center space-x-2"
          >
            <span className="flex items-center gap-2">
              <RiWhatsappLine size={20} />
              WhatsApp
            </span>
          </a>
          <a
            href="https://x.com/0xtegaH"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-12 py-3 rounded-2xl hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center space-x-2"
          >
            <span className="flex items-center gap-2">
              <FaXTwitter /> Twitter
            </span>
          </a>
          <a
            href="https://t.me/Oxtegah"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-9 py-3 rounded-2xl hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center space-x-2"
          >
            <span className="flex items-center gap-2">
              <LiaTelegram />
              Telegram
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
