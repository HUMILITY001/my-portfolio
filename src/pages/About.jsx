import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl text-center font-bold text-gray-900 mb-8">
          About
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm Tega, a computer sceince student and web developer (frontend) and creative problem
              solver. Currently crafting beautiful and functional web
              experiences, but always exploring the endless possibilities of
              modern web technologies.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I thrive on transforming ideas into reality, whether it's building
              responsive web applications, optimizing user interfaces, or
              creating seamless user experiences that feel effortless to use.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                <span>Responsive Design</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg">
                <span>Web Applications</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-lg">
                <span>Mobile-First</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Tech Stack</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 flex items-center gap-1.5">
                    <FaReact />
                    React
                  </span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-black h-2 rounded-full w-16"></div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 flex items-center gap-1.5">
                    <RiNextjsLine />
                    Next.js
                  </span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-black h-2 rounded-full w-12"></div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 flex items-center gap-1.5">
                    <RiTailwindCssFill />
                    Tailwind CSS
                  </span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-black h-2 rounded-full w-18"></div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 flex items-center gap-1.5">
                    <IoLogoCss3 />
                    Vanilla CSS
                  </span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-black h-2 rounded-full w-20"></div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 flex items-center gap-1.5">
                    <FaHtml5 />
                    HTML
                  </span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-black h-2 rounded-full w-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
