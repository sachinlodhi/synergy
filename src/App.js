import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart } from 'recharts';
import { ArrowRight, ChevronRight, Clock, Calendar, Award, Star, Users, Shield, TrendingUp, BarChart2, Check, TrendingUpIcon } from 'lucide-react';

// Import the forecast images
import dailyForecastImage from './images/daily-forecast.png';
import weeklyForecastImage from './images/weekly-forecast.png';
// Import the logo (you'll need to add this file to your project)
import logo from './images/synergy_logo.jpeg';

// Sample data for the accuracy chart
// Sample data for the accuracy chart with weekly dates
// Sample data for the accuracy chart with 20 weekly dates starting Jan 1
// Sample data for the accuracy chart with weekly dates starting Jan 1
// Sample data for the accuracy chart with all weekly dates from Jan 1 to Jun 4
// Sample data for LMP price chart with weekly dates
const accuracyData = [
  { date: 'Jan 1', predicted: 42.50, actual: 45.20 },
  { date: 'Jan 8', predicted: 38.75, actual: 40.10 },
  { date: 'Jan 15', predicted: 41.20, actual: 39.80 },
  { date: 'Jan 22', predicted: 43.80, actual: 45.30 },
  { date: 'Jan 29', predicted: 46.50, actual: 47.20 },
  { date: 'Feb 5', predicted: 48.20, actual: 50.10 },
  { date: 'Feb 12', predicted: 52.30, actual: 54.80 },
  { date: 'Feb 19', predicted: 51.70, actual: 49.90 },
  { date: 'Feb 26', predicted: 47.80, actual: 46.40 },
  { date: 'Mar 5', predicted: 45.20, actual: 43.70 },
  { date: 'Mar 12', predicted: 42.80, actual: 41.30 },
  { date: 'Mar 19', predicted: 39.50, actual: 38.20 },
  { date: 'Mar 26', predicted: 36.90, actual: 35.60 },
  { date: 'Apr 2', predicted: 34.20, actual: 32.80 },
  { date: 'Apr 9', predicted: 35.10, actual: 36.40 },
  { date: 'Apr 16', predicted: 38.40, actual: 39.70 },
  { date: 'Apr 23', predicted: 42.10, actual: 44.30 },
  { date: 'Apr 30', predicted: 45.60, actual: 47.80 },
  { date: 'May 7', predicted: 49.20, actual: 51.40 },
  { date: 'May 14', predicted: 53.10, actual: 55.30 },
  { date: 'May 21', predicted: 57.40, actual: 59.20 },
  { date: 'May 28', predicted: 59.80, actual: 62.40 },
  { date: 'Jun 4', predicted: 63.50, actual: 65.10 },
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
    {/* Navbar - Updated with new tabs */}
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Synergy Logo" className="h-14 mr-4" />
        </div>
        <div className="hidden md:flex space-x-20">
          <a href="#features" className="text-gray-800 hover:text-orange-500 transition duration-300 ease-in-out group font-medium whitespace-nowrap">
            <span className="inline-block">AI Tools</span>
            <span className="block w-0 group-hover:w-full h-0.5 bg-orange-500 mt-0.5 transition-all duration-300 ease-in-out"></span>
          </a>
          <a href="#accuracy" className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out group font-medium whitespace-nowrap">
            <span className="inline-block">Performance</span>
            <span className="block w-0 group-hover:w-full h-0.5 bg-blue-500 mt-0.5 transition-all duration-300 ease-in-out"></span>
          </a>
          <a href="#forecasts" className="text-gray-800 hover:text-green-500 transition duration-300 ease-in-out group font-medium whitespace-nowrap">
            <span className="inline-block">Progress</span>
            <span className="block w-0 group-hover:w-full h-0.5 bg-green-500 mt-0.5 transition-all duration-300 ease-in-out"></span>
          </a>
          <a href="#about" className="text-gray-800 hover:text-orangegit-500 transition duration-300 ease-in-out group font-medium whitespace-nowrap">
            <span className="inline-block">About Us</span>
            <span className="block w-0 group-hover:w-full h-0.5 bg-green-500 mt-0.5 transition-all duration-300 ease-in-out"></span>
          </a>
        </div>
        <a href="#contact-form" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-3 rounded-lg shadow-md shadow-orange-200 transition duration-300 ease-in-out flex items-center font-medium transform hover:-translate-y-0.5 whitespace-nowrap">
          <span>Schedule a Pilot</span>
          <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </nav>
      {/* Hero Section - Updated headline and description */}
      <section className="pt-36 pb-24 px-6 relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-orange-500/30 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-blue-500/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-green-500/30 to-transparent"></div>
        </div>
        
        <div className={`container mx-auto max-w-6xl transition-all duration-1000 ease-out ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
                <span className="block mb-2">Next-Gen</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-blue-500">AI-Driven Energy</span>
                <span className="block mt-2">Forecasting</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We're developing cutting-edge AI tools to predict energy prices, site performance, and grid congestion at high resolutions and unprecedented accuracy.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#forecasts" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-3 rounded-lg shadow-md shadow-orange-200 transition duration-300 ease-in-out flex items-center font-medium transform hover:-translate-y-0.5">
                  See our Progress
                  <ArrowRight size={18} className="ml-2" />
                </a>
                <a href="#contact-form" className="bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-800 px-6 py-3 rounded-lg transition duration-300 ease-in-out font-medium shadow-sm">
                  Schedule a Pilot
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
                      <div className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-blue-500">&gt;98%</div>
                      <div className="absolute -top-4 -right-11 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-md font-medium">
                        Forecasting Accuracy
                      </div>
                    </div>
                   
                    
                    <div className="flex flex-col space-y-5">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                          <BarChart2 className="text-orange-500" size={20} />
                        </div>
                        <div className="text-left text-gray-700 text-lg font-medium">AI-Powered Predictions</div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Clock className="text-blue-500" size={20} />
                        </div>
                        <div className="text-left text-gray-700 text-lg font-medium">Up to 5 min. Resolution</div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <TrendingUp className="text-green-500" size={20} />
                        </div>
                        <div className="text-left text-gray-700 text-lg font-medium">Continuously Learning Models</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Now "Tools" */}
      <section id="features" className="py-24 px-6 bg-white relative">
        <div className={`container mx-auto max-w-6xl relative z-10 transition-all duration-1000 ease-out ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
          
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Introducing our Foresight Series</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">We provide a comprehensive suite of energy forecasting tools:</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div 
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-300 transition-all duration-300 ease-in-out group relative overflow-hidden shadow-lg hover:shadow-orange-100"
              onMouseEnter={() => setHoverStates({...hoverStates, feature1: true})}
              onMouseLeave={() => setHoverStates({...hoverStates, feature1: false})}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl transform translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-all duration-300 relative z-10">
                <TrendingUp className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-orange-600 transition-all duration-300">Price Foresight</h3>
              <p className="text-gray-600 mb-4">Short-term and long-term energy price predictions with deep learning time series analysis.</p>
              
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
  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-all duration-300">Power Foresight</h3>
  <p className="text-gray-600 mb-4">Short-term and long-term power production predictions based on real-time weather patterns and historical data.</p>
  
  <div className="pt-2">
    <div className="text-gray-400 flex items-center text-sm font-medium group-hover:text-blue-600 transition-all duration-300 relative">
      <span className="group-hover:hidden">Coming Soon</span>
      <span className="hidden group-hover:block">Coming Soon</span>
      <span className={`ml-1 transform transition-all duration-300 ${hoverStates.feature2 ? 'translate-x-1' : ''}`}>
        <ChevronRight size={16} />
      </span>
    </div>
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
  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-green-600 transition-all duration-300">Grid Foresight</h3>
  <p className="text-gray-600 mb-4">Anticipating grid bottlenecks using real-time nodal and zonal condition data.</p>
  
  <div className="pt-2">
    <div className="text-gray-400 flex items-center text-sm font-medium group-hover:text-green-600 transition-all duration-300 relative">
      <span className="group-hover:hidden">Coming Soon</span>
      <span className="hidden group-hover:block">Coming Soon</span>
      <span className={`ml-1 transform transition-all duration-300 ${hoverStates.feature3 ? 'translate-x-1' : ''}`}>
        <ChevronRight size={16} />
      </span>
    </div>
  </div>
</div>

<div 
  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all duration-300 ease-in-out group relative overflow-hidden shadow-lg hover:shadow-purple-100"
>
  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-3xl transform translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-all duration-300 relative z-10">
    <Star className="text-purple-500" size={24} />
  </div>
  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-purple-600 transition-all duration-300">Foresights Integration</h3>
  <p className="text-gray-600 mb-4">Integrated solution providing strategic trade and PPA recommendations for optimized ROI and grid compliance.</p>
  
  <div className="pt-2">
    <div className="text-gray-400 flex items-center text-sm font-medium group-hover:text-purple-600 transition-all duration-300 relative">
      <span className="group-hover:hidden">Coming Soon</span>
      <span className="hidden group-hover:block">Coming Soon</span>
      <span className="ml-1 transform transition-all duration-300">
        <ChevronRight size={16} />
      </span>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

     

      {/* Accuracy Section - Now "Performance" */}
      <section id="accuracy" className="py-24 px-6 bg-white relative">
        <div className={`container mx-auto max-w-6xl relative z-10 transition-all duration-1000 ease-out ${isVisible.accuracy ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-blue-100 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
              Performance Metrics
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Model Performance <span className="text-lg font-normal text-blue-600">(Up to 98.83% Accuracy)</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">Our AI models consistently achieve high accuracy scores during development and testing phases.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg mb-12">
  <div className="mb-6">
    <h3 className="text-2xl font-semibold mb-2 text-gray-900">Sneak Peek into the Final Product</h3>
    <p className="text-gray-600">Sample weekly price forecast comapred to actual price.</p>
  </div>
  <div className="h-80">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={accuracyData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis 
          dataKey="date" 
          stroke="#6B7280"
          interval={2}
          angle={-45}
          textAnchor="end"
          height={60}
        />
        <YAxis 
          domain={[30, 70]} 
          stroke="#6B7280" 
          tickCount={8}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip 
          contentStyle={{ backgroundColor: 'white', border: '1px solid #E5E7EB', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
          itemStyle={{ color: '#111827' }}
          formatter={(value) => `$${value.toFixed(2)}/MWh`}
          labelFormatter={(label) => `Week of ${label}`}
        />
        <Legend verticalAlign="top" height={36}/>
        <Area 
          type="monotone" 
          dataKey="predicted" 
          stroke="#3B82F6" 
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorPredicted)"
          dot={{ r: 4, strokeWidth: 2, fill: 'white' }}
          activeDot={{ r: 6, strokeWidth: 2 }}
          name="Predicted LMP"
        />
        <Area 
          type="monotone" 
          dataKey="actual" 
          stroke="#10B981" 
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorActual)"
          dot={{ r: 4, strokeWidth: 2, fill: 'white' }}
          activeDot={{ r: 6, strokeWidth: 2 }}
          name="Actual LMP"
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
</div>
          
          <div className="grid md:grid-cols-2 gap-6">
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
                <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-orange-600 transition-all duration-300">Continuous Self-Improvement</h3>
                <p className="text-gray-600 text-sm">Self-learning and dynamic models that improve and adjust with new real-time data.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200 flex items-start group hover:border-green-300 transition-all duration-300 hover:shadow-lg hover:shadow-green-100">
              <div className="mr-4 mt-1">
                <Clock className="text-green-500 group-hover:text-green-600 transition-all duration-300" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-green-600 transition-all duration-300">Custom Forecast Windows</h3>
                <p className="text-gray-600 text-sm">Flexible time-window predictions, from monthly intervals down to 5-minute resolution.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200 flex items-start group hover:border-purple-300 transition-all duration-300 hover:shadow-lg hover:shadow-purple-100">
              <div className="mr-4 mt-1">
                <Star className="text-purple-500 group-hover:text-purple-600 transition-all duration-300" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-purple-600 transition-all duration-300">Comprehensive Insights</h3>
                <p className="text-gray-600 text-sm">Our AI tool can optimize energy operations of any type and anywhere in the world.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forecasts Section - Now "Progress" */}
      <section id="forecasts" className="py-24 px-6 bg-gray-50 relative">
        <div className={`container mx-auto max-w-6xl relative z-10 transition-all duration-1000 ease-out ${isVisible.forecasts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-green-100 border border-green-200 rounded-full text-green-600 text-sm font-medium mb-4">
              A First Milestone
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">LMP Price Projections for CAISO SP-15</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">Our current progress with forecasting energy prices and validating against historical market data.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg mb-8">
            <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">Price Forecast Results</h3>
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
              *Note: This is part of our development phase showing 5-minute resolution predictions with up to 98.83% accuracy.
            </div>
          </div>
          
         
        </div>
      </section>

      {/* Partners Section - Changed to pilot signup section */}
      <section id="partners" className="py-24 px-6 bg-white relative">
        <div className={`container mx-auto max-w-6xl relative z-10 transition-all duration-1000 ease-out ${isVisible.partners ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-purple-100 border border-purple-200 rounded-full text-purple-600 text-sm font-medium mb-4">
              Pilot Program
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Join Our FREE Pilot Program</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">Limited spots available for energy companies looking to test our forecasting tools.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all duration-300 ease-in-out group shadow-lg hover:shadow-purple-100">
              <div className="text-gray-700 font-semibold text-xl group-hover:text-purple-600 transition-all duration-300 mb-4">Current Partners</div>
              <p className="text-gray-600 mb-6">Energy companies already participating in our pilot program:</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" size={16} />
                  <span>Aypa Power</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" size={16} />
                  <span>Black Hills Energy</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" size={16} />
                  <span>Pathway Power</span>
                </li>
              </ul>
              <a href="#contact-form" className="mt-6 inline-block text-purple-600 font-medium hover:text-purple-700 transition">
                Join them →
              </a>
            </div>
            
            <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all duration-300 ease-in-out group shadow-lg hover:shadow-purple-100">
              <div className="text-gray-700 font-semibold text-xl group-hover:text-purple-600 transition-all duration-300 mb-4">Pilot Program Benefits</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                    <Check className="text-purple-600" size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Early Access</h3>
                    <p className="text-gray-600 text-sm">Be the first to use our AI forecasting tools</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                    <Check className="text-purple-600" size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Custom Integration</h3>
                    <p className="text-gray-600 text-sm">Tailored to your specific market needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                    <Check className="text-purple-600" size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Dedicated Support</h3>
                    <p className="text-gray-600 text-sm">One-on-one guidance from our team</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                    <Check className="text-purple-600" size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Non-binding Agreement</h3>
                    <p className="text-gray-600 text-sm">No need to pay unless you decide to deploy</p>
                  </div>
                </div>
              </div>
              <a href="#contact-form" className="mt-6 inline-block bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 text-white px-6 py-3 rounded-lg shadow-md shadow-purple-200 transition duration-300 ease-in-out font-medium transform hover:-translate-y-0.5">
                Schedule a Pilot
                <ArrowRight size={18} className="ml-2 inline" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section with Contact Form - Modified for Pilot Signup */}
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
            Synergy is a tech start-up launched by ambitious college students exploring the application of artificial intelligence to energy market forecasting.
          </p>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg mb-12 text-left">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              We're exploring how advanced AI techniques can revolutionize energy market forecasting. Our goal is to develop models that can predict energy prices with unprecedented accuracy at resolutions as low as 5 minutes, helping to optimize trading strategies and improve grid efficiency.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">The Team</h3>
            <p className="text-gray-600 mb-6">
              We are a group of driven professionals from AI and energy backgrounds with the mission to revolutionize the green energy market with cutting-edge forecasting tools.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Project Status</h3>
            <p className="text-gray-600">
              We're currently in the pilot deployment phase, working with select energy companies to implement our prediction tools in real-world scenarios. Our models have achieved up to 98.83% accuracy in controlled tests.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg" id="contact-form">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 text-center">Connect with Us</h3>
            <p className="text-gray-600 mb-6 text-center">
              Schedule a pilot to see how our tools can optimize your operations. It's completely free and non-binding.
            </p>
            
            <form className="space-y-6" action="mailto:sachinlodhi8614@gmail.com" method="POST" encType="text/plain">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 text-left">Name</label>
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
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1 text-left">Title</label>
                <input 
                  type="text" 
                  id="title" 
                  name="title"
                  placeholder="Energy Analyst" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 outline-none"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1 text-left">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company"
                  placeholder="Your Energy Company" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 outline-none"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-left">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="you@example.com" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 outline-none"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 text-left">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  placeholder="Pilot Program" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-200 outline-none"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 text-left">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="4" 
                  placeholder="Tell us about your forecasting needs and how we can help..." 
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Logo Column */}
      <div className="flex justify-center md:justify-start">
        <img src={logo} alt="Synergy Logo" className="h-14" />
      </div>
      
      {/* Navigation Column */}
      <div className="flex flex-wrap justify-center gap-6">
        <a href="#features" className="text-gray-600 hover:text-orange-500 transition whitespace-nowrap">AI Tools</a>
        <a href="#accuracy" className="text-gray-600 hover:text-blue-500 transition whitespace-nowrap">Performance</a>
        <a href="#forecasts" className="text-gray-600 hover:text-green-500 transition whitespace-nowrap">Progress</a>
        <a href="#contact-form" className="text-gray-600 hover:text-purple-500 transition whitespace-nowrap">Schedule a Pilot</a>
        <a href="#about" className="text-gray-600 hover:text-orange-500 transition whitespace-nowrap">About Us</a>
      </div>
      
      {/* Copyright Column */}
      <div className="text-gray-500 text-sm text-center md:text-right">
        © 2025 Synergy. All rights reserved.<br className="hidden md:inline" /> 
        Created by students ambitious about AI and clean energy.
      </div>
    </div>
  </div>
          </footer>
    </div>
  );
};

export default App;