import { FileText } from 'lucide-react';

const CVSection = () => {
  return (
    <section id="cv" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">My Resume</h3>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify">
            Download a copy of my resume to explore my professional experience, education, and skills in detail.
          </p>

          <a
            href="https://drive.google.com/file/d/1QpW2wCXtbbmncDS_lXxLSMFzarN2Z9eh/view?usp=sharing" // 📁 Make sure your CV is saved in the `public` folder as `cv.pdf`
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 rounded-xl text-lg font-semibold transition-colors duration-300"
          >
            View / Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
