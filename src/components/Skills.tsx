import React from 'react';
import { Palette, Code, Zap, Brain, Figma, Smartphone, Globe, Layers } from 'lucide-react';

const Skills = () => {
  const designSkills = [
    { name: 'UI/UX Design', icon: Palette, level: 95 },
    { name: 'Figma Mastery', icon: Figma, level: 90 },
    { name: 'Wireframing', icon: Layers, level: 88 },
    { name: 'UX Research', icon: Brain, level: 85 },
  ];

  const techSkills = [
    { name: 'HTML/CSS/JS', icon: Code, level: 80 },
    { name: 'React Basics', icon: Globe, level: 75 },
    { name: 'Rive Animations', icon: Zap, level: 70 },
    { name: 'Responsive Design', icon: Smartphone, level: 85 },
  ];

  const aiTools = [
    'ChatGPT for UX Writing',
    'Midjourney for Concepts',
    'Figma AI Plugins',
    'v0.dev for Prototyping',
    'Claude for Code Review',
    'Framer AI Components'
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills Matrix
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning design, development, and AI-enhanced workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Design Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
              <Palette className="w-6 h-6 mr-2" />
              Design Skills
            </h3>
            {designSkills.map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <skill.icon className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <span className="text-purple-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-purple-500/30"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
              <Code className="w-6 h-6 mr-2" />
              Technical Skills
            </h3>
            {techSkills.map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <skill.icon className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <span className="text-blue-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-blue-500/30"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Toolkit */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
              <Brain className="w-6 h-6 mr-2" />
              AI Toolkit
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {aiTools.map((tool) => (
                <div
                  key={tool}
                  className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:animate-pulse"></div>
                    <span className="text-white font-medium">{tool}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-full backdrop-blur-sm border border-purple-500/20">
            <Zap className="w-6 h-6 text-yellow-400" />
            <span className="text-lg font-semibold text-white">
              Creating 10x faster design-to-prototype pipelines with AI augmentation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;