import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, ChevronDown, Menu, X, MapPin, Calendar, Users } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-white font-bold text-xl">
              Aditi Singh
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-white/80 hover:text-white transition-colors duration-200 ${
                    activeSection === item.toLowerCase() ? 'text-white border-b-2 border-blue-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-white/80 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Aditi Singh</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Computer Science Student • Web Developer • Blockchain Enthusiast
            </p>
            <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
              Second-year BTech student at VIT Chennai, passionate about creating innovative solutions through code
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/50" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  I'm currently pursuing my BTech in Computer Science at VIT Chennai, where I'm in my second year. 
                  My passion lies in web development and blockchain technology, and I'm constantly exploring new 
                  ways to combine these technologies to create innovative solutions.
                </p>
                <p className="text-white/80 leading-relaxed">
                  As an active member of the Google Developer Group (GDG) and former CodeChef club participant, 
                  I enjoy collaborating with like-minded developers and participating in coding competitions.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/10">
                <div className="flex items-center mb-4">
                  <MapPin className="text-blue-400 mr-3" size={24} />
                  <span className="text-white font-semibold">VIT Chennai</span>
                </div>
                <div className="flex items-center mb-4">
                  <Calendar className="text-purple-400 mr-3" size={24} />
                  <span className="text-white/80">Second Year BTech</span>
                </div>
                <div className="flex items-center mb-6">
                  <Code className="text-green-400 mr-3" size={24} />
                  <span className="text-white/80">Computer Science</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Users className="text-blue-400 mr-3" size={20} />
                    <span className="text-white/80">Google Developer Group Member</span>
                  </div>
                  <div className="flex items-center">
                    <Code className="text-orange-400 mr-3" size={20} />
                    <span className="text-white/80">Former CodeChef Club Member</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'], icon: Globe, color: 'from-blue-500 to-cyan-500' },
              { category: 'Backend & Databases', skills: ['MySQL', 'WordPress'], icon: Database, color: 'from-green-500 to-emerald-500' },
              { category: 'Programming Languages', skills: ['C', 'C++', 'Java', 'Solidity'], icon: Code, color: 'from-purple-500 to-pink-500' },
              { category: 'Development Tools', skills: ['GitHub', 'Vercel', 'Netlify'], icon: ExternalLink, color: 'from-orange-500 to-red-500' },
              { category: 'Currently Learning', skills: ['Web Development', 'Blockchain'], icon: Code, color: 'from-indigo-500 to-blue-500' },
              { category: 'Interests', skills: ['Problem Solving', 'Competitive Programming'], icon: Users, color: 'from-teal-500 to-green-500' }
            ].map((skillGroup, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 group">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skillGroup.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skillGroup.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-white/20 text-white/90 px-3 py-1 rounded-full text-sm font-medium hover:bg-white/30 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
            <p className="text-white/70 mt-6 max-w-2xl mx-auto">
              Here are some of my top projects that showcase my skills in web development and blockchain technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development Portfolio',
                description: 'A responsive portfolio website built with modern web technologies, featuring smooth animations and clean design.',
                tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
                gradient: 'from-blue-500 to-purple-600'
              },
              {
                title: 'Blockchain DApp',
                description: 'A decentralized application exploring smart contract functionality and blockchain integration.',
                tech: ['Solidity', 'Web3', 'JavaScript'],
                gradient: 'from-purple-500 to-pink-600'
              },
              {
                title: 'Database Management System',
                description: 'A comprehensive database solution with user authentication and data management features.',
                tech: ['MySQL', 'Java', 'Bootstrap'],
                gradient: 'from-green-500 to-teal-600'
              }
            ].map((project, index) => (
              <div key={index} className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Code className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-white/20 text-white/90 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200">
                    View Project <ExternalLink className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience & Activities</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:scale-105 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Google Developer Group (GDG)</h3>
                  <p className="text-blue-400 font-medium mb-3">Active Member • Current</p>
                  <p className="text-white/80 leading-relaxed">
                    Actively participating in GDG events, workshops, and collaborative projects. Engaging with the developer 
                    community to learn about the latest Google technologies and best practices in software development.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:scale-105 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                    <Code className="text-white" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">CodeChef Club</h3>
                  <p className="text-orange-400 font-medium mb-3">Member • First Year</p>
                  <p className="text-white/80 leading-relaxed">
                    Participated in competitive programming activities and coding contests during my first year. 
                    Developed problem-solving skills and collaborated with fellow programmers to tackle algorithmic challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
            <p className="text-white/70 mt-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <a
              href="https://github.com/okaditi"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Github className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
              <p className="text-white/70">Check out my repositories and contributions</p>
              <div className="mt-4 text-blue-400 group-hover:text-blue-300 font-semibold flex items-center justify-center">
                Visit Profile <ExternalLink className="ml-2" size={16} />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/aditi-singh-9ba2201a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-white/70">Connect with me professionally</p>
              <div className="mt-4 text-blue-400 group-hover:text-blue-300 font-semibold flex items-center justify-center">
                Connect <ExternalLink className="ml-2" size={16} />
              </div>
            </a>

            <a
              href="mailto:aditisingh01299@gmail.com"
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-red-500 to-red-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-white/70">Send me a message directly</p>
              <div className="mt-4 text-blue-400 group-hover:text-blue-300 font-semibold flex items-center justify-center">
                Send Email <ExternalLink className="ml-2" size={16} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60">
            © 2024 Aditi Singh. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;