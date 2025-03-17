import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { ArrowRight, ChevronRight, Clock, Calendar, Award, Star, Users, Shield, TrendingUp, BarChart2, Check } from 'lucide-react';

// Import the forecast images
import dailyForecastImage from './images/daily-forecast.png';
import weeklyForecastImage from './images/weekly-forecast.png';
// Import the logo (you'll need to add this file to your project)
import logo from './images/synergy_logo.jpeg';

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
    about: false
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
      about: false
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
        about: window.scrollY > 2000
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      {/* Navbar */}
<nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
  <div className="container mx-auto px-6 py-3 flex justify-between items-center">
    <div className="flex items-center">
      <img src={logo} alt="Synergy Logo" className="h-10 mr-3" />
    </div>
    <div className="hidden md:flex space-x-8">
      <a href="#features" className="text-gray-800 hover:text-orange-500 transition duration-300 ease-in-out flex items-center group font-medium">
        Research
        <span className="w-0 group-hover:w-full h-0.5 bg-orange-500 mt-0.5 transition-all duration-300 ease-in-out"></span>
      </a>
      <a href="#accuracy" className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out flex items-center group font-medium">
        Performance
        <span className="w-0 group-hover:w-full h-0.5 bg-blue-500 mt-0.5 transition-all duration-300 ease-in-out"></span>
      </a>
      <a href="#forecasts" className="text-gray-800 hover:text-green-500 transition duration-300 ease-in-out flex items-center group font-medium">
        Forecasts
        <span className="w-0 group-hover:w-full h-0.5 bg-green-500 mt-0.5 transition-all duration-300 ease-in-out"></span>
      </a>
      <a href="#partners" className="text-gray-800 hover:text-purple-500 transition duration-300 ease-in-out flex items-center group font-medium">
        Collaborators
        <span className="w-0 group-hover:w-full h-0.5 bg-purple-500 mt-0.5 transition-all duration-300 ease-in-out"></span>
      </a>
      <a href="#about" className="text-gray-800 hover:text-orange-500 transition duration-300 ease-in-out flex items-center group font-medium">
        About Us
        <span className="w-0 group-hover:w-full h-0.5 bg-orange-500 mt-0.5 transition-all duration-300 ease-in-out"></span>
      </a>
    </div>
    <a href="#contact-form" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-5 py-2 rounded-lg shadow-md shadow-orange-200 transition duration-300 ease-in-out flex items-center font-medium transform hover:-translate-y-0.5">
  <span>Contact Us</span>
  <ArrowRight size={16} className="ml-2" />
</a>
  </div>
