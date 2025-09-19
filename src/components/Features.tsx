import React from 'react';
import { FileText, BookOpen, HelpCircle, CreditCard, FolderOpen, Video } from 'lucide-react';
import { DisplayCardsDemo } from './ui/display-cards-demo';

const Features = () => {
  const features = [
    {
      icon: Video,
      title: 'Video Transcription',
      description: 'Upload videos and get instant, accurate transcripts with speaker identification and timestamps.',
      features: ['99.5% accuracy rate', 'Multiple language support', 'Speaker identification', 'Timestamp synchronization'],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileText,
      title: 'Smart Summarization',
      description: 'AI creates structured, digestible lecture summaries with key points and concepts.',
      features: ['Key concept extraction', 'Structured formatting', 'Customizable length', 'Topic categorization'],
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: HelpCircle,
      title: 'Quiz Generation',
      description: 'Automatic quiz creation with various question types based on lecture content.',
      features: ['Multiple choice questions', 'True/false questions', 'Short answer prompts', 'Difficulty levels'],
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      icon: CreditCard,
      title: 'Flashcard Creation',
      description: 'Interactive flashcards for key concepts and terms with spaced repetition algorithms.',
      features: ['Smart card generation', 'Spaced repetition', 'Progress tracking', 'Custom categories'],
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: BookOpen,
      title: 'Study Guide Compilation',
      description: 'Comprehensive guides combining multiple lectures into organized study materials.',
      features: ['Multi-lecture synthesis', 'Topic organization', 'Cross-referencing', 'Export options'],
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: FolderOpen,
      title: 'Subject Management',
      description: 'Organize content by subjects and topics with intuitive categorization system.',
      features: ['Folder organization', 'Tag system', 'Search functionality', 'Bulk operations'],
      gradient: 'from-cyan-500 to-cyan-600'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform video lectures into comprehensive learning experiences, 
            powered by advanced AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature highlight */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Process Hours of Content in Minutes
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our advanced AI can process a 60-minute lecture and generate complete study materials 
            in under 5 minutes, giving you more time to focus on teaching.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
            See It In Action
          </button>
        </div>

        {/* Interactive Feature Cards */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Experience Our Core Features
            </h3>
            <p className="text-gray-600 text-lg">
              Hover over the cards to see our key features in action
            </p>
          </div>
          <DisplayCardsDemo />
        </div>
      </div>
    </section>
  );
};

export default Features;