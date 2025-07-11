import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ceeras Mentor',
      role: 'Senior UX Designer',
      company: 'Ceeras',
      content: 'Anuj demonstrates exceptional design thinking and technical implementation skills. His ability to bridge the gap between design and development is remarkable.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Hackathon Team Lead',
      role: 'Project Manager',
      company: 'TechFest 2024',
      content: 'Working with Anuj was incredible. He delivered pixel-perfect designs and functional prototypes that impressed all judges. His AI-enhanced workflow saved us days of development time.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'College Professor',
      role: 'Computer Engineering Faculty',
      company: 'Dilkap College',
      content: 'Anuj consistently demonstrates innovation in his approach to UI/UX design. His integration of AI tools with traditional design processes shows great potential.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            What People Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Feedback from mentors, collaborators, and industry professionals
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-8 h-8 text-purple-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-purple-500/30"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-purple-400">{testimonial.company}</div>
                </div>
              </div>

              {/* Floating orb effect */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-full backdrop-blur-sm border border-purple-500/20">
            <Star className="w-6 h-6 text-yellow-400" />
            <span className="text-lg font-semibold text-white">
              Ready to create something amazing together?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;