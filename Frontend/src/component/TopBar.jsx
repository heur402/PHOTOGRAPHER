import { useState } from 'react';
import { Search, Sparkles, Upload, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TopBar = ({ onUploadClick, onMenuClick }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="h-[72px] bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 fixed top-0 left-0 right-0 z-30">
      
      {/* Left: Mobile Menu Button & Logo */}
      <div className="flex items-center gap-3 md:w-[236px]">
        {/* Mobile Menu Button (Only visible on small screens) */}
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <div className="flex items-center gap-2.5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#FF0000" />
            <path d="M2 17L12 22L22 17" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-bold text-[17px] tracking-wide text-gray-900 hidden sm:block">MY PHOTOS</span>
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className="hidden md:flex flex-1 max-w-[700px] items-center bg-[#F3F4F6] rounded-full px-4 py-2.5 mx-8">
        <Search size={18} className="text-gray-500 ml-1" />
        <input 
          type="text" 
          placeholder="Search photos, videos, or albums..." 
          className="w-full bg-transparent border-none outline-none px-3 text-[14px] text-gray-700 placeholder-gray-500"
        />
        <div className="flex items-center gap-1.5 text-[13px] text-gray-500 cursor-pointer hover:text-gray-800 transition-colors border-l border-gray-300 pl-3 whitespace-nowrap">
          AI-Powered Search <Sparkles size={14} />
        </div>
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-2 md:gap-4 md:w-[236px] justify-end relative">
        <button 
          onClick={onUploadClick}
          className="flex items-center gap-2 bg-red-600 text-white px-3 md:px-5 py-2 md:py-2.5 rounded-full text-sm font-medium hover:bg-red-700 transition-colors shadow-sm"
        >
          <Upload size={16} /> <span className="hidden sm:block">Upload</span>
        </button>
        
        {/* Profile Avatar & Dropdown */}
        <div className="relative">
          <div 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="w-9 h-9 bg-[#FDE68A] text-[#92400E] rounded-full flex items-center justify-center font-bold text-[13px] cursor-pointer hover:ring-2 hover:ring-gray-200 transition-all select-none"
          >
            DK
          </div>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <>
              {/* Invisible overlay to close dropdown when clicking outside */}
              <div className="fixed inset-0 z-40" onClick={() => setIsProfileOpen(false)}></div>

              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 animate-fade-in">
                <button 
                  onClick={() => { navigate('/setting'); setIsProfileOpen(false); }}
                  className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Settings size={16} /> Settings
                </button>
                <div className="h-px bg-gray-100 my-1"></div>
                <button 
                  onClick={() => navigate('/login')}
                  className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={16} /> Log out
                </button>
              </div>
            </>
          )}
        </div>
      </div>

    </header>
  );
};

export default TopBar;