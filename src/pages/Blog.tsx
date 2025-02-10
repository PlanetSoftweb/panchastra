import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Architectural Visualization",
    excerpt: "Exploring how AR and VR are revolutionizing the way we design and experience spaces.",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&auto=format&fit=crop&q=60",
    category: "Technology",
    date: "Feb 28, 2024",
    readTime: "5 min read",
    author: {
      name: "Dr. Sarah Chen",
      role: "VR Research Lead",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60"
    }
  },
  {
    id: 2,
    title: "AI in Architecture: Beyond the Basics",
    excerpt: "How artificial intelligence is transforming architectural design and decision-making.",
    image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?w=800&auto=format&fit=crop&q=60",
    category: "AI & ML",
    date: "Feb 25, 2024",
    readTime: "7 min read",
    author: {
      name: "Alex Kumar",
      role: "AI Architect",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60"
    }
  },
  {
    id: 3,
    title: "Real-time Collaboration in Virtual Spaces",
    excerpt: "Breaking down barriers with immersive collaborative environments.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=60",
    category: "Collaboration",
    date: "Feb 22, 2024",
    readTime: "6 min read",
    author: {
      name: "Maya Patel",
      role: "UX Researcher",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60"
    }
  }
];

const categories = [
  "All",
  "Technology",
  "AI & ML",
  "Collaboration",
  "Design",
  "Research"
];

function Blog() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60" 
            alt="Blog Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold title-font mb-4">Insights & Innovation</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Exploring the intersection of technology and architectural design
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 
                      ? 'bg-primary text-white' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="glass-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <span className="text-primary text-sm font-semibold">{blogPosts[0].category}</span>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-4">{blogPosts[0].title}</h2>
                  <p className="text-gray-400 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={blogPosts[0].author.avatar}
                        alt={blogPosts[0].author.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">{blogPosts[0].author.name}</p>
                        <p className="text-sm text-gray-400">{blogPosts[0].author.role}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      <p>{blogPosts[0].date}</p>
                      <p>{blogPosts[0].readTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="text-sm">
                        <p className="font-medium">{post.author.name}</p>
                        <p className="text-gray-400">{post.date}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">{post.readTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center glass-card p-12"
          >
            <h2 className="text-3xl font-bold title-font mb-4">Stay Updated</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for the latest insights in architectural technology and innovation.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Blog;