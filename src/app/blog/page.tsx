import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - HabitPulse | Habit Building Tips & Strategies",
  description: "Discover expert tips, strategies, and insights on building lasting habits, productivity, and personal development with HabitPulse blog.",
  keywords: "habit building, productivity, personal development, habit tracking, motivation, goal setting",
  openGraph: {
    title: "Blog - HabitPulse | Habit Building Tips & Strategies",
    description: "Discover expert tips, strategies, and insights on building lasting habits, productivity, and personal development with HabitPulse blog.",
    type: "website",
  },
};

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    slug: "the-science-of-habit-formation",
    title: "The Science of Habit Formation: How to Build Lasting Changes",
    excerpt: "Discover the neuroscience behind habit formation and learn evidence-based strategies to create habits that stick for life.",
    publishedAt: "2024-12-15",
    readTime: "8 min read",
    category: "Science",
    featured: true,
  },
  {
    slug: "21-day-habit-myth-debunked",
    title: "The 21-Day Habit Myth: What Science Really Says",
    excerpt: "Uncover the truth about how long it really takes to form a habit and why the 21-day rule is misleading.",
    publishedAt: "2024-12-10",
    readTime: "6 min read",
    category: "Research",
    featured: false,
  },
  {
    slug: "habit-stacking-complete-guide",
    title: "Habit Stacking: The Complete Guide to Building Multiple Habits",
    excerpt: "Learn how to use habit stacking to effortlessly build multiple positive habits by linking them to existing routines.",
    publishedAt: "2024-12-05",
    readTime: "10 min read",
    category: "Strategy",
    featured: true,
  },
  {
    slug: "morning-routine-productivity-boost",
    title: "5 Morning Habits That Will Transform Your Productivity",
    excerpt: "Start your day right with these science-backed morning habits that successful people swear by.",
    publishedAt: "2024-12-01",
    readTime: "7 min read",
    category: "Productivity",
    featured: false,
  },
  {
    slug: "breaking-bad-habits-psychology",
    title: "The Psychology of Breaking Bad Habits: A Step-by-Step Guide",
    excerpt: "Understand the psychology behind bad habits and learn proven techniques to break free from negative patterns.",
    publishedAt: "2024-11-28",
    readTime: "9 min read",
    category: "Psychology",
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-white hover:text-purple-300 transition-colors">
              HabitPulse
            </Link>
            <div className="flex space-x-6">
              <Link href="/" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-purple-300 font-medium">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            HabitPulse <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Blog</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Discover expert insights, science-backed strategies, and practical tips to build lasting habits and transform your life.
          </p>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-white/60 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="text-purple-300 group-hover:text-purple-200 transition-colors">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold text-white mb-8">All Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-1 bg-blue-500/30 text-blue-200 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <span className="text-white/60 text-xs">{post.readTime}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {post.title}
              </h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-xs">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
                <span className="text-purple-300 group-hover:text-purple-200 transition-colors text-sm">
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Building Better Habits?
          </h2>
          <p className="text-white/80 mb-6">
            Join thousands of users who are transforming their lives with HabitPulse.
          </p>
          <Link
            href="https://app.habit-pulse.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
          >
            Start Your Journey Free
          </Link>
        </div>
      </div>
    </div>
  );
}
