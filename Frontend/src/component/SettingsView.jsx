import { useState } from 'react';
import { User, Bell, Shield, Palette, HardDrive, Check } from 'lucide-react';

const SettingsView = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User size={18} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
    { id: 'privacy', label: 'Privacy & Security', icon: <Shield size={18} /> },
    { id: 'appearance', label: 'Appearance', icon: <Palette size={18} /> },
    { id: 'storage', label: 'Storage', icon: <HardDrive size={18} /> },
  ];

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your account preferences and app settings.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Settings Navigation Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0 hide-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-brand-light text-brand'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Settings Content Area */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm">
          
          {/* PROFILE TAB */}
          {activeTab === 'profile' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1">Profile Information</h2>
                <p className="text-sm text-gray-500 mb-6">Update your account details and public profile.</p>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-[#FDE68A] text-[#92400E] rounded-full flex items-center justify-center font-bold text-2xl">
                  DK
                </div>
                <div>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors mb-2">
                    Change Avatar
                  </button>
                  <p className="text-xs text-gray-500">JPG, GIF or PNG. Max size of 800K</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" defaultValue="David Kim" className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" defaultValue="david@example.com" className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all" />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button className="px-6 py-2.5 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
                  <Check size={16} /> Save Changes
                </button>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS TAB */}
          {activeTab === 'notifications' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1">Notifications</h2>
                <p className="text-sm text-gray-500 mb-6">Choose what you want to be notified about.</p>
              </div>

              {[
                { title: 'New Features', desc: 'Be the first to know when we release new features.' },
                { title: 'Storage Alerts', desc: 'Get notified when your storage is almost full.' },
                { title: 'Shared Albums', desc: 'Receive updates when someone adds photos to a shared album.' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked={i !== 1} />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
                  </label>
                </div>
              ))}
            </div>
          )}

          {/* STORAGE TAB */}
          {activeTab === 'storage' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1">Storage Usage</h2>
                <p className="text-sm text-gray-500 mb-6">View how your storage is being used.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Total Used</p>
                    <p className="text-3xl font-bold text-gray-900">34.2 MB <span className="text-lg text-gray-400 font-normal">/ 15 GB</span></p>
                  </div>
                  <button className="text-sm font-medium text-brand hover:underline">Upgrade Plan</button>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div className="bg-orange-500 h-3 rounded-full" style={{ width: '35%' }}></div>
                </div>
                <p className="text-xs text-gray-500 text-right">0.2% of 15 GB used</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-gray-100 bg-white">
                  <p className="text-sm text-gray-500 mb-1">Photos</p>
                  <p className="text-xl font-semibold text-gray-900">28.4 MB</p>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 bg-white">
                  <p className="text-sm text-gray-500 mb-1">Videos</p>
                  <p className="text-xl font-semibold text-gray-900">5.8 MB</p>
                </div>
              </div>
            </div>
          )}

          {/* Fallback for other tabs */}
          {(activeTab === 'privacy' || activeTab === 'appearance') && (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4">
                {tabs.find(t => t.id === activeTab)?.icon}
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Coming Soon</h2>
              <p className="text-sm text-gray-500 mt-1">We are working hard on this feature.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default SettingsView;