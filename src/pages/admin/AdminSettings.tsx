import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  UserIcon,
  BellIcon,
  ShieldCheckIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../../hooks/useAuth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

interface UserProfile {
  fullName: string;
  bio: string;
  notifications: {
    email: boolean;
    push: boolean;
    comments: boolean;
  };
  preferences: {
    darkMode: boolean;
    autoSave: boolean;
    analytics: boolean;
  };
}

function AdminSettings() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [profile, setProfile] = useState<UserProfile>({
    fullName: '',
    bio: '',
    notifications: {
      email: false,
      push: false,
      comments: false
    },
    preferences: {
      darkMode: false,
      autoSave: true,
      analytics: true
    }
  });

  useEffect(() => {
    if (user) {
      fetchUserProfile();
    }
  }, [user]);

  const fetchUserProfile = async () => {
    try {
      const userDoc = await getDoc(doc(db, 'users', user!.uid));
      if (userDoc.exists()) {
        setProfile(userDoc.data() as UserProfile);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleToggleChange = (section: 'notifications' | 'preferences', key: string) => {
    setProfile(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: !prev[section][key as keyof typeof prev[typeof section]]
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: '', text: '' });

    try {
      await updateDoc(doc(db, 'users', user!.uid), profile);
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
    } catch (error) {
      setMessage({ type: 'error', text: 'Error updating profile. Please try again.' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Settings</h2>

      {message.text && (
        <div className={`p-4 rounded-lg ${
          message.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
        }`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Profile Settings */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/20">
              <UserIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Profile Settings</h3>
              <p className="text-gray-400">Manage your account information</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={user?.email || ''}
                disabled
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 outline-none text-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Bio
              </label>
              <input
                type="text"
                name="bio"
                value={profile.bio}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-white"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/20">
              <BellIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Notification Settings</h3>
              <p className="text-gray-400">Configure your notification preferences</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { key: 'email', label: 'Email Notifications' },
              { key: 'push', label: 'Push Notifications' },
              { key: 'comments', label: 'Comment Notifications' }
            ].map(({ key, label }) => (
              <div key={key} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg">
                <span>{label}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={profile.notifications[key as keyof typeof profile.notifications]}
                    onChange={() => handleToggleChange('notifications', key)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* System Settings */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/20">
              <Cog6ToothIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">System Settings</h3>
              <p className="text-gray-400">Configure system preferences</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { key: 'darkMode', label: 'Dark Mode' },
              { key: 'autoSave', label: 'Auto-save' },
              { key: 'analytics', label: 'Analytics Tracking' }
            ].map(({ key, label }) => (
              <div key={key} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg">
                <span>{label}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={profile.preferences[key as keyof typeof profile.preferences]}
                    onChange={() => handleToggleChange('preferences', key)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={saving}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {saving ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
            ) : (
              'Save Changes'
            )}
          </motion.button>
        </div>
      </form>
    </div>
  );
}

export default AdminSettings;