import { Image, Star, Folder, Trash2, Plus, HardDrive, X } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
  const navItems = [
    { id: 'photos', label: 'Photos & Videos', icon: <Image size={20} /> },
    { id: 'favorites', label: 'Favorites', icon: <Star size={20} /> },
    { id: 'albums', label: 'Albums', icon: <Folder size={20} /> },
    { id: 'trash', label: 'Trash', icon: <Trash2 size={20} /> },
  ];

  return (
    <>
      {/* Mobile Overlay (Dark backdrop when menu is open) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed top-[72px] left-0 h-[calc(100vh-72px)] bg-white border-r border-gray-200 z-50 flex flex-col justify-between transition-all duration-300
          lg:w-[260px] lg:translate-x-0
          md:w-[80px] md:translate-x-0
          w-[260px] ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div>
          {/* Mobile Close Button */}
          <div className="flex justify-end p-4 lg:hidden md:hidden">
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800">
              <X size={24} />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="px-4 space-y-3 pt-6 mb-6">
            <button className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-full py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
              <Plus size={16} /> <span className="md:hidden lg:block">Upload Photos</span>
            </button>
            <button className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-full py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
              <Folder size={16} /> <span className="md:hidden lg:block">Create Album</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="px-3 space-y-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false); // Close mobile menu on click
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors ${
                    isActive 
                      ? 'bg-brand-light text-brand' 
                      : 'text-gray-600 hover:bg-gray-50'
                  } md:justify-center lg:justify-start`}
                >
                  {item.icon}
                  <span className="md:hidden lg:block">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Storage Meter (Hidden on Tablet to save space) */}
        <div className="p-4 m-4 border border-gray-200 rounded-xl md:hidden lg:block">
          <div className="flex justify-between items-center text-sm mb-3">
            <span className="flex items-center gap-2 text-gray-600 font-medium">
              <HardDrive size={16} /> Storage
            </span>
            <span className="font-bold text-[13px] text-gray-900">34.2 MB</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5 mb-3">
            <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '35%' }}></div>
          </div>
          <div className="flex justify-between text-[11px] text-gray-400 font-medium">
            <span>11 media saved</span>
            <span>3 videos</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;