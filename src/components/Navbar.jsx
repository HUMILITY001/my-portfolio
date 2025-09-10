import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineHome } from "react-icons/hi2";
import { LiaTelegram } from "react-icons/lia";
import { RiWhatsappLine } from "react-icons/ri";
import { PiLineVerticalLight } from "react-icons/pi";

export default function Navbar() {
  return (
    <div className="flex fixed top-3 z-99 w-fit border border-gray-400 rounded-2xl justify-between backdrop-blur bg-white/60">
      <nav className="flex mx-5 my-3 justify-center items-center gap-4">
        <a href="/" aria-label="Home">
          <HiOutlineHome size={20} />
        </a>
        <PiLineVerticalLight size={25} />

        <a href="https://x.com/0xtegaH" aria-label="Twitter">
          <FaXTwitter size={18} />
        </a>
        <a href="https://t.me/Oxtegah" aria-label="Telegram">
          <LiaTelegram size={19} />
        </a>
        <a href="https://wa.me/2348131596593" aria-label="Whatsapp">
          <RiWhatsappLine size={19} />
        </a>
        <PiLineVerticalLight size={25} />
      </nav>
      <button className="cursor-pointer px-3.5 py-0.5 my-1 mr-1 rounded-xl text-white bg-black">
        <a href="https://x.com/0xtegaH">Let's Discuss</a>
      </button>
    </div>
  );
}
