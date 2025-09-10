import { projects } from "../lib/data";
import { MdNavigateNext } from "react-icons/md";
import Projects from "./ProjectList";
import { Link } from "react-router-dom";

export default function Project() {
  return (
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
              <div className="h-44 rounded-xl m-2.5 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-6xl">
                <img
                  src={project.image}
                  alt="photo"
                  className="h-full w-full rounded-xl"
                />
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
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-gray-800 text-gray-50 hover:text-gray-400 transition-colors group-hover:translate-x-1"
                >
                  <span className="flex items-center gap-1.5 ">
                    <h3>View Project</h3>
                    <MdNavigateNext size={25} className="pt-0.5" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 bg-black text-white px-8 py-3 rounded-2xl hover:bg-gray-900 transition-all transform hover:scale-105"
          >
            <span>View All Projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
