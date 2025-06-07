'use client';

import { useState, useEffect, useRef } from 'react';
import { AppliedSolutionConcept, AppliedSolutionConceptResponse } from '../types/domain';
import solutionConceptsData from '../data/appliedSolutionConcepts.json';

const AppliedSolutionConcepts = () => {
  const [expandedConceptId, setExpandedConceptId] = useState<string | null>(null);
  
  // Safely parse and type the data
  const concepts = (solutionConceptsData as AppliedSolutionConceptResponse)?.appliedSolutionConcepts || [];

  // Animation styles
  const floatKeyframes = {
    '0%': {
      transform: 'translateY(0px)',
    },
    '100%': {
      transform: 'translateY(-10px)',
    },
  };

  const getFloatAnimation = (index: number) => ({
    animation: `float${index} ${3 + index * 0.5}s ease-in-out infinite alternate`,
  });

  // Scroll to top on page refresh when collapsed
  useEffect(() => {
    const handleScroll = () => {
      if (!expandedConceptId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Handle initial page load
    if (!expandedConceptId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Add event listener for page refresh
    window.addEventListener('beforeunload', handleScroll);

    return () => {
      window.removeEventListener('beforeunload', handleScroll);
    };
  }, [expandedConceptId]);

  const handleToggleExpand = (conceptId: string, e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }
    
    // If we're collapsing (i.e., expandedConceptId matches current conceptId)
    if (expandedConceptId === conceptId) {
      setExpandedConceptId(null);
      // Scroll to the "Applied Solution Concepts" section
      const solutionSection = document.getElementById('applied-solutions');
      if (solutionSection) {
        setTimeout(() => {
          solutionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      // If we're expanding
      setExpandedConceptId(conceptId);
      const element = document.getElementById(conceptId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  };

  // If there are no concepts, show a message
  if (!concepts || concepts.length === 0) {
    return (
      <section id="domain" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-12">Applied Solution Concepts for Sony</h2>
          <p className="text-center text-gray-600 dark:text-gray-400">No applied solution concepts available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="domain" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-12">Chosen Domain: SONY</h2>

        {/* Sony Logos Collage */}
        <div className="max-w-5xl mx-auto mb-16 relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl"></div>
          <div className="absolute inset-0 backdrop-blur-3xl opacity-20"></div>
          
          {/* Main collage container */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
            {[1, 2, 3, 4].map((num, index) => (
              <div
                key={num}
                className={`group relative transform transition-all duration-500 hover:scale-110 hover:z-10 ${
                  index % 2 === 0 ? 'hover:rotate-6' : 'hover:-rotate-6'
                } ${
                  index === 0 ? 'md:-translate-y-4' :
                  index === 1 ? 'md:translate-y-8' :
                  index === 2 ? 'md:-translate-y-6' :
                  'md:translate-y-2'
                }`}
                style={getFloatAnimation(index)}
              >
                {/* Card container */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 to-white/40 dark:from-gray-800/90 dark:to-gray-800/40 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:shadow-2xl border border-white/20 dark:border-gray-700/20">
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 dark:from-blue-400/20 dark:via-purple-400/20 dark:to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Glowing effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
                  
                  {/* Logo image */}
                  <div className="relative">
                    <img
                      src={`public/sony${num}.png`}
                      alt={`Sony Logo ${num}`}
                      className="w-full h-auto max-h-28 object-contain filter transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>
          {[0, 1, 2, 3].map((index) => `
            @keyframes float${index} {
              0% { transform: translateY(0px); }
              100% { transform: translateY(-10px); }
            }
          `).join('\n')}
        </style>

        {/* Domain Introduction Cards */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Motivation Card */}
            <div className="relative bg-gradient-to-br from-blue-50 via-blue-100/70 to-indigo-100/60 dark:from-gray-800/90 dark:via-blue-900/20 dark:to-indigo-900/10 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-8 border border-blue-200 dark:border-blue-700/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 via-transparent to-indigo-200/30 dark:from-blue-900/20 dark:via-transparent dark:to-indigo-900/20 pointer-events-none"></div>
              <div className="relative flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-700 dark:from-blue-400 dark:to-indigo-400">Motivation</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 rounded-full mb-4"></div>
                </div>
                <p className="text-gray-800 dark:text-gray-300 text-justify leading-relaxed">
                  I chose Sony as the focus of this portfolio due to its pioneering work in edge-AI hardware, real-time embedded systems, and heterogeneous computing — areas where I blend academic research with implementation. Sony's leadership in imaging sensors (e.g., Starvis 2), gaming (PlayStation), and AI-driven consumer electronics (like Sony AI's robotics) creates unique algorithmic challenges, such as latency-critical inference and power-efficient ML deployment. This portfolio bridges theoretical algorithms with Sony's real-world problems, demonstrating how optimized solutions can enhance innovation in consumer technology and embedded systems.
                </p>
              </div>
            </div>

            {/* Objectives Card */}
            <div className="relative bg-gradient-to-br from-purple-50 via-purple-100/70 to-pink-100/60 dark:from-gray-800/90 dark:via-purple-900/20 dark:to-pink-900/10 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-8 border border-purple-200 dark:border-purple-700/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 via-transparent to-pink-200/30 dark:from-purple-900/20 dark:via-transparent dark:to-pink-900/20 pointer-events-none"></div>
              <div className="relative flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-pink-700 dark:from-purple-400 dark:to-pink-400">Objectives</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 rounded-full mb-4"></div>
                </div>
                <ul className="space-y-4 text-gray-800 dark:text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 ring-2 ring-purple-100 dark:ring-purple-900"></span>
                    <span className="text-justify leading-relaxed">Categorize the features and underlying technologies of Sony across various domains such as semiconductors, gaming, entertainment, and finance.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 ring-2 ring-purple-100 dark:ring-purple-900"></span>
                    <span className="text-justify leading-relaxed">Identify key algorithms, data structures, or system design techniques currently in use or with potential applications in enhancing Sony's features.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 ring-2 ring-purple-100 dark:ring-purple-900"></span>
                    <span className="text-justify leading-relaxed">Create a resource that can be used for educational purposes to understand the intersection of data structures, algorithms, and real-world applications in a large-scale platform like Sony.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Image Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">Architecture</h2>
          <div className="relative bg-gradient-to-br from-white/90 to-white/40 dark:from-gray-800/90 dark:to-gray-800/40 rounded-3xl p-8 shadow-lg backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-purple-100/10 to-pink-100/10 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10 rounded-3xl"></div>
            <img
              src="public/Overall.png"
              alt="Architecture Overview"
              className="w-full h-auto object-contain rounded-2xl shadow-md"
            />
          </div>
        </div>

        <h2 id="applied-solutions" className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-12">Applied Solution Concepts for Sony</h2>

        {/* Applied Solution Concepts */}
        <div className="max-w-5xl mx-auto">
          <div className={`grid grid-cols-1 ${expandedConceptId ? 'max-w-[1200px] mx-auto' : 'md:grid-cols-2'} gap-12 w-full transition-all duration-300 ease-in-out`}>
            {concepts.map(concept => {
              const isExpanded = expandedConceptId === concept.id;
              const isHidden = expandedConceptId && !isExpanded;

              return (
                <div
                  key={concept.id}
                  id={concept.id}
                  className={`
                    border rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700 flex flex-col
                    transition-all duration-300 ease-in-out transform
                    ${isExpanded ? 'col-span-full scale-100 opacity-100 max-w-[1200px]' : 'max-w-md mx-auto w-full hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1'}
                    ${isHidden ? 'scale-95 opacity-0 pointer-events-none absolute' : 'scale-100 opacity-100'}
                  `}
                >
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    {/* Collapsed View */}
                    {!isExpanded ? (
                      <div className="flex flex-col h-full">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-left">
                          {concept.title}
                        </h3>
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Overview</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-justify">{concept.overview}</p>
                        </div>
                        <div className="mt-4">
                          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Keywords</h4>
                          <div className="flex flex-wrap gap-2">
                            {concept.keywords.map((keyword, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-end mt-6">
                          <button
                            onClick={() => handleToggleExpand(concept.id)}
                            className="inline-flex items-center px-4 py-2 text-sm border border-transparent font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 transition-all duration-300 ease-in-out hover:scale-105"
                          >
                            Show More
                          </button>
                        </div>
                      </div>
                    ) : (
                      // Expanded View
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-left">
                            {concept.title}
                          </h3>
                          <div className="mb-8">
                            <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Overview</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-justify">{concept.overview}</p>
                          </div>
                          <div className="mb-4">
                            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">Algorithmic Backbones</h4>
                          </div>
                        </div>

                        {/* Algorithmic Backbones */}
                        {concept.algorithmicBackbone.map((backbone, index) => (
                          <div key={index} className="border rounded-lg p-6 bg-gray-50 dark:bg-gray-700/50">
                            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                              {backbone.title}
                            </h4>
                            
                            <div className="mb-6">
                              <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Application</h5>
                              <p className="text-gray-600 dark:text-gray-400 text-justify">{backbone.application}</p>
                            </div>

                            <div className="mb-6">
                              <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Workflow</h5>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center justify-center min-h-[300px] overflow-hidden">
                                  {backbone.workflowUrl ? (
                                    <img 
                                      src={backbone.workflowUrl} 
                                      alt={`${backbone.title} workflow`}
                                      className="w-full h-auto max-h-[500px] object-contain rounded-lg mx-auto"
                                    />
                                  ) : (
                                    <div className="flex items-center justify-center h-[300px] bg-gray-100 dark:bg-gray-700 rounded-lg">
                                      <p className="text-gray-500 dark:text-gray-400">Workflow placeholder</p>
                                    </div>
                                  )}
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                                  {backbone.imageUrl ? (
                                    <img 
                                      src={backbone.imageUrl} 
                                      alt={`${backbone.title} visualization`}
                                      className="w-full h-auto max-h-[500px] object-contain rounded-lg mx-auto"
                                    />
                                  ) : (
                                    <div className="flex items-center justify-center h-[300px] bg-gray-100 dark:bg-gray-700 rounded-lg">
                                      <p className="text-gray-500 dark:text-gray-400">Image placeholder</p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="mb-6">
                              <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Advantages</h5>
                              <ul className="list-none space-y-2">
                                {backbone.advantages.map((advantage, i) => (
                                  <li key={i} className="text-gray-600 dark:text-gray-400">• {advantage}</li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Complexity</h5>
                              <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                  <thead className="bg-gray-100 dark:bg-gray-600">
                                    <tr>
                                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Operation</th>
                                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Average Case</th>
                                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Worst Case</th>
                                    </tr>
                                  </thead>
                                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                    {backbone.complexity.operations.map((op, i) => (
                                      <tr key={i}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{op.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{op.averageCase}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{op.worstCase}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div className="mt-6 flex justify-end">
                              <a
                                href={backbone.codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 text-sm border border-transparent font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 transition-all duration-300 ease-in-out hover:scale-105"
                              >
                                View Code
                              </a>
                            </div>
                          </div>
                        ))}

                        <div className="mt-8">
                          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Overall Outcome</h4>
                          <ul className="list-none space-y-2">
                            {concept.overallOutcome.map((outcome, index) => (
                              <li key={index} className="text-gray-600 dark:text-gray-400">• {outcome}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6">
                          {concept.overallTradeoffs && concept.overallTradeoffs.length > 0 && (
                            <div className="mb-6">
                              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Overall Tradeoffs</h4>
                              <ul className="list-none space-y-2">
                                {concept.overallTradeoffs.map((tradeoff, i) => (
                                  <li key={i} className="text-gray-600 dark:text-gray-400">• {tradeoff}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Business Use Cases */}
                          {concept.overallBusinessUseCase && concept.overallBusinessUseCase.length > 0 && (
                            <div className="mb-8">
                              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Business Use Cases</h4>
                              <ul className="list-none space-y-2">
                                {concept.overallBusinessUseCase.map((useCase, i) => (
                                  <li key={i} className="text-gray-600 dark:text-gray-400">• {useCase}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* References */}
                          {concept.references && concept.references.length > 0 && (
                            <div className="mb-8">
                              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">References</h4>
                              <ul className="list-none space-y-3">
                                {concept.references.map((reference, i) => (
                                  <li key={i} className="text-gray-600 dark:text-gray-400 flex items-baseline">
                                    <span className="mr-2">•</span>
                                    <a 
                                      href={reference.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 hover:underline"
                                    >
                                      {reference.text}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        <div className="flex justify-center mt-8">
                          <button
                            onClick={() => handleToggleExpand(concept.id)}
                            className="inline-flex items-center px-6 py-2 text-sm border border-transparent font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 transition-all duration-300 ease-in-out hover:scale-105"
                          >
                            Show Less
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppliedSolutionConcepts;
