import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserIcon,
  BellIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
  CameraIcon,
  XMarkIcon,
  ArrowUpTrayIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../../hooks/useAuth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { uploadImage } from '../../utils/imagekit';

interface UserProfile {
  fullName: string;
  bio: string;
  avatar: string;
  coverImage: string;
  socialLinks: {
    twitter: string;
    linkedin: string;
    github: string;
    website: string;
  };
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
  displaySettings: {
    showEmail: boolean;
    showBio: boolean;
    showSocial: boolean;
  };
}

function AdminSettings() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<'avatar' | 'cover'>('avatar');
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [profile, setProfile] = useState<UserProfile>({
    fullName: '',
    bio: '',
    avatar: '',
    coverImage: '',
    socialLinks: {
      twitter: '',
      linkedin: '',
      github: '',
      website: ''
    },
    notifications: {
      email: false,
      push: false,
      comments: false
    },
    preferences: {
      darkMode: false,
      autoSave: true,
      analytics: true
    },
    displaySettings: {
      showEmail: true,
      showBio: true,
      showSocial: true
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
        const userData = userDoc.data() as UserProfile;
        setProfile(userData);
        setAvatarPreview(userData.avatar);
        setCoverPreview(userData.coverImage);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSocialChange = (network: keyof UserProfile['socialLinks'], value: string) => {
    setProfile(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [network]: value
      }
    }));
  };

  const handleToggleChange = (section: 'notifications' | 'preferences' | 'displaySettings', key: string) => {
    setProfile(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: !prev[section][key as keyof typeof prev[typeof section]]
      }
    }));
  };

  const handleImageClick = (type: 'avatar' | 'cover') => {
    setActiveImage(type);
    setIsImageModalOpen(true);
  };

  const handleImageUpload = async (file: File) => {
    try {
      const imageUrl = await uploadImage(file);
      if (activeImage === 'avatar') {
        setProfile(prev => ({ ...prev, avatar: imageUrl }));
        setAvatarPreview(imageUrl);
      } else {
        setProfile(prev => ({ ...prev, coverImage: imageUrl }));
        setCoverPreview(imageUrl);
      }
      setIsImageModalOpen(false);
    } catch (error) {
      console.error('Error uploading image:', error);
      setMessage({ type: 'error', text: 'Error uploading image. Please try again.' });
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setMessage({ type: 'error', text: 'Image size should be less than 5MB' });
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        if (activeImage === 'avatar') {
          setAvatarPreview(reader.result as string);
        } else {
          setCoverPreview(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
      handleImageUpload(file);
    }
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
        {/* Profile Images */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/20">
              <CameraIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Profile Images</h3>
              <p className="text-gray-400">Customize your profile appearance</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Cover Image */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Cover Image
              </label>
              <div 
                className="relative h-48 rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => handleImageClick('cover')}
              >
                {coverPreview ? (
                  <img 
                    src={coverPreview} 
                    alt="Cover" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-white/5 flex items-center justify-center">
                    <ArrowUpTrayIcon className="w-8 h-8 text-gray-400" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white font-medium">Change Cover Image</p>
                </div>
              </div>
            </div>

            {/* Avatar */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Profile Picture
              </label>
              <div className="flex items-center space-x-6">
                <div 
                  className="relative w-32 h-32 rounded-full overflow-hidden cursor-pointer group"
                  onClick={() => handleImageClick('avatar')}
                >
                  {avatarPreview ? (
                    <img 
                      src={avatarPreview} 
                      alt="Avatar" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-white/5 flex items-center justify-center">
                      <UserIcon className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white font-medium text-sm">Change Avatar</p>
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  <p>Recommended: Square image</p>
                  <p>Maximum size: 5MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-white"
              />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/20">
              <ShieldCheckIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Social Links</h3>
              <p className="text-gray-400">Connect your social profiles</p>
            </div>
          </div>

          <div className="space-y-4">
            {Object.entries(profile.socialLinks).map(([network, value]) => (
              <div key={network}>
                <label className="block text-sm font-medium text-gray-300 mb-2 capitalize">
                  {network}
                </label>
                <input
                  type="url"
                  value={value}
                  onChange={(e) => handleSocialChange(network as keyof UserProfile['socialLinks'], e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-white"
                  placeholder={`https://${network}.com/username`}
                />
              </div>
            ))}
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

        {/* Display Settings */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/20">
              <Cog6ToothIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Display Settings</h3>
              <p className="text-gray-400">Control what others can see</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { key: 'showEmail', label: 'Show Email' },
              { key: 'showBio', label: 'Show Bio' },
              { key: 'showSocial', label: 'Show Social Links' }
            ].map(({ key, label }) => (
              <div key={key} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg">
                <span>{label}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={profile.displaySettings[key as keyof typeof profile.displaySettings]}
                    onChange={() => handleToggleChange('displaySettings', key)}
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

      {/* Image Upload Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card p-6 max-w-md w-full mx-4"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">
                  Upload {activeImage === 'avatar' ? 'Profile Picture' : 'Cover Image'}
                </h3>
                <button
                  onClick={() => setIsImageModalOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div
                  className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <ArrowUpTrayIcon className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-300">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-400 mt-2">Maximum file size: 5MB</p>
                </div>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AdminSettings;