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

  const renderContent = () => {
    switch (activeTab) {
      case 'photos': return <PhotosView />;
      case 'albums': return <AlbumsView onCreateAlbumClick={() => setIsCreateAlbumModalOpen(true)} />;
      default: return <PhotosView />; 
    }
  };

  const handleCreateAlbum = (albumData) => {
    console.log("Creating album:", albumData.name);
    console.log("Description:", albumData.description);
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-[#FAFAFA] font-sans text-gray-900">
      
      <TopBar onUploadClick={() => setIsUploadModalOpen(true)} />
      
      {/* Pass the click handlers down to the Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onUploadClick={() => setIsUploadModalOpen(true)}
        onCreateAlbumClick={() => setIsCreateAlbumModalOpen(true)}
      />
      
      <main className="ml-[260px] h-[calc(100vh-72px)] mt-[72px] overflow-y-auto">
        <div className="px-8 py-8">
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