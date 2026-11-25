import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../component/Sidebar';
import TopBar from '../component/TopBar';
import PhotosView from '../component/PhotosView';
import AlbumsView from '../component/AlbumsView';
import UploadModal from '../component/UploadModal';
import CreateAlbumModal from '../component/CreateAlbumModal';
import SettingsView from '../component/SettingsView'; // Import

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isCreateAlbumModalOpen, setIsCreateAlbumModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();

  const renderContent = () => {
    // Show settings if on /setting route
    if (location.pathname === '/setting') {
      return <SettingsView />;
    } else {
      return location.pathname = '/'
    }

    switch (activeTab) {
      case 'photos': 
        return <PhotosView />;
      case 'albums': 
        return <AlbumsView onCreateAlbumClick={() => setIsCreateAlbumModalOpen(true)} />;
      default: 
        return <PhotosView />; 
    }
  };

  const handleCreateAlbum = (albumName) => {
    console.log("Creating album:", albumName);
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-[#FAFAFA] font-sans text-gray-900">

      <TopBar 
        onUploadClick={() => setIsUploadModalOpen(true)} 
        onMenuClick={() => setIsSidebarOpen(true)} 
      />

      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        onUploadClick={() => setIsUploadModalOpen(true)}
        onCreateAlbumClick={() => setIsCreateAlbumModalOpen(true)}
      />

      <main className="ml-0 md:ml-[80px] lg:ml-[260px] h-[calc(100vh-72px)] mt-[72px] overflow-y-auto transition-all duration-300">
        <div className="px-4 md:px-8 py-8">
          {renderContent()}
        </div>
      </main>

      <UploadModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)} 
      />

      <CreateAlbumModal 
        isOpen={isCreateAlbumModalOpen}
        onClose={() => setIsCreateAlbumModalOpen(false)}
        onCreate={handleCreateAlbum}
      />
    </div>
  );
};

export default HomePage;