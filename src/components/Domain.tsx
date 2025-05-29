'use client';

import { useState } from 'react'; // Removed useEffect as it's no longer needed for scrolling


// Helper function to parse text and add links to citations
const renderTextWithCitations = (text: string, citations: { name: string; url: string }[]) => {
  // This is a basic implementation. For more complex cases, a more robust parser might be needed.
  let renderedText = text;

  citations.forEach(citation => {
    // Use a regex to find citation names in parentheses, allowing for multiple mentions and commas
    const regex = new RegExp(`\\((${citation.name}(?:, ${citation.name})*)\\)`, 'g');

    renderedText = renderedText.replace(regex, (match, p1) => {
      // p1 will be the content inside the parentheses, e.g., "Google Patents, Google Patents"
      const names = p1.split(', ');
      const links = names.map(name => {
         const foundCitation = citations.find(c => c.name === name);
         if (foundCitation && foundCitation.url) {
            return `<a href="${foundCitation.url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">${name}</a>`;
         }
         return name; // Fallback if URL is not found
      }).join(', '); // Rejoin with commas

      return `(${links})`; // Put the links back in parentheses
    });
  });

   // Return as dangerouslySetInnerHTML to render the HTML links
   return <span dangerouslySetInnerHTML={{ __html: renderedText }} />;
};


