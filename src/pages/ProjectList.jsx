import { useState } from "react";

import {
  FaArrowLeft,
  FaTelegramPlane,
  FaGithub,
  FaWhatsapp,
  FaSearch,
  FaStar,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { projects } from "../lib/data";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  const filteredProjects = projects
    .filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "recent") return new Date(b.date) - new Date(a.date);
      if (sortBy === "featured") return b.featured - a.featured;
      if (sortBy === "rating") return b.rating - a.rating;
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A showcase of web applications, websites, and digital experiences
            I've crafted using modern technologies and best practices.
          </p>
        </div>
      </section>

      {/* All Projects */}
      <section id="all-projects" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gradient-to-br from-gray-300 to-stone-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border"
              >
                <div className=" relative">
                  <div className="m-4">
                    <img
                      src={project.image}
                      alt="photo"
                      className="rounded-2xl"
                    />
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                        <FaStar className="w-3 h-3 fill-current" />
                        <span>Featured</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-2 left-6">
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === "Live"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {project.status}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-gray-500">
                      {project.category}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {project.preview !== "#" && (
                        <a
                          href={project.preview}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                          <span className="text-sm">Preview</span>
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        <span className="text-sm">Code</span>
                      </a>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <span>{new Date(project.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <FaSearch className="w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
