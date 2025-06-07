const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
            <div className="flex-1 space-y-6 text-gray-600 dark:text-gray-300 text-justify">
              <p className="animate-fade-in">
                As a Computer Science graduate, I've built a solid foundation in machine learning, AI, computer vision, and databases. My academic and project experience reflect a strong interest in applying these technologies to real-world problems.
              </p>
              <p className="animate-fade-in animation-delay-200">
                I've worked on projects involving deep learning, object detection, federated learning, and data analysis. Alongside this, I've gained a basic understanding of databases to support my work with structured data.
              </p>
              <p className="animate-fade-in animation-delay-400">
                Curious and driven, I enjoy exploring impactful tech and continuously learning. I look forward to contributing to meaningful, tech-driven projects in collaborative environments.
              </p>
            </div>
            <div className="flex-shrink-0 self-center">
              <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden border-4 border-slate-300 dark:border-slate-700 shadow-lg bg-white rounded-lg">
                <img
                  src="public/sameer.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover object-[0_35%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
