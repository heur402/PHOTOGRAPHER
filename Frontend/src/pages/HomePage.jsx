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
  
  // New state for the Create Album Modal
  const [isCreateAlbumModalOpen, setIsCreateAlbumModalOpen] = useState(false); 

  const renderContent = () => {
    switch (activeTab) {
      case 'photos': 
        return <PhotosView />;
      case 'albums': 
        // Pass the function to open the modal down to AlbumsView
        return <AlbumsView onCreateAlbumClick={() => setIsCreateAlbumModalOpen(true)} />;
      default: 
        return <PhotosView />; 
    }
  };

  // Mock function to handle the creation (we will wire this to backend later)
  const handleCreateAlbum = (albumName) => {
    console.log("Creating album:", albumName);
    // Here you would typically send a POST request to your backend
  };

  return (
    // Changed to h-screen and overflow-hidden to stop window scrolling
    <div className="h-screen w-full overflow-hidden bg-[#FAFAFA] font-sans text-gray-900">
      
      {/* TopBar is fixed at the top */}
      <TopBar onUploadClick={() => setIsUploadModalOpen(true)} />
      
      {/* Sidebar is fixed below the TopBar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* 
        Main content:
        ml-[260px] pushes it past the sidebar.
        h-[calc(100vh-72px)] makes it fit exactly below the topbar.
        mt-[72px] pushes it down below the fixed topbar.
        overflow-y-auto allows ONLY this part to scroll.
      */}
      <main className="ml-[260px] h-[calc(100vh-72px)] mt-[72px] overflow-y-auto">
        <div className="px-8 py-8">
          {renderContent()}
        </div>
      </main>

      {/* Modals */}
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