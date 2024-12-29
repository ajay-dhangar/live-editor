import React from 'react';
import * as Icons from 'lucide-react';

interface TechnologyIconProps {
  iconName: string;
  className?: string;
}

export const TechnologyIcon: React.FC<TechnologyIconProps> = ({ iconName, className = '' }) => {
  const IconComponent = Icons[iconName as keyof typeof Icons];
  
  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} />;
};