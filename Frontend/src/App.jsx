import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* The default route shows the HomePage (Dashboard) */}
        <Route path="/" element={<HomePage />} />
        
        {/* The login route */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* The settings route */}
        <Route path="/setting" element={<HomePage />} />

        {/* Catch-all: redirect unknown URLs to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;