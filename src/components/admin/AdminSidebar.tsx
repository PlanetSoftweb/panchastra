import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  HomeIcon,
  DocumentTextIcon,
  FolderIcon,
  Cog6ToothIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { SidebarSkeleton } from './SkeletonLoader';

const menuItems = [
  { path: '/blog/admin', icon: HomeIcon, label: 'Dashboard' },
  { path: '/blog/admin/posts', icon: DocumentTextIcon, label: 'Posts' },
  { path: '/blog/admin/categories', icon: FolderIcon, label: 'Categories' },
  { path: '/blog/admin/waitlist', icon: UserGroupIcon, label: 'Waitlist' },
  { path: '/blog/admin/settings', icon: Cog6ToothIcon, label: 'Settings' }
];

function AdminSidebar() {
  const location = useLocation();
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
      <aside className="w-64 min-h-screen bg-black/50 border-r border-white/10">
        <SidebarSkeleton />
      </aside>
    );
  }

  return (
    <aside className="w-64 min-h-screen bg-black/50 border-r border-white/10">
      <div className="p-6">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold title-font">Panchastra</span>
          <span className="px-2 py-1 text-xs bg-primary/20 rounded-full">ADMIN</span>
        </Link>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-2 px-6 py-3 relative ${
                isActive ? 'text-primary' : 'text-gray-400 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute left-0 w-1 h-full bg-primary"
                />
              )}
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default AdminSidebar;