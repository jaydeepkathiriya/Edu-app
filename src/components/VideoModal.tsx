import React from 'react';
import { X } from 'lucide-react';

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

  // Extract Vimeo video ID from URL
  const getVimeoEmbedUrl = (url: string) => {
    const vimeoId = url.match(/vimeo\.com\/(\d+)/)?.[1];
    if (vimeoId) {
      return `https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`;
    }
    return url;
  };

  const embedUrl = getVimeoEmbedUrl(videoUrl);

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-black rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        
        {/* Video container */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={embedUrl}
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="AmplifiED Demo Video"
          />
        </div>
        
        {/* Video info */}
        <div className="p-6 bg-gradient-to-r from-blue-900 to-purple-900">
          <h3 className="text-xl font-bold text-white mb-2">AmplifiED Demo</h3>
          <p className="text-blue-100">
            See how AmplifiED transforms video lectures into comprehensive learning materials
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;