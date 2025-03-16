import React from 'react';
import { LectureList as LectureListType } from '../data/types';
import LectureItem from './LectureItem';
import '../styles/LectureList.css';

interface LectureListProps {
  lectures: LectureListType;
}

const LectureList: React.FC<LectureListProps> = ({ lectures }) => {
  return (
    <div className="lecture-list">
      <h2>한양대학교 창업대학원 강의 노트</h2>
      <div className="lectures-container">
        {lectures.map(lecture => (
          <LectureItem
            key={lecture.id}
            lecture={lecture}
          />
        ))}
      </div>
    </div>
  );
};

export default LectureList; 