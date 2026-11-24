import { Search, Sparkles, Upload } from 'lucide-react';

const TopBar = ({ onUploadClick }) => {
    return (
        <header className="h-20 border-b border-gray-200 bg-white flex items-center justify-between px-8 sticky top-0 z-10 ml-[260px]">

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
                <div className="relative flex items-center w-full bg-gray-100 rounded-full px-4 py-2.5">
                    <Search size={18} className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search photos, videos, or albums..."
                        className="w-full bg-transparent border-none outline-none px-3 text-sm text-gray-700 placeholder-gray-400"
                    />
                    <div className="flex items-center gap-1 text-xs text-gray-500 cursor-pointer hover:text-gray-800 transition-colors border-l border-gray-300 pl-3">
                        AI-Powered Search <Sparkles size={14} />
                    </div>
                </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4 ml-8">
                <button
                    onClick={onUploadClick}
                    className="flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
                >
                    <Upload size={16} /> Upload
                </button>
                <div className="w-9 h-9 bg-orange-200 text-orange-800 rounded-full flex items-center justify-center font-bold text-sm cursor-pointer">
                    DK
                </div>
            </div>

        </header>
    );
};

export default TopBar;