import React from 'react';
import { Upload, Brain, Share2, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Upload',
      description: 'Tutors upload video lectures to the secure platform with drag-and-drop simplicity.',
      details: [
        'Support for all major video formats',
        'Batch upload capabilities',
        'Cloud storage integration',
        'Progress tracking'
      ]
    },
    {
      icon: Brain,
      title: 'Process',
      description: 'AI transcribes, summarizes, and creates comprehensive learning materials automatically.',
      details: [
        'Advanced speech recognition',
        'Content analysis & extraction',
        'Smart material generation',
        'Quality assurance checks'
      ]
    },
    {
      icon: Share2,
      title: 'Share',
      description: 'Students access interactive quizzes, flashcards, and organized study guides instantly.',
      details: [
        'Instant content delivery',
        'Multiple format options',
        'Mobile-optimized access',
        'Progress analytics'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How AmplifiED Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined 3-step process transforms your video lectures into 
            comprehensive learning materials in minutes, not hours.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-teal-200"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Mobile connection line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-6 top-20 w-0.5 h-16 bg-gradient-to-b from-blue-200 to-purple-200"></div>
                )}
                
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group relative z-10">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <ul className="text-left space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 -right-6 w-12 h-12 items-center justify-center bg-white rounded-full border-2 border-gray-100 z-20">
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline stats */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              From Upload to Study Materials
            </h3>
            <p className="text-gray-600 text-lg">
              See how quickly AmplifiED transforms your content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">0:30</div>
              <div className="text-sm text-gray-600">Upload Complete</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">2:15</div>
              <div className="text-sm text-gray-600">Transcription Ready</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">4:45</div>
              <div className="text-sm text-gray-600">Materials Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">5:00</div>
              <div className="text-sm text-gray-600">Ready to Share</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;