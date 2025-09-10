import {
  ExternalLink,
  MessageCircle,
  Send,
  Github,
  Code,
  Smartphone,
  Monitor,
  Globe,
} from "lucide-react";
import { projects } from "./src/lib/data";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold text-gray-900">Tega</div>
              <div className="hidden md:flex space-x-6">
                <a
                  href="#about"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#experience"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://x.com/tega"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://t.me/tega"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/tega"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/2348123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl text-white font-bold">
              T
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hey, I'm Tega.
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
            Frontend Developer & <Code className="inline w-8 h-8" /> Web
            Architect
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Crafting seamless web experiences and interactive interfaces.
            Passionate about modern JavaScript frameworks, responsive design,
            and bringing creative visions to life through code.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.preview}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors group-hover:translate-x-1"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/projects"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              <span>View All Projects</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm Tega, a passionate frontend developer and creative problem
                solver. Currently crafting beautiful and functional web
                experiences, but always exploring the endless possibilities of
                modern web technologies.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I thrive on transforming ideas into reality, whether it's
                building responsive web applications, optimizing user
                interfaces, or creating seamless user experiences that feel
                effortless to use.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                  <Monitor className="w-4 h-4" />
                  <span>Responsive Design</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg">
                  <Globe className="w-4 h-4" />
                  <span>Web Applications</span>
                </div>
                <div className="flex items-center space-x-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-lg">
                  <Smartphone className="w-4 h-4" />
                  <span>Mobile-First</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Tech Stack</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">React</span>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-16"></div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">TypeScript</span>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-14"></div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next.js</span>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-12"></div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tailwind CSS</span>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-18"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      {/* <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{exp.logo}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {exp.role}
                      </h3>
                      <div className="text-gray-600">{exp.company}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {exp.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Let's Work Together
          </h2>
          <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://wa.me/2348123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://x.com/tega"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>X (Twitter)</span>
            </a>
            <a
              href="https://t.me/tega"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4">Tega</div>
          <p className="text-gray-400 mb-6">
            Frontend Developer & Web Architect
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://x.com/tega"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://t.me/tega"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Send className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/tega"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/2348123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400">
            <p>&copy; 2024 Tega. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
