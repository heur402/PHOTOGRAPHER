import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend only: Just trigger the success callback to move to homepage
    onAuthSuccess(); 
  };

  return (
    <div className="flex h-screen w-full bg-white font-sans">
      
      {/* Left Side - Image & Branding */}
      <div className="hidden lg:flex w-1/2 relative bg-black overflow-hidden rounded-r-[2rem] my-4 ml-4">
        <img 
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop" 
          alt="Abstract background" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute bottom-0 left-0 p-12 z-10 text-white">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">MY Photos</h1>
          <p className="text-lg text-gray-200">Safely store and organize your HD photos and videos.</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 relative">
        
        {/* Top Logo */}
        <div className="absolute top-12 flex items-center justify-center">
           <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#FF0000" />
            <path d="M2 17L12 22L22 17" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-4xl text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              {isLogin ? 'Welcome Back' : 'Create an Account'}
            </h2>
            <p className="text-gray-500 text-sm">
              {isLogin 
                ? 'Enter your email and password to access your photo library' 
                : 'Sign up to start storing and organizing your photos'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Full Name Field (Only for Sign Up) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg bg-[#F3F4F6] border-none outline-none focus:ring-2 focus:ring-gray-900 transition-all text-gray-900 placeholder-gray-500"
                  required
                />
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-[#F3F4F6] border-none outline-none focus:ring-2 focus:ring-gray-900 transition-all text-gray-900 placeholder-gray-500"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-lg bg-[#F3F4F6] border-none outline-none focus:ring-2 focus:ring-gray-900 transition-all text-gray-900 placeholder-gray-500"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me / Forgot Password (Only for Login) */}
            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black accent-black" />
                  Remember me
                </label>
                <a href="#" className="font-medium text-gray-600 hover:text-gray-900">Forgot Password</a>
              </div>
            )}

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-black text-white py-3.5 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-2"
            >
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </form>

          {/* Toggle between Login / Sign Up */}
          <p className="text-center text-sm text-gray-500 mt-8">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="font-semibold text-gray-900 hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;