import React from 'react';
import { GraduationCap, Building, Award, Calendar } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2024',
      title: 'AI-Enhanced Design Mastery',
      subtitle: 'Advanced Prototyping & AI Integration',
      description: 'Developed expertise in AI-powered design workflows, integrating tools like ChatGPT, Figma AI, and v0.dev',
      icon: Award,
      color: 'purple'
    },
    {
      year: '2023',
      title: 'Ceeras Internship',
      subtitle: '6-Month UX Design Program',
      description: 'Intensive hands-on experience in user research, wireframing, and prototype development',
      icon: Building,
      color: 'blue'
    },
    {
      year: '2022',
      title: 'UI/UX Certification',
      subtitle: 'Professional Design Certification',
      description: 'Comprehensive training in user-centered design principles and modern design tools',
      icon: Award,
      color: 'cyan'
    },
    {
      year: '2021',
      title: 'Computer Engineering',
      subtitle: 'Dilkap College',
      description: 'Bachelor\'s degree with focus on software development and human-computer interaction',
      icon: GraduationCap,
      color: 'green'
    }
  ];

  const achievements = [
    { label: 'Projects Completed', value: '15+', color: 'purple' },
    { label: 'Design Systems', value: '8+', color: 'blue' },
    { label: 'Figma Prototypes', value: '25+', color: 'cyan' },
    { label: 'AI Tools Mastered', value: '10+', color: 'green' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences through design and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-6">
            <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">My Design Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a Computer Engineering student at Dilkap College, I discovered my passion for bridging the gap between beautiful design and functional technology. What started as curiosity about user interfaces evolved into a comprehensive skill set spanning UI/UX design, prototyping, and AI-enhanced workflows.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                My 6-month internship at Ceeras was transformative, where I learned to approach design problems from a user-centered perspective. I realized that great design isn't just about aesthetics—it's about solving real problems for real people.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, I leverage AI tools to accelerate my design process while maintaining the human touch that makes interfaces truly intuitive. Every project is an opportunity to push the boundaries of what's possible when design meets technology.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.label}
                  className={`p-4 bg-gradient-to-br from-${achievement.color}-900/30 to-${achievement.color}-800/20 rounded-lg backdrop-blur-sm border border-${achievement.color}-500/20 text-center`}
                >
                  <div className={`text-2xl font-bold text-${achievement.color}-400 mb-1`}>
                    {achievement.value}
                  </div>
                  <div className="text-gray-300 text-sm">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-purple-400" />
              Education & Experience
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-6 pb-8 last:pb-0">
                  {/* Timeline Node */}
                  <div className={`relative z-10 w-12 h-12 bg-gradient-to-r from-${item.color}-600 to-${item.color}-400 rounded-full flex items-center justify-center border-4 border-gray-900`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`px-2 py-1 bg-${item.color}-500/20 text-${item.color}-300 rounded-full text-sm font-medium`}>
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-purple-400 font-medium mb-2">{item.subtitle}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Design Philosophy</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              "Great design is invisible. It solves problems so elegantly that users don't even think about the interface—they just accomplish their goals. By combining human-centered design principles with AI-powered efficiency, I create experiences that feel both magical and familiar."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;