import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  DocumentTextIcon,
  ChartBarIcon,
  EyeIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  FolderIcon,
  UserGroupIcon,
  GlobeAltIcon,
  FireIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { collection, getDocs, query, orderBy, limit, where, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../hooks/useAuth';
import { CardSkeleton, TableRowSkeleton, ChartSkeleton } from '../../components/admin/SkeletonLoader';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: Timestamp;
  views: number;
  author: {
    id: string;
    name: string;
  };
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  postCount: number;
  totalViews: number;
}

interface DashboardStats {
  // Website Stats
  totalPosts: number;
  totalViews: number;
  totalUsers: number;
  activeUsers: number;
  totalCategories: number;
  averageViewsPerPost: number;
  topCategories: { name: string; count: number }[];
  trendingPosts: BlogPost[];
  recentPosts: BlogPost[];
  
  // Growth Stats
  viewsGrowth: number;
  postsGrowth: number;
  usersGrowth: number;
  
  // User Stats
  topContributors: User[];
  userEngagement: { date: string; count: number }[];
  
  // Your Stats
  yourPosts: number;
  yourViews: number;
  yourCategories: string[];
  yourRecentPosts: BlogPost[];
  yourPopularPosts: BlogPost[];
}

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('website');
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const [stats, setStats] = useState<DashboardStats>({
    totalPosts: 0,
    totalViews: 0,
    totalUsers: 0,
    activeUsers: 0,
    totalCategories: 0,
    averageViewsPerPost: 0,
    topCategories: [],
    trendingPosts: [],
    recentPosts: [],
    viewsGrowth: 0,
    postsGrowth: 0,
    usersGrowth: 0,
    topContributors: [],
    userEngagement: [],
    yourPosts: 0,
    yourViews: 0,
    yourCategories: [],
    yourRecentPosts: [],
    yourPopularPosts: []
  });

  useEffect(() => {
    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  const fetchDashboardData = async () => {
    try {
      // Fetch all posts
      const allPostsQuery = query(collection(db, 'blogs'), orderBy('date', 'desc'));
      const allPostsSnapshot = await getDocs(allPostsQuery);
      const allPosts = allPostsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];

      // Fetch users
      const usersQuery = query(collection(db, 'users'));
      const usersSnapshot = await getDocs(usersQuery);
      const users = usersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as User[];

      // Calculate statistics
      const totalViews = allPosts.reduce((sum, post) => sum + (post.views || 0), 0);
      const averageViews = Math.round(totalViews / allPosts.length);

      // Category distribution
      const categories = allPosts.reduce((acc, post) => {
        acc[post.category] = (acc[post.category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const topCategories = Object.entries(categories)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      // Trending posts (most views in last 7 days)
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      
      const trendingPosts = allPosts
        .filter(post => post.date.toDate() > sevenDaysAgo)
        .sort((a, b) => (b.views || 0) - (a.views || 0))
        .slice(0, 5);

      // Your posts
      const yourPosts = allPosts.filter(post => post.author.id === user?.uid);
      const yourViews = yourPosts.reduce((sum, post) => sum + (post.views || 0), 0);
      const yourCategories = [...new Set(yourPosts.map(post => post.category))];

      // Mock growth data
      const mockGrowth = {
        views: 15,
        posts: 8,
        users: 12
      };

      setStats({
        totalPosts: allPosts.length,
        totalViews,
        totalUsers: users.length,
        activeUsers: users.filter(u => u.postCount > 0).length,
        totalCategories: Object.keys(categories).length,
        averageViewsPerPost: averageViews,
        topCategories,
        trendingPosts,
        recentPosts: allPosts.slice(0, 5),
        viewsGrowth: mockGrowth.views,
        postsGrowth: mockGrowth.posts,
        usersGrowth: mockGrowth.users,
        topContributors: users
          .sort((a, b) => b.postCount - a.postCount)
          .slice(0, 5),
        userEngagement: generateMockEngagementData(),
        yourPosts: yourPosts.length,
        yourViews,
        yourCategories,
        yourRecentPosts: yourPosts
          .sort((a, b) => b.date.toDate().getTime() - a.date.toDate().getTime())
          .slice(0, 5),
        yourPopularPosts: yourPosts
          .sort((a, b) => (b.views || 0) - (a.views || 0))
          .slice(0, 5)
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateMockEngagementData = () => {
    const data = [];
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      data.push({
        date: date.toLocaleDateString(),
        count: Math.floor(Math.random() * 100)
      });
    }
    return data;
  };

  const renderWebsiteStats = () => (
    <div className="space-y-8">
      {/* Global Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'Total Posts',
            value: stats.totalPosts,
            icon: DocumentTextIcon,
            growth: stats.postsGrowth,
            color: 'blue'
          },
          {
            title: 'Total Views',
            value: stats.totalViews,
            icon: EyeIcon,
            growth: stats.viewsGrowth,
            color: 'green'
          },
          {
            title: 'Active Users',
            value: stats.activeUsers,
            total: stats.totalUsers,
            icon: UserGroupIcon,
            growth: stats.usersGrowth,
            color: 'purple'
          },
          {
            title: 'Avg. Views/Post',
            value: stats.averageViewsPerPost,
            icon: ChartBarIcon,
            color: 'orange'
          }
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${stat.color}-500/20`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-500`} />
              </div>
              {stat.growth !== undefined && (
                <div className={`flex items-center ${stat.growth >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.growth >= 0 ? (
                    <ArrowUpIcon className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDownIcon className="w-4 h-4 mr-1" />
                  )}
                  <span>{Math.abs(stat.growth)}%</span>
                </div>
              )}
            </div>
            <h3 className="text-2xl font-bold mb-1">{stat.value.toLocaleString()}</h3>
            <p className="text-gray-400">{stat.title}</p>
            {stat.total && (
              <p className="text-sm text-gray-500 mt-2">
                {((stat.value / stat.total) * 100).toFixed(1)}% of {stat.total} total users
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Trending and Recent */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <div className="flex items-center space-x-2 mb-6">
            <FireIcon className="w-6 h-6 text-orange-500" />
            <h3 className="text-xl font-bold">Trending Posts</h3>
          </div>
          <div className="space-y-4">
            {stats.trendingPosts.map((post, index) => (
              <div key={post.id} className="flex items-center p-4 hover:bg-white/5 rounded-lg">
                <span className="text-2xl font-bold text-orange-500/50 mr-4">#{index + 1}</span>
                <div>
                  <h4 className="font-medium mb-1">{post.title}</h4>
                  <p className="text-sm text-gray-400">
                    {post.views || 0} views • {post.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center space-x-2 mb-6">
            <ClockIcon className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-bold">Recent Activity</h3>
          </div>
          <div className="space-y-4">
            {stats.recentPosts.map((post) => (
              <div key={post.id} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg">
                <div>
                  <h4 className="font-medium mb-1">{post.title}</h4>
                  <p className="text-sm text-gray-400">
                    by {post.author.name} • {post.date.toDate().toLocaleDateString()}
                  </p>
                </div>
                <span className="text-sm text-gray-400">{post.views || 0} views</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Categories and Contributors */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-xl font-bold mb-6">Top Categories</h3>
          <div className="space-y-4">
            {stats.topCategories.map((category, index) => (
              <div key={category.name} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <span className="text-xl font-bold text-primary/50 mr-4">#{index + 1}</span>
                  <span className="font-medium">{category.name}</span>
                </div>
                <span className="text-gray-400">{category.count} posts</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-xl font-bold mb-6">Top Contributors</h3>
          <div className="space-y-4">
            {stats.topContributors.map((contributor, index) => (
              <div key={contributor.id} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <span className="text-xl font-bold text-primary/50 mr-4">#{index + 1}</span>
                  <div>
                    <h4 className="font-medium">{contributor.name}</h4>
                    <p className="text-sm text-gray-400">{contributor.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{contributor.postCount} posts</p>
                  <p className="text-sm text-gray-400">{contributor.totalViews} views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderYourStats = () => (
    <div className="space-y-8">
      {/* Your Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'Your Posts',
            value: stats.yourPosts,
            total: stats.totalPosts,
            icon: DocumentTextIcon,
            color: 'blue'
          },
          {
            title: 'Your Views',
            value: stats.yourViews,
            total: stats.totalViews,
            icon: EyeIcon,
            color: 'green'
          },
          {
            title: 'Categories Used',
            value: stats.yourCategories.length,
            total: stats.totalCategories,
            icon: FolderIcon,
            color: 'purple'
          },
          {
            title: 'Avg. Views/Post',
            value: stats.yourPosts ? Math.round(stats.yourViews / stats.yourPosts) : 0,
            total: stats.averageViewsPerPost,
            icon: ChartBarIcon,
            color: 'orange'
          }
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${stat.color}-500/20`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-500`} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">{stat.value.toLocaleString()}</h3>
            <p className="text-gray-400">{stat.title}</p>
            {stat.total && (
              <p className="text-sm text-gray-500 mt-2">
                {((stat.value / stat.total) * 100).toFixed(1)}% of total ({stat.total})
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Your Recent and Popular Posts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Your Recent Posts</h3>
            <Link
              to="/blog/admin/posts"
              className="text-primary hover:text-primary/80 transition-colors text-sm"
            >
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {stats.yourRecentPosts.map((post) => (
              <div key={post.id} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg">
                <div>
                  <h4 className="font-medium mb-1">{post.title}</h4>
                  <p className="text-sm text-gray-400">
                    {post.date.toDate().toLocaleDateString()} • {post.views || 0} views
                  </p>
                </div>
                <Link
                  to={`/blog/admin/posts/edit/${post.id}`}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <DocumentTextIcon className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-xl font-bold mb-6">Your Popular Posts</h3>
          <div className="space-y-4">
            {stats.yourPopularPosts.map((post, index) => (
              <div key={post.id} className="flex items-center p-4 hover:bg-white/5 rounded-lg">
                <span className="text-2xl font-bold text-primary/50 mr-4">#{index + 1}</span>
                <div>
                  <h4 className="font-medium mb-1">{post.title}</h4>
                  <p className="text-sm text-gray-400">
                    {post.views || 0} views • {post.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Your Categories */}
      <div className="glass-card p-6">
        <h3 className="text-xl font-bold mb-6">Your Categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {stats.yourCategories.map((category) => (
            <div key={category} className="glass-card p-4 text-center">
              <h4 className="font-medium">{category}</h4>
              <p className="text-sm text-gray-400 mt-2">
                {stats.yourRecentPosts.filter(post => post.category === category).length} posts
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[...Array(2)].map((_, index) => (
            <ChartSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="flex space-x-4">
        {[
          { id: 'website', label: 'Website Stats', icon: GlobeAltIcon },
          { id: 'personal', label: 'Your Stats', icon: UserGroupIcon }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
              activeTab === tab.id
                ? 'bg-primary text-white'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <tab.icon className="w-5 h-5" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'website' ? renderWebsiteStats() : renderYourStats()}
    </div>
  );
}

export default AdminDashboard;