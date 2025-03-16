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
      <div className="lecture-header-banner">
        <div className="lecture-header-content">
          <div className="back-navigation">
            <Link to="/" className="back-link">
              <span className="back-icon">←</span>
              <span>전체 강의 목록</span>
            </Link>
          </div>
          <div className="lecture-title-section">
            <div className="lecture-badge-container">
              <span className="lecture-week-badge">{lecture.week}주차</span>
              <span className="lecture-date-badge">{lecture.date}</span>
            </div>
            <h1 className="lecture-title">{lecture.title}</h1>
          </div>
        </div>
      </div>
      
      <div className="lecture-container">
        <div className="lecture-navigation-buttons">
          {prevWeekId && (
            <Link to={`/lectures/${prevWeekId}`} className="navigation-button prev-button">
              <span className="nav-icon">←</span>
              <span className="nav-text">{prevWeekId}주차</span>
            </Link>
          )}
          
          {nextWeekId && (
            <Link to={`/lectures/${nextWeekId}`} className="navigation-button next-button">
              <span className="nav-text">{nextWeekId}주차</span>
              <span className="nav-icon">→</span>
            </Link>
          )}
        </div>
        
        <div className="lecture-tabs">
          <button 
            className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span className="tab-icon overview-icon"></span>
            주차 개요
          </button>
          <button 
            className={`tab-button ${activeTab === 'classes' ? 'active' : ''}`}
            onClick={() => setActiveTab('classes')}
          >
            <span className="tab-icon classes-icon"></span>
            교시별 내용 <span className="classes-count">({lecture.classes.length})</span>
          </button>
        </div>
        
        <div className="lecture-content">
          {activeTab === 'overview' && (
            <div className="overview-content">
              <div className="overview-card">
                <h2 className="overview-title">주차 소개</h2>
                <p className="overview-text">{lecture.content}</p>
              </div>
              
              <div className="class-overview-card">
                <h2 className="class-overview-title">이번 주차 교시 구성</h2>
                <ul className="class-list">
                  {lecture.classes.map(classItem => (
                    <li key={classItem.id} className="class-item">
                      <div className="class-item-header">
                        <span className="class-number">{classItem.period}교시</span>
                        <span className="severity-badge severity-${classItem.severity}">
                          {classItem.severity === 'high' ? '중요' : 
                           classItem.severity === 'normal' ? '일반' : '기본'}
                        </span>
                      </div>
                      <div className="class-item-content">
                        <span className="class-title">{classItem.title}</span>
                        <span className="professor-name">{classItem.professor} 교수</span>
                      </div>
                      <Link 
                        to={`/lectures/${lecture.id}/classes/${classItem.id}`} 
                        className="view-class-button"
                      >
                        상세보기
                      </Link>
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
    </div>
  );
};

export default LectureDetailPage; 