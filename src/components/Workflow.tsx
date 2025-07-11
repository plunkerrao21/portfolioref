import React from 'react';
import { ArrowRight, Figma, Brain, Code, Sparkles } from 'lucide-react';

const Workflow = () => {
  const steps = [
    {
      id: 1,
      title: 'Figma Design',
      description: 'Create pixel-perfect designs with user-centered approach',
      icon: Figma,
      color: 'purple',
      details: ['User Research', 'Wireframing', 'Visual Design', 'Prototyping']
    },
    {
      id: 2,
      title: 'AI Enhancement',
      description: 'Leverage AI tools for optimization and automation',
      icon: Brain,
      color: 'blue',
      details: ['Content Generation', 'Design Optimization', 'Code Suggestions', 'Testing Automation']
    },
    {
      id: 3,
      title: 'Prototype Generation',
      description: 'Transform designs into interactive prototypes',
      icon: Code,
      color: 'cyan',
      details: ['Component Building', 'State Management', 'Animation Integration', 'Responsive Design']
    },
    {
      id: 4,
      title: 'Code Refinement',
      description: 'Polish and optimize for production deployment',
      icon: Sparkles,
      color: 'green',
      details: ['Performance Optimization', 'Cross-browser Testing', 'Accessibility', 'Deployment']
    }
  ];

  return (
    <section id="workflow" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI-Powered Workflow
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From concept to deployment - streamlined with artificial intelligence
          </p>
        </div>

        <div className="relative">
          {/* Workflow Steps */}
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step Card */}
                <div className={`group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-${step.color}-500/20 hover:border-${step.color}-500/50 transition-all duration-300 hover:scale-105 text-center`}>
                  {/* Step Number */}
                  <div className={`w-12 h-12 bg-gradient-to-r from-${step.color}-600 to-${step.color}-400 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold`}>
                    {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4">
                    <step.icon className={`w-12 h-12 text-${step.color}-400 mx-auto`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4">{step.description}</p>
                  
                  {/* Details */}
                  <ul className="text-xs text-gray-500 space-y-1">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center justify-center">
                        <span className={`w-1.5 h-1.5 bg-${step.color}-400 rounded-full mr-2`}></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow (hidden on mobile, shown on lg) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center border-2 border-gray-600">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Arrows */}
          <div className="lg:hidden flex justify-center mt-8 space-x-2">
            {steps.map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-gray-400 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Benefits */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8">Why This Workflow Works</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg backdrop-blur-sm border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">10x</div>
                <div className="text-white font-semibold mb-2">Faster Development</div>
                <div className="text-gray-400 text-sm">AI-assisted code generation and optimization</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-lg backdrop-blur-sm border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-white font-semibold mb-2">Design Accuracy</div>
                <div className="text-gray-400 text-sm">Pixel-perfect translation from design to code</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-cyan-900/30 to-green-900/30 rounded-lg backdrop-blur-sm border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50%</div>
                <div className="text-white font-semibold mb-2">Less Iterations</div>
                <div className="text-gray-400 text-sm">AI-powered testing and optimization</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;