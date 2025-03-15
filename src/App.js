import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { ArrowRight, Zap, TrendingUp, BarChart2, Shield, Check, ChevronRight, Clock, Calendar, Award, Star, Users } from 'lucide-react';

// Sample data for the accuracy chart
const accuracyData = [
  { month: 'Jan', prediction: 96.2, actual: 97.8 },
  { month: 'Feb', prediction: 97.4, actual: 98.1 },
  { month: 'Mar', prediction: 98.2, actual: 99.3 },
  { month: 'Apr', prediction: 98.6, actual: 99.5 },
  { month: 'May', prediction: 98.83, actual: 99.7 },
];

// Sample data for daily forecast (representing the first graph you provided)
const dailyForecastData = [
  { time: '00:00', actual: 34, predicted: 35 },
  { time: '01:00', actual: 32, predicted: 32.5 },
  { time: '02:00', actual: 30, predicted: 31 },
  { time: '03:00', actual: 29, predicted: 28.5 },
  { time: '04:00', actual: 28, predicted: 28 },
  { time: '05:00', actual: 29, predicted: 30 },
  { time: '06:00', actual: 32, predicted: 31 },
  { time: '07:00', actual: 38, predicted: 37 },
  { time: '08:00', actual: 49, predicted: 48 },
  { time: '09:00', actual: 28, predicted: 27 },
  { time: '10:00', actual: 18, predicted: 17.5 },
  { time: '11:00', actual: 12, predicted: 13 },
  { time: '12:00', actual: 17, predicted: 16.5 },
  { time: '13:00', actual: 21, predicted: 20 },
  { time: '14:00', actual: 24, predicted: 25 },
  { time: '15:00', actual: 27, predicted: 26 },
  { time: '16:00', actual: 29, predicted: 28 },
  { time: '17:00', actual: 32, predicted: 33 },
  { time: '18:00', actual: 38, predicted: 37 },
  { time: '19:00', actual: 45, predicted: 46 },
  { time: '20:00', actual: 48, predicted: 47 },
  { time: '21:00', actual: 42, predicted: 42.5 },
  { time: '22:00', actual: 38, predicted: 39 },
  { time: '23:00', actual: 35, predicted: 36 },
];

// Sample data for weekly forecast (representing the second graph you provided)
const weeklyForecastData = [
  { date: '2024-12-25', actual: 38, predicted: 39 },
  { date: '2024-12-26', actual: 40, predicted: 42 },
  { date: '2024-12-27', actual: 35, predicted: 34 },
  { date: '2024-12-28', actual: 32, predicted: 33 },
  { date: '2024-12-29', actual: 28, predicted: 29 },
  { date: '2024-12-30', actual: 25, predicted: 26 },
  { date: '2024-12-31', actual: 45, predicted: 44 },
  { date: '2025-01-01', actual: 40, predicted: 41 },
];

