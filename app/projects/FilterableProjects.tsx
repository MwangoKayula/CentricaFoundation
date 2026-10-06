'use client';

import { useState } from 'react';

// Mock data for demonstration
const MOCK_PROJECTS = [
  { id: 1, title: 'Urban Greening Initiative', tag: 'Community', description: 'Planting trees in underserved neighborhoods.' },
  { id: 2, title: 'Carbon Tracking Dashboard', tag: 'Tech', description: 'Building open-source tools to monitor emissions.' },
  { id: 3, title: 'Policy Advocacy Workshop', tag: 'Policy', description: 'Training community leaders to influence local climate policy.' },
  { id: 4, title: 'Community Solar Access', tag: 'Community', description: 'Expanding solar energy access to low-income households.' },
  { id: 5, title: 'AI for Climate Risk', tag: 'Tech', description: 'Using machine learning to predict flood risks.' },
];

export default function FilterableProjects() {
  const [filter, setFilter] = useState<'All' | string>('All');

  // Filter logic
  const filteredProjects = filter === 'All' 
    ? MOCK_PROJECTS 
    : MOCK_PROJECTS.filter(project => project.tag === filter);

  // FIX: Using Array.from to ensure compatibility and avoid TS iteration errors
  const uniqueTags = Array.from(new Set(MOCK_PROJECTS.map(p => p.tag)));
  const tags = ['All', ...uniqueTags];

  return (
    <div className="w-full">
      {/* Filter Buttons Section */}
      <div className="mb-8 overflow-x-auto pb-4">
        <div className="inline-flex space-x-2 align-middle">
          {tags.map((tag) => {
            const label = tag === 'All' ? 'All Projects' : tag;
            const isActive = filter === tag;

            return (
              <button
                key={tag}
                onClick={() => setFilter(tag as any)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
                  \${isActive 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-blue-500'
                  }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <span 
                className={`inline-block px-2 py-1 text-xs font-semibold rounded-full 
                  \${project.tag === 'Tech' ? 'bg-blue-100 text-blue-800' : 
                   project.tag === 'Community' ? 'bg-green-100 text-green-800' : 
                   'bg-yellow-100 text-yellow-800'}`}
              >
                {project.tag}
              </span>
              <h3 className="mt-4 text-xl font-bold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{project.description}</p>
              <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Learn More
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-gray-500 text-center py-10">
            No projects found for this category.
          </p>
        )}
      </div>
    </div>
  );
}
