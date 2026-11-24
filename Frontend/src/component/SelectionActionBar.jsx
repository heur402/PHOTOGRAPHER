import React from 'react';
import { X, Star, FolderPlus, Trash2 } from 'lucide-react';

const SelectionActionBar = ({ selectedCount, onClear, onFavorite, onAddToAlbum, onMoveToTrash }) => {
  if (selectedCount === 0) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 animate-slide-up">
      <div className="bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex items-center px-2 py-2 gap-1">
        
        {/* Clear Selection */}
        <button 
          onClick={onClear}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
          title="Clear selection"
        >
          <X size={16} />
        </button>

        {/* Selected Count */}
        <span className="text-sm font-semibold text-red-600 px-3 whitespace-nowrap">
          {selectedCount} selected
        </span>

        <div className="w-px h-5 bg-gray-200 mx-1"></div>

        {/* Action Buttons */}
        <button 
          onClick={onFavorite}
          className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 text-sm font-medium text-gray-700 transition-colors"
        >
          <Star size={16} /> Favorite
        </button>

        <button 
          onClick={onAddToAlbum}
          className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 text-sm font-medium text-gray-700 transition-colors"
        >
          <FolderPlus size={16} /> Add to album
        </button>

        <button 
          onClick={onMoveToTrash}
          className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-red-50 text-sm font-medium text-red-600 transition-colors"
        >
          <Trash2 size={16} /> Move to trash
        </button>

      </div>
    </div>
  );
};

export default SelectionActionBar;