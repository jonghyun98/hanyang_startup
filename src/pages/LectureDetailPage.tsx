import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getLectureById } from '../data/lectureUtils';
import ClassCard from '../components/ClassCard';
import '../styles/LectureDetailPage.css';

const LectureDetailPage: React.FC = () => {
  const { weekId } = useParams<{ weekId: string }>();
  const weekNumber = parseInt(weekId || '1');
  const navigate = useNavigate();
  
  const lecture = getLectureById(weekNumber);
  
  if (!lecture) {
    return (
      <div className="lecture-detail-page">
        <div className="not-found">
          <h2>강의를 찾을 수 없습니다</h2>
          <Link to="/" className="back-link">홈으로 돌아가기</Link>
        </div>
      </div>
    );
  }

  // 이전 주차와 다음 주차로 이동하는 함수
  const navigateToPreviousWeek = () => {
    if (weekNumber > 1) {
      navigate(`/lectures/${weekNumber - 1}`);
    }
  };

  const navigateToNextWeek = () => {
    if (weekNumber < 16) {
      navigate(`/lectures/${weekNumber + 1}`);
    }
  };

  return (
    <div className="lecture-detail-page">
      <div className="back-navigation">
        <Link to="/" className="back-link">← 목록으로 돌아가기</Link>
      </div>
      <div className="lecture-detail-content">
        <header className="lecture-detail-header">
          <div className="lecture-detail-week">
            <span className="week-label">{lecture.week}주차</span>
          </div>
          <h1 className="lecture-detail-title">{lecture.title}</h1>
          <div className="lecture-detail-date">{lecture.date}</div>
        </header>
        <div className="lecture-detail-body">
          {lecture.summary ? (
            <div className="lecture-summary">
              <h3>주차 요약</h3>
              <p>{lecture.summary}</p>
            </div>
          ) : null}
          <div className="lecture-content">
            <p>{lecture.content}</p>
          </div>
        </div>
        
        <h2 className="classes-title">세부 수업 내용</h2>
        <div className="classes-grid">
          {lecture.classes.map(classItem => (
            <Link 
              to={`/lectures/${weekNumber}/classes/${classItem.id}`} 
              key={classItem.id}
              className="class-card-link"
            >
              <ClassCard 
                classItem={classItem} 
                weekNumber={weekNumber} 
              />
            </Link>
          ))}
        </div>
        
        <div className="lecture-navigation">
          {weekNumber > 1 && (
            <Link to={`/lectures/${weekNumber - 1}`} className="nav-link prev">
              ← {weekNumber - 1}주차
            </Link>
          )}
          {weekNumber < 16 && (
            <Link to={`/lectures/${weekNumber + 1}`} className="nav-link next">
              {weekNumber + 1}주차 →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default LectureDetailPage; 