'use client'

import React, { useState } from 'react';

const SimulacrumReadMore: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'features'>('overview');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Tab Navigation - Fixed header */}
      <div style={{ 
        flexShrink: 0,
        borderBottom: '1px solid var(--text-secondary)'
      }}>
        <button
          onClick={() => setActiveTab('overview')}
          className={`font-['Rubik'] text-base font-semibold px-4 py-2 transition-all hover:opacity-70 ${
            activeTab === 'overview' ? 'border-b-2' : ''
          }`}
          style={{
            color: activeTab === 'overview' ? 'var(--text-primary)' : 'var(--text-secondary)',
            borderColor: activeTab === 'overview' ? 'var(--text-primary)' : 'transparent'
          }}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('features')}
          className={`font-['Rubik'] text-base font-semibold px-4 py-2 transition-all hover:opacity-70 ${
            activeTab === 'features' ? 'border-b-2' : ''
          }`}
          style={{
            color: activeTab === 'features' ? 'var(--text-primary)' : 'var(--text-secondary)',
            borderColor: activeTab === 'features' ? 'var(--text-primary)' : 'transparent'
          }}
        >
          Feature Overview
        </button>
      </div>

      {/* Scrollable Content */}
      <div style={{ 
        flex: 1,
        overflowY: 'auto',
        paddingTop: '1rem',
        minHeight: 0
      }}>
        {activeTab === 'overview' && (
          <div className="space-y-4">
            <div>
              <h3 className="font-['Rubik'] text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Key Responsibilities
              </h3>
              
              <h4 className="font-['Rubik'] text-base font-semibold mb-2 mt-4" style={{ color: 'var(--text-primary)' }}>
                Frontend
              </h4>
              <ul className="font-['Rubik'] text-base leading-relaxed mb-3 list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>Designed and implemented interactive landing page animations to demonstrate AI forecasting capabilities</li>
                <li>Built responsive user interfaces for the data training webapp with focus on performance optimization</li>
              </ul>

              <h4 className="font-['Rubik'] text-base font-semibold mb-2 mt-4" style={{ color: 'var(--text-primary)' }}>
                Backend
              </h4>
              <ul className="font-['Rubik'] text-base leading-relaxed mb-3 list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>Implemented authentication systems and integrated Stripe payment processing</li>
                <li>Architected and managed PostgreSQL database infrastructure, including schema design and query optimization</li>
                <li>Developed RESTful API routes to support frontend functionality and third-party integrations</li>
                <li>Built custom Python package for automated schema generation supporting both Prisma and SQLAlchemy ORMs, reducing deployment and cross-project synchronization from manual updates to a single command execution</li>
              </ul>
            </div>

            <div>
              <h3 className="font-['Rubik'] text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Outcomes
              </h3>
              <ul className="font-['Rubik'] text-base leading-relaxed list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>Reduced data training webapp load times by over 98% (from 60 seconds to instantaneous on initial page load)</li>
                <li>Decreased dataset metadata retrieval time from ~5 seconds to immediate access</li>
                <li>Streamlined developer workflow by eliminating manual schema synchronization between forecasting models and web application</li>
                <li>Enabled scalable metadata management by migrating from GCP bucket queries to optimized PostgreSQL database architecture</li>
              </ul>
            </div>

            <div>
              <h3 className="font-['Rubik'] text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Learning & Growth
              </h3>
              <p className="font-['Rubik'] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Gained valuable experience working in a fast-paced startup environment and contributing to a product 
                at the intersection of AI and data forecasting. Collaborated directly with the CTO on architecture 
                decisions and optimization strategies, developing insight into technical leadership and product-level 
                thinking. Developed skills in cross-functional collaboration, rapid prototyping, and iterative development 
                within an accelerator program setting, while learning to balance feature development with performance 
                optimization in a production environment.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div className="space-y-4">
            <div>
              <h3 className="font-['Rubik'] text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Database Schema Generation Python Package
              </h3>
              <p className="font-['Rubik'] text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                Developed an internal Python package for development use that automated database schema generation and synchronization across multiple technology stacks, bridging the gap between the company's AI forecasting models (Python) and web application (TypeScript).
              </p>
            </div>

            <div>
              <h4 className="font-['Rubik'] text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Core Features
              </h4>
              
              <div className="mb-3">
                <p className="font-['Rubik'] text-base font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  Schema Definition System
                </p>
                <ul className="font-['Rubik'] text-base leading-relaxed list-disc list-inside space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>SQL-based schema definitions serving as single source of truth</li>
                  <li>Centralized schema management eliminating duplication across projects</li>
                  <li>Version-controlled schema files for tracking database structure changes</li>
                </ul>
              </div>

              <div className="mb-3">
                <p className="font-['Rubik'] text-base font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  Multi-Framework Code Generation
                </p>
                <ul className="font-['Rubik'] text-base leading-relaxed list-disc list-inside space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>Automatic generation of Prisma schemas for TypeScript/Node.js projects</li>
                  <li>Automatic generation of SQLAlchemy models for Python backend services</li>
                  <li>Maintained consistent data models across different technology stacks</li>
                </ul>
              </div>

              <div className="mb-3">
                <p className="font-['Rubik'] text-base font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  Command-Line Interface
                </p>
                <ul className="font-['Rubik'] text-base leading-relaxed list-disc list-inside space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>One-command schema deployment: instantly generates schema files in target project directory</li>
                </ul>
              </div>

              <div className="mb-3">
                <p className="font-['Rubik'] text-base font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  Synchronization & Updates
                </p>
                <ul className="font-['Rubik'] text-base leading-relaxed list-disc list-inside space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>Non-destructive updates to pre-existing schema folders</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-['Rubik'] text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Technical Implementation
              </h4>
              <ul className="font-['Rubik'] text-base leading-relaxed list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>Built parsing layer to convert SQL schema definitions into intermediate representation</li>
                <li>Developed template engines for both Prisma and SQLAlchemy output formats</li>
              </ul>
            </div>

            <div>
              <h4 className="font-['Rubik'] text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Impact
              </h4>
              <ul className="font-['Rubik'] text-base leading-relaxed list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>Eliminated manual schema synchronization between forecasting engine and web application</li>
                <li>Reduced schema deployment time from manual copying/translation to single command execution</li>
                <li>Prevented schema drift and inconsistencies between Python and TypeScript codebases</li>
                <li>Enabled rapid iteration on database structure without breaking cross-project compatibility</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimulacrumReadMore;