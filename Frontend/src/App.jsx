import { useState } from 'react';
import Sidebar from './component/Sidebar';
import TopBar from './component/TopBar';
import PhotosView from './component/PhotosView';
import AlbumsView from './component/AlbumsView';
import UploadModal from './component/UploadModal';
import LoginPage from './pages/LoginPage'; // Import the new Login Page

const App = () => {
  // State to track authentication (default to false to show login first)
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  
  const [activeTab, setActiveTab] = useState('photos');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  // If not logged in, show the Login Page
  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />;
  }

  // Render logic for the Dashboard
  const renderContent = () => {
    switch (activeTab) {
      case 'photos': return <PhotosView />;
      case 'albums': return <AlbumsView />;
      default: return <PhotosView />; 
    }
  };

  // If logged in, show the App Dashboard
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

export default App;