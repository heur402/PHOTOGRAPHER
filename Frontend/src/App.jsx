import { useState } from 'react';
import LoginPage from './component/LoginPage';
import HomePage from './component/HomePage';

const App = () => {
  // Frontend-only authentication state
  // Set to false initially so it shows the login page first
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  return (
    <>
      {!isAuthenticated ? (
        // Pass a function to flip the state to true when they sign in/up
        <LoginPage onAuthSuccess={() => setIsAuthenticated(true)} />
      ) : (
        // Show the dashboard layout
        <HomePage />
      )}
    </>
  );
};

export default App;