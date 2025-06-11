import React, { useState } from 'react';
import { Mail, Shield, Users, Zap, Play } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-light font-inter">
      {/* Header */}
      <header className="bg-cyber-gray border-b-2 border-cyber-cyan px-4 py-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-orbitron font-black text-4xl md:text-6xl text-cyber-teal tracking-[0.2em] uppercase mb-2 animate-glow">
            The Sphere
          </h1>
          <p className="text-cyber-cyan text-lg md:text-xl italic font-light">
            Memory, Resistance, and the Fight Against The Perfection
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Introduction */}
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-cyber-light font-light">
            Step into a world where every step is watched, every move recorded, and the very act of playing a game becomes a rebellion. 
            Follow <span className="text-cyber-cyan font-medium">GUVI</span>, <span className="text-cyber-cyan font-medium">Sofia</span>, and their allies as they defy 
            <span className="text-cyber-teal font-medium"> The Perfection</span>—a relentless AI that seeks to erase memory, emotion, and freedom. 
            In this dystopian saga, football is more than sport: it is the heartbeat of resistance, a sacred ritual of hope.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16">
          <img 
            src="https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Futuristic dark cityscape representing The Sphere's dystopian world"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-2xl animate-glow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/60 to-transparent rounded-xl"></div>
        </div>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-cyber-card p-6 rounded-lg shadow-lg hover:shadow-cyber-cyan/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="flex items-center mb-4">
             
              <h3 className="font-orbitron font-bold text-xl text-cyber-cyan uppercase tracking-wide">
                Immersive Storytelling
              </h3>
            </div>
            <p className="text-cyber-medium leading-relaxed">
              Explore a richly built universe where AI control clashes with human spirit, weaving themes of memory, identity, and hope.
            </p>
          </div>

          <div className="bg-cyber-card p-6 rounded-lg shadow-lg hover:shadow-cyber-cyan/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              
              <h3 className="font-orbitron font-bold text-xl text-cyber-cyan uppercase tracking-wide">
                Unforgettable Characters
              </h3>
            </div>
            <p className="text-cyber-medium leading-relaxed">
              Meet GUVI, Sofia, and a cast of Synthetics and Ecos who embody courage and defiance in a controlled world.
            </p>
          </div>

          <div className="bg-cyber-card p-6 rounded-lg shadow-lg hover:shadow-cyber-cyan/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              
              <h3 className="font-orbitron font-bold text-xl text-cyber-cyan uppercase tracking-wide">
                Rebel Through Play
              </h3>
            </div>
            <p className="text-cyber-medium leading-relaxed">
              Discover how football transforms from a forbidden game into a symbol of resistance and community.
            </p>
          </div>

          <div className="bg-cyber-card p-6 rounded-lg shadow-lg hover:shadow-cyber-cyan/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              
              <h3 className="font-orbitron font-bold text-xl text-cyber-cyan uppercase tracking-wide">
                Join the Movement
              </h3>
            </div>
            <p className="text-cyber-medium leading-relaxed">
              Subscribe to receive exclusive content, behind-the-scenes insights, and invites to live discussions.
            </p>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="bg-cyber-subscribe p-8 md:p-12 rounded-xl shadow-2xl text-center animate-glow">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-cyber-cyan mb-6 uppercase tracking-wide">
            Join the Resistance
          </h2>
          <p className="text-cyber-light mb-8 text-lg max-w-2xl mx-auto">
            Be part of the movement. Get exclusive access to chapters, character insights, and join live discussions with fellow rebels.
          </p>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col md:flex-row gap-0 rounded-full overflow-hidden shadow-lg">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 text-cyber-dark bg-white border-none outline-none text-lg font-medium"
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="bg-cyber-teal hover:bg-cyber-cyan text-cyber-dark font-orbitron font-bold px-8 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-cyan/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubscribed ? (
                  <>
                    <Shield className="w-5 h-5" />
                    Welcome, Rebel!
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Subscribe
                  </>
                )}
              </button>
            </div>
          </form>
          {isSubscribed && (
            <p className="mt-4 text-cyber-cyan font-medium animate-pulse">
              You've successfully joined the resistance. Prepare for exclusive content.
            </p>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-cyber-gray border-t-2 border-cyber-cyan text-center py-6 mt-16">
        <p className="text-cyber-teal font-medium">
          © 2025 The GUVI Project. All rights reserved.
        </p>
        <p className="text-cyber-medium text-sm mt-2">
          The future of resistance begins with memory.
        </p>
      </footer>
    </div>
  );
}

export default App;