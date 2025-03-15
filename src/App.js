import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowRight, Zap, TrendingUp, BarChart2, Shield, Check } from 'lucide-react';

// Sample data for the accuracy chart
const accuracyData = [
  { month: 'Jan', prediction: 96.2, actual: 97.8 },
  { month: 'Feb', prediction: 97.4, actual: 98.1 },
  { month: 'Mar', prediction: 98.2, actual: 99.3 },
  { month: 'Apr', prediction: 98.6, actual: 99.5 },
  { month: 'May', prediction: 98.83, actual: 99.7 },
];

const App = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    stats: false,
    accuracy: false,
    partners: false,
    cta: false
  });
  
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    setIsVisible({
      hero: true,
      features: false,
      stats: false,
      accuracy: false,
      partners: false,
      cta: false
    });
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      setIsVisible({
        hero: true,
        features: window.scrollY > 200,
        stats: window.scrollY > 600,
        accuracy: window.scrollY > 900,
        partners: window.scrollY > 1200,
        cta: window.scrollY > 1500
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Zap className="text-blue-500 mr-2" size={24} />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">SYNERGY</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-blue-400 transition">Features</a>
            <a href="#accuracy" className="hover:text-blue-400 transition">Performance</a>
            <a href="#partners" className="hover:text-blue-400 transition">Partners</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition flex items-center">
            <span>Demo</span>
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className={`container mx-auto max-w-6xl transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                <span className="block">AI-Powered</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Energy Forecasting</span>
                <span className="block">for the Future</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Empowering energy market participants with AI-driven forecasting tools to optimize operations, manage risk, and maximize profitability.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition flex items-center">
                  Get Started
                  <ArrowRight size={18} className="ml-2" />
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-medium transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 md:h-96 bg-gradient-to-br from-blue-500/20 to-teal-400/20 rounded-xl relative overflow-hidden border border-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-blue-500 mb-2">98.83%</div>
                    <div className="text-gray-300">Forecasting Accuracy</div>
                  </div>
                </div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-teal-400/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-screen bg-gradient-to-bl from-blue-600/5 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-900">
        <div className={`container mx-auto max-w-6xl transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive AI Solutions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Our platform delivers integrated forecasting tools powered by state-of-the-art artificial intelligence.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition border border-gray-700 hover:border-blue-500/50 group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition">
                <TrendingUp className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Price Forecasting</h3>
              <p className="text-gray-300 mb-4">Short-term and long-term energy price predictions with unmatched accuracy.</p>
              <a href="#" className="text-blue-400 flex items-center text-sm font-medium">
                Learn more <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition border border-gray-700 hover:border-blue-500/50 group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition">
                <Zap className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Renewable Generation</h3>
              <p className="text-gray-300 mb-4">Predict renewable energy generation patterns with precision and confidence.</p>
              <a href="#" className="text-blue-400 flex items-center text-sm font-medium">
                Learn more <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition border border-gray-700 hover:border-blue-500/50 group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition">
                <BarChart2 className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Grid Congestion</h3>
              <p className="text-gray-300 mb-4">Anticipate grid bottlenecks and optimize transmission strategies.</p>
              <a href="#" className="text-blue-400 flex items-center text-sm font-medium">
                Learn more <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gray-800">
        <div className={`container mx-auto max-w-6xl transition-all duration-1000 ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">98.83%</div>
              <p className="text-gray-300">Prediction Accuracy</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">{"<"}1 month</div>
              <p className="text-gray-300">To Market Validation</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">3+</div>
              <p className="text-gray-300">LOIs from Major Players</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accuracy Section */}
      <section id="accuracy" className="py-20 px-6 bg-gray-900">
        <div className={`container mx-auto max-w-6xl transition-all duration-1000 ${isVisible.accuracy ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unmatched Performance</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Our AI models consistently outperform industry benchmarks and competitors.</p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={accuracyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis domain={[95, 100]} stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '0.5rem' }}
                    itemStyle={{ color: '#F9FAFB' }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="prediction" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    dot={{ r: 5, fill: '#3B82F6' }}
                    activeDot={{ r: 8 }}
                    name="Our Prediction"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="actual" 
                    stroke="#10B981" 
                    strokeWidth={3}
                    dot={{ r: 5, fill: '#10B981' }}
                    activeDot={{ r: 8 }}
                    name="Actual Values"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex items-start">
              <div className="mr-4 mt-1">
                <Shield className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Reliable Predictions</h3>
                <p className="text-gray-300 text-sm">Our models maintain high accuracy even in volatile market conditions.</p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex items-start">
              <div className="mr-4 mt-1">
                <TrendingUp className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Continuous Improvement</h3>
                <p className="text-gray-300 text-sm">Self-learning algorithms that improve with each market cycle.</p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex items-start">
              <div className="mr-4 mt-1">
                <BarChart2 className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Comprehensive Analysis</h3>
                <p className="text-gray-300 text-sm">Multi-factor models that analyze numerous variables simultaneously.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 px-6 bg-gray-800">
        <div className={`container mx-auto max-w-6xl transition-all duration-1000 ${isVisible.partners ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">On the Verge of Partnership</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">We're finalizing Letters of Intent with major energy market players.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gray-900/50 h-32 rounded-xl flex items-center justify-center border border-gray-700">
              <div className="text-gray-400 font-semibold">Energy Corp.</div>
            </div>
            <div className="bg-gray-900/50 h-32 rounded-xl flex items-center justify-center border border-gray-700">
              <div className="text-gray-400 font-semibold">PowerGrid Inc.</div>
            </div>
            <div className="bg-gray-900/50 h-32 rounded-xl flex items-center justify-center border border-gray-700">
              <div className="text-gray-400 font-semibold">RenewTech</div>
            </div>
            <div className="bg-gray-900/50 h-32 rounded-xl flex items-center justify-center border border-gray-700">
              <div className="text-gray-400 font-semibold">Global Energy</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-blue-900/30">
        <div className={`container mx-auto max-w-4xl text-center transition-all duration-1000 ${isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Energy Trading?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join the energy market revolution with our cutting-edge AI forecasting platform.
          </p>
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="text-green-400" size={20} />
                </div>
                <p className="text-gray-300">No setup costs or infrastructure required</p>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="text-green-400" size={20} />
                </div>
                <p className="text-gray-300">Free trial with your historical data</p>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="text-green-400" size={20} />
                </div>
                <p className="text-gray-300">Dedicated support from our team</p>
              </div>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition flex items-center mx-auto">
            Request Early Access
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 flex items-center">
              <Zap className="text-blue-500 mr-2" size={24} />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">SYNERGY</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Synergy. All rights reserved. Built by ambitious college students.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;