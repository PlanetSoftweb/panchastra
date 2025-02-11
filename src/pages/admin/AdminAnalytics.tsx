import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  ChartBarIcon,
  DocumentTextIcon,
  EyeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../hooks/useAuth';
import { CardSkeleton, ChartSkeleton } from '../../components/admin/SkeletonLoader';

function AdminAnalytics() {
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalPosts: 0,
    totalViews: 0,
    categories: 0,
    avgViews: 0
  });

  useEffect(() => {
    if (user) {
      fetchAnalytics();
    }
  }, [user]);

  const fetchAnalytics = async () => {
    try {
      // Fetch user's posts
      const postsQuery = query(collection(db, 'blogs'), where('author.id', '==', user?.uid));
      const postsSnapshot = await getDocs(postsQuery);
      const posts = postsSnapshot.docs;
      
      // Fetch user's categories
      const categoriesQuery = query(collection(db, 'categories'), where('userId', '==', user?.uid));
      const categoriesSnapshot = await getDocs(categoriesQuery);
      
      // Calculate statistics
      const totalPosts = posts.length;
      const totalViews = posts.reduce((sum, post) => sum + (post.data().views || 0), 0);
      const categories = categoriesSnapshot.docs.length;
      const avgViews = totalPosts > 0 ? Math.round(totalViews / totalPosts) : 0;

      setStats({
        totalPosts,
        totalViews,
        categories,
        avgViews
      });
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const analyticsCards = [
    {
      title: 'Total Posts',
      value: stats.totalPosts,
      icon: DocumentTextIcon,
      color: 'blue'
    },
    {
      title: 'Total Views',
      value: stats.totalViews,
      icon: EyeIcon,
      color: 'green'
    },
    {
      title: 'Categories',
      value: stats.categories,
      icon: GlobeAltIcon,
      color: 'purple'
    },
    {
      title: 'Avg. Views/Post',
      value: stats.avgViews,
      icon: ChartBarIcon,
      color: 'orange'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          [...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <CardSkeleton />
            </motion.div>
          ))
        ) : (
          analyticsCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${card.color}-500/20`}>
                    <Icon className={`w-6 h-6 text-${card.color}-500`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">{card.value}</h3>
                <p className="text-gray-400">{card.title}</p>
              </motion.div>
            );
          })
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {loading ? (
          [...Array(2)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <ChartSkeleton />
            </motion.div>
          ))
        ) : (
          <>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Views Overview</h3>
              <div className="h-64 flex items-center justify-center text-gray-400">
                Coming soon: Views analytics visualization
              </div>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
              <div className="h-64 flex items-center justify-center text-gray-400">
                Coming soon: Popular posts analytics
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AdminAnalytics;