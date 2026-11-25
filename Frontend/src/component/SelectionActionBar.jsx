import { X, Star, FolderPlus, Trash2 } from 'lucide-react';

const SelectionActionBar = ({ selectedCount, onClear, onFavorite, onAddToAlbum, onMoveToTrash }) => {
  if (selectedCount === 0) return null;

  return (
    <div 
      // Changed left-1/2 -translate-x-1/2 to be responsive and not overflow on small screens
      // Using w-full max-w-fit with mx-auto for centering, or fixed positioning
      className="fixed bottom-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:right-auto z-40"
      style={{ animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
    >
      <style>
        {`
          @keyframes slideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      {/* 
        On mobile: flex-col or flex-wrap, rounded-2xl (less pill-like)
        On desktop: flex-row, rounded-full
      */}
      <div className="bg-white rounded-2xl md:rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex flex-wrap md:flex-nowrap items-center justify-center p-2 gap-1">
        
        {/* Header section: Clear + Count */}
        <div className="flex items-center w-full md:w-auto justify-between md:justify-start border-b md:border-b-0 border-gray-100 pb-2 md:pb-0 mb-1 md:mb-0">
          <button
            onClick={onClear}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 transition-colors shrink-0"
            title="Clear selection"
          >
            <X size={16} />
          </button>

          <span className="text-sm font-semibold text-red-600 px-3 whitespace-nowrap">
            {selectedCount} selected
          </span>

          <div className="hidden md:block w-px h-5 bg-gray-200 mx-1"></div>
        </div>

        {/* Actions Wrapper */}
        <div className="flex items-center gap-1 w-full md:w-auto justify-center">
          {/* Action Buttons - Hide text on very small screens, show icon only */}
          <button
            onClick={onFavorite}
            className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-xl md:rounded-full hover:bg-gray-100 text-xs md:text-sm font-medium text-gray-700 transition-colors flex-1 md:flex-none"
          >
            <Star size={16} />
            <span className="md:inline">Favorite</span>
          </button>

          <button
            onClick={onAddToAlbum}
            className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-xl md:rounded-full hover:bg-gray-100 text-xs md:text-sm font-medium text-gray-700 transition-colors flex-1 md:flex-none"
          >
            <FolderPlus size={16} />
            <span className="md:inline">Album</span> {/* Shortened text on mobile */}
          </button>

          <button
            onClick={onMoveToTrash}
            className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-xl md:rounded-full hover:bg-red-50 text-xs md:text-sm font-medium text-red-600 transition-colors flex-1 md:flex-none"
          >
            <Trash2 size={16} />
            <span className="md:inline">Trash</span> {/* Shortened text on mobile */}
          </button>
        </div>

      </div>
    </div>
  );
};

export default SelectionActionBar;