import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getLectureById, getClassById } from '../data/lectureUtils';
import '../styles/ClassDetailPage.css';
import LectureContentRenderer from '../components/LectureContentRenderer';
import { LectureClass } from '../data/types';

const ClassDetailPage: React.FC = () => {
  const { lectureId, classId } = useParams<{ lectureId: string; classId: string }>();
  
  const lectureIdNum = Number(lectureId);
  const classIdNum = Number(classId);
  
  const lecture = getLectureById(lectureIdNum);
  const classItem = getClassById(lectureIdNum, classIdNum);
  
  if (!lecture || !classItem) {
    return (
      <div className="class-detail-page">
        <div className="not-found">
          <h2>강의를 찾을 수 없습니다</h2>
          <Link to="/" className="button">홈으로 돌아가기</Link>
        </div>
      </div>
    );
  }
  
  // 현재 클래스의 인덱스 찾기
  const currentIndex = lecture.classes.findIndex((c: LectureClass) => c.id === classItem.id);
  
  // 이전 클래스와 다음 클래스 결정
  const prevClass = currentIndex > 0 ? lecture.classes[currentIndex - 1] : null;
  const nextClass = currentIndex < lecture.classes.length - 1 ? lecture.classes[currentIndex + 1] : null;
  
  return (
    <div className="class-detail-page">
      <div className="back-navigation">
        <Link to={`/lectures/${lecture.id}`} className="back-link">
          <span>← 주차 개요로 돌아가기</span>
        </Link>
      </div>
      
      <div className="class-detail-content">
        <LectureContentRenderer 
          content={classItem.content}
          week={lecture.week}
          period={classItem.period}
          title={classItem.title}
          professor={classItem.professor}
        />
        
        <div className="class-navigation">
          {prevClass ? (
            <Link 
              to={`/lectures/${lecture.id}/classes/${prevClass.id}`} 
              className="nav-link prev"
            >
              ← {prevClass.period}교시
            </Link>
          ) : <div></div>}
          
          {nextClass ? (
            <Link 
              to={`/lectures/${lecture.id}/classes/${nextClass.id}`} 
              className="nav-link next"
            >
              {nextClass.period}교시 →
            </Link>
          ) : <div></div>}
        </div>
      </div>
    </div>
  );
};

export default ClassDetailPage; 