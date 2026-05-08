import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, Tag, ArrowRight, BookOpen } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { blogPosts } from '../data/personalData';

const categories = ['All', ...new Set(blogPosts.map((p) => p.category))];

export default function BlogPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedPost, setExpandedPost] = useState(null);

  const filtered = blogPosts.filter((post) => {
    const matchSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="pt-20">
      <SectionWrapper>
        <div className="text-center mb-12">
          <h1 className="section-title text-gradient">Blog</h1>
          <p className="section-subtitle">Thoughts on DevOps, Cloud, and Software Engineering</p>
        </div>

        {/* Search and filters */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative mb-6">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field pl-12"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-surface-light text-text-secondary border border-border hover:border-primary/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card group cursor-pointer"
              onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
            >
              {/* Image area */}
              <div className="h-40 rounded-xl bg-gradient-to-br from-primary/20 via-accent/10 to-neon-purple/20 mb-4 flex items-center justify-center">
                <BookOpen size={32} className="text-primary-light/50" />
              </div>

              <div className="flex items-center gap-3 mb-3 text-xs text-text-muted">
                <span className="tag">{post.category}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
              </div>

              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary-light transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-text-secondary text-sm mb-4 line-clamp-3">{post.excerpt}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded bg-surface-light text-text-muted border border-border">{tag}</span>
                ))}
              </div>

              {expandedPost === post.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="border-t border-border pt-4 mt-2"
                >
                  <div className="prose prose-invert prose-sm max-w-none text-text-secondary whitespace-pre-line">
                    {post.content}
                  </div>
                </motion.div>
              )}

              <div className="flex items-center gap-1 text-primary-light text-sm font-medium group-hover:gap-2 transition-all">
                {expandedPost === post.id ? 'Show less' : 'Read more'} <ArrowRight size={14} />
              </div>

              <p className="text-xs text-text-muted mt-3">{post.date}</p>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-muted text-lg">No articles found matching your criteria.</p>
          </div>
        )}
      </SectionWrapper>
    </div>
  );
}
