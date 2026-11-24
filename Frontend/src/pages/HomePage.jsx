import { useState } from 'react';
import Sidebar from '../component/Sidebar';
import TopBar from '../component/TopBar';
import PhotosView from '../component/PhotosView';
import AlbumsView from '../component/AlbumsView';
import UploadModal from '../component/UploadModal';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'photos': return <PhotosView />;
      case 'albums': return <AlbumsView />;
      default: return <PhotosView />; 
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900">
      
      {/* TopBar is fixed at the top */}
      <TopBar onUploadClick={() => setIsUploadModalOpen(true)} />
      
      {/* Sidebar is fixed below the TopBar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main content is pushed down and to the right */}
      <main className="ml-[260px] pt-[96px] px-8 pb-8">
        {renderContent()}
      </main>

      <UploadModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)} 
      />
    </div>
  );
};

export default HomePage;