// Define the data structure and the data within the component for now
// In a larger application, this data would likely come from a separate file or API
const domainData = [
  {
    id: 'matchmaking-optimization',
    title: 'Dynamic Multiplayer Matchmaking Optimization',
    imageUrl: 'https://placehold.co/800x500.png', // Slightly larger placeholder
    briefDescription: 'Online platforms match players based on variables like latency, relative skill level, team composition, and wait time to optimize fairness and retention.',
    currentAlgorithmSummary: 'Current approaches include Clustering (k-means, hierarchical), Greedy Matching, and Machine Learning Models (Neural networks or reinforcement-learning agents).',
    detailedContent: {
      contextAndMotivation: 'Online platforms (e.g., PSN’s Destiny 2, Helldivers 2) match players based on variables like latency, relative skill level, team composition, and wait time to optimize fairness and retention (Google Patents, Google Patents). ',
      currentApproachesDetailed: [
        'Clustering (k-means, hierarchical): Groups players into “houses” by past performance metrics to produce balanced rosters (ResearchGate).',
        'Greedy Matching: Iterates through the queue, pairing each newcomer with the lowest-latency or best-score partner immediately (Reddit).',
        'Machine Learning Models: Neural networks or reinforcement-learning agents predict match quality from player behavior and preferences (Medium).',
      ],
      enhancements: [
        {
          title: '1. KD-Tree Nearest-Neighbor Search',
          imageUrl: 'https://placehold.co/150x100.png', // Placeholder for enhancement image
          problemSolving: 'Organizes each player’s (skill, latency) point in a k-d tree to answer “who lies closest in this space?” in logarithmic time (Wikipedia).',
          advantagesAndImpact: [
            'Build: O(n log n) for n players (Wikipedia).',
            'Insert/Delete/Query (avg.): O(log n) each, reducing per-query cost from O(n) → O(log n).',
            'Outcome: Faster queue processing and reduced wait times.',
          ],
          tradeOff: 'Performance degrades when dimensionality (number of match criteria) grows high (curse of dimensionality) (Wikipedia).',
          spaceComplexity: 'O(n log n)', // Added for table
          timeComplexity: 'O(log n) (avg.)', // Added for table
          codeLink: '#' // Placeholder for code link
        },
        {
          title: '2. Persistent Segment Tree for Historical Analytics',
          imageUrl: 'https://placehold.co/150x100.png', // Placeholder for enhancement image
          problemSolving: 'Keeps every version of match-quality metrics (e.g., wait times, churn rates) in a versioned segment tree to support instant queries and rollbacks (GeeksforGeeks).',
          advantagesAndImpact: [
            'Point Update / Range Query: O(log n) per operation (GeeksforGeeks).',
            'Version Storage: O(n log n) total across all updates, enabling trend analysis without rebuilding (USACO Guide).',
            'Outcome: Data-driven parameter tuning over time → continually fairer, more personalized matches.',
          ],
          tradeOff: 'Memory overhead grows as O(n log n) to preserve history.',
           spaceComplexity: 'O(n log n)', // Added for table
          timeComplexity: 'O(log n)', // Added for table
          codeLink: '#' // Placeholder for code link
        },
      ],
      // Removed summaryOfBenefits section
       citations: [
        { name: 'Google Patents', url: 'https://www.google.com/search?q=https://patents.google.com/patent/US9604139B2/en' },
        { name: 'ResearchGate', url: 'https://www.google.com/search?q=https://www.researchgate.net/publication/340050865_A_Survey_on_Player_Matchmaking_Algorithm_Using_K-Means_Clustering' },
        { name: 'Reddit', url: 'https://www.google.com/search?q=https://www.reddit.com/r/gamedev/comments/1q3l5f/matchmaking_greedy_vs_optimal_matching/' },
        { name: 'Medium', url: 'https://www.google.com/search?q=https://medium.com/%40joshuamcginnis/the-future_of_matchmaking-in-video-games-ai-and_player_engagement-6b1e2a3b04a8' },
        { name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/K-d_tree' }, // Using the primary K-d tree link for Wikipedia mentions
        { name: 'Curse of dimensionality', url: 'https://en.wikipedia.org/wiki/Curse_of_dimensionality' }, // Specific link for this term
        { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/persistent-segment-tree-set-1-introduction/' },
        { name: 'USACO Guide', url: 'https://www.google.com/search?q=https://usaco.guide/plat/persistent-segment-tree/' },
      ]
    }
  }
];

const Domain = () => {
  const [expandedDomainId, setExpandedDomainId] = useState<string | null>(null);

  const handleToggleExpand = (domainId: string, e?: React.MouseEvent<HTMLButtonElement>) => { // Added optional event parameter
     if (e) {
        e.preventDefault(); // Prevent default button behavior
     }
    setExpandedDomainId(expandedDomainId === domainId ? null : domainId);
  };


  // Prepare citations data for easier lookup in renderTextWithCitations
  const allCitations = domainData.flatMap(domain => domain.detailedContent.citations);


  return (
    <section id="domain" className="py-16 bg-gray-50"> {/* Added background color and adjusted padding */}
      <div className="container mx-auto px-6"> {/* Adjusted padding */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Domains</h2> {/* Enhanced heading style */}

        {/* Removed the "Back to All Domains" button container */}

        <div className={`grid grid-cols-1 ${expandedDomainId ? 'max-w-5xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}> {/* Adjusted grid and max-width for expanded */}
          {domainData.map(domain => {
            const isExpanded = expandedDomainId === domain.id;
            return (
              <div
                key={domain.id}
                className={`border rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out bg-white flex flex-col ${
                  isExpanded ? 'col-span-1 md:col-span-2 lg:col-span-3' : 'hover:shadow-xl' // Removed cursor-pointer and onClick from card div in compact state
                }`}
                // Removed onClick from the card div in compact state
              >
                 {/* Card Image (Visible in both states) */}
                <div className={`w-full overflow-hidden ${isExpanded ? 'h-72 md:h-96' : 'h-56'}`}> {/* Container for responsive image height */}
                   <img
                      src={domain.imageUrl}
                      alt={domain.title}
                      className="w-full h-full object-cover" // Ensure image covers container
                    />
                </div>


                <div className="p-6 flex flex-col justify-between flex-grow">
                  {/* Card Title (Visible in both states) - Adjusted styling for truncation */}
                  <h3 className={`text-2xl font-bold text-gray-800 mb-3 ${isExpanded ? '' : 'min-h-[3rem] flex items-center'}`}>{domain.title}</h3> {/* Ensured space for title and centered vertically */}

                  {/* Compact View Content */}
                  {!isExpanded && (
                    <>
                      <p className="text-gray-700 mb-4 flex-grow line-clamp-4">{domain.briefDescription}</p> {/* Added line clamp */}
                      <p className="text-gray-600 text-sm mb-4">
                        <span className="font-semibold">Current Approaches:</span> {domain.currentAlgorithmSummary}
                      </p>
                      {/* "Show More" button - Reintroduced */}
                       <button
                        onClick={() => handleToggleExpand(domain.id)} // Added onClick
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 self-end" // Styled button
                      >
                        Show More
                      </button>
                    </>
                  )}

                  {/* Expanded View Content */}
                  {isExpanded && (
                    <div className="mt-4 text-gray-800"> {/* Added text color */}
                      <h4 className="text-xl font-bold mb-3 border-b pb-2 border-gray-200">Context & Motivation</h4> {/* Styled heading */}
                      <p className="mb-6">{renderTextWithCitations(domain.detailedContent.contextAndMotivation, allCitations)}</p>

                      <h4 className="text-xl font-bold mb-3 border-b pb-2 border-gray-200">Current Approaches</h4> {/* Styled heading */}
                      <ul className="list-disc list-inside mb-6 space-y-1 text-gray-700"> {/* Added spacing and text color */}
                        {domain.detailedContent.currentApproachesDetailed.map((item, index) => (
                          <li key={index}>{renderTextWithCitations(item, allCitations)}</li>
                        ))}
                      </ul>

                      <h4 className="text-xl font-bold mb-4 border-b pb-2 border-gray-200">Enhancements</h4> {/* Styled heading */}
                      <div className="space-y-8 mb-6"> {/* Increased spacing between enhancements */}
                        {domain.detailedContent.enhancements.map((enhancement, index) => (
                          <div key={index} className="border rounded-lg p-6 shadow-sm bg-gray-100 flex flex-col md:flex-row gap-6"> {/* Styled enhancement block and added flex layout */}
                             {/* Enhancement Image Placeholder */}
                             <div className="w-full md:w-1/4 flex-shrink-0 h-32 bg-gray-300 rounded-md flex items-center justify-center text-gray-600 text-sm overflow-hidden"> {/* Added overflow hidden */}
                                <img src={enhancement.imageUrl} alt={`${enhancement.title} Image`} className="w-full h-full object-cover rounded-md"/>
                             </div>

                            <div className="flex-grow">
                                <h5 className="text-lg font-bold mb-3 text-gray-800">{enhancement.title}</h5> {/* Styled enhancement title */}
                                <p className="text-gray-700 mb-4">
                                  <span className="font-semibold">Problem Solving:</span> {renderTextWithCitations(enhancement.problemSolving, allCitations)}
                                </p>

                                <p className="text-gray-700 mb-3 font-semibold">Advantages & Impact:</p>
                                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                  {enhancement.advantagesAndImpact.map((impact, i) => (
                                    <li key={i}>{renderTextWithCitations(impact, allCitations)}</li>
                                  ))}
                                </ul>

                                {/* Complexity Table */}
                                <div className="mb-4 overflow-x-auto"> {/* Added overflow for small screens */}
                                   <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-md"> {/* Removed overflow-hidden from table */}
                                      <thead className="bg-gray-200">
                                         <tr>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Complexity Type</th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Complexity</th>
                                         </tr>
                                      </thead>
                                      <tbody className="bg-white divide-y divide-gray-200">
                                         <tr>
                                            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Space Complexity</td>
                                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{renderTextWithCitations(enhancement.spaceComplexity, allCitations)}</td>
                                         </tr>
                                          <tr>
                                            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Time Complexity</td>
                                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{renderTextWithCitations(enhancement.timeComplexity, allCitations)}</td>
                                         </tr>
                                      </tbody>
                                   </table>
                                </div>

                                <p className="text-gray-700 mb-4"> {/* Added margin bottom */}
                                  <span className="font-semibold">Trade-Off:</span> {renderTextWithCitations(enhancement.tradeOff, allCitations)}
                                </p>

                                {/* View Code Button */}
                                <div className="text-right"> {/* Align button to the right */}
                                     <a href={enhancement.codeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200">
                                          View Code
                                     </a>
                                     {/* Replace '#' in codeLink above with the actual URL to the code */}
                                </div>

                            </div>
                          </div>
                        ))}
                      </div>

                       {/* Removed Summary of Benefits section */}

                       <h4 className="text-xl font-bold mb-3 border-b pb-2 border-gray-200">Citations</h4> {/* Styled heading */}
                       <ul className="list-disc list-inside text-blue-700 text-sm mb-6 space-y-1"> {/* Changed text color for links */}
                          {domain.detailedContent.citations.map((citation, index) => (
                              <li key={index}>
                                  <a href={citation.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                      {citation.name}
                                  </a>
                              </li>
                          ))}
                       </ul>


                      {/* "Show Less" button */}
                       <div className="text-center"> {/* Centered the button */}
                            <button
                                onClick={(e) => handleToggleExpand(domain.id, e)} // Added event parameter and preventDefault in handler
                                className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200" // Styled button
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
    </section>
  );
};

export default Domain;
