import React from 'react';
import { 
  Calculator, 
  BookOpen, 
  Crown, 
  EyeOff, 
  CircleDot, 
  TrendingUp, 
  Award, 
  ArrowRight,
  MapPin,
  Menu,
  Code
} from 'lucide-react';

// --- 数据部分: 课程列表 ---
const programs = [
  {
    id: 'math',
    title: 'Mathematics Foundation',
    description: 'Build a strong calculation ability and logical thinking mindset essential for academic success.',
    icon: <Calculator className="w-8 h-8 text-blue-600" />,
    color: 'bg-blue-50'
  },
  {
    id: 'reading',
    title: 'Reading Program',
    description: 'Develop high-level reading ability and comprehension skills through diverse literary works.',
    icon: <BookOpen className="w-8 h-8 text-green-600" />,
    color: 'bg-green-50'
  },
  {
    id: 'chess',
    title: 'Classical Chess',
    description: 'Master the timeless game of strategy. Enhance concentration, foresight, and tactical planning.',
    icon: <Crown className="w-8 h-8 text-purple-600" />,
    color: 'bg-purple-50'
  },
  {
    id: 'fog-chess',
    title: 'Fog of War Chess',
    description: 'Advanced strategy training. Navigate uncertainty and incomplete information in this dark chess variant.',
    icon: <EyeOff className="w-8 h-8 text-gray-700" />,
    color: 'bg-gray-100'
  },
  {
    id: 'go',
    title: 'Go (Weiqi)',
    description: 'Explore the profound complexity of Go. Develop big-picture thinking and deep strategic intuition.',
    icon: <CircleDot className="w-8 h-8 text-indigo-600" />,
    color: 'bg-indigo-50'
  },
  {
    id: 'pre-amc',
    title: 'Pre-AMC Math',
    description: 'Bridge the gap between school math and competition math. Perfect for grades 6-8.',
    icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
    color: 'bg-orange-50'
  },
  {
    id: 'amc',
    title: 'AMC Enrichment',
    description: 'Elite training for AMC 10/12. Focus on advanced problem-solving, combinatorics, and number theory.',
    icon: <Award className="w-8 h-8 text-red-600" />,
    color: 'bg-red-50'
  },
  {
    id: 'coding',
    title: 'Coding Program',
    description: 'Master programming fundamentals and computational thinking. Build real-world projects and develop problem-solving skills through code.',
    icon: <Code className="w-8 h-8 text-teal-600" />,
    color: 'bg-teal-50'
  }
];

// --- 组件: 导航栏 ---
const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <span className="font-bold text-2xl text-gray-800 tracking-tight">DeepBrain Academy</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Programs</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">About Us</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Locations</a>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition flex items-center">
            Find a Center <MapPin className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  </nav>
);

// --- 组件: Hero 区域 ---
const Hero = () => (
  <div className="relative bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20 px-4 sm:px-6 lg:px-8">
        <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Ignite the power of</span>{' '}
              <span className="block text-blue-600 xl:inline">Deep Thinking</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Beyond standard tutoring. From Classical Chess to Advanced AMC Math, we cultivate the strategic minds of tomorrow through rigorous logic and creative problem-solving.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg">
                  Book Assessment
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#programs" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg">
                  View Programs
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    {/* Placeholder for Hero Image - 右侧大图占位 */}
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-100 flex items-center justify-center">
        <div className="text-gray-400 text-center">
           {/* 你可以在这里放入 <Image /> 组件 */}
           <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
             <span className="text-9xl opacity-10">🧠</span>
           </div>
        </div>
    </div>
  </div>
);

// --- 组件: 课程列表区域 ---
const ProgramSection = () => (
  <div id="programs" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Curriculum</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Programs for Every Stage
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          We combine traditional academic foundations with advanced strategic games to build a complete intellect.
        </p>
      </div>

      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {programs.map((program) => (
          <div key={program.id} className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
            <div className={`p-6 ${program.color} flex justify-between items-start`}>
               {program.icon}
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                <p className="mt-3 text-base text-gray-500">
                  {program.description}
                </p>
              </div>
              <div className="mt-6">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center group">
                  Learn more 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- 组件: 页脚 ---
const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="text-2xl font-bold tracking-tight text-white">DeepBrain Academy</span>
          <p className="mt-4 text-gray-400">
            Empowering the next generation of thinkers through Math, Reading, and Strategy Games.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Programs</h3>
          <ul className="mt-4 space-y-4">
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Math & Reading</a></li>
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Chess & Go</a></li>
            <li><a href="#" className="text-base text-gray-300 hover:text-white">AMC Competition</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-blue-500"/> Find a Center</li>
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Franchise Opportunities</a></li>
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Careers</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8 text-center">
        <p className="text-base text-gray-400">&copy; 2024 DeepBrain Academy. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// --- 主页面 ---
export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <ProgramSection />
      
      {/* 简单的 "Why Us" 区域 */}
      <div className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to challenge your mind?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Join thousands of students mastering the art of logic and strategy.
          </p>
          <div className="mt-8">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">
              Find a Center Near You
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}