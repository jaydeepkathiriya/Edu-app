import React from 'react';
import { X, ExternalLink, Play } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const openVideoInNewTab = () => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">AmplifiED Demo Video</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-8 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Play className="w-12 h-12 text-white ml-1" />
          </div>
          
          <h4 className="text-2xl font-bold text-gray-900 mb-4">
            Watch AmplifiED in Action
          </h4>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            See how AmplifiED transforms video lectures into comprehensive learning materials 
            in just minutes. This demo showcases our AI-powered transcription, summarization, 
            and study guide generation features.
          </p>
          
          <button
            onClick={openVideoInNewTab}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center mx-auto group"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Demo Video
            <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-sm text-gray-500 mt-4">
            Opens in a new tab for the best viewing experience
          </p>
        </div>
        
        {/* Features preview */}
        <div className="bg-gray-50 p-6 border-t border-gray-200">
          <h5 className="font-semibold text-gray-900 mb-3 text-center">What you'll see in the demo:</h5>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center text-gray-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Video upload process
            </div>
            <div className="flex items-center text-gray-600">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              AI transcription
            </div>
            <div className="flex items-center text-gray-600">
              <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
              Smart summarization
            </div>
            <div className="flex items-center text-gray-600">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              Quiz generation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;