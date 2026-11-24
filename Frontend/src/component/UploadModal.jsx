import React from 'react';
import { X } from 'lucide-react';

const UploadModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden transform scale-100 transition-transform"
        onClick={e => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Upload to My Library</h2>
            <p className="text-sm text-gray-500">Upload and organize your photos & videos</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors p-1">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pb-6">
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-brand hover:bg-gray-50 transition-colors cursor-pointer group">
            <p className="text-base text-gray-700 mb-2">
              Drag & Drop <span className="text-brand font-medium">Photos & Videos</span> Here, Or Browse
            </p>
            <p className="text-xs text-gray-400">
              Supports PNG, JPG, WEBP, GIF, MP4, MOV, WEBM (up to 100MB each)
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg font-medium text-gray-600 hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button className="px-6 py-2.5 rounded-lg font-medium bg-brand text-white hover:bg-red-700 transition-colors">
            Upload
          </button>
        </div>

      </div>
    </div>
  );
};

export default UploadModal;