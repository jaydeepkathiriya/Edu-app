import React from 'react';
import { DisplayCardsDemo } from './ui/display-cards-demo';

const DisplayCardsShowcase = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Experience Our 
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent"> Core Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how AmplifiED transforms your video lectures into comprehensive learning materials 
            with cutting-edge AI technology.
          </p>
        </div>

        {/* Interactive Feature Cards */}
        <div className="flex justify-center">
          <DisplayCardsDemo />
        </div>

        {/* Feature highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Processing</h3>
            <p className="text-gray-600 text-sm">Advanced machine learning algorithms analyze and extract key concepts from your lectures.</p>
          </div>
          
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">5m</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600 text-sm">Process 60-minute lectures and generate complete study materials in under 5 minutes.</p>
          </div>
          
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">99%</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Accuracy Rate</h3>
            <p className="text-gray-600 text-sm">Industry-leading transcription accuracy with speaker identification and timestamps.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayCardsShowcase;