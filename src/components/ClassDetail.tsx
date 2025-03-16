import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getClassById, getLectureById } from '../data/lectureUtils';
import LectureContentRenderer from './LectureContentRenderer';
import '../styles/ClassDetailPage.css';

const ClassDetail: React.FC = () => {
  const { lectureId, classId } = useParams<{ lectureId: string; classId: string }>();
  
  // 강의와 교시 데이터 가져오기
  const lectureIdNum = lectureId ? parseInt(lectureId) : 0;
  const classIdNum = classId ? parseInt(classId) : 0;
  
  const lecture = getLectureById(lectureIdNum);
  const classItem = getClassById(lectureIdNum, classIdNum);
  
  if (!lecture || !classItem) {
    return <div className="error-message">해당 강의를 찾을 수 없습니다.</div>;
  }
  
  // 이전/다음 교시 찾기
  const currentIndex = lecture.classes.findIndex(c => c.id === classIdNum);
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
            <Link to={`/lectures/${lecture.id}/classes/${prevClass.id}`} className="nav-link prev-link">
              <span className="nav-icon">←</span>
              <div className="nav-content">
                <span className="nav-label">이전 교시</span>
                <span className="nav-title">{prevClass.period}교시: {prevClass.title}</span>
              </div>
            </Link>
          ) : <div></div>}
          
          {nextClass ? (
            <Link to={`/lectures/${lecture.id}/classes/${nextClass.id}`} className="nav-link next-link">
              <div className="nav-content">
                <span className="nav-label">다음 교시</span>
                <span className="nav-title">{nextClass.period}교시: {nextClass.title}</span>
              </div>
              <span className="nav-icon">→</span>
            </Link>
          ) : <div></div>}
        </div>
      </div>
    </div>
  );
};

export default ClassDetail; 