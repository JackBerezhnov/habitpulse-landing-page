import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="navbar bg-base-100/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
          <div className="flex items-center space-x-2">
            <div className="avatar placeholder">
              <div className="bg-gradient-to-r from-primary to-secondary text-primary-content rounded-lg w-8">
                <span className="text-lg font-bold">H</span>
              </div>
            </div>
            <span className="text-2xl font-bold">HabitPulse</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href="#features" className="hover:text-primary">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-primary">How It Works</a></li>
            <li><a href="#testimonials" className="hover:text-primary">Testimonials</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero min-h-screen bg-gradient-to-br from-base-200 to-primary/20">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Life with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Better Habits</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-80">
              Track, build, and maintain life-changing habits with our intuitive app. 
              Get daily motivation, visual progress tracking, and personalized insights to reach your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="btn btn-primary btn-lg">
                Start Your Journey
              </button>
              <button className="btn btn-outline btn-lg">
                Watch Demo
              </button>
            </div>
            
            {/* Hero Image/Mockup */}
            <div className="mockup-window border bg-base-300 shadow-2xl">
              <div className="flex justify-center px-4 py-16 bg-base-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                  <div className="card bg-success/20 shadow-xl">
                    <div className="card-body">
                      <h3 className="card-title text-success">Daily Habits</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-success rounded-full"></div>
                          <span className="text-sm">Morning Exercise</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-success rounded-full"></div>
                          <span className="text-sm">Read 30 minutes</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-base-300 rounded-full"></div>
                          <span className="text-sm">Meditate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card bg-info/20 shadow-xl">
                    <div className="card-body">
                      <h3 className="card-title text-info">Calendar View</h3>
                      <div className="grid grid-cols-7 gap-1 text-xs">
                        {Array.from({length: 21}).map((_, i) => (
                          <div key={i} className={`w-6 h-6 rounded ${i % 3 === 0 ? 'bg-info' : i % 5 === 0 ? 'bg-info/50' : 'bg-base-300'}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="card bg-secondary/20 shadow-xl">
                    <div className="card-body">
                      <h3 className="card-title text-secondary">Progress Stats</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>This Week</span>
                          <span className="font-semibold">85%</span>
                        </div>
                        <progress className="progress progress-secondary w-full" value="85" max="100"></progress>
                        <div className="text-xs text-secondary">🔥 7 day streak!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-base-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl opacity-70 max-w-2xl mx-auto">
              Powerful features designed to help you build lasting habits and achieve your goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="card-title">Visual Progress Tracking</h3>
                <p>See your progress at a glance with beautiful charts and calendar views</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="card-title">Smart Goal Setting</h3>
                <p>Set realistic goals and track multiple habits with customizable types</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="card-title">Daily Motivation</h3>
                <p>Get inspired with daily motivational quotes and achievement celebrations</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="card-title">Calendar Integration</h3>
                <p>Seamlessly integrate with your calendar to never miss a habit</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="card-title">Detailed Analytics</h3>
                <p>Understand your patterns with comprehensive statistics and insights</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="card-title">Secure & Private</h3>
                <p>Your data is secure with enterprise-grade encryption and privacy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl opacity-70">Get started in just 3 simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="badge badge-primary badge-lg text-2xl font-bold w-16 h-16 rounded-full">1</div>
                <h3 className="card-title mt-4">Create Your Habits</h3>
                <p>Define the habits you want to build with custom names and types</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="badge badge-primary badge-lg text-2xl font-bold w-16 h-16 rounded-full">2</div>
                <h3 className="card-title mt-4">Track Daily Progress</h3>
                <p>Mark habits as complete each day and watch your streaks grow</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="badge badge-primary badge-lg text-2xl font-bold w-16 h-16 rounded-full">3</div>
                <h3 className="card-title mt-4">Analyze & Improve</h3>
                <p>Review your progress and adjust your approach for better results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-base-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl opacity-70">Join thousands of people who have transformed their lives</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <div className="avatar placeholder">
                    <div className="bg-primary text-primary-content rounded-full w-12">
                      <span className="font-semibold">S</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm opacity-70">Fitness Enthusiast</p>
                  </div>
                </div>
                <p>"HabitPulse helped me build a consistent workout routine. The visual progress tracking keeps me motivated every day!"</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <div className="avatar placeholder">
                    <div className="bg-success text-success-content rounded-full w-12">
                      <span className="font-semibold">M</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Mike Chen</h4>
                    <p className="text-sm opacity-70">Software Developer</p>
                  </div>
                </div>
                <p>"The daily motivational quotes and streak tracking have completely changed how I approach personal development."</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <div className="avatar placeholder">
                    <div className="bg-secondary text-secondary-content rounded-full w-12">
                      <span className="font-semibold">E</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Emily Rodriguez</h4>
                    <p className="text-sm opacity-70">Teacher</p>
                  </div>
                </div>
                <p>"Simple, beautiful, and effective. I've maintained my reading habit for 6 months straight thanks to this app!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="hero py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-primary-content mb-4">Ready to Transform Your Life?</h2>
            <p className="text-xl text-primary-content/80 mb-8">
              Join thousands of users who have already built lasting habits with HabitPulse
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-neutral btn-lg">
                Get Started Free
              </button>
              <button className="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center bg-neutral text-neutral-content py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="avatar placeholder">
                  <div className="bg-gradient-to-r from-primary to-secondary text-primary-content rounded-lg w-8">
                    <span className="font-bold text-lg">H</span>
                  </div>
                </div>
                <span className="text-2xl font-bold">HabitPulse</span>
              </div>
              <p className="opacity-70">Transform your life one habit at a time.</p>
            </div>
            
            <div>
              <h3 className="footer-title">Product</h3>
              <a className="link link-hover">Features</a>
              <a className="link link-hover">Pricing</a>
              <a className="link link-hover">Updates</a>
            </div>
            
            <div>
              <h3 className="footer-title">Support</h3>
              <a className="link link-hover">Help Center</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Privacy</a>
            </div>
            
            <div>
              <h3 className="footer-title">Connect</h3>
              <a className="link link-hover">Twitter</a>
              <a className="link link-hover">LinkedIn</a>
              <a className="link link-hover">GitHub</a>
            </div>
          </div>
          
          <div className="divider"></div>
          <div className="text-center opacity-70">
            <p>&copy; 2024 HabitPulse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
