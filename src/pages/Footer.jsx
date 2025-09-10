import { LiaTelegram } from "react-icons/lia";
import { RiWhatsappLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="text-2xl font-bold mb-4">Tega</div>
        <p className="text-gray-400 mb-6">
          Web Developer (Front-End Focused) & Web-3 Enthusiast
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://x.com/0xtegaH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://t.me/Oxtegah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <LiaTelegram size={25} />
          </a>
          <a
            href="https://wa.me/2348131596593"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <RiWhatsappLine size={25} />
          </a>
          <a
            href="https://github.com/HUMILITY001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={25} />
          </a>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400">
          <p>&copy; 2024 Tega. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
