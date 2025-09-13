import React, { useEffect } from 'react';
import { X } from 'lucide-react';

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

  return (
    <div 
      className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
          aria-label="Close video"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        
        {/* Video Container with Vimeo embed */}
        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
          <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <iframe 
              src="https://player.vimeo.com/video/1118402722?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="AmplifiED_From_Stress_to_Smarter_Learning"
            />
          </div>
        </div>
        
        {/* Video Info */}
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">
            AmplifiED Demo: From Stress to Smarter Learning
          </h3>
          <p className="text-gray-300 text-sm">
            See how AmplifiED transforms video lectures into comprehensive study materials
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;