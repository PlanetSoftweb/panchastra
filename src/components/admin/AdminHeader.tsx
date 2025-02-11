import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import {
  BellIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';
import { HeaderSkeleton } from './SkeletonLoader';
import { Link } from 'react-router-dom';

function AdminHeader() {
  const { user, signOut } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <header className="bg-white/5 border-b border-white/10">
        <HeaderSkeleton />
      </header>
    );
  }

  return (
    <header className="bg-white/5 border-b border-white/10 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
            <BellIcon className="w-6 h-6" />
          </button>
          
          <Link to="/blog/admin/settings" className="p-2 hover:bg-white/5 rounded-lg transition-colors">
            <Cog6ToothIcon className="w-6 h-6" />
          </Link>
          
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-3 p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <UserCircleIcon className="w-8 h-8" />
              )}
              <span className="hidden sm:block">{user?.email}</span>
            </button>
            
            {showProfileMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="absolute right-0 mt-2 w-48 glass-card"
              >
                <div className="py-2">
                  <Link
                    to="/blog/admin/settings"
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-white/5 transition-colors"
                  >
                    <UserCircleIcon className="w-5 h-5" />
                    <span>Profile</span>
                  </Link>
                  <button
                    onClick={signOut}
                    className="w-full flex items-center space-x-2 px-4 py-2 text-red-400 hover:bg-white/5 transition-colors"
                  >
                    <ArrowRightOnRectangleIcon className="w-5 h-5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;