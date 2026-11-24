import { useState } from 'react';
import Sidebar from './component/Sidebar';
import TopBar from './component/TopBar';
import PhotosView from './component/PhotosView';
import AlbumsView from './component/AlbumsView';
import UploadModal from './component/UploadModal';

const App = () => {
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
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Make sure to update TopBar.jsx to accept this prop! */}
      <TopBar onUploadClick={() => setIsUploadModalOpen(true)} />
      
      <main className="ml-[260px] p-8">
        {renderContent()}
      </main>

      <UploadModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)} 
      />
    </div>
  );
};

export default App;