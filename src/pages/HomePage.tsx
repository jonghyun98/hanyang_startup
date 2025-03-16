import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllLectures } from '../data/lectureUtils';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  const lectures = getAllLectures();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-page">
      <header className="header">
        <div className="hanyang-banner">
          <div className="logo-container">
            <div className="hanyang-logo"></div>
          </div>
        </div>
        <div className="container">
          <h1 className={isVisible ? 'visible' : ''}>한양대학교 창업대학원</h1>
          <p className={isVisible ? 'visible' : ''}>2025학년도 실전 창업 역량 개발 프로그램</p>
          <div className="header-buttons">
            <a href="#lectures" className="primary-button">강의 둘러보기</a>
            <a href="https://hanyang.ac.kr" target="_blank" rel="noopener noreferrer" className="secondary-button">한양대학교</a>
          </div>
        </div>
        <div className="header-decoration">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
      </header>
      
      <section className="highlights-section">
        <div className="container">
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">📚</div>
              <h3>체계적인 커리큘럼</h3>
              <p>창업 전문가들이 설계한 총 16주 강의 커리큘럼</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">💡</div>
              <h3>실무 중심 교육</h3>
              <p>실제 창업 현장의 경험과 노하우 공유</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🚀</div>
              <h3>창업 역량 강화</h3>
              <p>이론과 실무를 아우르는 종합적 역량 개발</p>
            </div>
          </div>
        </div>
      </section>
      
      <main className="main-content" id="lectures">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">강의 목록</h2>
            <p className="section-subtitle">주차별 강의 목록을 확인하고 강의 내용을 살펴보세요</p>
          </div>
          
          <div className="lectures-grid">
            {lectures.map((lecture) => (
              <Link to={`/lectures/${lecture.id}`} key={lecture.id} className="lecture-card">
                <div className="lecture-card-header">
                  <span className="lecture-week">{lecture.week}주차</span>
                  <span className="lecture-classes-badge">{lecture.classes.length}개 교시</span>
                </div>
                <div className="lecture-card-content">
                  <h3 className="lecture-title">{lecture.title}</h3>
                  <div className="lecture-date">
                    <i className="lecture-icon date-icon"></i>
                    {lecture.date}
                  </div>
                  <div className="lecture-professors">
                    {Array.from(new Set(lecture.classes.map(cls => cls.professor))).map((professor, idx) => (
                      <span key={idx} className="lecture-professor-tag">{professor}</span>
                    ))}
                  </div>
                </div>
                <div className="lecture-card-footer">
                  <span className="view-details">자세히 보기</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>창업에 대해 더 알고 싶으신가요?</h2>
            <p>한양대학교 창업지원단에서 다양한 창업 프로그램과 지원 서비스를 제공합니다.</p>
            <a href="https://startup.hanyang.ac.kr" target="_blank" rel="noopener noreferrer" className="cta-button">
              창업지원단 방문하기
            </a>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <img src="/logo-white.png" alt="한양대학교 로고" className="footer-logo" />
              <p>한양대학교 창업 교육팀</p>
            </div>
            <div className="footer-links">
              <a href="https://hanyang.ac.kr" target="_blank" rel="noopener noreferrer">대학 홈페이지</a>
              <a href="https://startup.hanyang.ac.kr" target="_blank" rel="noopener noreferrer">창업지원단</a>
              <a href="mailto:startup@hanyang.ac.kr">문의하기</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 한양대학교 창업 교육팀. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 