import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  // Convert Google Drive share URL to embeddable URL
  const getEmbedUrl = (url: string) => {
    const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    if (fileId) {
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return url;
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">AmplifiED Demo Video</h3>
          <div className="flex items-center space-x-2">
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500 hover:text-gray-700"
              title="Open in new tab"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
        
        {/* Video Container */}
        <div className="relative w-full bg-gray-100" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={embedUrl}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            title="AmplifiED Demo Video"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
        
        {/* Fallback message */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600 text-center text-sm">
            Having trouble viewing the video? 
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 ml-1 underline"
            >
              Click here to open in Google Drive
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;