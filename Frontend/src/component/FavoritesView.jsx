import { useState } from 'react';
import { Star, Play, Check } from 'lucide-react';
import SelectionActionBar from './SelectionActionBar';

const groups = [
  {
    date: 'Today',
    items: [
      { id: 101, type: 'image', url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop' },
      { id: 102, type: 'video', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop' },
      { id: 103, type: 'image', url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop' },
    ],
  },
  {
    date: 'Mon, Oct 12, 2026',
    items: [
      { id: 104, type: 'image', url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop' },
      { id: 105, type: 'image', url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' },
    ],
  },
];

const totalCount = groups.reduce((sum, g) => sum + g.items.length, 0);

const FavoritesView = ({ onMediaClick }) => {
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleSelection = (e, id) => {
    e.stopPropagation();
    setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const toggleGroupSelection = (items) => {
    const ids = items.map(i => i.id);
    const allSelected = ids.every(id => selectedIds.includes(id));
    setSelectedIds(prev =>
      allSelected ? prev.filter(id => !ids.includes(id)) : [...new Set([...prev, ...ids])]
    );
  };

  return (
    <div className="animate-fade-in relative min-h-screen pb-24">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-900 flex items-center gap-3">
          Favorites
          <span className="bg-gray-100 text-gray-500 text-sm py-0.5 px-2.5 rounded-full font-medium">{totalCount}</span>
        </h1>
        <p className="text-gray-500 text-sm mt-1">Your starred photos and videos for quick access</p>
      </div>

      {/* Date Groups */}
      {groups.map((group, index) => {
        const groupIds = group.items.map(i => i.id);
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
                {group.date} <span className="text-gray-400 font-normal text-sm ml-1">({group.items.length})</span>
              </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {group.items.map(item => {
                const isSelected = selectedIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => onMediaClick?.(item)}
                    className={`group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-gray-200 transition-all ${
                      isSelected ? 'ring-4 ring-brand ring-offset-2' : ''
                    }`}
                  >
                    <img
                      src={item.url}
                      alt="favorite media"
                      className={`w-full h-full object-cover transition-transform duration-300 ${isSelected ? 'scale-105' : 'group-hover:scale-105'}`}
                    />

                    {isSelected && <div className="absolute inset-0 bg-black/20" />}

                    {/* Checkbox */}
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

                    {/* Favorite Star — always visible */}
                    <Star className="absolute top-3 right-3 text-yellow-400 fill-yellow-400 drop-shadow-md" size={20} />

                    {/* Video Badge */}
                    {item.type === 'video' && (
                      <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                        <Play size={12} className="fill-white" /> Video
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <SelectionActionBar
        selectedCount={selectedIds.length}
        onClear={() => setSelectedIds([])}
        onFavorite={() => console.log('Unfavorite', selectedIds)}
        onAddToAlbum={() => console.log('Add to album', selectedIds)}
        onMoveToTrash={() => { console.log('Move to trash', selectedIds); setSelectedIds([]); }}
      />
    </div>
  );
};

export default FavoritesView;
