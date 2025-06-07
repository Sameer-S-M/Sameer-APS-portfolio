import { Code, Database, Cpu, Box, LineChart, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      name: "Programming",
      icon: <Code className="w-6 h-6" />,
      skills: ["C", "C++", "Python"]
    },
    {
      name: "Web Development",
      icon: <Box className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      name: "AI & ML",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["PyTorch", "Scikit-learn", "Hugging Face"]
    },
    {
      name: "Data Science",
      icon: <LineChart className="w-6 h-6" />,
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn"]
    },
    {
      name: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["SQL"]
    },
    {
      name: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: ["Teamwork", "Problem Solving", "Time Management", "Adaptability", "Critical Thinking", "Project Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-slate-100 dark:bg-gray-700 text-slate-700 dark:text-gray-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-100 dark:bg-gray-700 text-slate-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-slate-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
