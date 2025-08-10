

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      {/* Gaming Background Effects */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/25">
              <span className="text-white font-bold text-xl">⚡</span>
            </div>
            <span className="text-2xl font-bold text-white tracking-wide">HabitPulse</span>
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
              Early Access
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Blog
            </a>
            <a href="https://discord.gg/SDjprAkATd" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <span>Discord</span>
            </a>
            <a href="https://app.habit-pulse.com/login" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-purple-500/25 font-semibold inline-block cursor-pointer relative z-10" style={{pointerEvents: 'auto'}}>
              Play Free
            </a> 
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="relative">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Level Up Your Life with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse"> Epic Habits</span>
          </h1>
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transform rotate-12 shadow-lg">
            100% Free
          </div>
        </div>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          🎮 Gamify your habits and unlock your potential! Earn XP, complete daily quests, and build streaks that level up your real life. 
          <span className="text-cyan-400 font-semibold"> Join the early access beta</span> and start your epic journey today!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://app.habit-pulse.com/login" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white px-10 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/25 border border-purple-400/30 inline-block text-center cursor-pointer relative z-10" style={{pointerEvents: 'auto'}}>
            🚀 Start Playing FREE
          </a>
          <a href="https://discord.gg/SDjprAkATd" target="_blank" rel="noopener noreferrer" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 backdrop-blur-sm text-center flex items-center justify-center space-x-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span>Discord</span>
          </a>
        </div>
        
        {/* Hero Image/Mockup */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-br from-gray-800/80 to-purple-900/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-purple-500/20 p-8 max-w-4xl mx-auto border border-purple-500/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 p-6 rounded-xl border border-green-400/30 backdrop-blur-sm">
                <h3 className="font-semibold text-green-400 mb-2 flex items-center">🏆 Daily Quests</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
                    <span className="text-sm text-gray-200">⚡ Morning Workout (+50 XP)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
                    <span className="text-sm text-gray-200">📚 Read 30 min (+30 XP)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
                    <span className="text-sm text-gray-400">🧘 Meditate (+25 XP)</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 p-6 rounded-xl border border-blue-400/30 backdrop-blur-sm">
                <h3 className="font-semibold text-cyan-400 mb-2 flex items-center">📅 Streak Calendar</h3>
                <div className="grid grid-cols-7 gap-1 text-xs">
                  {Array.from({length: 21}).map((_, i) => (
                    <div key={i} className={`w-6 h-6 rounded ${i % 3 === 0 ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' : i % 5 === 0 ? 'bg-blue-400 shadow-lg shadow-blue-400/50' : 'bg-gray-600 border border-gray-500'}`}></div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 p-6 rounded-xl border border-purple-400/30 backdrop-blur-sm">
                <h3 className="font-semibold text-purple-400 mb-2 flex items-center">⭐ Player Stats</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Level Progress</span>
                    <span className="font-semibold text-purple-400">Level 15 (87%)</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full shadow-lg" style={{width: '87%'}}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">🔥 Epic Streak</span>
                    <span className="font-semibold text-orange-400">12 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gradient-to-br from-gray-900 to-black py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              🎮 Epic Features Unlocked
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Level up your life with these powerful gaming-inspired features - all available in <span className="text-green-400 font-semibold">early access for FREE!</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-400/20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-400/25">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">XP Progress Dashboard</h3>
              <p className="text-gray-300">Track your level progression with epic charts and streak visualizations</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-600/10 rounded-xl border border-green-400/20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-400/25">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-400">Quest Designer</h3>
              <p className="text-gray-300">Create custom daily quests and challenges tailored to your playstyle</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-xl border border-purple-400/20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-400/25">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Achievement System</h3>
              <p className="text-gray-300">Unlock badges, earn rewards, and celebrate epic milestone victories</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-yellow-500/10 to-orange-600/10 rounded-xl border border-yellow-400/20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-400/25">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">Raid Calendar</h3>
              <p className="text-gray-300">Schedule your daily quests and never miss a boss fight (habit)</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-red-500/10 to-rose-600/10 rounded-xl border border-red-400/20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-400/25">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-red-400">Battle Analytics</h3>
              <p className="text-gray-300">Analyze your performance stats and optimize your winning strategies</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-indigo-500/10 to-blue-600/10 rounded-xl border border-indigo-400/20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-400/25">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-400">Fortress Security</h3>
              <p className="text-gray-300">Your progress is protected with military-grade encryption and privacy</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-black via-gray-900 to-purple-900 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              ⚔️ Your Quest Begins
            </h2>
            <p className="text-xl text-gray-300">Start your epic journey in just 3 simple steps - <span className="text-green-400 font-semibold">completely FREE!</span></p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8 rounded-xl border border-cyan-400/20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg shadow-cyan-400/25">1</div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">🎯 Design Your Quests</h3>
              <p className="text-gray-300">Create custom daily challenges and set your difficulty level</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-purple-500/10 to-pink-600/10 p-8 rounded-xl border border-purple-400/20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg shadow-purple-400/25">2</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">⚡ Battle Daily Bosses</h3>
              <p className="text-gray-300">Complete quests, earn XP, and build epic winning streaks</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-8 rounded-xl border border-green-400/20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg shadow-green-400/25">3</div>
              <h3 className="text-xl font-semibold mb-2 text-green-400">🏆 Level Up & Dominate</h3>
              <p className="text-gray-300">Review your battle stats and optimize your winning strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 flex items-center justify-center gap-3">
            🚀 Ready to Start Your Epic Journey?
          </h2>
          <p className="text-l text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of players already leveling up their lives! <span className="bg-green-400 text-black px-3 py-1 rounded-full font-bold text-sm">100% FREE EARLY ACCESS</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.habit-pulse.com/login" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 px-5 py-4 rounded-xl text-lg font-black hover:scale-110 transition-all duration-300 shadow-2xl shadow-white/25 border-2 border-white inline-block text-center cursor-pointer relative z-10" style={{pointerEvents: 'auto'}}>
              ⚡ JOIN THE BETA FREE
            </a>
            <a href="https://discord.gg/SDjprAkATd" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <span>Discord</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white py-12 border-t border-purple-500/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <span className="text-white font-bold text-xl">⚡</span>
                </div>
                <span className="text-2xl font-bold tracking-wide">HabitPulse</span>
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Beta
                </div>
              </div>
              <p className="text-gray-400 mb-4">Level up your life, one epic quest at a time. <span className="text-green-400 font-semibold">100% Free Early Access!</span></p>
              
              <div className="flex items-center space-x-4">
                <a href="https://discord.gg/SDjprAkATd" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  <span>Discord</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-cyan-400">About the Developer</h3>
              <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-4">
                <p className="text-gray-300 mb-3">
                  💻 <span className="text-cyan-400 font-semibold">Jack Sighton</span> - Solo Indie Developer
                </p>
                <p className="text-sm text-gray-400">
                  Crafting epic habit-tracking experiences with passion and dedication. 
                  Building HabitPulse one feature at a time to help people level up their lives through gamification.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  🎮 Turning daily habits into epic adventures since 2025
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 HabitPulse by <span className="text-cyan-400 font-semibold">Jack Sighton</span> - Solo Indie Developer. <span className="text-green-400">Early Access Beta - Play Free!</span></p>
            <p className="text-sm mt-2">💻 Crafted with passion by one developer, building epic habit experiences for the community!</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
