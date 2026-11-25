import React from 'react';
import { 
  X, 
  Star, 
  Maximize, 
  Download, 
  Info, 
  Trash2, 
  ChevronLeft, 
  ChevronRight,
  Image as ImageIcon,
  Calendar,
  HardDrive,
  Maximize2
} from 'lucide-react';

const MediaViewer = ({ isOpen, onClose, media, onNext, onPrev }) => {
  if (!isOpen || !media) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-[100] flex font-sans">
      
      {/* Left Side - Main Media Area */}
      <div className="flex-1 flex flex-col relative">
        
        {/* Top Toolbar */}
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10 text-white">
          {/* Title and Counter */}
          <div className="flex flex-col">
            <h2 className="text-sm font-medium">{media.title}</h2>
            <span className="text-xs text-gray-400">{media.index} of {media.total}</span>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Star size={20} /></button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Maximize size={20} /></button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Download size={20} /></button>
            <button className="p-2 bg-white/20 rounded-full transition-colors"><Info size={20} /></button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Trash2 size={20} /></button>
            <div className="w-px h-6 bg-white/20 mx-2"></div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors"><X size={24} /></button>
          </div>
        </div>

        {/* Main Image Area */}
        <div className="flex-1 flex items-center justify-center p-8 pt-20 pb-20">
          <img 
            src={media.url} 
            alt={media.title} 
            className="max-h-full max-w-full object-contain rounded-md shadow-2xl"
          />
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={onPrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={onNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Video Progress Bar (Mocked for design) */}
        {media.type === 'video' && (
          <div className="absolute bottom-6 left-12 right-12 flex items-center gap-4 text-xs text-white">
            <span>0:03</span>
            <div className="flex-1 h-1 bg-white/20 rounded-full relative cursor-pointer">
              <div className="absolute left-0 top-0 h-full w-[60%] bg-white rounded-full"></div>
            </div>
            <span>0:05</span>
          </div>
        )}
      </div>

      {/* Right Side - Details Sidebar */}
      <div className="w-[320px] bg-white h-full flex flex-col border-l border-gray-200">
        
        {/* Sidebar Header */}
        <div className="p-6 flex justify-between items-center border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Media Details</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          
          {/* Title */}
          <div>
            <p className="text-xs text-gray-500 mb-1">Title :</p>
            <p className="text-sm text-gray-900">{media.title}</p>
          </div>

          {/* Media Type */}
          <div className="flex gap-3">
            <ImageIcon size={18} className="text-orange-500 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Media Type</p>
              <p className="text-sm text-gray-900 capitalize">{media.type}</p>
            </div>
          </div>

          {/* Date & Time */}
          <div className="flex gap-3">
            <Calendar size={18} className="text-red-400 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Date & Time</p>
              <p className="text-sm text-gray-900">{media.date}</p>
            </div>
          </div>

          {/* File Size & Format */}
          <div className="flex gap-3">
            <HardDrive size={18} className="text-yellow-500 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500 mb-0.5">File Size & Format</p>
              <p className="text-sm text-gray-900">{media.size} - {media.format}</p>
            </div>
          </div>

          {/* Dimensions */}
          <div className="flex gap-3">
            <Maximize2 size={18} className="text-red-400 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500 mb-0.5">Dimensions</p>
              <p className="text-sm text-gray-900">{media.dimensions} px</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default MediaViewer;