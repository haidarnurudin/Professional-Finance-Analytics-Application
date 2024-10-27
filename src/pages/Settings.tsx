import React from 'react';
import { Save, Bell, Lock, User, Globe, CreditCard } from 'lucide-react';

const settings = [
  {
    title: 'Profile Settings',
    icon: <User className="w-5 h-5" />,
    description: 'Manage your account information and preferences',
    items: ['Personal Information', 'Email Preferences', 'Language Settings']
  },
  {
    title: 'Notifications',
    icon: <Bell className="w-5 h-5" />,
    description: 'Configure how you receive alerts and updates',
    items: ['Email Notifications', 'Push Notifications', 'Alert Thresholds']
  },
  {
    title: 'Security',
    icon: <Lock className="w-5 h-5" />,
    description: 'Manage your security preferences and authentication',
    items: ['Password', 'Two-Factor Authentication', 'Login History']
  },
  {
    title: 'Billing',
    icon: <CreditCard className="w-5 h-5" />,
    description: 'Manage your subscription and payment methods',
    items: ['Payment Methods', 'Billing History', 'Subscription Plan']
  }
];

export const Settings: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-2 text-gray-600">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settings.map((section, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-500">
                {section.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <ul className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                  <span className="text-gray-700">{item}</span>
                  <Globe className="w-4 h-4 text-gray-400" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <button className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>
    </main>
  );
};