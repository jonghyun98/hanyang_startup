import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getLectureById } from '../data/lectureUtils';
import ClassCard from '../components/ClassCard';
import '../styles/LectureDetailPage.css';

const LectureDetailPage: React.FC = () => {
  const { weekId } = useParams<{ weekId: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'classes'>('overview');
  
  const lectureId = weekId ? parseInt(weekId) : 0;
  const lecture = getLectureById(lectureId);
  
  if (!lecture) {
    return <div className="error-message">해당 주차 강의를 찾을 수 없습니다.</div>;
  }

  // 다음 주차와 이전 주차 ID 계산 (1~16주차 범위 내에서만)
  const prevWeekId = lecture.week > 1 ? lecture.id - 1 : null;
  const nextWeekId = lecture.week < 16 ? lecture.id + 1 : null;
  
  return (
    <div className="lecture-detail-page">
      <div className="back-navigation">
        <Link to="/" className="back-link">
          <span>← 전체 강의 목록으로 돌아가기</span>
        </Link>
      </div>
      
      <div className="lecture-header">
        <div className="lecture-title-section">
          <span className="lecture-week">{lecture.week}주차</span>
          <h1 className="lecture-title">{lecture.title}</h1>
          <span className="lecture-date">{lecture.date}</span>
        </div>
        
        <div className="week-navigation">
          {prevWeekId && (
            <Link to={`/lectures/${prevWeekId}`} className="week-nav-link prev-week">
              ← {prevWeekId}주차
            </Link>
          )}
          
          {nextWeekId && (
            <Link to={`/lectures/${nextWeekId}`} className="week-nav-link next-week">
              {nextWeekId}주차 →
            </Link>
          )}
        </div>
      </div>
      
      <div className="lecture-tabs">
        <button 
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          주차 개요
        </button>
        <button 
          className={`tab-button ${activeTab === 'classes' ? 'active' : ''}`}
          onClick={() => setActiveTab('classes')}
        >
          교시별 내용 ({lecture.classes.length})
        </button>
      </div>
      
      <div className="lecture-content">
        {activeTab === 'overview' && (
          <div className="overview-content">
            <p className="overview-text">{lecture.content}</p>
            <div className="class-overview">
              <h2>이번 주차 교시 구성</h2>
              <ul className="class-list">
                {lecture.classes.map(classItem => (
                  <li key={classItem.id} className="class-item">
                    <span className="class-number">{classItem.period}교시</span>
                    <span className="class-title">{classItem.title}</span>
                    <span className="professor-name">{classItem.professor} 교수</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        {activeTab === 'classes' && (
          <div className="classes-grid">
            {lecture.classes.map(classItem => (
              <Link 
                to={`/lectures/${lecture.id}/classes/${classItem.id}`} 
                key={classItem.id} 
                className="class-card-link"
              >
                <ClassCard classItem={classItem} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LectureDetailPage; 