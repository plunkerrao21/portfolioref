import React from 'react';
import { ExternalLink, Github, Figma, Sparkles, Eye, Code } from 'lucide-react';

const Projects = () => {
  const developedProjects = [
    {
      title: 'Glass Calculator',
      description: 'Minimalistic glassmorphic calculator with responsive UI and smooth animations',
      image: 'https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=500',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Glassmorphism'],
      liveUrl: 'https://glasscalcuator-o3qentv09-anuj-dighes-projects.vercel.app/',
      githubUrl: 'https://github.com/plunkerrao21/glasscalcuator',
      type: 'prototype'
    },
    {
      title: 'FocusHub Landing',
      description: 'Modern landing page with beautiful animations and responsive design',
      image: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=500',
      techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://focus-hub-landingpage.vercel.app/',
      githubUrl: 'https://github.com/plunkerrao21/focus-hub-landingpage',
      type: 'prototype'
    },
    {
      title: 'NexusCheck To-Do',
      description: 'Interactive to-do list with advanced task management features',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=500',
      techStack: ['React', 'LocalStorage', 'CSS3', 'JavaScript'],
      liveUrl: 'https://to-do-list-nexuscheck.vercel.app/',
      githubUrl: 'https://github.com/plunkerrao21/to-do-list-nexuscheck',
      type: 'prototype'
    },
    {
      title: 'Mood Changer',
      description: 'Interactive mood tracking app with dynamic color themes',
      image: 'https://images.pexels.com/photos/3616764/pexels-photo-3616764.jpeg?auto=compress&cs=tinysrgb&w=500',
      techStack: ['HTML', 'CSS', 'JavaScript', 'API'],
      liveUrl: '#',
      githubUrl: 'https://github.com/plunkerrao21/Mood-changer-plunkerrao21',
      type: 'prototype'
    }
  ];

  const figmaDesigns = [
    {
      title: 'Squidly Expense Tracker',
      description: 'Comprehensive expense tracking app with intuitive UI/UX',
      image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=500',
      figmaUrl: 'https://www.figma.com/design/J86EQsEnzj57EC20XsM6Hl/SQUIDLY--UI---expense-tracker-',
      type: 'design'
    },
    {
      title: 'TownSync Event App',
      description: 'Modern event management platform with social features',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=500',
      figmaUrl: 'https://www.figma.com/design/townsync-event-app',
      type: 'design'
    },
    {
      title: 'Women\'s Safety App',
      description: 'Safety-focused mobile app with emergency features',
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=500',
      figmaUrl: 'https://www.figma.com/design/ZX7Q3osw3j2FhtgZuCGMUM/Womens-safety-app',
      type: 'design'
    },
    {
      title: 'Cookbook Recipe App',
      description: 'Beautiful recipe app with ingredient tracking',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      figmaUrl: 'https://www.figma.com/design/cookbook-recipe-app',
      type: 'design'
    }
  ];

  const allProjects = [...developedProjects, ...figmaDesigns];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Project Showcase
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From concept to code - showcasing the complete design-to-development pipeline
          </p>
        </div>

        {/* Developed Prototypes */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-purple-400 mb-8 flex items-center">
            <Code className="w-8 h-8 mr-3" />
            Developed Prototypes
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {developedProjects.map((project) => (
              <div
                key={project.title}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-purple-500/20 backdrop-blur-sm rounded-full p-2 border border-purple-500/30">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-sm font-medium hover:scale-105 transition-transform duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Figma Designs */}
        <div>
          <h3 className="text-3xl font-bold text-blue-400 mb-8 flex items-center">
            <Figma className="w-8 h-8 mr-3" />
            Figma Designs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {figmaDesigns.map((design) => (
              <div
                key={design.title}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-blue-500/20 backdrop-blur-sm rounded-full p-2 border border-blue-500/30">
                      <Eye className="w-4 h-4 text-blue-400" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{design.title}</h4>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{design.description}</p>
                  
                  <div className="flex">
                    <a
                      href={design.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-sm font-medium hover:scale-105 transition-transform duration-200"
                    >
                      <Figma className="w-4 h-4" />
                      <span>View Design</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;