const App = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    stats: false,
    accuracy: false,
    forecasts: false,
    partners: false,
    cta: false
  });
  
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('daily');
  const [hoverStates, setHoverStates] = useState({
    feature1: false,
    feature2: false,
    feature3: false
  });
  
  useEffect(() => {
    setIsVisible({
      hero: true,
      features: false,
      stats: false,
      accuracy: false,
      forecasts: false,
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
        forecasts: window.scrollY > 1100,
        partners: window.scrollY > 1600,
        cta: window.scrollY > 2000
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-950 bg-opacity-80 backdrop-blur-xl z-50 border-b border-gray-800/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Zap className="text-blue-500 mr-2" size={24} />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">SYNERGY</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-blue-400 transition duration-300 ease-in-out flex items-center group">
              Features
              <span className="w-0 group-hover:w-full h-0.5 bg-blue-500 mt-0.5 transition-all duration-300 ease-in-out"></span>
            </a>
            <a href="#accuracy" className="hover:text-blue-400 transition duration-300 ease-in-out flex items-center group">
              Performance
              <span className="w-0 group-hover:w-full h-0.5 bg-blue-500 mt-0.5 transition-all duration-300 ease-in-out"></span>
            </a>
            <a href="#forecasts" className="hover:text-blue-400 transition duration-300 ease-in-out flex items-center group">
              Forecasts
              <span className="w-0 group-hover:w-full h-0.5 bg-blue-500 mt-0.5 transition-all duration-300 ease-in-out"></span>
            </a>
            <a href="#partners" className="hover:text-blue-400 transition duration-300 ease-in-out flex items-center group">
              Partners
              <span className="w-0 group-hover:w-full h-0.5 bg-blue-500 mt-0.5 transition-all duration-300 ease-in-out"></span>
            </a>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-5 py-2 rounded-lg shadow-md shadow-blue-500/20 transition duration-300 ease-in-out flex items-center font-medium transform hover:-translate-y-0.5">
            <span>Demo</span>
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-blue-600/5 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-teal-500/5 to-transparent"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-gray-950 to-transparent"></div>
        </div>
        
        <div className={`container mx-auto max-w-6xl transition-all duration-1000 ease-out ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-4 space-x-2">
                <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                  AI-Powered Platform
                </div>
                <div className="px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium">
                  98.83% Accurate
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="block mb-2">Next-Gen</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">Energy Forecasting</span>
                <span className="block mt-2">for Tomorrow</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Empowering energy market participants with cutting-edge AI-driven forecasting tools to optimize operations, manage risk, and maximize profitability in volatile markets.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-lg shadow-md shadow-blue-600/20 transition duration-300 ease-in-out flex items-center font-medium transform hover:-translate-y-0.5">
                  Get Started
                  <ArrowRight size={18} className="ml-2" />
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out font-medium">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-600/10 rounded-3xl blur-3xl opacity-30"></div>
              <div className="w-full h-80 md:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl relative overflow-hidden border border-gray-700 shadow-xl shadow-blue-900/20 backdrop-blur-sm">
                <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="relative mb-4">
                      <div className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">98.83%</div>
                      <div className="absolute -top-3 -right-6 bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-md font-medium">
                        Industry Leading
                      </div>
                    </div>
                    <div className="text-gray-300 text-lg mb-6">Forecasting Accuracy</div>
                    
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <Check className="text-blue-400" size={16} />
                        </div>
                        <div className="text-left text-gray-300">AI-Powered Predictions</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <Check className="text-blue-400" size={16} />
                        </div>
                        <div className="text-left text-gray-300">Hourly to Weekly Forecasts</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <Check className="text-blue-400" size={16} />
                        </div>
                        <div className="text-left text-gray-300">Continuously Learning Models</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-gray-950 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-50"></div>
        <div className={`container mx-auto max-w-6xl relative z-10 transition-all duration-1000 ease-out ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-blue-900/20 border border-blue-700/30 rounded-full text-blue-400 text-sm font-medium mb-4">
              Cutting-Edge Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Comprehensive AI Solutions</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">Our platform delivers integrated forecasting tools powered by state-of-the-art artificial intelligence and machine learning algorithms.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 ease-in-out group relative overflow-hidden shadow-lg"
              onMouseEnter={() => setHoverStates({...hoverStates, feature1: true})}
              onMouseLeave={() => setHoverStates({...hoverStates, feature1: false})}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl transform translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-all duration-300 relative z-10">
                <TrendingUp className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-300 transition-all duration-300">Price Forecasting</h3>
              <p className="text-gray-300 mb-4">Short-term and long-term energy price predictions with unmatched accuracy across multiple markets.</p>
              
              <div className="pt-2">
                <a href="#" className="text-blue-400 flex items-center text-sm font-medium group-hover:text-blue-300 transition-all duration-300 relative">
                  Learn more 
                  <span className={`ml-1 transform transition-all duration-300 ${hoverStates.feature1 ? 'translate-x-1' : ''}`}>
                    <ChevronRight size={16} />
                  </span>
                </a>
              </div>
            </div>
            
            <div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 ease-in-out group relative overflow-hidden shadow-lg"
              onMouseEnter={() => setHoverStates({...hoverStates, feature2: true})}
              onMouseLeave={() => setHoverStates({...hoverStates, feature2: false})}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl transform translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-all duration-300 relative z-10">
                <Zap className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-300 transition-all duration-300">Renewable Generation</h3>
              <p className="text-gray-300 mb-4">Predict renewable energy generation patterns with precision and confidence for optimal asset management.</p>
              
              <div className="pt-2">
                <a href="#" className="text-blue-400 flex items-center text-sm font-medium group-hover:text-blue-300 transition-all duration-300 relative">
                  Learn more 
                  <span className={`ml-1 transform transition-all duration-300 ${hoverStates.feature2 ? 'translate-x-1' : ''}`}>
                    <ChevronRight size={16} />
                  </span>
                </a>
              </div>
            </div>
            
            <div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 ease-in-out group relative overflow-hidden shadow-lg"
              onMouseEnter={() => setHoverStates({...hoverStates, feature3: true})}
              onMouseLeave={() => setHoverStates({...hoverStates, feature3: false})}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl transform translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-all duration-300 relative z-10">
                <BarChart2 className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-300 transition-all duration-300">Grid Congestion</h3>
              <p className="text-gray-300 mb-4">Anticipate grid bottlenecks and optimize transmission strategies to avoid costly congestion charges.</p>
              
              <div className="pt-2">
                <a href="#" className="text-blue-400 flex items-center text-sm font-medium group-hover:text-blue-300 transition-all duration-300 relative">
                  Learn more 
                  <span className={`ml-1 transform transition-all duration-300 ${hoverStates.feature3 ? 'translate-x-1' : ''}`}>
                    <ChevronRight size={16} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-gray-900 to-gray-950 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-blue-600/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-teal-500/10 to-transparent"></div>
        </div>
        
        <div className={`container mx-auto max-w-6xl relative z-10 transition-all duration-1000 ease-out ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-900/10 group">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-all duration-300">
                <Award className="text-blue-400" size={24} />
              </div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300 mb-2">98.83%</div>
              <p className="text-gray-300 text-lg">Prediction Accuracy</p>
              <p className="text-gray-400 text-sm mt-2">Consistently outperforming traditional forecasting methods by over 20%</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-900/10 group">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-all duration-300">
                <Clock className="text-blue-400" size={24} />
              </div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300 mb-2">{"<"}1 month</div>
              <p className="text-gray-300 text-lg">To Market Validation</p>
              <p className="text-gray-400 text-sm mt-2">Quick implementation and tangible ROI for energy market participants</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-900/10 group">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-all duration-300">
                <Users className="text-blue-400" size={24} />
              </div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300 mb-2">3+</div>
              <p className="text-gray-300 text-lg">LOIs from Major Players</p>
              <p className="text-gray-400 text-sm mt-2">Industry leaders recognize the value of our AI-powered platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accuracy Section */}
      <section id="accuracy" className="py-24 px-6 bg-gray-950 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-50"></div>
        <div className={`container mx-auto max-w-6xl relative z-10 transition-all duration-1000 ease-out ${isVisible.accuracy ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-blue-900/20 border border-blue-700/30 rounded-full text-blue-400 text-sm font-medium mb-4">
              Industry-Leading Precision
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Unmatched Performance</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">Our AI models consistently outperform industry benchmarks and competitors by a significant margin.</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-lg mb-12">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Model Accuracy Over Time</h3>
              <p className="text-gray-300">Monthly improvement in prediction accuracy as our AI models learn and adapt.</p>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={accuracyData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPrediction" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis domain={[95, 100]} stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                    itemStyle={{ color: '#F9FAFB' }}
                  />
                  <Legend verticalAlign="top" height={36}/>
                  <Area 
                    type="monotone" 
                    dataKey="prediction" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorPrediction)"
                    dot={{ r: 6, strokeWidth: 2, fill: '#1F2937' }}
                    activeDot={{ r: 8, strokeWidth: 2 }}
                    name="Our Prediction"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="actual" 
                    stroke="#10B981" 
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorActual)"
                    dot={{ r: 6, strokeWidth: 2, fill: '#1F2937' }}
                    activeDot={{ r: 8, strokeWidth: 2 }}
                    name="Actual Values"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 flex items-start group hover:border-blue-500/30 transition-all duration-300">
              <div className="mr-4 mt-1">
                <Shield className="text-blue-400 group-hover:text-blue-300 transition-all duration-300" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-300 transition-all duration-300">Reliable Predictions</h3>
                <p className="text-gray-300 text-sm">Our models maintain high accuracy even in volatile market conditions and extreme events.</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 flex items-start group hover:border-blue-500/30 transition-all duration-300">
              <div className="mr-4 mt-1">
                <TrendingUp className="text-blue-400 group-hover:text-blue-300 transition-all duration-300" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-300 transition-all duration-300">Continuous Improvement</h3>
                <p className="text-gray-300 text-sm">Self-learning algorithms that improve with each market cycle and new data input.</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 flex items-start group hover:border-blue-500/30 transition-all duration-300">
              <div className="mr-4 mt-1">
                <BarChart2 className="text-blue-400 group-hover:text-blue-300 transition-all duration-300" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-300 transition-all duration-300">Comprehensive Analysis</h3>
                <p className="text-gray-300 text-sm">Multi-factor models that analyze hundreds of variables simultaneously for optimal predictions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forecasts Section (New) */}
      <section id="forecasts" className="py-24 px-6 bg-gradient-to-r from-gray-900 to-gray-950 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-blue-600/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-tl from-teal-500/10 to-transparent"></div>
        </div>
        
        <div className={`container mx-auto max-w-6xl relative z-10 transition-all duration-1000 ease-out ${isVisible.forecasts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-blue-900/20 border border-blue-700/30 rounded-full text-blue-400 text-sm font-medium mb-4">
              CAISO SP-15 Zone LMP Projections
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Real-World Forecasting</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">Our AI platform delivers accurate price projections for major energy markets, helping traders make informed decisions.</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-lg mb-8">
            <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-2">CAISO SP-15 Zone LMP Projections</h3>
                <p className="text-gray-300">See how our forecasts track actual market prices with remarkable precision.</p>
              </div>
              
              <div className="flex space-x-2 mt-4 md:mt-0">
                <button 
                  className={`px-4 py-2 rounded-lg flex items-center ${activeTab === 'daily' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
                  onClick={() => setActiveTab('daily')}
                >
                  <Clock size={16} className="mr-2" />
                  24-Hour
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg flex items-center ${activeTab === 'weekly' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
                  onClick={() => setActiveTab('weekly')}
                >
                  <Calendar size={16} className="mr-2" />
                  Weekly
                </button>
              </div>
            </div>
            
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                {activeTab === 'daily' ? (
                  <LineChart data={dailyForecastData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                      itemStyle={{ color: '#F9FAFB' }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="actual" 
                      stroke="#3B82F6" 
                      strokeWidth={3}
                      dot={{ r: 0 }}
                      activeDot={{ r: 8, strokeWidth: 2 }}
                      name="Actual LMP"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="predicted" 
                      stroke="#10B981" 
                      strokeWidth={3}
                      strokeDasharray="5 5"
                      dot={{ r: 0 }}
                      activeDot={{ r: 8, strokeWidth: 2 }}
                      name="Predicted LMP"
                    />
                  </LineChart>
                ) : (
                  <LineChart data={weeklyForecastData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="date" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                      itemStyle={{ color: '#F9FAFB' }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="actual" 
                      stroke="#3B82F6" 
                      strokeWidth={3}
                      dot={{ r: 0 }}
                      activeDot={{ r: 8, strokeWidth: 2 }}
                      name="Actual LMP"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="predicted" 
                      stroke="#10B981" 
                      strokeWidth={3}
                      strokeDasharray="5 5"
                      dot={{ r: 0 }}
                      activeDot={{ r: 8, strokeWidth: 2 }}
                      name="Predicted LMP"
                    />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 text-sm text-gray-400 italic">
              *Note: This is part of our development phase. This chart is solely intended to demonstrate the progress we have made in developing our initial price projection tool.
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 flex items-start group hover:border-blue-500/30 transition-all duration-300">
              <div className="mr-4 mt-1">
                <Clock className="text-blue-400 group-hover:text-blue-300 transition-all duration-300" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-300 transition-all duration-300">24-Hour Forecasts</h3>
                <p className="text-gray-300 text-sm">Detailed hourly price projections to optimize daily trading and operational decisions.</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 flex items-start group hover:border-blue-500/30 transition-all duration-300">
              <div className="mr-4 mt-1">
                <Calendar className="text-blue-400 group-hover:text-blue-300 transition-all duration-300" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-300 transition-all duration-300">Weekly Outlooks</h3>
                <p className="text-gray-300 text-sm">Extended forecasts to support medium-term planning and risk management strategies.</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 flex items-start group hover:border-blue-500/30 transition-all duration-300">
              <div className="mr-4 mt-1">
                <Star className="text-blue-400 group-hover:text-blue-300 transition-all duration-300" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-300 transition-all duration-300">Custom Timeframes</h3>
                <p className="text-gray-300 text-sm">Flexible projection options tailored to your specific market participation needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-24 px-6 bg-gray-950 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-50"></div>
        <div className={`container mx-auto max-w-6xl relative z-10 transition-all duration-1000 ease-out ${isVisible.partners ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-blue-900/20 border border-blue-700/30 rounded-full text-blue-400 text-sm font-medium mb-4">
              Strategic Alliances
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">On the Verge of Partnership</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">We're finalizing Letters of Intent with major energy market players who recognize our platform's potential.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-40 rounded-2xl flex items-center justify-center border border-gray-700 hover:border-blue-500/30 transition-all duration-300 ease-in-out group shadow-lg">
              <div className="text-gray-400 font-semibold text-xl group-hover:text-blue-300 transition-all duration-300">Energy Corp.</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-40 rounded-2xl flex items-center justify-center border border-gray-700 hover:border-blue-500/30 transition-all duration-300 ease-in-out group shadow-lg">
              <div className="text-gray-400 font-semibold text-xl group-hover:text-blue-300 transition-all duration-300">PowerGrid Inc.</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-40 rounded-2xl flex items-center justify-center border border-gray-700 hover:border-blue-500/30 transition-all duration-300 ease-in-out group shadow-lg">
              <div className="text-gray-400 font-semibold text-xl group-hover:text-blue-300 transition-all duration-300">RenewTech</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-40 rounded-2xl flex items-center justify-center border border-gray-700 hover:border-blue-500/30 transition-all duration-300 ease-in-out group shadow-lg">
              <div className="text-gray-400 font-semibold text-xl group-hover:text-blue-300 transition-all duration-300">Global Energy</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-gray-900 to-blue-900/30 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-600/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-500/10 to-transparent"></div>
        </div>
        
        <div className={`container mx-auto max-w-4xl text-center relative z-10 transition-all duration-1000 ease-out transform ${isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="inline-block px-3 py-1 bg-blue-900/20 border border-blue-700/30 rounded-full text-blue-400 text-sm font-medium mb-4">
            Limited Early Access
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Ready to Transform Your Energy Trading?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            Join the energy market revolution with our cutting-edge AI forecasting platform and gain a competitive advantage.
          </p>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-lg mb-12">
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="flex items-start">
                <div className="mr-4 mt-1 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="text-green-400" size={16} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">No Setup Costs</h3>
                  <p className="text-gray-300 text-sm">Zero infrastructure required to start using our platform</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="text-green-400" size={16} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Free Trial</h3>
                  <p className="text-gray-300 text-sm">Test our platform with your historical data</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="text-green-400" size={16} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Dedicated Support</h3>
                  <p className="text-gray-300 text-sm">Our team provides personalized onboarding assistance</p>
                </div>
              </div>
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-lg shadow-lg shadow-blue-600/20 transition duration-300 ease-in-out flex items-center mx-auto font-medium transform hover:-translate-y-1">
            Request Early Access
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 flex items-center">
              <Zap className="text-blue-500 mr-2" size={24} />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">SYNERGY</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-8 md:mb-0">
              <a href="#features" className="text-gray-400 hover:text-blue-400 transition">Features</a>
              <a href="#accuracy" className="text-gray-400 hover:text-blue-400 transition">Performance</a>
              <a href="#forecasts" className="text-gray-400 hover:text-blue-400 transition">Forecasts</a>
              <a href="#partners" className="text-gray-400 hover:text-blue-400 transition">Partners</a>
              <a href="#contact" className="text-gray-400 hover:text-blue-400 transition">Contact</a>
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