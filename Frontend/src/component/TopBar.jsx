import { Search, Sparkles, Upload, Menu } from 'lucide-react';

const TopBar = ({ onUploadClick, onMenuClick }) => {
  return (
    <header className="h-[72px] bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 fixed top-0 left-0 right-0 z-30">
      
      {/* Left: Hamburger (Mobile) & Logo */}
      <div className="flex items-center gap-3 md:w-[80px] lg:w-[236px]">
        {/* Hamburger Menu - Only visible on Mobile */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#FF0000" />
            <path d="M2 17L12 22L22 17" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-bold text-[17px] tracking-wide text-gray-900 hidden sm:block">MY PHOTOS</span>
        </div>
      </div>

      {/* Center: Search Bar (Hidden on very small screens, visible on md+) */}
      <div className="hidden md:flex flex-1 max-w-[700px] items-center bg-[#F3F4F6] rounded-full px-4 py-2.5 mx-4 lg:mx-8">
        <Search size={18} className="text-gray-500 ml-1" />
        <input 
          type="text" 
          placeholder="Search photos, videos..." 
          className="w-full bg-transparent border-none outline-none px-3 text-[14px] text-gray-700 placeholder-gray-500"
        />
        <div className="hidden lg:flex items-center gap-1.5 text-[13px] text-gray-500 cursor-pointer hover:text-gray-800 transition-colors border-l border-gray-300 pl-3 whitespace-nowrap">
          AI-Powered Search <Sparkles size={14} />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 md:gap-4 md:w-[80px] lg:w-[236px] justify-end">
        <button 
          onClick={onUploadClick}
          className="flex items-center gap-2 bg-red-500 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[14px] font-medium hover:bg-red-700 transition-colors shadow-sm"
        >
          <Upload size={16} /> <span className="hidden sm:block">Upload</span>
        </button>
        
        <div className="w-8 h-8 md:w-9 md:h-9 bg-[#FDE68A] text-[#92400E] rounded-full flex items-center justify-center font-bold text-[13px] cursor-pointer">
          DK
        </div>
      </div>
    </header>
  );
};

export default TopBar;