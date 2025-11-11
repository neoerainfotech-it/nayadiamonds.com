import React, { useState } from 'react';
import { 
  UserIcon, 
  ShoppingBagIcon, 
  HeartIcon, 
  CogIcon, 
  ShieldCheckIcon,
  CreditCardIcon,
  MapPinIcon,
  BellIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  if (!user) {
    navigate('/login');
    return null;
  }

  // Handle profile edit
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Save changes to user profile (update context/localStorage in real app)
    // For demo, just disable editing
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(user);
    setIsEditing(false);
  };

  const tabs = [
    { id: 'profile', name: 'Profile', icon: UserIcon },
    { id: 'orders', name: 'Orders', icon: ShoppingBagIcon },
    { id: 'wishlist', name: 'Wishlist', icon: HeartIcon },
    { id: 'addresses', name: 'Addresses', icon: MapPinIcon },
    { id: 'payments', name: 'Payment Methods', icon: CreditCardIcon },
    { id: 'security', name: 'Security', icon: ShieldCheckIcon },
    { id: 'notifications', name: 'Notifications', icon: BellIcon },
    { id: 'settings', name: 'Settings', icon: CogIcon }
  ];

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-gold-600 text-white px-4 py-2 rounded-lg hover:bg-gold-700 transition-colors"
          >
            Edit Profile
          </button>
        ) : (
          <div className="space-x-3">
            <button
              onClick={handleSave}
              className="bg-gold-600 text-white px-4 py-2 rounded-lg hover:bg-gold-700 transition-colors"
            >
              Save Changes
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={formData.name || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          ) : (
            <p className="text-gray-900">{user.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          ) : (
            <p className="text-gray-900">{user.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          {isEditing ? (
            <input
              type="tel"
              name="phone"
              value={formData.phone || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          ) : (
            <p className="text-gray-900">{user.phone || '-'}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
          {isEditing ? (
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          ) : (
            <p className="text-gray-900">{user.dateOfBirth || '-'}</p>
          )}
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
          {isEditing ? (
            <textarea
              name="address"
              value={formData.address || ''}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          ) : (
            <p className="text-gray-900">{user.address || '-'}</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Order History</h3>
      <div className="space-y-4">
        {(user.orders && user.orders.length > 0) ? user.orders.map((order) => (
          <div key={order.id} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-semibold text-gray-900">{order.id}</h4>
                <p className="text-sm text-gray-600">{order.date}</p>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                  order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {order.status}
                </span>
                <p className="text-lg font-bold text-gray-900 mt-1">${order.total?.toLocaleString()}</p>
              </div>
            </div>
            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">{item.name} x{item.quantity}</span>
                  <span className="text-gray-900">${item.price?.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="text-gold-600 hover:text-gold-700 font-medium">
                View Details
              </button>
            </div>
          </div>
        )) : (
          <p className="text-gray-600">No orders found.</p>
        )}
      </div>
    </div>
  );

  const renderWishlist = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">My Wishlist</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(user.wishlist && user.wishlist.length > 0) ? user.wishlist.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-square bg-gray-100">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 mb-2">{item.name}</h4>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">${item.price?.toLocaleString()}</span>
                <button className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            </div>
          </div>
        )) : (
          <p className="text-gray-600">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );

  const renderPayments = () => (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
      {(user.payments && user.payments.length > 0) ? (
        <ul className="space-y-3">
          {user.payments.map((pm, idx) => (
            <li key={idx} className="border p-3 rounded flex justify-between items-center">
              <span>{pm.type} •••• {pm.last4}</span>
              <span className="text-gray-500">{pm.expiry}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No payment methods saved.</p>
      )}
      <button className="mt-4 bg-gold-600 text-white px-4 py-2 rounded">Add Payment Method</button>
    </div>
  );

  const renderSecurity = () => (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Security</h3>
      <p className="mb-2">Change your password or enable two-factor authentication.</p>
      <button className="bg-gold-600 text-white px-4 py-2 rounded">Change Password</button>
      <button className="ml-3 bg-gray-300 text-gray-700 px-4 py-2 rounded">Enable 2FA</button>
    </div>
  );

  const renderNotifications = () => (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
      <form className="space-y-3">
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={user.settings?.emailNotifications ?? true} readOnly />
          <span>Email Notifications</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={user.settings?.smsNotifications ?? false} readOnly />
          <span>SMS Notifications</span>
        </label>
      </form>
    </div>
  );

  const renderSettings = () => (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Settings</h3>
      <p>Account preferences and app settings will appear here.</p>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return renderProfile();
      case 'orders':
        return renderOrders();
      case 'wishlist':
        return renderWishlist();
      case 'payments':
        return renderPayments();
      case 'security':
        return renderSecurity();
      case 'notifications':
        return renderNotifications();
      case 'settings':
        return renderSettings();
      default:
        return (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <CogIcon className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Coming Soon</h3>
            <p className="text-gray-600">This feature is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
            <p className="text-gray-600 mt-2">Manage your profile, orders, and preferences</p>
          </div>
          <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <ul className="space-y-2">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-gold-50 text-gold-700 border border-gold-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <tab.icon className="w-5 h-5" />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;