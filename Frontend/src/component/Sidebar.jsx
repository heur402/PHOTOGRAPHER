import { Image, Star, Folder, Trash2, Plus, CloudUpload } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'photos', label: 'Photos & Videos', icon: <Image size={20} /> },
    { id: 'favorites', label: 'Favorites', icon: <Star size={20} /> },
    { id: 'albums', label: 'Albums', icon: <Folder size={20} /> },
    { id: 'trash', label: 'Trash', icon: <Trash2 size={20} /> },
  ];

  return (
    <aside className="w-[260px] h-screen border-r border-gray-200 bg-white flex flex-col justify-between fixed left-0 top-0">
      <div>
        {/* Logo Area */}
        <div className="flex items-center gap-2 p-6">
          <div className="w-6 h-6 bg-gradient-to-tr from-purple-500 to-orange-400 rounded-md"></div>
          <span className="font-bold text-xl tracking-wide">MY PHOTOS</span>
        </div>

        {/* Action Buttons */}
        <div className="px-4 space-y-3 mb-6">
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-full py-2 text-sm font-medium hover:bg-gray-50 transition-colors">
            <Plus size={16} /> Upload Photos
          </button>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-full py-2 text-sm font-medium hover:bg-gray-50 transition-colors">
            <Folder size={16} /> Create Album
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-brand-light text-brand' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Storage Meter */}
      <div className="p-4 m-4 border border-gray-200 rounded-xl">
        <div className="flex justify-between items-center text-sm mb-2">
          <span className="flex items-center gap-2 text-gray-600 font-medium">
            <CloudUpload size={16} /> Storage
          </span>
          <span className="font-bold text-sm">34.2 MB</span>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-100 rounded-full h-1.5 mb-3">
          <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '35%' }}></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400">
          <span>11 media saved</span>
          <span>3 videos</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;