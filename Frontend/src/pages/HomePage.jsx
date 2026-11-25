import { useState } from 'react';
import Sidebar from '../component/Sidebar';
import TopBar from '../component/TopBar';
import PhotosView from '../component/PhotosView';
import AlbumsView from '../component/AlbumsView';
import UploadModal from '../component/UploadModal';
import CreateAlbumModal from '../component/CreateAlbumModal';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isCreateAlbumModalOpen, setIsCreateAlbumModalOpen] = useState(false);
  
  // New state for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'photos': return <PhotosView />;
      case 'albums': return <AlbumsView onCreateAlbumClick={() => setIsCreateAlbumModalOpen(true)} />;
      default: return <PhotosView />; 
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-[#FAFAFA] font-sans text-gray-900">
      
      {/* Pass the mobile menu toggle to TopBar */}
      <TopBar 
        onUploadClick={() => setIsUploadModalOpen(true)} 
        onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      
      {/* Pass the mobile state to Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
      />
      
      {/* Update main content margins for responsive layout */}
      <main className="lg:ml-[260px] md:ml-[80px] ml-0 h-[calc(100vh-72px)] mt-[72px] overflow-y-auto transition-all duration-300">
        <div className="px-4 md:px-6 lg:px-8 py-6 lg:py-8">
          {renderContent()}
        </div>
      </main>

      <UploadModal isOpen={isUploadModalOpen} onClose={() => setIsUploadModalOpen(false)} />
      <CreateAlbumModal 
        isOpen={isCreateAlbumModalOpen} 
        onClose={() => setIsCreateAlbumModalOpen(false)} 
        onCreate={(name) => console.log(name)} 
      />
    </div>
  );
};

export default HomePage;