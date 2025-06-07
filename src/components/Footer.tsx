import { Link } from 'react-scroll';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <Link to="home" smooth={true} className="text-2xl font-bold cursor-pointer text-gray-800 dark:text-gray-100">
            S<span className="text-primary">M</span>
          </Link>
          
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-md mx-auto text-justify">
            Thanks for visiting my portfolio. Let's connect and build something amazing together!
          </p>

          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://www.linkedin.com/in/sameer-s-mansur/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sameermansur2004@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+919483061865"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
            >
              <Phone size={20} />
            </a>
          </div>

          <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Sameer Mansur. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
