import React from 'react';
import { notifications } from '../data/membershipData';
import { Bell, Calendar, Gift, Users, Coffee, AlertTriangle } from 'lucide-react';

const Notifications: React.FC = () => {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'offer': return Gift;
      case 'event': return Calendar;
      case 'holiday': return Coffee;
      case 'batch': return Users;
      default: return Bell;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'offer': return 'from-green-500 to-emerald-500';
      case 'event': return 'from-blue-500 to-cyan-500';
      case 'holiday': return 'from-orange-500 to-red-500';
      case 'batch': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const urgentNotifications = notifications.filter(n => n.urgent);
  const regularNotifications = notifications.filter(n => !n.urgent);

  return (
    <div 
      className="min-h-screen bg-slate-900 py-8"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url('https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Notifications</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest news, offers, and events at PrimeFit Studio
          </p>
        </div>

        {/* Urgent Notifications */}
        {urgentNotifications.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-6 w-6 text-red-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Urgent Updates</h2>
            </div>
            <div className="space-y-4">
              {urgentNotifications.map((notification) => {
                const IconComponent = getNotificationIcon(notification.type);
                return (
                  <div key={notification.id} className="bg-red-500/20 border border-red-500/30 backdrop-blur-sm rounded-xl p-6 hover:bg-red-500/30 transition-colors">
                    <div className="flex items-start">
                      <div className={`bg-gradient-to-r ${getNotificationColor(notification.type)} w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-semibold text-white">{notification.title}</h3>
                          <span className="text-red-400 text-sm font-medium mt-1 sm:mt-0">
                            {formatDate(notification.date)}
                          </span>
                        </div>
                        <p className="text-gray-300">{notification.message}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Regular Notifications */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Bell className="h-6 w-6 text-blue-400 mr-3" />
            Latest Updates
          </h2>
          <div className="space-y-4">
            {regularNotifications.map((notification) => {
              const IconComponent = getNotificationIcon(notification.type);
              return (
                <div key={notification.id} className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/80 transition-colors">
                  <div className="flex items-start">
                    <div className={`bg-gradient-to-r ${getNotificationColor(notification.type)} w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{notification.title}</h3>
                        <span className="text-gray-400 text-sm font-medium mt-1 sm:mt-0">
                          {formatDate(notification.date)}
                        </span>
                      </div>
                      <p className="text-gray-300">{notification.message}</p>
                      <div className="mt-3">
                        <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                          notification.type === 'offer' ? 'bg-green-500/20 text-green-400' :
                          notification.type === 'event' ? 'bg-blue-500/20 text-blue-400' :
                          notification.type === 'holiday' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>
                          {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Never Miss an Update</h2>
          <p className="text-blue-100 mb-6">Subscribe to our notifications for exclusive offers and important updates</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;