import { Link } from 'react-scroll';
import { ArrowDownCircle, Code2, Database, Terminal, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Professional geometric pattern background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/[0.07] to-slate-900/[0.07] dark:from-slate-200/[0.07] dark:to-slate-300/[0.07] pattern-grid-lg" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(36,0,83,0.05),transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(120,119,198,0.05),transparent)]" />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Terminal className="absolute top-1/4 left-1/4 text-slate-400/20 dark:text-slate-300/20 h-20 w-20 animate-float" />
        <Code2 className="absolute top-1/3 right-1/4 text-slate-400/20 dark:text-slate-300/20 h-16 w-16 animate-float-delayed" />
        <Database className="absolute bottom-1/4 left-1/3 text-slate-400/20 dark:text-slate-300/20 h-24 w-24 animate-float" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-gray-100 animate-fade-in">
          Sameer S Mansur
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-200">
          Computer Science Engineer
        </p>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-200 text-justify">
          A Passionate and Dedicated Graduate Ready to Make an Impact in the Industry
        </p>
        <div className="space-y-6">
          <Link
            to="contact"
            smooth={true}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-900 dark:from-purple-600 dark:to-pink-600 text-white rounded-full hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in animation-delay-400 shadow-lg"
          >
            Get In Touch
            <ArrowDownCircle className="ml-2" size={20} />
          </Link>

          <div className="flex justify-center items-center gap-6 mt-8 animate-fade-in animation-delay-600">
            <a
              href="https://github.com/Sameer-S-M"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/sameer-s-mansur/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
