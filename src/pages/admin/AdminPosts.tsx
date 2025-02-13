import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { collection, getDocs, deleteDoc, doc, query, orderBy, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import { TableRowSkeleton } from '../../components/admin/SkeletonLoader';
import { useAuth } from '../../hooks/useAuth';
import CreatePostModal from '../../components/admin/CreatePostModal';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: any;
  author: {
    id: string;
    name: string;
  };
}

function AdminPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchPosts();
    }
  }, [user]);

  const fetchPosts = async () => {
    try {
      setError(null);
      const q = query(
        collection(db, 'blogs'), 
        where('author.id', '==', user?.uid),
        orderBy('date', 'desc')
      );
      const querySnapshot = await getDocs(q);
      const fetchedPosts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];
      setPosts(fetchedPosts);
    } catch (error: any) {
      console.error('Error fetching posts:', error);
      setError(error.message || 'Error fetching posts. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deleteDoc(doc(db, 'blogs', id));
        setPosts(posts.filter(post => post.id !== id));
      } catch (error: any) {
        console.error('Error deleting post:', error);
        alert('Error deleting post. Please try again.');
      }
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/blog/admin/posts/edit/${id}`);
  };

  if (error) {
    return (
      <div className="p-4">
        <div className="glass-card p-6 text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <button
            onClick={fetchPosts}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Blog Posts</h2>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsCreateModalOpen(true)}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2"
        >
          <PlusIcon className="w-5 h-5" />
          <span>Create New Post</span>
        </motion.button>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="space-y-4 p-4">
              {[...Array(5)].map((_, index) => (
                <TableRowSkeleton key={index} />
              ))}
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-white/10">
                  <th className="p-4 font-medium">Title</th>
                  <th className="p-4 font-medium">Category</th>
                  <th className="p-4 font-medium">Date</th>
                  <th className="p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-4 text-center text-gray-400">
                      No posts found. Create your first post!
                    </td>
                  </tr>
                ) : (
                  posts.map((post) => (
                    <tr key={post.id} className="border-b border-white/5">
                      <td className="p-4">{post.title}</td>
                      <td className="p-4">{post.category}</td>
                      <td className="p-4">
                        {new Date(post.date?.toDate()).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(post.id)}
                            className="p-2 hover:bg-white/5 rounded-lg transition-colors text-blue-400"
                            title="Edit"
                          >
                            <PencilIcon className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="p-2 hover:bg-white/5 rounded-lg transition-colors text-red-400"
                            title="Delete"
                          >
                            <TrashIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <CreatePostModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  );
}

export default AdminPosts;