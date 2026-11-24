import { useState } from 'react';
import { Trash2, RotateCcw, Play } from 'lucide-react';

const initialItems = [
  { id: 201, type: 'image', name: 'hero bg img', url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop' },
  { id: 202, type: 'video', name: 'trip japan clip', url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop' },
  { id: 203, type: 'image', name: 'portrait shot', url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop' },
  { id: 204, type: 'image', name: 'food close up', url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' },
  { id: 205, type: 'video', name: 'studio session', url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop' },
  { id: 206, type: 'image', name: 'team photo', url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop' },
];

const TrashView = ({ onMediaClick }) => {
  const [items, setItems] = useState(initialItems);

  const restore = (id) => setItems(prev => prev.filter(i => i.id !== id));
  const deletePermanently = (id) => setItems(prev => prev.filter(i => i.id !== id));
  const clearTrash = () => setItems([]);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 flex items-center gap-3">
            Trash
            <span className="bg-gray-100 text-gray-500 text-sm py-0.5 px-2.5 rounded-full font-medium">{items.length}</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1">Items in trash can be restored or permanently removed</p>
        </div>

        {items.length > 0 && (
          <button
            onClick={clearTrash}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-50 text-red-600 font-medium text-sm hover:bg-red-100 transition-colors border border-red-100"
          >
            <Trash2 size={16} />
            Clear Trash
          </button>
        )}
      </div>

      {/* Empty State */}
      {items.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Trash2 size={28} className="text-gray-400" />
          </div>
          <p className="text-gray-700 font-medium">Trash is empty</p>
          <p className="text-gray-400 text-sm mt-1">Deleted items will appear here</p>
        </div>
      )}

      {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {items.map(item => (
          <div key={item.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Thumbnail */}
            <div
              className="relative aspect-square cursor-pointer"
              onClick={() => onMediaClick?.(item)}
            >
              <img src={item.url} alt={item.name} className="w-full h-full object-cover" />
              {item.type === 'video' && (
                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-0.5 rounded text-xs flex items-center gap-1">
                  <Play size={10} className="fill-white" /> Video
                </div>
              )}
            </div>

            {/* Card Footer */}
            <div className="px-3 py-2.5 flex items-center justify-between gap-2">
              <p className="text-xs font-medium text-gray-700 truncate">{item.name}</p>
              <div className="flex items-center gap-1 shrink-0">
                {/* Restore */}
                <button
                  onClick={() => restore(item.id)}
                  title="Restore"
                  className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-green-50 text-gray-400 hover:text-green-600 transition-colors"
                >
                  <RotateCcw size={14} />
                </button>
                {/* Delete permanently */}
                <button
                  onClick={() => deletePermanently(item.id)}
                  title="Delete permanently"
                  className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrashView;