</nav>
      {/* Hero Section */}
      <section className="pt-36 pb-24 px-6 relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-orange-500/30 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-blue-500/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-green-500/30 to-transparent"></div>
        </div>
        
        <div className={`container mx-auto max-w-6xl transition-all duration-1000 ease-out ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-4 space-x-2">
                <div className="px-3 py-1 bg-orange-100 border border-orange-200 rounded-full text-orange-600 text-sm font-medium">
                  AI Research Project
                </div>
                <div className="px-3 py-1 bg-blue-100 border border-blue-200 rounded-full text-blue-600 text-sm font-medium">
                  98.83% Accurate
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
                <span className="block mb-2">Next-Gen</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-blue-500">Energy Forecasting</span>
                <span className="block mt-2">Research</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our college research project on AI-driven energy market forecasting. We're developing cutting-edge algorithms to predict energy prices with unprecedented accuracy.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#forecasts" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-3 rounded-lg shadow-md shadow-orange-200 transition duration-300 ease-in-out flex items-center font-medium transform hover:-translate-y-0.5">
                  See Our Progress
                  <ArrowRight size={18} className="ml-2" />
                </a>
                <a href="#about" className="bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-800 px-6 py-3 rounded-lg transition duration-300 ease-in-out font-medium shadow-sm">
                  About Our Team
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-blue-500/10 to-green-500/10 rounded-3xl blur-3xl opacity-30"></div>
              <div className="w-full h-80 md:h-96 bg-white rounded-2xl relative overflow-hidden border border-gray-200 shadow-xl shadow-gray-200/50 backdrop-blur-sm">
                <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="relative mb-4">
                      <div className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-blue-500">98.83%</div>
                      <div className="absolute -top-3 -right-6 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-md font-medium">
                        Current Accuracy
                      </div>
                    </div>
                    <div className="text-gray-600 text-lg mb-6">Forecasting Accuracy</div>
                    
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                          <Check className="text-orange-500" size={16} />
                        </div>
                        <div className="text-left text-gray-600">AI-Powered Predictions</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Check className="text-blue-500" size={16} />
                        </div>
                        <div className="text-left text-gray-600">Hourly to Weekly Forecasts</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="text-green-500" size={16} />
                        </div>
                        <div className="text-left text-gray-600">Continuously Learning Models</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Changed to Research */}
      <section id="features" className="py-24 px-6 bg-white relative">
        <div className={`container mx-auto max-w-6xl relative z-10 transition-all duration-1000 ease-out ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-orange-100 border border-orange-200 rounded-full text-orange-600 text-sm font-medium mb-4">
              Research Areas
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Research Focus</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">The main areas of our academic research on energy forecasting with artificial intelligence and machine learning algorithms.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-300 transition-all duration-300 ease-in-out group relative overflow-hidden shadow-lg hover:shadow-orange-100"
              onMouseEnter={() => setHoverStates({...hoverStates, feature1: true})}
              onMouseLeave={() => setHoverStates({...hoverStates, feature1: false})}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl transform translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-all duration-300 relative z-10">
                <TrendingUp className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-orange-600 transition-all duration-300">Price Forecasting</h3>
              <p className="text-gray-600 mb-4">Research on short-term and long-term energy price predictions with deep learning and time series analysis.</p>
              
              <div className="pt-2">
                <a href="#forecasts" className="text-orange-500 flex items-center text-sm font-medium group-hover:text-orange-600 transition-all duration-300 relative">
                  See results 
                  <span className={`ml-1 transform transition-all duration-300 ${hoverStates.feature1 ? 'translate-x-1' : ''}`}>
                    <ChevronRight size={16} />
                  </span>
                </a>
              </div>
            </div>
            
            <div 
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 ease-in-out group relative overflow-hidden shadow-lg hover:shadow-blue-100"
              onMouseEnter={() => setHoverStates({...hoverStates, feature2: true})}
              onMouseLeave={() => setHoverStates({...hoverStates, feature2: false})}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl transform translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-all duration-300 relative z-10">
                <Clock className="text-blue-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-all duration-300">Renewable Generation</h3>
              <p className="text-gray-600 mb-4">Exploring AI models for predicting renewable energy generation patterns based on weather and historical data.</p>
              
              <div className="pt-2">
                <a href="#forecasts" className="text-blue-500 flex items-center text-sm font-medium group-hover:text-blue-600 transition-all duration-300 relative">
                  See results 
                  <span className={`ml-1 transform transition-all duration-300 ${hoverStates.feature2 ? 'translate-x-1' : ''}`}>
                    <ChevronRight size={16} />
                  </span>
                </a>
              </div>
            </div>
            
            <div 
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-300 transition-all duration-300 ease-in-out group relative overflow-hidden shadow-lg hover:shadow-green-100"
              onMouseEnter={() => setHoverStates({...hoverStates, feature3: true})}
              onMouseLeave={() => setHoverStates({...hoverStates, feature3: false})}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-3xl transform translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-all duration-300 relative z-10">
                <BarChart2 className="text-green-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-green-600 transition-all duration-300">Grid Congestion</h3>
              <p className="text-gray-600 mb-4">Developing algorithms to anticipate grid bottlenecks and optimize transmission path planning.</p>
              
              <div className="pt-2">
                <a href="#forecasts" className="text-green-500 flex items-center text-sm font-medium group-hover:text-green-600 transition-all duration-300 relative">
                  See results 
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
      <section className="py-24 px-6 bg-gray-50 relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-blue-500/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-orange-500/30 to-transparent"></div>
        </div>
        
        <div className={`container mx-auto max-w-6xl relative z-10 transition-all duration-1000 ease-out ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-all duration-300">
                <Award className="text-blue-500" size={24} />
              </div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400 mb-2">98.83%</div>
              <p className="text-gray-800 text-lg">Prediction Accuracy</p>
              <p className="text-gray-600 text-sm mt-2">Our current model outperforms traditional forecasting methods by over 20%</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-orange-100 group">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-all duration-300">
                <Clock className="text-orange-500" size={24} />
              </div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 mb-2">6 months</div>
              <p className="text-gray-800 text-lg">Research Progress</p>
              <p className="text-gray-600 text-sm mt-2">Time spent developing our initial algorithms and testing methodology</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-green-100 group">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-all duration-300">
                <Users className="text-green-500" size={24} />
              </div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-400 mb-2">3+</div>
              <p className="text-gray-800 text-lg">Utility Collaborations</p>
              <p className="text-gray-600 text-sm mt-2">Energy companies providing data and validating our research findings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accuracy Section */}
      <section id="accuracy" className="py-24 px-6 bg-white relative">
        <div className={`container mx-auto max-w-6xl relative z-10 transition-all duration-1000 ease-out ${isVisible.accuracy ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-blue-100 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
              Research Results
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Model Performance</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">Our AI models consistently achieve high accuracy scores during development and testing phases.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg mb-12">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">Model Accuracy Over Time</h3>
              <p className="text-gray-600">Monthly improvement in prediction accuracy as our research progresses.</p>
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
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" stroke="#6B7280" />
                  <YAxis domain={[95, 100]} stroke="#6B7280" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'white', border: '1px solid #E5E7EB', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                    itemStyle={{ color: '#111827' }}
                  />
                  <Legend verticalAlign="top" height={36}/>
                  <Area 
                    type="monotone" 
                    dataKey="prediction" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorPrediction)"
                    dot={{ r: 6, strokeWidth: 2, fill: 'white' }}
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
                    dot={{ r: 6, strokeWidth: 2, fill: 'white' }}
                    activeDot={{ r: 8, strokeWidth: 2 }}
                    name="Actual Values"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 flex items-start group hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100">
              <div className="mr-4 mt-1">
                <Shield className="text-blue-500 group-hover:text-blue-600 transition-all duration-300" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-all duration-300">Reliable Predictions</h3>
                <p className="text-gray-600 text-sm">Our models maintain high accuracy even in volatile market conditions and extreme events.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200 flex items-start group hover:border-orange-300 transition-all duration-300 hover:shadow-lg hover:shadow-orange-100">
              <div className="mr-4 mt-1">
                <TrendingUp className="text-orange-500 group-hover:text-orange-600 transition-all duration-300" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-orange-600 transition-all duration-300">Continuous Improvement</h3>
                <p className="text-gray-600 text-sm">Self-learning algorithms that improve with each market cycle and new data input.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200 flex items-start group hover:border-green-300 transition-all duration-300 hover:shadow-lg hover:shadow-green-100">
              <div className="mr-4 mt-1">
                <BarChart2 className="text-green-500 group-hover:text-green-600 transition-all duration-300" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-green-600 transition-all duration-300">Comprehensive Analysis</h3>
                <p className="text-gray-600 text-sm">Multi-factor models that analyze hundreds of variables simultaneously for optimal predictions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forecasts Section */}
      <section id="forecasts" className="py-24 px-6 bg-gray-50 relative">
        <div className={`container mx-auto max-w-6xl relative z-10 transition-all duration-1000 ease-out ${isVisible.forecasts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-green-100 border border-green-200 rounded-full text-green-600 text-sm font-medium mb-4">
              Development Progress
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">CAISO SP-15 Zone LMP Projections</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">Our current research progress with forecasting energy prices and validating against historical market data.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg mb-8">
            <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">Forecast Validation Results</h3>
                <p className="text-gray-600">Comparison between our AI-generated predictions and actual market values.</p>
              </div>
              
              <div className="flex space-x-2 mt-4 md:mt-0">
                <button 
                  className={`px-4 py-2 rounded-lg flex items-center transition-all duration-300 ${activeTab === 'daily' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setActiveTab('daily')}
                >
                  <Clock size={16} className="mr-2" />
                  24-Hour
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg flex items-center transition-all duration-300 ${activeTab === 'weekly' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setActiveTab('weekly')}
                >
                  <Calendar size={16} className="mr-2" />
                  Weekly
                </button>
              </div>
            </div>
            
            <div className="h-96 flex items-center justify-center">
              {activeTab === 'daily' ? (
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={dailyForecastImage} 
                    alt="CAISO SP-15 Zone LMP 24-hour Forecast" 
                    className="max-h-full max-w-full object-contain rounded-xl border border-gray-200 shadow-md"
                  />
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={weeklyForecastImage} 
                    alt="CAISO SP-15 Zone LMP Weekly Forecast" 
                    className="max-h-full max-w-full object-contain rounded-xl border border-gray-200 shadow-md"
                  />
                </div>
              )}
            </div>
            
            <div className="mt-4 text-sm text-gray-500 italic">
              *Note: This is part of our development phase. This chart is solely intended to demonstrate the progress we have made in developing our initial price projection tool.
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 flex items-start group hover:border-green-300 transition-all duration-300 hover:shadow-lg hover:shadow-green-100">
              <div className="mr-4 mt-1">
                <Clock className="text-green-500 group-hover:text-green-600 transition-all duration-300" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-green-600 transition-all duration-300">24-Hour Forecast Research</h3>
                <p className="text-gray-600 text-sm">Development of AI models for detailed hourly price projections with high accuracy.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200 flex items-start group hover:border-orange-300 transition-all duration-300 hover:shadow-lg hover:shadow-orange-100">
              <div className="mr-4 mt-1">
                <Calendar className="text-orange-500 group-hover:text-orange-600 transition-all duration-300" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-orange-600 transition-all duration-300">Weekly Forecast Models</h3>
                <p className="text-gray-600 text-sm">Extended time-series analysis algorithms for longer-term prediction horizons.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200 flex items-start group hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100">
              <div className="mr-4 mt-1">
                <Star className="text-blue-500 group-hover:text-blue-600 transition-all duration-300" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-all duration-300">Custom Forecast Windows</h3>
                <p className="text-gray-600 text-sm">Research on flexible time-window prediction algorithms for various applications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - Changed to Collaborators */}
      <section id="partners" className="py-24 px-6 bg-white relative">
        <div className={`container mx-auto max-w-6xl relative z-10 transition-all duration-1000 ease-out ${isVisible.partners ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-purple-100 border border-purple-200 rounded-full text-purple-600 text-sm font-medium mb-4">
              Research Partners
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Collaborators</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">Energy companies and academic partners working with us on this research project.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white h-40 rounded-2xl flex items-center justify-center border border-gray-200 hover:border-purple-300 transition-all duration-300 ease-in-out group shadow-lg hover:shadow-purple-100">
              <div className="text-gray-700 font-semibold text-xl group-hover:text-purple-600 transition-all duration-300">Aypa Power</div>
            </div>
            <div className="bg-white h-40 rounded-2xl flex items-center justify-center border border-gray-200 hover:border-purple-300 transition-all duration-300 ease-in-out group shadow-lg hover:shadow-purple-100">
              <div className="text-gray-700 font-semibold text-xl group-hover:text-purple-600 transition-all duration-300">Black Hills Energy</div>
            </div>
            <div className="bg-white h-40 rounded-2xl flex items-center justify-center border border-gray-200 hover:border-purple-300 transition-all duration-300 ease-in-out group shadow-lg hover:shadow-purple-100">
              <div className="text-gray-700 font-semibold text-xl group-hover:text-purple-600 transition-all duration-300">Pathway Power</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Replaced CTA */}
      <section id="about" className="py-24 px-6 bg-gray-50 relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-orange-500/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-blue-500/30 to-transparent"></div>
        </div>
        
        <div className={`container mx-auto max-w-4xl text-center relative z-10 transition-all duration-1000 ease-out transform ${isVisible.about ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="inline-block px-3 py-1 bg-orange-100 border border-orange-200 rounded-full text-orange-600 text-sm font-medium mb-4">
            Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">About The Project</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
            Synergy is a research project developed by ambitious college students exploring the application of artificial intelligence to energy market forecasting.
          </p>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg mb-12 text-left">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              We're exploring how advanced AI techniques can revolutionize energy market forecasting through academic research. Our goal is to develop models that can predict energy prices with unprecedented accuracy, helping to understand market dynamics and improve grid efficiency.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">The Team</h3>
            <p className="text-gray-600 mb-6">
              We are a group of two driven people from AI and mechanical background and with the mission to revolutionalize the green energy market.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Project Status</h3>
            <p className="text-gray-600">
              This is an ongoing academic research project. We're currently in the development and validation phase, working with energy companies to test our models against real-world data. This website showcases our current progress and research findings.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg" id="contact-form">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 text-center">Contact Our Team</h3>
            <p className="text-gray-600 mb-6 text-center">
              Have questions about our research or interested in collaborating? Reach out to us!
            </p>
            
            <form className="space-y-6" action="mailto:sachinlodhi8614@gmail.com" method="POST" encType="text/plain">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="you@example.com" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 outline-none"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  placeholder="Research Collaboration" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 outline-none"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="4" 
                  placeholder="Tell us how we can help or what you're interested in..." 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 outline-none resize-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-3 rounded-lg shadow-md shadow-orange-200 transition duration-300 ease-in-out flex items-center justify-center font-medium transform hover:-translate-y-0.5"
              >
                Send Message
                <ArrowRight size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 flex items-center">
              <img src={logo} alt="Synergy Logo" className="h-10 mr-3" />
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-8 md:mb-0">
              <a href="#features" className="text-gray-600 hover:text-orange-500 transition">Research</a>
              <a href="#accuracy" className="text-gray-600 hover:text-blue-500 transition">Performance</a>
              <a href="#forecasts" className="text-gray-600 hover:text-green-500 transition">Forecasts</a>
              <a href="#partners" className="text-gray-600 hover:text-purple-500 transition">Collaborators</a>
              <a href="#about" className="text-gray-600 hover:text-orange-500 transition">About Us</a>
            </div>
            
            <div className="text-gray-500 text-sm">
              © 2025 Synergy. All rights reserved. Built by ambitious college students.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;