import { useState } from 'react';
import { Play, Image as ImageIcon, Video, Star, Check } from 'lucide-react';
import SelectionActionBar from './SelectionActionBar'; // Import the new component

const PhotosView = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedIds, setSelectedIds] = useState([]); // Track selected photos

  // Mock Data
  const groups = [
    {
      date: 'Yesterday',
      count: 2,
      items: [
        { id: 1, type: 'video', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop' },
        { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop' }
      ]
    },
    {
      date: 'Mon, Oct 12, 2026',
      count: 4,
      items: [
        { id: 3, type: 'image', url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop' },
        { id: 4, type: 'image', url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop' },
        { id: 5, type: 'image', url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop' },
        { id: 6, type: 'image', url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' }
      ]
    }
  ];

  // Toggle a single photo
  const toggleSelection = (e, id) => {
    e.stopPropagation();
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Toggle an entire date group (Select All)
  const toggleGroupSelection = (groupItems) => {
    const groupIds = groupItems.map(item => item.id);
    const allSelected = groupIds.every(id => selectedIds.includes(id));
    
    if (allSelected) {
      setSelectedIds(prev => prev.filter(id => !groupIds.includes(id)));
    } else {
      setSelectedIds(prev => [...new Set([...prev, ...groupIds])]);
    }
  };

  return (
    <div className="animate-fade-in relative min-h-screen pb-24">
      {/* Header */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 flex items-center gap-3">
            Photos & Videos 
            <span className="bg-gray-100 text-gray-500 text-sm py-0.5 px-2.5 rounded-full font-medium">8</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1">All your preserved photos and videos, automatically organized by date</p>
        </div>

        {/* Filter Toggles */}
        <div className="flex bg-gray-100 p-1 rounded-full">
          {['All', 'Photos', 'Videos'].map((filter) => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 transition-all ${
                activeFilter === filter 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {filter === 'Photos' && <ImageIcon size={14}/>}
              {filter === 'Videos' && <Video size={14}/>}
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Groups */}
      {groups.map((group, index) => {
        const groupIds = group.items.map(item => item.id);
        const isGroupSelected = groupIds.every(id => selectedIds.includes(id));

        return (
          <div key={index} className="mb-8">
            {/* Date Header */}
            <div className="flex items-center gap-3 mb-4">
              <button 
                onClick={() => toggleGroupSelection(group.items)}
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                  isGroupSelected ? 'bg-brand border-brand' : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {isGroupSelected && <Check size={10} className="text-white" />}
              </button>
              <h2 className="text-base font-semibold text-gray-700">
                {group.date} <span className="text-gray-400 font-normal text-sm ml-1">({group.count})</span>
              </h2>
            </div>
            
            {/* Photo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {group.items.map(item => {
                const isSelected = selectedIds.includes(item.id);
                return (
                  <div 
                    key={item.id} 
                    className={`group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-gray-200 transition-all ${
                      isSelected ? 'ring-4 ring-brand ring-offset-2' : ''
                    }`}
                  >
                    <img 
                      src={item.url} 
                      alt="media" 
                      className={`w-full h-full object-cover transition-transform duration-300 ${isSelected ? 'scale-105' : 'group-hover:scale-105'}`} 
                    />
                    
                    {isSelected && <div className="absolute inset-0 bg-black/20"></div>}

                    {/* Checkbox (Top Left) */}
                    <button 
                      onClick={(e) => toggleSelection(e, item.id)}
                      className={`absolute top-3 left-3 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all z-10 ${
                        isSelected 
                          ? 'bg-brand border-brand' 
                          : 'border-white bg-black/20 opacity-0 group-hover:opacity-100 hover:bg-black/40'
                      }`}
                    >
                      {isSelected && <Check size={14} className="text-white" />}
                    </button>

                    {/* Video Badge */}
                    {item.type === 'video' && (
                      <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                        <Play size={12} className="fill-white" /> Video
                      </div>
                    )}
                    
                    {/* Favorite Star */}
                    {item.id === 1 && (
                      <Star className="absolute top-3 right-3 text-yellow-500 fill-yellow-500 drop-shadow-md" size={20} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Floating Action Bar */}
      <SelectionActionBar 
        selectedCount={selectedIds.length}
        onClear={() => setSelectedIds([])}
        onFavorite={() => console.log('Favorite', selectedIds)}
        onAddToAlbum={() => console.log('Add to album', selectedIds)}
        onMoveToTrash={() => {
          console.log('Move to trash', selectedIds);
          setSelectedIds([]); // Clear after moving
        }}
      />
    </div>
  );
};

export default PhotosView;