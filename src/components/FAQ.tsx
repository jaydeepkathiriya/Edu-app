import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How accurate is the transcription?',
      answer: 'Our AI transcription achieves 99.5% accuracy across multiple languages and accents. The system continuously learns and improves, and includes speaker identification and timestamp synchronization for enhanced usability.'
    },
    {
      question: 'What video formats are supported?',
      answer: 'AmplifiED supports all major video formats including MP4, AVI, MOV, WMV, and more. We also support various audio formats and can process content from popular platforms like Zoom, Teams, and Google Meet recordings.'
    },
    {
      question: 'How long does processing take?',
      answer: 'Processing time varies by video length, but typically a 60-minute lecture is fully processed within 5 minutes. This includes transcription, summarization, quiz generation, and flashcard creation.'
    },
    {
      question: 'Is there a limit on video length?',
      answer: 'Free accounts can process videos up to 2 hours long. Premium accounts have no length restrictions and can handle full-day seminars or multi-part lecture series.'
    },
    {
      question: 'How are study guides generated?',
      answer: 'Our AI analyzes lecture content to identify key concepts, relationships, and learning objectives. It then creates structured study guides with summaries, key terms, practice questions, and cross-references to related materials.'
    },
    {
      question: 'What subjects does it work best for?',
      answer: 'AmplifiED works excellently across all academic disciplines including STEM subjects, humanities, social sciences, and professional training. The AI adapts to subject-specific terminology and concepts.'
    },
    {
      question: 'What are the pricing options?',
      answer: 'We offer a free tier for individual educators with basic features, and premium plans starting at $29/month for enhanced capabilities, unlimited processing, and advanced analytics. Contact us for institutional pricing.'
    },
    {
      question: 'How secure is my data?',
      answer: 'We employ enterprise-grade security with end-to-end encryption, SOC 2 compliance, and FERPA compliance for educational institutions. Your content is never used to train our models without explicit permission.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about AmplifiED and how it works.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-sm"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact support */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you get the most out of AmplifiED.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;