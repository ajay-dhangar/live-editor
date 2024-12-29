import React from 'react';
import { TechnologyCard } from '../components/cards/TechnologyCard';
import { technologies } from '../data/technologies';
import { Code2 } from 'lucide-react';

export const TechnologiesList = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Code2 className="w-12 h-12 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Live Code Editor
          </h1>
          <p className="text-xl text-gray-600">
            Choose a technology to start coding and learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech) => (
            <TechnologyCard key={tech.id} technology={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};