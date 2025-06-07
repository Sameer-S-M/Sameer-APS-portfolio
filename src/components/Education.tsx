const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
          Education
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* B.Tech */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                B.Tech. in Computer Science & Engineering
              </h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100">
                2022 - 2026
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-justify">KLE Technological University, Hubli</p>
            <p className="text-lg font-medium text-purple-600 dark:text-purple-400">
              CGPA: 9.50 
            </p>
          </div>

          {/* Pre-University */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Pre-University (PU)
              </h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100">
                2020 - 2022
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-justify">
              Shri Vidya P Hanchinmani PU Science College, Dharwad
            </p>
            <p className="text-lg font-medium text-purple-600 dark:text-purple-400">
              Percentage: 94.7%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
