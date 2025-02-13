import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../hooks/useAuth';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import { XMarkIcon, PhotoIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const IMGBB_API_KEY = '6eed668e740ddd4492a00a7e17e7fbbb';

const MenuBar = ({ editor, onImageUpload }: { editor: any; onImageUpload: (file: File) => Promise<void> }) => {
  const imageInputRef = useRef<HTMLInputElement>(null);

  if (!editor) {
    return null;
  }

  const handleImageInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await onImageUpload(file);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 p-4 border-b border-white/10">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded ${editor.isActive('bold') ? 'bg-primary text-white' : 'bg-white/5 hover:bg-white/10'}`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded ${editor.isActive('italic') ? 'bg-primary text-white' : 'bg-white/5 hover:bg-white/10'}`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-2 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-primary text-white' : 'bg-white/5 hover:bg-white/10'}`}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-primary text-white' : 'bg-white/5 hover:bg-white/10'}`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded ${editor.isActive('bulletList') ? 'bg-primary text-white' : 'bg-white/5 hover:bg-white/10'}`}
      >
        Bullet List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded ${editor.isActive('orderedList') ? 'bg-primary text-white' : 'bg-white/5 hover:bg-white/10'}`}
      >
        Ordered List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`p-2 rounded ${editor.isActive('blockquote') ? 'bg-primary text-white' : 'bg-white/5 hover:bg-white/10'}`}
      >
        Quote
      </button>
      <button
        onClick={() => imageInputRef.current?.click()}
        className="p-2 rounded bg-white/5 hover:bg-white/10"
      >
        <PhotoIcon className="w-5 h-5" />
      </button>
      <input
        type="file"
        ref={imageInputRef}
        onChange={handleImageInput}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function CreatePostModal({ isOpen, onClose }: CreatePostModalProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [thumbnailPreview, setThumbnailPreview] = useState<string>('');
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    category: 'Technology',
    image: '',
    readTime: '5 min read',
    tags: [] as string[],
    newTag: ''
  });

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Placeholder.configure({
        placeholder: 'Write your post content here...',
      }),
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none min-h-[300px] focus:outline-none p-4',
      },
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const uploadImageToImgBB = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    if (!data.success) throw new Error('Failed to upload image');
    return data.data.url;
  };

  const handleThumbnailUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setLoading(true);
      const imageUrl = await uploadImageToImgBB(file);
      setFormData(prev => ({ ...prev, image: imageUrl }));
      setThumbnailPreview(URL.createObjectURL(file));
    } catch (error) {
      console.error('Error uploading thumbnail:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleContentImageUpload = async (file: File) => {
    try {
      setLoading(true);
      const imageUrl = await uploadImageToImgBB(file);
      editor?.chain().focus().setImage({ src: imageUrl }).run();
    } catch (error) {
      console.error('Error uploading content image:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && formData.newTag.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(formData.newTag.trim())) {
        setFormData(prev => ({
          ...prev,
          tags: [...prev.tags, prev.newTag.trim()],
          newTag: ''
        }));
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const docRef = await addDoc(collection(db, 'blogs'), {
        ...formData,
        content: editor?.getHTML() || '',
        date: Timestamp.now(),
        author: {
          id: user?.uid,
          name: user?.email?.split('@')[0] || 'Anonymous',
          email: user?.email
        },
        views: 0,
        tags: formData.tags
      });

      console.log('Post created with ID:', docRef.id);
      onClose();
      navigate('/blog/admin/posts');
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto"
        >
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="min-h-screen bg-black/50"
          >
            {/* Header */}
            <div className="sticky top-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
              <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <ArrowLeftIcon className="w-6 h-6" />
                  </button>
                  <h2 className="text-xl font-bold">Create New Post</h2>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={loading}
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
                  ) : (
                    'Publish'
                  )}
                </motion.button>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Editor */}
                <div className="lg:col-span-2 space-y-6">
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Post title"
                    className="w-full px-4 py-3 text-2xl font-bold bg-transparent border-none focus:ring-0 focus:outline-none placeholder-gray-500"
                  />
                  
                  <div className="glass-card overflow-hidden">
                    <MenuBar editor={editor} onImageUpload={handleContentImageUpload} />
                    <EditorContent editor={editor} />
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <div className="glass-card p-6">
                    <h3 className="text-lg font-bold mb-4">Post Settings</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Excerpt
                        </label>
                        <textarea
                          name="excerpt"
                          value={formData.excerpt}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-white"
                          placeholder="Brief description of the post"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Category
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-white"
                        >
                          <option value="Technology">Technology</option>
                          <option value="AI & ML">AI & ML</option>
                          <option value="Collaboration">Collaboration</option>
                          <option value="Design">Design</option>
                          <option value="Research">Research</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Thumbnail
                        </label>
                        <div className="flex items-center space-x-4">
                          <div className="flex-1">
                            <input
                              type="file"
                              onChange={handleThumbnailUpload}
                              accept="image/*"
                              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-white"
                            />
                          </div>
                          {thumbnailPreview && (
                            <div className="relative w-20 h-20">
                              <img
                                src={thumbnailPreview}
                                alt="Thumbnail preview"
                                className="w-full h-full object-cover rounded-lg"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  setThumbnailPreview('');
                                  setFormData(prev => ({ ...prev, image: '' }));
                                }}
                                className="absolute -top-2 -right-2 p-1 bg-red-500 rounded-full text-white"
                              >
                                <XMarkIcon className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Tags
                        </label>
                        <input
                          type="text"
                          name="newTag"
                          value={formData.newTag}
                          onChange={handleChange}
                          onKeyDown={handleAddTag}
                          placeholder="Add tags (press Enter)"
                          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-white"
                        />
                        <div className="flex flex-wrap gap-2 mt-2">
                          {formData.tags.map(tag => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm flex items-center"
                            >
                              {tag}
                              <button
                                type="button"
                                onClick={() => removeTag(tag)}
                                className="ml-2 hover:text-red-500"
                              >
                                <XMarkIcon className="w-4 h-4" />
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Read Time
                        </label>
                        <input
                          type="text"
                          name="readTime"
                          value={formData.readTime}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-white"
                          placeholder="e.g., 5 min read"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CreatePostModal;