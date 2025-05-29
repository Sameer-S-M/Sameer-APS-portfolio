'use client';

export default function Home() {
  return (
    <div>
      {/* The main content is handled by the Domain component */}
      {/* You can add a placeholder or other shared layout elements here if needed */}
      <p>This is the root page. Main content loaded below (if using Domain component directly).</p>
      {/* Example: <Domain /> if you want to render it directly here */}
    </div>
  );
}
            <AIAgentCard
              key={agent.id}
              agent={agent}
              isExpanded={false} // Cards in the grid are not expanded
              onToggleExpand={() => handleToggleExpand(agent.id)}
            />
          ))}
        </div>
      )}

      {focusedAgentId && focusedAgent && (
        <div className={cn("flex justify-center", focusedAgentId && "max-w-4xl mx-auto")}>
          <AIAgentCard
            agent={focusedAgent}
            isExpanded={true} // Focused card is always expanded
            onToggleExpand={() => handleToggleExpand(focusedAgent.id)}
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
