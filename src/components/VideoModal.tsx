import React, { useEffect } from 'react';
import { X, Play, ArrowRight } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const openVideoInNewTab = () => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="relative w-full max-w-2xl mx-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        
        {/* Modal Content */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
            <h3 className="text-2xl font-bold mb-2">
              AmplifiED Demo Video
            </h3>
            <p className="text-blue-100">
              See how AmplifiED transforms video lectures into comprehensive study materials
            </p>
          </div>

          {/* Video Content */}
          <div className="p-8">
            <div className="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden mb-6">
              <iframe
                width="100%"
                height="100%"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Information Section */}
            <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-2">
                Ready to Transform Your Teaching?
              </h5>
              <p className="text-gray-600 mb-4">
                Join thousands of educators who are already saving hours while improving student outcomes.
              </p>
              <a
                href="/signup"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;