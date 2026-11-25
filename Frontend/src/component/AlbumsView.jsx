import { Plus } from 'lucide-react';

const AlbumsView = ({ onCreateAlbumClick }) => {
  const albums = [
    { title: 'Paintings', count: 1, cover: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop' },
    { title: 'Foods', count: 1, cover: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' },
    { title: 'Trip Japan', count: 1, cover: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-900 flex items-center gap-3">
          Albums 
          <span className="bg-gray-100 text-gray-500 text-sm py-0.5 px-2.5 rounded-full font-medium">3</span>
        </h1>
        <p className="text-gray-500 text-sm mt-1">Group your photos into beautiful stories</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Create New Album Card - Changed to button and added onClick */}
        <button 
          onClick={onCreateAlbumClick}
          className="border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center h-64 cursor-pointer hover:border-brand hover:bg-#FFF0F0 transition-all group w-full outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
        >
          <div className="w-12 h-12 bg-#FFF0F0 rounded-full flex items-center justify-center text-brand mb-3 group-hover:bg-#FF0000 group-hover:text-white transition-colors">
            <Plus size={24} />
          </div>
          <span className="font-medium text-gray-700">New Album</span>
        </button>

        {/* Existing Albums */}
        {albums.map((album, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer">
            <img src={album.cover} alt={album.title} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-900 mb-1">{album.title}</h3>
              <p className="text-sm text-gray-500">{album.count} item</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default AlbumsView;