import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239CA3AF%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Teaching?
        </h2>
        <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
          Join thousands of educators who are already saving hours while improving 
          student outcomes. Start your free trial today and experience the future of education.
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center justify-center text-blue-100">
            <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center justify-center text-blue-100">
            <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
            <span>Full access to all features</span>
          </div>
          <div className="flex items-center justify-center text-blue-100">
            <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
            <span>Cancel anytime</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a href="/signup.html" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-200 flex items-center group shadow-xl">
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-200">
            Join Waitlist
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-100 text-sm">
          <div className="flex items-center">
            <div className="flex text-yellow-300 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <span>4.9/5 from 2,500+ users</span>
          </div>
          <div>✓ SOC 2 & FERPA Compliant</div>
          <div>✓ Enterprise Security</div>
        </div>
      </div>
    </section>
  );
};

export default CTA;