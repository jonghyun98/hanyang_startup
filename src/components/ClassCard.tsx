import React from 'react';
import { LectureClass } from '../data/types';
import '../styles/ClassCard.css';

interface ClassCardProps {
  classItem: LectureClass;
  weekNumber: number;
}

const ClassCard: React.FC<ClassCardProps> = ({ classItem, weekNumber }) => {
  const severityClass = `severity-${classItem.severity || 'normal'}`;
  
  return (
    <div className={`class-card ${severityClass}`}>
      <div className="class-period">{classItem.period}교시</div>
      <h3 className="class-title">{classItem.title}</h3>
      <div className="class-professor">{classItem.professor} 교수님</div>
      <div className="class-content">
        <p>{classItem.content.substring(0, 150)}{classItem.content.length > 150 ? '...' : ''}</p>
      </div>
      <div className="class-card-hint">자세히 보기</div>
    </div>
  );
};

export default ClassCard; 