import React from 'react';
import { Clock, TrendingUp, Users, Zap, Shield, Globe } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Automate creation of study materials and reduce prep time by 90%',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Improve Learning',
      description: 'Multiple formats cater to different learning styles and preferences',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Increase Engagement',
      description: 'Interactive quizzes and flashcards boost student participation',
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      icon: Zap,
      title: 'AI-Powered',
      description: 'Cutting-edge technology for accurate transcription and content generation',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Better Organization',
      description: 'Centralized subject-based content management system',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Make lectures accessible through text and structured content',
      gradient: 'from-cyan-500 to-cyan-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose AmplifiED?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your teaching approach with AI-powered tools designed to enhance 
            both educator efficiency and student learning outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">90%</div>
              <div className="text-blue-100 font-medium">Time Savings</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100 font-medium">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">2.5K+</div>
              <div className="text-blue-100 font-medium">Happy Educators</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;