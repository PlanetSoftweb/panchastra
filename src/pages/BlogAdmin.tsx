import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '../components/admin/AdminLayout';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import AdminPosts from './admin/AdminPosts';
import CreatePost from './admin/CreatePost';
import EditPost from './admin/EditPost';
import AdminCategories from './admin/AdminCategories';
import AdminSettings from './admin/AdminSettings';
import AdminWaitlist from './admin/AdminWaitlist';

function BlogAdmin() {
  return (
    <Routes>
      <Route path="login" element={<AdminLogin />} />
      <Route path="/" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
      <Route path="posts" element={<AdminLayout><AdminPosts /></AdminLayout>} />
      <Route path="posts/create" element={<AdminLayout><CreatePost /></AdminLayout>} />
      <Route path="posts/edit/:id" element={<AdminLayout><EditPost /></AdminLayout>} />
      <Route path="categories" element={<AdminLayout><AdminCategories /></AdminLayout>} />
      <Route path="waitlist" element={<AdminLayout><AdminWaitlist /></AdminLayout>} />
      <Route path="settings" element={<AdminLayout><AdminSettings /></AdminLayout>} />
      <Route path="*" element={<Navigate to="/blog/admin" replace />} />
    </Routes>
  );
}

export default BlogAdmin;