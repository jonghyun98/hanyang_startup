import React from 'react';
import { Link } from 'react-router-dom';
import { Lecture } from '../data/types';
import '../styles/LectureItem.css';

interface LectureItemProps {
  lecture: Lecture;
}

const LectureItem: React.FC<LectureItemProps> = ({ lecture }) => {
  return (
    <Link to={`/lecture/${lecture.week}`} className="lecture-item-link">
      <div className="lecture-item">
        <div className="lecture-header">
          <h3>{lecture.week}주차: {lecture.title}</h3>
          <span className="lecture-date">{lecture.date}</span>
        </div>
        <div className="lecture-summary">
          <p>{lecture.content.substring(0, 120)}...</p>
        </div>
      </div>
    </Link>
  );
};

export default LectureItem; 