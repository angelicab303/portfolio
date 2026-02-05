'use client'

import React from 'react';

interface WorkDetailsContentProps {
  keyResponsibilities?: string[];
}

const WorkDetailsContent: React.FC<WorkDetailsContentProps> = ({ keyResponsibilities }) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-['Rubik'] text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
          Key Responsibilities & Achievements
        </h3>
        {keyResponsibilities && keyResponsibilities.length > 0 ? (
          <ul className="list-disc pl-5 space-y-2">
            {keyResponsibilities.map((responsibility, index) => (
              <li key={index} className="font-['Rubik'] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {responsibility}
              </li>
            ))}
          </ul>
        ) : (
          <p className="font-['Rubik'] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        )}
      </div>

      <div>
        <h3 className="font-['Rubik'] text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
          Technical Contributions
        </h3>
        <p className="font-['Rubik'] text-base leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores 
          eos qui ratione voluptatem sequi nesciunt.
        </p>
        <p className="font-['Rubik'] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
          sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
          nisi ut aliquid ex ea commodi consequatur.
        </p>
      </div>

      <div>
        <h3 className="font-['Rubik'] text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
          Impact & Results
        </h3>
        <p className="font-['Rubik'] text-base leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti 
          atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
          similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
        </p>
        <p className="font-['Rubik'] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est 
          eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas 
          assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum 
          necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
        </p>
      </div>
    </div>
  );
};

export default WorkDetailsContent;