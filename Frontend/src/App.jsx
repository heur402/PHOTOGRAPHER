import { useState } from 'react';
import Sidebar from './component/Sidebar';
import TopBar from './component/TopBar';

// Placeholder for your content pages
const PhotosView = () => <div className="p-8">Photos Grid Goes Here...</div>;
const AlbumsView = () => <div className="p-8">Albums Grid Goes Here...</div>;

const App = () => {
  const [activeTab, setActiveTab] = useState('photos'); // 'photos', 'albums', 'favorites', etc.

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <TopBar />
      
      {/* Main Content Area */}
      <main className="ml-[260px]">
        {activeTab === 'photos' && <PhotosView />}
        {activeTab === 'albums' && <AlbumsView />}
        {/* Add other views based on activeTab */}
      </main>
    </div>
  );
};

export default App;