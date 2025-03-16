import React from 'react';
import { LectureClass } from '../data/types';
import '../styles/ClassCard.css';

interface ClassCardProps {
  classItem: LectureClass;
  weekNumber?: number;
}

const ClassCard: React.FC<ClassCardProps> = ({ classItem }) => {
  return (
    <div className={`class-card severity-${classItem.severity}`}>
      <div className="class-card-header">
        <div className="class-number">{classItem.period}교시</div>
        <div className="professor-info">
          <span className="professor-icon"></span>
          <span className="professor-name">{classItem.professor} 교수</span>
        </div>
      </div>
      <div className="class-card-content">
        <h3 className="class-title">{classItem.title}</h3>
        <p className="class-summary">
          {classItem.content.length > 100
            ? `${classItem.content.substring(0, 100)}...`
            : classItem.content}
        </p>
      </div>
    </div>
  );
};

export default ClassCard; 