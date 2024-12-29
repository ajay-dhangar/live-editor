import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Technology } from '../../types/editor';
import { TechnologyIcon } from '../icons/TechnologyIcon';

interface TechnologyCardProps {
  technology: Technology;
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({ technology }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl"
      onClick={() => navigate(`/live-editor/${technology.id}`)}
    >
      <div className={`${technology.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
        <TechnologyIcon iconName={technology.icon} className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-2">{technology.name}</h3>
      <p className="text-gray-600">{technology.description}</p>
    </div>
  );
};