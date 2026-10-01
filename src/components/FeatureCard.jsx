import React from 'react';
import { Briefcase, TrendingUp, Award, Users } from 'lucide-react';

const iconMap = {
  Briefcase: Briefcase,
  TrendingUp: TrendingUp,
  Award: Award,
  Users: Users,
};

const FeatureCard = ({ iconName, title, description }) => {
  const IconComponent = iconMap[iconName] || Briefcase;

  return (
    <div className="feature-card" id={`feature-${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
      <div className="feature-icon-wrapper">
        <IconComponent className="feature-icon" size={24} />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureCard;
