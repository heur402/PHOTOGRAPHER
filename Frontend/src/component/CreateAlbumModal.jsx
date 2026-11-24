import React, { useState } from 'react';
import { X, FolderPlus } from 'lucide-react';

const CreateAlbumModal = ({ isOpen, onClose, onCreate }) => {
  const [albumName, setAlbumName] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (albumName.trim() === '') return;
    
    // Pass the new album data back to the parent component
    onCreate({ name: albumName, description });
    
    // Reset form and close
    setAlbumName('');
    setDescription('');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transform scale-100 transition-transform"
        onClick={e => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 flex justify-between items-start border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand">
              <FolderPlus size={20} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Create New Album</h2>
              <p className="text-sm text-gray-500">Group your photos into a new collection</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors p-1">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-4">
            {/* Album Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Album Name <span className="text-brand">*</span></label>
              <input 
                type="text" 
                value={albumName}
                onChange={(e) => setAlbumName(e.target.value)}
                placeholder="e.g., Summer Vacation, Family, Work..."
                className="w-full px-4 py-3 rounded-lg bg-[#F3F4F6] border-none outline-none focus:ring-2 focus:ring-gray-900 transition-all text-gray-900 placeholder-gray-500"
                autoFocus
                required
              />
            </div>

            {/* Description Textarea */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description <span className="text-gray-400 font-normal">(Optional)</span></label>
              <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add a short description for this album..."
                rows="3"
                className="w-full px-4 py-3 rounded-lg bg-[#F3F4F6] border-none outline-none focus:ring-2 focus:ring-gray-900 transition-all text-gray-900 placeholder-gray-500 resize-none"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
            <button 
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg font-medium text-gray-600 hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              disabled={!albumName.trim()}
              className="px-6 py-2.5 rounded-lg font-medium bg-black text-white hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Create Album
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default CreateAlbumModal;