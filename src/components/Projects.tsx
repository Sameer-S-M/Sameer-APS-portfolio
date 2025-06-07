import { ExternalLink, Lock } from 'lucide-react';
import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      title: "YOLOv11 Billing System",
      description:
        "Built an automated billing prototype using YOLOv11 for object detection. Achieved 94.84% accuracy (mAP@[0.5:0.95]) and added co-occurrence-based product bundling for insights. Integrated with a demo web app.",
      tools: "YOLOv11, Object Detection, Retail Automation",
      highlights: [
        "94.84% mAP@[0.5:0.95]",
        "Product bundling insights",
        "Demo web app integration",
      ],
      implementation: "https://drive.google.com/file/d/1ymZH22SsH1jmcb0eYTxOeCdYRFiPXQpx/view?usp=sharing", // Indicates private
    },
    {
      title: "Quantized ResNet50 for FL",
      description:
        "Trained ResNet50 in a federated setup using the Flower framework, then quantized the global model to reduce size and improve inference efficiency.",
      tools: "Federated Learning, Flower Framework, Quantization",
      highlights: [
        "Global model quantization",
        "Reduced inference latency",
        "Federated training setup",
      ],
      implementation: "https://github.com/Sameer-S-M/Quantized_ResNet50_for_FL.git",
    },
    {
      title: "Thyroid Disease EDA",
      description:
        "Conducted extensive exploratory data analysis on thyroid disease dataset to identify patterns and correlations. Implemented various visualization techniques for better understanding of the data.",
      tools: "Python, Pandas, Seaborn, Matplotlib",
      highlights: ["Data visualization", "Statistical analysis", "Pattern recognition"],
      implementation: "https://sites.google.com/view/sameer-eda-portfolio?usp=sharing",
    },
    {
      title: "English–Kannada Translation",
      description:
        "Implemented English to Kannada translation using MarianMT from Hugging Face. Fine-tuned the model to adapt to linguistic nuances in low-resource settings.",
      tools: "Transformers, Translation, Low-Resource NLP",
      highlights: [
        "MarianMT-based translation",
        "Fine-tuned for Kannada",
        "Low-resource adaptation",
      ],
      implementation: "https://github.com/Sameer-S-M/English-Kannada-Translation-using-MarianMT.git",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-slate-700 to-slate-900 dark:from-purple-600 dark:to-pink-500 text-transparent bg-clip-text">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">{project.description}</p>
              <div className="space-y-2 mb-4">
                {project.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-slate-100 dark:bg-gray-700 text-slate-800 dark:text-gray-300 mr-2 mb-2"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
              
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 text-justify">
                Tools: {project.tools}
              </p>
              <div className="flex gap-4">
                {project.implementation ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a href={project.implementation} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      See Implementation
                    </a>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                    disabled
                  >
                    <Lock size={16} />
                    Implementation (Private)
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
