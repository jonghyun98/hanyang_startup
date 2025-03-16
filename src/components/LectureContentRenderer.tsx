import React from 'react';
import '../styles/LectureContentRenderer.css';
import ReactMarkdown from 'react-markdown';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface CourseSpec {
  title: string;
  value: string | number;
  unit?: string;
}

interface TopicItem {
  icon: string;
  title: string;
  description: string;
}

interface DiscussionItem {
  number: number;
  question: string;
}

interface LectureContentProps {
  content?: string;
  week?: number;
  period?: number;
  title?: string;
  professor?: string;
}

const LectureContentRenderer: React.FC<LectureContentProps> = ({ 
  content, 
  week = 1, 
  period = 1, 
  title = "창업가의 여정과 멘탈 관리", 
  professor = "김동화" 
}) => {
  // 컨텐츠가 없는 경우를 처리
  if (!content) {
    return (
      <div className="default-content">
        <p>강의 내용이 준비 중입니다.</p>
      </div>
    );
  }

  try {
    // 김동화 교수의 1주차 1교시인 경우 특별한 레이아웃 제공
    if (week === 1 && period === 1 && professor === "김동화") {
      const careerTimeline: TimelineItem[] = [
        { 
          year: "~2016년", 
          title: "컨슈머 리셀러, 통신사 영업",
          description: "전략 기획, B2B 영업, 제너럴 매니저 역할 수행" 
        },
        { 
          year: "~2019년", 
          title: "애플",
          description: "아이폰 담당, 애플 리테일 스토어 셋업 지원" 
        },
        { 
          year: "2019~2022년", 
          title: "넷플릭스 코리아",
          description: "삼성전자, LG전자 등과 파트너십 협상 담당" 
        },
        { 
          year: "2023년~", 
          title: "커리어 전환",
          description: "심리 상담, 코칭 분야로 전향 (51세 생일)" 
        }
      ];

      const courseSpecs: CourseSpec[] = [
        { title: "출석", value: 20, unit: "%" },
        { title: "토론 참여", value: 30, unit: "%" },
        { title: "중간 과제", value: 25, unit: "%" },
        { title: "기말 과제", value: 25, unit: "%" }
      ];

      const topicItems: TopicItem[] = [
        {
          icon: "🧠",
          title: "의사결정 능력",
          description: "일상적 결정부터 위기 상황까지 다양한 결정을 내리는 방법을 배웁니다."
        },
        {
          icon: "🔧",
          title: "실무적 문제해결 능력",
          description: "투자 유치 협상, 가격 결정, 프로모션 전략, 파트너십 관리 등 실무적 문제 해결 방법을 학습합니다."
        },
        {
          icon: "⏱️",
          title: "시간 및 인력 관리",
          description: "시간 관리가 곧 자금 관리입니다. 우선순위 결정과 역할 분담을 통한 효율적 관리 방법을 익힙니다."
        },
        {
          icon: "🌱",
          title: "심리적 회복탄력성",
          description: "실패와 스트레스를 극복하고 자기 성찰을 통해 창업가로서의 정체성을 확립하는 방법을 배웁니다."
        }
      ];

      const discussionItems: DiscussionItem[] = [
        { number: 1, question: "여러분에게 '창업'이란 무엇인가요?" },
        { number: 2, question: "어떤 역량을 키우고 싶어서 이 강의를 수강하게 되었나요?" },
        { number: 3, question: "실패와 좌절을 극복한 경험이 있다면 공유해 주세요." }
      ];

      return (
        <div className="lecture-content-container">
          <div className="lecture-header">
            <h1 className="lecture-title">
              <span className="lecture-week-period">{week}주차 {period}교시</span>
              {title}
            </h1>
            <div className="lecture-professor">{professor} 교수</div>
          </div>

          <div className="lecture-markdown-content">
            {content && <ReactMarkdown>{content}</ReactMarkdown>}
          </div>

          <div className="quote-container">
            <blockquote>
              "진정한 커리어는 단순히 일자리를 바꾸는 것이 아니라, 자신의 경험과 가치를 재구성하는 과정입니다."
            </blockquote>
          </div>

          <section className="content-section">
            <h2 className="section-title"><span className="section-number">1</span> 강사 소개 및 전문 배경</h2>
            
            <div className="career-timeline">
              {careerTimeline.map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="career-motivation">
              <h3>커리어 전환 동기</h3>
              <ul className="motivation-list">
                <li>오랜 직장 생활 후 '은퇴'한 사람들의 허망함 목격</li>
                <li>인생의 새로운 방향 설정을 위한 프로액티브한 결정</li>
                <li>애플에서 받은 리더십 코칭의 영향</li>
                <li>가족 문제로 심리 상담에 관심 갖게 됨</li>
              </ul>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title"><span className="section-number">2</span> 수업 구성 및 평가 방식</h2>
            
            <div className="course-specs">
              {courseSpecs.map((spec, index) => (
                <div className="spec-item" key={index}>
                  <h3 className="spec-title">{spec.title}</h3>
                  <div className="spec-value">
                    {spec.value}{spec.unit}
                  </div>
                </div>
              ))}
            </div>

            <div className="course-format">
              <h3>수업 운영 방식</h3>
              <div className="format-items">
                <div className="format-item">
                  <div className="format-number">1</div>
                  <div className="format-content">
                    <h4>참여형 수업</h4>
                    <p>질문과 토론 중심으로 진행</p>
                  </div>
                </div>
                <div className="format-item">
                  <div className="format-number">2</div>
                  <div className="format-content">
                    <h4>사례 분석</h4>
                    <p>최근 성공/실패한 스타트업 사례 심층 연구</p>
                    <ul>
                      <li>창업가 배경 분석</li>
                      <li>팀 구성 방식 탐구</li>
                      <li>도전 과제 및 극복 방안 도출</li>
                    </ul>
                  </div>
                </div>
                <div className="format-item">
                  <div className="format-number">3</div>
                  <div className="format-content">
                    <h4>특강 프로그램</h4>
                    <p>외부 전문가와 현직 창업가 초청</p>
                  </div>
                </div>
                <div className="format-item">
                  <div className="format-number">4</div>
                  <div className="format-content">
                    <h4>워크숍 및 그룹 활동</h4>
                    <p>팀 단위 실습과 네트워킹 기회 제공</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title"><span className="section-number">3</span> 창업가의 핵심 역량</h2>
            
            <div className="topics-grid">
              {topicItems.map((item, index) => (
                <div className="topic-card" key={index}>
                  <div className="topic-icon">{item.icon}</div>
                  <h3 className="topic-title">{item.title}</h3>
                  <p className="topic-description">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="management-table">
              <h3>시간 및 인력 관리 전략</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>관리 영역</th>
                      <th>주요 과제</th>
                      <th>해결 방안</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>시간 관리</td>
                      <td>우선순위 결정</td>
                      <td>중요성-긴급성 매트릭스 활용</td>
                    </tr>
                    <tr>
                      <td>인력 관리</td>
                      <td>역할 분담</td>
                      <td>강점 기반 업무 배분</td>
                    </tr>
                    <tr>
                      <td>공동 창업</td>
                      <td>의견 충돌</td>
                      <td>명확한 의사결정 프로세스 구축</td>
                    </tr>
                    <tr>
                      <td>팀 문화</td>
                      <td>동기 부여</td>
                      <td>비전 공유와 인정/보상 체계</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title"><span className="section-number">4</span> 창업의 의미와 가치</h2>
            
            <div className="meaning-cards">
              <div className="meaning-card">
                <h3>창업의 다차원적 의미</h3>
                <ul>
                  <li><strong>세계관과 가치 실현</strong>: 단순한 비즈니스 시작이 아닌 자신의 세계관과 가치 실현의 과정</li>
                  <li><strong>정체성과 성장</strong>: 개인의 정체성과 성장의 기회</li>
                  <li><strong>사회적 가치</strong>: 사회적 가치 창출의 수단</li>
                  <li><strong>자기 도전</strong>: 자신만의 명분과 도전 과제 설정의 장</li>
                </ul>
              </div>
              <div className="meaning-card quote">
                <div className="quote-text">
                  "창업가는 단지 사업을 하는 사람이 아니라,<br />
                  세상을 바꾸는 새로운 방식을 창조하는 사람입니다."
                </div>
                <div className="quote-author">- 아담 그랜트 (조직심리학자)</div>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title"><span className="section-number">5</span> 한국·미국 스타트업 통계</h2>

            <div className="stats-container">
              <div className="stats-card">
                <h3>미국 스타트업 생존율</h3>
                <p className="stats-subtitle">2018년 창업한 4,369개 스타트업의 2025년 현황</p>
                <ul className="stats-list">
                  <li><span className="stats-highlight">0.34%</span> 상장 (15개)</li>
                  <li><span className="stats-highlight">5.5%</span> 인수(M&A) (239개)</li>
                  <li><span className="stats-highlight">1.3%</span> 유니콘 (57개)</li>
                  <li><span className="stats-highlight">32.2%</span> 영업 중 (1,408개)</li>
                  <li><span className="stats-highlight">61.9%</span> 폐업 (2,707개)</li>
                </ul>
                <p className="stats-source">출처: carta.com</p>
              </div>

              <div className="stats-card">
                <h3>한국 스타트업 투자 단계별 진행률</h3>
                <p className="stats-subtitle">SEED 투자받은 1,098개 스타트업 기준</p>
                <ul className="stats-list">
                  <li><span className="stats-highlight">51%</span> 시리즈 A 진행 (미국 64%)</li>
                  <li><span className="stats-highlight">27%</span> 시리즈 B 진행 (미국 26%)</li>
                  <li><span className="stats-highlight">11%</span> 시리즈 C 진행 (미국 10%)</li>
                  <li><span className="stats-highlight">10%</span> Exit (미국 13%)</li>
                </ul>
                <p className="stats-source">출처: 국민대학교 플랫폼SME 연구센터 (2023년 3월)</p>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title"><span className="section-number">6</span> 현장 사례 및 토의 주제</h2>

            <div className="case-studies">
              <div className="case-study">
                <h3>현금흐름관리 사례</h3>
                <div className="case-summary">
                  <p><strong>사례:</strong> 헬스케어 스타트업 "M테크"는 파일럿 계약 후 정식 계약까지 시간이 걸려 매출이 늦게 발생</p>
                  <p><strong>딜레마:</strong> 2.5개월 후 자금이 바닥나는데, 병원 계약금은 최소 4개월 뒤 입금 예정</p>
                  <p><strong>토의 주제:</strong> 창업자는 어떤 방법으로 현금을 확보하여 첫 매출이 들어올 때까지 버틸 수 있을까?</p>
                </div>
              </div>

              <div className="case-study">
                <h3>유통 파트너와 협상 문제</h3>
                <div className="case-summary">
                  <p><strong>사례:</strong> "에코생활" 친환경 소비재 스타트업이 대형 온라인 마켓플레이스(G 유통사)와 협상 중</p>
                  <p><strong>문제:</strong> 유통 마진(40%), 독점 계약, 마케팅 비용 전가 등 불리한 계약 조건</p>
                  <p><strong>토의 주제:</strong> 과도한 조건을 어떻게 협상해야 하나? 어떤 리스크가 가장 중요한가?</p>
                </div>
              </div>

              <div className="case-study">
                <h3>창업자들의 개인적 문제</h3>
                <div className="case-summary">
                  <p><strong>사례:</strong> 공동창업자 D가 암 진단으로 장기 휴직, C대표가 모든 업무 담당 + 가정 내 육아/맞벌이 문제</p>
                  <p><strong>토의 주제:</strong></p>
                  <ol>
                    <li>공동창업자의 공백을 어떻게 메꿀 것인가?</li>
                    <li>가정과 회사 사이에서 균형을 잡는 방법은?</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title"><span className="section-number">7</span> 토론 주제 및 질의응답</h2>
            
            <div className="discussion-list">
              {discussionItems.map((item) => (
                <div className="discussion-item" key={item.number}>
                  <div className="discussion-number">{item.number}</div>
                  <div className="discussion-question">{item.question}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section next-week">
            <h2 className="section-title">다음 주 예고</h2>
            <div className="next-week-content">
              <div className="next-week-topic">
                <span className="label">2주차 주제</span>
                <strong>아이디어 발상과 기회 포착</strong>
              </div>
              <div className="next-week-prep">
                <span className="label">준비사항</span>
                <p>관심 있는 산업 분야의 트렌드 조사해오기</p>
              </div>
              <div className="next-week-reading">
                <span className="label">사전 읽기 자료</span>
                <p>제로 투 원(Peter Thiel), 린 스타트업(Eric Ries) 관련 챕터</p>
              </div>
            </div>
          </section>
        </div>
      );
    }
    // 전화성 교수의 1주차 2교시인 경우 특별한 레이아웃 제공
    else if (week === 1 && period === 2 && professor === "전화성") {
      // 2024-2025 투자 생태계 통계 데이터
      const investmentStatsData = [
        { year: 2022, amount: 5.2, color: '#4285F4' },
        { year: 2023, amount: 3.75, color: '#34A853' },
        { year: 2024, amount: 1.5, color: '#EA4335' },
      ];
      
      // 한국 스타트업 생존율 데이터
      const survivalRateData = [
        { stage: 'Seed → A', korea: 51, us: 64, color: '#4285F4' },
        { stage: 'A → B', korea: 27, us: 26, color: '#34A853' },
        { stage: 'B → C', korea: 11, us: 10, color: '#FBBC05' },
        { stage: 'Exit', korea: 10, us: 13, color: '#EA4335' },
      ];
      
      return (
        <div className="lecture-content-container modern">
          <div className="lecture-header premium-gradient">
            <div className="header-content">
              <div className="lecture-meta-info">
                <span className="lecture-week-period">{week}주차 {period}교시</span>
                <div className="lecture-badges">
                  <span className="badge hot-topic">핵심 강의</span>
                  <span className="badge investment">투자 유치</span>
                  <span className="badge ma">M&A</span>
                </div>
              </div>
              <h1 className="lecture-title">
                {title}
                <div className="title-underline"></div>
              </h1>
              <div className="lecture-professor">
                <img src="/images/professor-icon.svg" alt="Professor" className="professor-icon" />
                {professor} 교수
              </div>
            </div>
          </div>

          <div className="content-overview">
            <div className="overview-card">
              <div className="card-icon">🔍</div>
              <div className="card-content">
                <h3>강의 개요</h3>
                <p>한국 스타트업 생태계의 발전과 현재 투자 트렌드, 팁스(TIPS) 활용법과 M&A 시장 현황에 대해 알아봅니다.</p>
              </div>
            </div>
          </div>

          <div className="lecture-markdown-content hidden">
            {content && <ReactMarkdown>{content}</ReactMarkdown>}
          </div>

          <div className="quote-container investment-quote">
            <blockquote>
              "초기 창업가에게 필요한 것은 단순한 자금이 아니라 사회적 가치를 실현하려는 명확한 동기와 생태계 내 연결입니다."
            </blockquote>
          </div>

          <section className="content-section instructor-section">
            <h2 className="section-title">
              <span className="section-icon">👨‍🏫</span>
              <span>강사 소개 및 배경</span>
            </h2>
            
            <div className="instructor-profile">
              <div className="profile-image-container">
                <div className="profile-image"></div>
                <div className="profile-stats">
                  <div className="stat-item">
                    <span className="stat-value">500+</span>
                    <span className="stat-label">스타트업 투자</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">10+</span>
                    <span className="stat-label">경력 연수</span>
                  </div>
                </div>
              </div>
              
              <div className="career-timeline modern-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">현재</span>
                    <h3 className="timeline-title">CNT테크 대표</h3>
                    <p className="timeline-description">500개 이상 스타트업에 직접 투자, 팁스(TIPS) 운영사 경험</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">주요 경력</span>
                    <h3 className="timeline-title">한국 엑셀러레이터 협회 회장</h3>
                    <p className="timeline-description">창업기획자협회 활동을 통한 스타트업 생태계 활성화</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">창업 경험</span>
                    <h3 className="timeline-title">음성인식 분야 창업</h3>
                    <p className="timeline-description">외식‧배달 포스(POS) 연동 소프트웨어 등 IT 서비스 개발/운영</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="content-section investment-ecosystem">
            <h2 className="section-title">
              <span className="section-icon">📊</span>
              <span>한국 스타트업·투자 생태계의 현황과 흐름</span>
            </h2>
            
            <div className="stats-highlight-container">
              <div className="stats-row">
                <div className="stat-highlight major-decline">
                  <div className="stat-number">-60%</div>
                  <div className="stat-text">2024년 투자 감소율</div>
                </div>
                <div className="stat-highlight major-growth">
                  <div className="stat-number">+142%</div>
                  <div className="stat-text">시드 단계 투자 증가율</div>
                </div>
                <div className="stat-highlight warning">
                  <div className="stat-number">-82%</div>
                  <div className="stat-text">후기 단계 투자 감소율</div>
                </div>
              </div>
            </div>

            <div className="chart-container">
              <h3 className="chart-title">한국 테크 스타트업 투자 추이 (단위: 십억 달러)</h3>
              <div className="bar-chart">
                {investmentStatsData.map((item, index) => (
                  <div className="chart-item" key={index}>
                    <div className="chart-bar-container">
                      <div 
                        className="chart-bar" 
                        style={{ 
                          height: `${(item.amount / 6) * 100}%`,
                          backgroundColor: item.color
                        }}
                      >
                        <span className="bar-value">${item.amount}B</span>
                      </div>
                    </div>
                    <div className="chart-label">{item.year}</div>
                  </div>
                ))}
              </div>
              <div className="chart-note">자료: Tracxn Geo 보고서 "South Korea Tech 2024"</div>
            </div>

            <div className="trends-container">
              <div className="trend-card">
                <div className="trend-icon">📈</div>
                <div className="trend-content">
                  <h3>IMF~벤처 버블 시기</h3>
                  <p>지하자금 대규모로 벤처펀드에 유입 → 2000년 전후 벤처 버블 형성 → 2001년경 거품 붕괴</p>
                </div>
              </div>
              <div className="trend-card">
                <div className="trend-icon">🏦</div>
                <div className="trend-content">
                  <h3>모태펀드 등장</h3>
                  <p>정부 주도 '모태펀드' 조성, 벤처캐피털 투자 활성화, 연대보증 완화</p>
                </div>
              </div>
              <div className="trend-card">
                <div className="trend-icon">🚀</div>
                <div className="trend-content">
                  <h3>팁스(TIPS)의 탄생</h3>
                  <p>민간 선투자 + 정부 R&D 매칭으로 초기 스타트업 지원 강화</p>
                </div>
              </div>
              <div className="trend-card">
                <div className="trend-icon">🔄</div>
                <div className="trend-content">
                  <h3>글로벌·초격차 강조</h3>
                  <p>'스케일업 팁스' 신설 (2024년 5기 운영사 5개 컨소시엄 선정)</p>
                </div>
              </div>
            </div>

            <div className="success-stories">
              <h3 className="subsection-title">팁스 성공사례</h3>
              <div className="stories-container">
                <div className="success-story-card">
                  <div className="story-logo">Riiid</div>
                  <div className="story-content">
                    <h4>리드(Riiid)</h4>
                    <p>AI 교육 솔루션</p>
                    <div className="funding-info">
                      <span className="funding-round">시리즈 D</span>
                      <span className="funding-amount">1,750억원</span>
                    </div>
                    <div className="status unicorn">유니콘</div>
                  </div>
                </div>
                <div className="success-story-card">
                  <div className="story-logo">Nota</div>
                  <div className="story-content">
                    <h4>노타AI</h4>
                    <p>AI 최적화 플랫폼</p>
                    <div className="funding-info">
                      <span className="funding-round">시리즈 C</span>
                      <span className="funding-amount">199억원</span>
                    </div>
                  </div>
                </div>
                <div className="success-story-card">
                  <div className="story-logo">RLN</div>
                  <div className="story-content">
                    <h4>리벨리온스</h4>
                    <p>AI 칩 개발</p>
                    <div className="funding-info">
                      <span className="funding-round">시리즈 B</span>
                      <span className="funding-amount">1,380억원</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title">
              <span className="section-icon">🔄</span>
              <span>엑셀러레이터(AC)의 역할과 특징</span>
            </h2>
            
            <div className="comparison-table">
              <h3>VC와 엑셀러레이터(AC) 비교</h3>
              <table className="modern-table">
                <thead>
                  <tr>
                    <th>구분</th>
                    <th>엑셀러레이터(AC)</th>
                    <th>벤처캐피탈(VC)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>투자 대상</td>
                    <td>"아기" 스타트업(설립 초창기)</td>
                    <td>성숙한 기업("대학생" 수준)</td>
                  </tr>
                  <tr>
                    <td>투자 규모</td>
                    <td>소액(1~3억 수준)</td>
                    <td>중대형(10~수백억)</td>
                  </tr>
                  <tr>
                    <td>관여도</td>
                    <td>매일-매주 단위 밀착 지원</td>
                    <td>월 단위 정기 미팅</td>
                  </tr>
                  <tr>
                    <td>지원 형태</td>
                    <td>투자 + 보육 + 멘토링 + 네트워킹</td>
                    <td>주로 자금 제공</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="keynotes-container">
              <div className="keynote">
                <h3>'키스톤(Keystone)' 역할</h3>
                <ul className="keynote-list">
                  <li><strong>연결자</strong>: 스타트업, 대기업, 후속투자자, 정부 연결</li>
                  <li><strong>생태계 활성화</strong>: 중심축 역할 수행</li>
                  <li><strong>가치 창출</strong>: 자본·인재·기술 등을 매개하는 역할</li>
                  <li><strong>허브 기능</strong>: 다양한 자원과 기회의 중개자</li>
                </ul>
              </div>

              <div className="keynote">
                <h3>컴퍼니 빌더(벤처 스튜디오)</h3>
                <ul className="keynote-list">
                  <li>AC가 직접 아이디어/기술 기획, 창업팀 구성, 회사 설립</li>
                  <li>해외: 와이컴비네이터(Y Combinator) 등이 대표적 사례</li>
                  <li>한국: 법적 제약("행위 제한")으로 제한적 운영</li>
                  <li>2024~2025년 법·시행령 개선으로 국내에서도 본격화 전망</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title">
              <span className="section-icon">🤝</span>
              <span>M&A 시장의 현실과 도전</span>
            </h2>
            
            <div className="ma-statistics">
              <div className="ma-stat-card">
                <div className="stat-icon">📉</div>
                <div className="stat-number">19건</div>
                <div className="stat-description">2024년 한국 스타트업 M&A 건수</div>
                <div className="stat-trend negative">전년 26건 대비 감소</div>
              </div>
              
              <div className="ma-stat-card">
                <div className="stat-icon">🔍</div>
                <div className="stat-text">소형화 추세</div>
                <div className="stat-description">팀·소프트웨어·기술 중심 인수</div>
              </div>
              
              <div className="ma-stat-card highlight">
                <div className="stat-icon">💡</div>
                <div className="stat-text">밝은 조짐</div>
                <div className="stat-description">리벨리온스·세이펀코리아 합병으로<br />국내 첫 AI칩 유니콘 탄생</div>
              </div>
            </div>

            <div className="comparison-blocks">
              <div className="comparison-block">
                <h3>미국·유럽 M&A 특징</h3>
                <ul className="feature-list">
                  <li>기술 확보/신사업 진출을 위해 대기업들이 스타트업을 적극 M&A</li>
                  <li>Exit 전략으로서 IPO와 함께 일반적인 성공 경로</li>
                  <li>인수 금액 규모가 상대적으로 큼</li>
                </ul>
              </div>
              
              <div className="comparison-block">
                <h3>한국 M&A 특징</h3>
                <ul className="feature-list">
                  <li>대기업 재벌 구조로 '자회사 직접 설립' 선호</li>
                  <li>M&A 활발하지 않아 Exit 창구로서 한계 존재</li>
                  <li>스타트업 회수(Exit) 방안으로 IPO 의존도 높음</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="content-section tips-section">
            <h2 className="section-title">
              <span className="section-icon">💰</span>
              <span>투자 유치 과정과 팁스(TIPS) 활용법</span>
            </h2>
            
            <div className="tips-flowchart">
              <div className="flowchart-item">
                <div className="flowchart-icon">1</div>
                <div className="flowchart-content">
                  <h3>엑셀러레이터 선투자</h3>
                  <p>1~2억원 규모</p>
                </div>
              </div>
              <div className="flowchart-arrow">→</div>
              <div className="flowchart-item">
                <div className="flowchart-icon">2</div>
                <div className="flowchart-content">
                  <h3>정부 R&D 매칭</h3>
                  <p>5~7억원 규모</p>
                </div>
              </div>
              <div className="flowchart-arrow">→</div>
              <div className="flowchart-item highlight">
                <div className="flowchart-icon">3</div>
                <div className="flowchart-content">
                  <h3>10억원 규모 자금 확보</h3>
                  <p>지분 희석 최소화</p>
                </div>
              </div>
            </div>

            <div className="benefits-container">
              <h3>팁스(TIPS)의 장점</h3>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">💼</div>
                  <h4>창업자 지분 희석 최소화</h4>
                  <p>일반적인 투자 대비 낮은 지분 희석으로 사업 자금 확보 가능</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🌱</div>
                  <h4>초기 팀도 기회</h4>
                  <p>매출 전 단계, 초기 팀도 기술 개발·시장 검증 기회 제공</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🌐</div>
                  <h4>글로벌 데모데이</h4>
                  <p>매년 개최, 우수 스타트업 글로벌 투자자 미팅 기회 제공</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🛠️</div>
                  <h4>밀착 보육</h4>
                  <p>엑셀러레이터의 전문적인 지원과 멘토링 서비스</p>
                </div>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title">
              <span className="section-icon">🔄</span>
              <span>스타트업 실패와 재도전 환경</span>
            </h2>
            
            <div className="chart-container survival-chart">
              <h3 className="chart-title">한국 vs 미국 스타트업 투자 단계별 진행률 (%)</h3>
              <div className="bar-chart horizontal">
                {survivalRateData.map((item, index) => (
                  <div className="chart-row" key={index}>
                    <div className="chart-label">{item.stage}</div>
                    <div className="chart-bars">
                      <div className="chart-country">
                        <div className="country-label">한국</div>
                        <div className="bar-container">
                          <div 
                            className="chart-bar" 
                            style={{ 
                              width: `${item.korea}%`,
                              backgroundColor: item.color
                            }}
                          >
                            <span className="bar-value">{item.korea}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="chart-country">
                        <div className="country-label">미국</div>
                        <div className="bar-container">
                          <div 
                            className="chart-bar us-bar" 
                            style={{ 
                              width: `${item.us}%`,
                              backgroundColor: item.color
                            }}
                          >
                            <span className="bar-value">{item.us}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="chart-note">자료: 국민대학교 플랫폼SME 연구센터 (2023년 3월)</div>
            </div>

            <div className="failure-stats">
              <div className="stat-card major">
                <div className="stat-value">61.9%</div>
                <div className="stat-label">2018년 창업 스타트업 중 폐업 비율 (2025년 기준)</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">32.2%</div>
                <div className="stat-label">영업 지속 비율</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">5.9%</div>
                <div className="stat-label">Exit 성공 비율 (M&A, IPO 등)</div>
              </div>
            </div>

            <div className="timeline-comparison">
              <div className="timeline-column">
                <h3>과거 (2000년대 초)</h3>
                <div className="timeline-item negative">
                  <div className="item-dot"></div>
                  <div className="item-content">연대보증으로 실패 시 재기 불가능</div>
                </div>
                <div className="timeline-item negative">
                  <div className="item-dot"></div>
                  <div className="item-content">개인파산 및 신용불량자 등록</div>
                </div>
                <div className="timeline-item negative">
                  <div className="item-dot"></div>
                  <div className="item-content">실패에 대한 부정적 사회 인식</div>
                </div>
              </div>
              
              <div className="timeline-column">
                <h3>현재</h3>
                <div className="timeline-item positive">
                  <div className="item-dot"></div>
                  <div className="item-content">연대보증 폐지</div>
                </div>
                <div className="timeline-item positive">
                  <div className="item-dot"></div>
                  <div className="item-content">제도적 지원(재도전 패키지)</div>
                </div>
                <div className="timeline-item positive">
                  <div className="item-dot"></div>
                  <div className="item-content">엑셀러레이터 밀착 지원</div>
                </div>
                <div className="timeline-item warning">
                  <div className="item-dot"></div>
                  <div className="item-content">주의: 일부 금융권/캐피탈의 연대보증 요구 존재</div>
                </div>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title">
              <span className="section-icon">💡</span>
              <span>창업자의 '사회적 가치'와 동기</span>
            </h2>
            
            <div className="quote-special">
              <div className="quote-text">
                "단순 금전적 목적만으로는 창업의 어려움을 버티기 힘듭니다."
              </div>
            </div>

            <div className="value-cards">
              <div className="value-card">
                <div className="card-header">
                  <div className="card-icon">🎯</div>
                  <h3>명확한 사회적 목표</h3>
                </div>
                <p>어려운 시기를 견디는 핵심 동력</p>
              </div>
              <div className="value-card">
                <div className="card-header">
                  <div className="card-icon">♻️</div>
                  <h3>ESG, 지속가능성</h3>
                </div>
                <p>최근 투자자들의 중요 평가 기준</p>
              </div>
              <div className="value-card">
                <div className="card-header">
                  <div className="card-icon">🔄</div>
                  <h3>동기부여와 지속성</h3>
                </div>
                <p>팀의 결속력과 장기적 성장 동력</p>
              </div>
            </div>

            <div className="key-question">
              <div className="question-icon">❓</div>
              <div className="question-text">
                "이 사업을 통해 어떤 사회적‧경제적 가치를 만들 것인지" 고민해보세요
              </div>
            </div>
          </section>

          <section className="content-section next-week premium-next">
            <h2 className="section-title">강의 운영 및 참고자료</h2>
            <div className="next-week-content modern-resources">
              <div className="resources-grid">
                <div className="resource-card">
                  <div className="resource-icon">📚</div>
                  <div className="resource-content">
                    <h3>강의 구성</h3>
                    <p>이론 + 실무 케이스 + 실습</p>
                  </div>
                </div>
                <div className="resource-card">
                  <div className="resource-icon">📝</div>
                  <div className="resource-content">
                    <h3>학습 내용</h3>
                    <p>팁스, 벤처펀드, AC/VC, 정부 지원 프로그램 등</p>
                  </div>
                </div>
                <div className="resource-card">
                  <div className="resource-icon">🔍</div>
                  <div className="resource-content">
                    <h3>실습</h3>
                    <p>사업계획서, IR자료 작성 실습</p>
                  </div>
                </div>
                <div className="resource-card">
                  <div className="resource-icon">📊</div>
                  <div className="resource-content">
                    <h3>참고자료</h3>
                    <p>교수님 칼럼(전자신문), 유튜브, "투자자의 생각을 읽어라" 도서, 
                    <br />Tracxn Geo "South Korea Tech 2024" 리포트</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
    // 류창완 교수의 1주차 3교시인 경우 현대적인 레이아웃 제공
    else if (week === 1 && period === 3 && professor === "류창완") {
      // 투자 유치 현실 관련 정보
      const investmentStages = [
        { 
          stage: "초기 투자", 
          characteristics: "높은 위험/높은 보상, 아이디어 단계나 프로토타입 단계", 
          investors: "엔젤 투자자, 액셀러레이터"
        },
        { 
          stage: "시리즈 A", 
          characteristics: "제품 시장 적합성 증명, 매출 발생 초기", 
          investors: "초기 단계 VC, 전략적 투자자"
        },
        { 
          stage: "시리즈 B/C", 
          characteristics: "비즈니스 모델 검증, 스케일업 단계", 
          investors: "중기/후기 단계 VC, PE 전략적 투자자"
        },
        { 
          stage: "후기 단계", 
          characteristics: "높은 성장률, 수익성 접근", 
          investors: "대형 VC, 사모펀드, 기관 투자자"
        }
      ];

      // 창업공간 정보
      const startupSpaces = [
        {
          type: "대학교 창업보육센터",
          benefits: ["저렴한 임대료", "멘토링 프로그램", "네트워킹 기회", "대학 인프라 활용"],
          requirements: "대학생, 졸업생, 또는 교원 창업 기업 우대"
        },
        {
          type: "정부 지원 창업공간",
          benefits: ["무료/저렴한 사무공간", "정부 지원사업 연계", "네트워킹 행사"],
          requirements: "심사를 통한 선발, 일정 기간 입주 제한"
        },
        {
          type: "민간 코워킹스페이스",
          benefits: ["유연한 멤버십", "프리미엄 시설", "커뮤니티 활동"],
          requirements: "월 멤버십 또는 데스크 임대료 지불"
        },
        {
          type: "지자체-대학 협업 공간",
          benefits: ["지역 특화 지원", "산학 협력 기회", "지역 네트워크 구축"],
          requirements: "지역 연계성, 특정 산업 분야 우대"
        }
      ];

      // 네트워킹 전략
      const networkingStrategies = [
        { 
          title: "창업 커뮤니티 참여", 
          description: "스타트업 밋업, 해커톤, 창업 관련 컨퍼런스에 정기적으로 참석하여 인맥 형성",
          icon: "🤝"
        },
        { 
          title: "멘토/어드바이저 관계 구축", 
          description: "경험 있는 창업가나 산업 전문가와의 멘토링 관계 구축",
          icon: "🧠"
        },
        { 
          title: "투자자와의 관계 형성", 
          description: "투자 유치 시기 이전에도 잠재적 투자자와 관계 구축 및 유지",
          icon: "💰"
        },
        { 
          title: "온라인 네트워킹 플랫폼 활용", 
          description: "LinkedIn, 창업 관련 커뮤니티 플랫폼 등을 활용한 디지털 네트워킹",
          icon: "🌐"
        }
      ];

      // 투자 유치 성공 팁
      const investmentTips = [
        "복수의 투자자와 동시에 협상하라",
        "투자자의 트랙 레코드를 철저히 조사하라",
        "협상 기한을 설정하여 의사결정을 촉진하라",
        "법률 전문가의 도움을 반드시 받아라",
        "자금 소진율(burn rate)과 생존 기간(runway)을 정확히 계산하라",
        "투자 조건(term sheet)의 모든 조항을 세심히 검토하라"
      ];

      return (
        <div className="lecture-content-container modern">
          <div className="lecture-header premium-gradient">
            <div className="header-content">
              <div className="lecture-meta-info">
                <span className="lecture-week-period">{week}주차 {period}교시</span>
                <div className="lecture-badges">
                  <span className="badge hot-topic">필수 강의</span>
                  <span className="badge investment">투자 유치</span>
                  <span className="badge space-utilization">창업공간</span>
                </div>
              </div>
              <h1 className="lecture-title">
                {title}
                <div className="title-underline"></div>
              </h1>
              <div className="lecture-professor">
                <img src="/images/professor-icon.svg" alt="Professor" className="professor-icon" />
                {professor} 교수
              </div>
            </div>
          </div>

          <div className="content-overview">
            <div className="overview-card">
              <div className="card-icon">🔍</div>
              <div className="card-content">
                <h3>강의 개요</h3>
                <p>투자 유치의 현실과 벤처캐피탈 운영 방식을 이해하고, 대학 및 지역 창업 공간을 효과적으로 활용하는 방법을 배웁니다.</p>
              </div>
            </div>
          </div>

          <div className="lecture-markdown-content hidden">
            {content && <ReactMarkdown>{content}</ReactMarkdown>}
          </div>

          <div className="quote-container investment-quote">
            <blockquote>
              "결국 두세 곳 동시에 협상해야 되는데, 심사역들이 '우리한테만 충성해라' 식으로 말해서 다른 투자처를 다 자르게 만들어요."
            </blockquote>
          </div>

          <section className="content-section">
            <h2 className="section-title with-icon">
              <span className="section-icon">💼</span>
              1. 투자 유치 및 벤처캐피탈 운영 방식</h2>
            
            <div className="subsection">
              <h3 className="subsection-title">투자 단계별 특성</h3>
              <div className="stage-cards">
                {investmentStages.map((stage, index) => (
                  <div className="stage-card" key={index}>
                    <div className="stage-header">
                      <span className="stage-number">{index + 1}</span>
                      <h4>{stage.stage}</h4>
                    </div>
                    <div className="stage-content">
                      <p><strong>특징:</strong> {stage.characteristics}</p>
                      <p><strong>주요 투자자:</strong> {stage.investors}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">펀드 운영 현실</h3>
              <div className="reality-box">
                <div className="reality-item">
                  <div className="reality-icon">⏱️</div>
                  <div className="reality-content">
                    <h4>시기에 따른 투자 심사 변화</h4>
                    <p>"초창기엔 돈이 많으니까 적극 투자하죠. 그런데 한 2년 지나 '남은 돈이 얼마 안 된다' 싶으면 투자 심사가 빡빡해져요."</p>
                  </div>
                </div>
                <div className="reality-item">
                  <div className="reality-icon">⚖️</div>
                  <div className="reality-content">
                    <h4>협상력 불균형</h4>
                    <p>"밸류를 300억으로 하기로 다 합의해놓고, 뒤에서 대표이사가 '아, 300억은 너무 과하다'고... 결국 창업자는 을(乙)이라서 다 끌려가요."</p>
                  </div>
                </div>
                <div className="reality-item">
                  <div className="reality-icon">🎯</div>
                  <div className="reality-content">
                    <h4>투자자 심리 전략</h4>
                    <p>"심사역들이 '우리한테만 충성해라' 식으로 말해서 다른 투자처를 다 자르게 만들어요."</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title with-icon">
              <span className="section-icon">🏢</span>
              2. 학교 시설 및 창업보육센터 활용</h2>
            
            <div className="space-container">
              {startupSpaces.map((space, index) => (
                <div className="space-card" key={index}>
                  <div className="space-header">
                    <h3>{space.type}</h3>
                  </div>
                  <div className="space-content">
                    <div className="space-benefits">
                      <h4>혜택</h4>
                      <ul>
                        {space.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-requirements">
                      <h4>요구사항</h4>
                      <p>{space.requirements}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="quote-box">
              <p>"창업보육센터 입주하실 분? 공고는 아직 안 냈는데, 운영위원회에서 선정하긴 해야죠. 학생분들은 거의 웬만하면 들어오실 수 있게 해주려고요."</p>
              <p>"성동교 건너 아파트 밑에 창업 보육 공간이 생기는데... 아마 허가 주면서 기부채납처럼 만든 모양이에요."</p>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title with-icon">
              <span className="section-icon">🔄</span>
              3. 창업 네트워크 구축</h2>
            
            <div className="networking-strategies">
              {networkingStrategies.map((strategy, index) => (
                <div className="strategy-card" key={index}>
                  <div className="strategy-icon">{strategy.icon}</div>
                  <div className="strategy-content">
                    <h3>{strategy.title}</h3>
                    <p>{strategy.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="collaboration-box">
              <h3>창업대학원 협업 활성화</h3>
              <div className="quote-box">
                <p>"자기 사업 소개할 때, '뭐가 부족하고, 뭘 도와달라' 솔직히 말하면 돼요. 서로 공유해요."</p>
              </div>
              <div className="idea-completion">
                <h3>아이디어 보완 전략</h3>
                <div className="quote-box">
                  <p>"비즈니스 모델링이 허술하면... 특허 검색해보세요. 우산 특허만 해도 3~40페이지 돼요."</p>
                </div>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title with-icon">
              <span className="section-icon">🚀</span>
              4. 투자 유치 성공 전략</h2>
            
            <div className="tips-container">
              <h3>협상력 강화를 위한 핵심 팁</h3>
              <div className="tips-list">
                {investmentTips.map((tip, index) => (
                  <div className="tip-item" key={index}>
                    <div className="tip-number">{index + 1}</div>
                    <div className="tip-content">{tip}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="negotiation-strategy">
              <h3>협상력 강화 방법</h3>
              <div className="strategy-content">
                <div className="strategy-highlight">
                  <p>"저쪽이 밸류 갑자기 깎으면, 안 받겠습니다 하고 나올 카드가 있어야죠."</p>
                </div>
                <div className="strategy-details">
                  <ul>
                    <li>항상 복수의 투자 옵션을 확보하라</li>
                    <li>다른 투자자와 협상 중임을 슬쩍 알려라</li>
                    <li>대안적 자금조달 수단을 항상 준비하라</li>
                    <li>협상 시한을 설정하여 결정을 촉진하라</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="content-section resources">
            <h2 className="section-title">추천 자료</h2>
            <div className="resources-grid">
              <div className="resource-item">
                <div className="resource-icon">📚</div>
                <div className="resource-content">
                  <h3>도서</h3>
                  <ul>
                    <li>벤처 딜(Venture Deals) - 브래드 펠드, 제이슨 멘델슨</li>
                    <li>스타트업 투자 영업의 교과서 - 이택경</li>
                  </ul>
                </div>
              </div>
              <div className="resource-item">
                <div className="resource-icon">🔗</div>
                <div className="resource-content">
                  <h3>웹사이트</h3>
                  <ul>
                    <li>한국벤처투자(KVIC)</li>
                    <li>중소벤처기업부 - TIPS 프로그램</li>
                    <li>스타트업 얼라이언스</li>
                  </ul>
                </div>
              </div>
              <div className="resource-item">
                <div className="resource-icon">🎥</div>
                <div className="resource-content">
                  <h3>미디어</h3>
                  <ul>
                    <li>유튜브 채널: 더벤처스</li>
                    <li>팟캐스트: 스타트업 스쿨</li>
                  </ul>
                </div>
              </div>
              <div className="resource-item">
                <div className="resource-icon">👥</div>
                <div className="resource-content">
                  <h3>커뮤니티</h3>
                  <ul>
                    <li>스타트업 그라인드 서울</li>
                    <li>디캠프(D.CAMP)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="content-section next-week">
            <h2 className="section-title">다음 주 예고</h2>
            <div className="next-week-content">
              <div className="next-week-topic">
                <span className="label">2주차 주제</span>
                <strong>아이디어 발상과 기회 포착</strong>
              </div>
              <div className="next-week-prep">
                <span className="label">준비사항</span>
                <p>평소 관심있던 산업 분야의 문제점 3가지 이상 생각해오기</p>
              </div>
              <div className="next-week-reading">
                <span className="label">사전 읽기 자료</span>
                <p>디자인 씽킹, SCAMPER 기법 관련 자료</p>
              </div>
            </div>
          </section>
        </div>
      );
    }
    // 류창완 교수의 2주차 1교시인 경우 현대적인 레이아웃 제공
    else if (week === 2 && period === 1 && professor === "류창완") {
      // 창업자 필수 역량 정보
      const entrepreneurSkills = [
        {
          category: "의사결정 역량",
          description: "빠른 판단력과 신속한 의사결정 능력",
          icon: "⚡",
          examples: [
            "불확실한 상황에서의 결정",
            "시장 변화에 대한 민첩한 대응",
            "제한된 정보로 결정하는 능력"
          ]
        },
        {
          category: "인적 자본",
          description: "학력, 직무 경험, 관리 경험, 실무 지식",
          icon: "🧠",
          examples: [
            "대기업 및 스타트업 경험",
            "다양한 산업에 대한 이해",
            "전문 분야에서의 심층적 지식"
          ]
        },
        {
          category: "사회적 자본",
          description: "인맥, 네트워크, 멘토링 관계",
          icon: "🔗",
          examples: [
            "투자자 및 협력사 네트워크",
            "같은 업계 창업가들과의 관계",
            "필요한 인재를 확보할 수 있는 인맥"
          ]
        },
        {
          category: "금융 자본",
          description: "자금 조달 및 관리 능력",
          icon: "💰",
          examples: [
            "초기 자본 및 운영 자금 확보",
            "투자 유치 전략 수립",
            "자금 소진율 관리"
          ]
        }
      ];

      // 인력 관리 도전과제
      const hrChallenges = [
        {
          issue: "가족·친인척 고용",
          risks: [
            "갈등 발생 시 해결 곤란",
            "감정적 의사결정 위험",
            "해고나 징계 어려움"
          ],
          solution: "명확한 역할과 책임, 공정한 평가 시스템, 감정과 비즈니스 분리"
        },
        {
          issue: "임원 고착화 ('박힌 돌')",
          risks: [
            "초기 멤버가 성장 단계에 부적합",
            "조직 혁신과 변화 저항",
            "유능한 신규 인재 유입 방해"
          ],
          solution: "역할 재정의, 자회사 설립 후 이동, 단계별 인재 계획"
        },
        {
          issue: "과도한 직책 부여",
          risks: [
            "조직 체계 혼란",
            "향후 승진 경로 제한",
            "실질적 역할과 직책 불일치"
          ],
          solution: "역할 기반 직책 부여, 성장에 따른 직책 설계, 보상과 직책 분리"
        }
      ];

      // 주주간 합의서 핵심 항목
      const shareholderAgreementItems = [
        "지분 구조 및 배분 방식",
        "의사결정 권한 및 절차",
        "경업금지 및 비밀유지 조항",
        "퇴사 시 지분 처리 방안",
        "투자 유치 시 지분 희석 규칙",
        "배당금 정책",
        "우선 매수권",
        "드래그얼롱/태그얼롱 조항"
      ];

      // 보상 전략
      const compensationStrategies = [
        {
          type: "스톡옵션",
          description: "미래 특정 시점에 회사 주식을 정해진 가격에 살 수 있는 권리",
          benefits: [
            "장기적 인센티브 제공",
            "우수 인재 유치에 효과적",
            "현금 지출 없이 보상 가능"
          ],
          challenges: [
            "복잡한 법적 절차",
            "주주 동의 필요",
            "가치 실현까지 시간 소요"
          ]
        },
        {
          type: "성과 기반 보너스",
          description: "개인 또는 팀 성과에 따른 추가 보상",
          benefits: [
            "단기적 동기부여 효과",
            "명확한 목표 설정 가능",
            "즉각적 보상 효과"
          ],
          challenges: [
            "적절한 성과 지표 설정 어려움",
            "팀워크 저해 가능성",
            "현금 유동성 필요"
          ]
        },
        {
          type: "역할 기반 보상",
          description: "직무와 책임에 따른 차등적 보상",
          benefits: [
            "공정성 인식 제고",
            "역량 개발 동기부여",
            "투명한 보상 체계"
          ],
          challenges: [
            "역할 평가의 주관성",
            "빠르게 변화하는 스타트업 환경에서 역할 정의",
            "경쟁사와 비교 어려움"
          ]
        }
      ];

      return (
        <div className="lecture-content-container modern">
          <div className="lecture-header premium-gradient">
            <div className="header-content">
              <div className="lecture-meta-info">
                <span className="lecture-week-period">{week}주차 {period}교시</span>
                <div className="lecture-badges">
                  <span className="badge hot-topic">핵심 강의</span>
                  <span className="badge organization">조직 관리</span>
                  <span className="badge hr-management">인적 자본</span>
                </div>
              </div>
              <h1 className="lecture-title">
                {title}
                <div className="title-underline"></div>
              </h1>
              <div className="lecture-professor">
                <img src="/images/professor-icon.svg" alt="Professor" className="professor-icon" />
                {professor} 교수
              </div>
            </div>
          </div>

          <div className="content-overview">
            <div className="overview-card">
              <div className="card-icon">🔍</div>
              <div className="card-content">
                <h3>강의 개요</h3>
                <p>창업자의 필수 역량과 인적 자본 구축 전략, 공동창업과 조직 관리의 현실적인 도전과제에 대해 알아봅니다. 실제 사례를 통해 스타트업 경영의 핵심 노하우를 배웁니다.</p>
              </div>
            </div>
          </div>

          <div className="lecture-markdown-content hidden">
            {content && <ReactMarkdown>{content}</ReactMarkdown>}
          </div>

          <div className="quote-container investment-quote">
            <blockquote>
              "창업하려면 먼저 취업에 성공해야 한다. 그래야 시장을 배우고 직무 경험을 쌓아서 나중에 창업할 때 제대로 써먹을 수 있다."
            </blockquote>
          </div>

          <section className="content-section">
            <h2 className="section-title with-icon">
              <span className="section-icon">🚀</span>
              1. 창업자가 갖춰야 할 필수 역량
            </h2>
            
            <div className="skills-grid">
              {entrepreneurSkills.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-content">
                    <h3>{skill.category}</h3>
                    <p className="skill-description">{skill.description}</p>
                    <ul className="skill-examples">
                      {skill.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="advice-box">
              <h3>현장에서의 조언</h3>
              <div className="advice-content">
                <p>"창업 후에는 순간적인 의사결정이 매우 중요합니다. 시간이 없죠. 그래서 공부도 많이 해야 되고, 책도 많이 봐야 돼요."</p>
                <p>"다양한 경험을 통해 자신만의 판단 기준을 만들고, 불확실한 상황에서도 결정을 내릴 수 있는 용기를 키우는 것이 중요합니다."</p>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title with-icon">
              <span className="section-icon">👥</span>
              2. 인력 관리의 도전과제
            </h2>
            
            <div className="challenges-container">
              {hrChallenges.map((challenge, index) => (
                <div className="challenge-card" key={index}>
                  <div className="challenge-header">
                    <h3>{challenge.issue}</h3>
                  </div>
                  <div className="challenge-content">
                    <div className="risks-section">
                      <h4>위험 요소</h4>
                      <ul>
                        {challenge.risks.map((risk, i) => (
                          <li key={i}>{risk}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="solution-section">
                      <h4>해결 방안</h4>
                      <p>{challenge.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="quote-box">
              <p>"친척이나 친구 고용하면, 갈등 시 해결이 더 어렵다. 전화 와서 난리 나요."</p>
              <p>"초기에 고생을 같이했던 사람이 나중에도 '권세'를 부리면 회사가 힘들어져요. 굴러온 돌이 못 들어오는 환경이 되니까요."</p>
            </div>
            
            <div className="insight-box">
              <div className="insight-icon">💡</div>
              <div className="insight-content">
                <h3>핵심 인사이트</h3>
                <p>스타트업은 "밀림 → 자갈길 → 국도 → 고속도로"처럼 단계가 달라지면서 필요한 인재상도 변합니다. 각 성장 단계에 맞는 인재 구성과 관리 전략이 필요합니다.</p>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title with-icon">
              <span className="section-icon">📝</span>
              3. 공동 창업과 주주간 합의서
            </h2>
            
            <div className="agreement-container">
              <div className="agreement-illustration">
                <div className="agreement-paper">
                  <h3>주주간 합의서</h3>
                  <div className="agreement-content">
                    <div className="document-lines"></div>
                  </div>
                  <div className="agreement-seal"></div>
                </div>
              </div>
              
              <div className="agreement-items">
                <h3>핵심 포함 항목</h3>
                <ul className="agreement-checklist">
                  {shareholderAgreementItems.map((item, index) => (
                    <li key={index} className="checklist-item">
                      <span className="check-icon">✓</span>
                      <span className="check-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="quote-box highlight">
              <p>"결혼 전에 혼전계약서 쓰듯이, 창업 전에도 주주간 합의서를 꼭 써야 한다."</p>
              <p>"4명이 공동창업하면, 2명 이상은 결국 떠나게 되더라."</p>
            </div>
          </section>

          <section className="content-section">
            <h2 className="section-title with-icon">
              <span className="section-icon">💎</span>
              4. 효과적인 보상 전략
            </h2>
            
            <div className="compensation-strategies">
              {compensationStrategies.map((strategy, index) => (
                <div className="compensation-card" key={index}>
                  <div className="compensation-header">
                    <h3>{strategy.type}</h3>
                  </div>
                  <div className="compensation-description">
                    <p>{strategy.description}</p>
                  </div>
                  <div className="compensation-details">
                    <div className="benefits">
                      <h4>장점</h4>
                      <ul>
                        {strategy.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="challenges">
                      <h4>도전과제</h4>
                      <ul>
                        {strategy.challenges.map((challenge, i) => (
                          <li key={i}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="legal-advice-box">
              <div className="legal-icon">⚖️</div>
              <div className="legal-content">
                <h3>법적 보호 장치</h3>
                <p>"입사할 때 NDA, 경업금지 문서 다 받고 들어와야죠. 나가서 똑같은 아이템으로 사업하면 민형사상 책임 묻겠다, 이런 식으로요."</p>
                <p>"외부에서 우리 회사를 걸고넘어져도, 최소한 문서화로 법적 책임을 피할 장치가 필요합니다."</p>
              </div>
            </div>
          </section>

          <section className="content-section resources">
            <h2 className="section-title">추천 자료</h2>
            <div className="resources-grid">
              <div className="resource-item">
                <div className="resource-icon">📚</div>
                <div className="resource-content">
                  <h3>도서</h3>
                  <ul>
                    <li>스타트업 바이블(정경영 외)</li>
                    <li>주주간 계약의 이해(김정환)</li>
                    <li>스타트업을 위한 HR(최병권)</li>
                  </ul>
                </div>
              </div>
              <div className="resource-item">
                <div className="resource-icon">🔗</div>
                <div className="resource-content">
                  <h3>웹사이트</h3>
                  <ul>
                    <li>스타트업 얼라이언스</li>
                    <li>벤처기업협회</li>
                    <li>로아인벤션랩(법률 문서 템플릿)</li>
                  </ul>
                </div>
              </div>
              <div className="resource-item">
                <div className="resource-icon">🎬</div>
                <div className="resource-content">
                  <h3>동영상</h3>
                  <ul>
                    <li>스타트업 창업자 인터뷰 시리즈</li>
                    <li>벤처스퀘어 - 스타트업 성장 비결</li>
                    <li>더벤처스 유튜브 채널</li>
                  </ul>
                </div>
              </div>
              <div className="resource-item">
                <div className="resource-icon">📋</div>
                <div className="resource-content">
                  <h3>템플릿</h3>
                  <ul>
                    <li>주주간 합의서 템플릿</li>
                    <li>스톡옵션 계약서</li>
                    <li>비밀유지 및 경업금지 계약서</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="content-section next-week">
            <h2 className="section-title">다음 주 예고</h2>
            <div className="next-week-content">
              <div className="next-week-topic">
                <span className="label">3주차 주제</span>
                <strong>시장 조사와 분석</strong>
              </div>
              <div className="next-week-prep">
                <span className="label">준비사항</span>
                <p>자신의 창업 아이디어가 속한 시장 규모와 경쟁사 3곳 이상 조사해오기</p>
              </div>
              <div className="next-week-reading">
                <span className="label">사전 읽기 자료</span>
                <p>TAM, SAM, SOM 개념과 시장 세분화, 타겟팅, 포지셔닝 전략 관련 자료</p>
              </div>
            </div>
          </section>
        </div>
      );
    }
    // 전화성 교수의 2주차 2교시인 경우 특별한 레이아웃 제공
    else if (week === 2 && period === 2 && professor === "전화성") {
      return (
        <div className="lecture-content-container modern">
          <div className="lecture-header premium-gradient">
            <div className="header-content">
              <div className="lecture-meta-info">
                <span className="lecture-week-period">{week}주차 {period}교시</span>
                <div className="lecture-badges">
                  <span className="badge hot-topic">핵심 강의</span>
                  <span className="badge success">창업 성공사례</span>
                  <span className="badge primary">스타트업 전략</span>
                </div>
              </div>
              <h1 className="lecture-title">
                {title}
                <div className="title-underline"></div>
              </h1>
              <div className="lecture-professor">
                <img src="/images/professor-icon.svg" alt="Professor" className="professor-icon" />
                {professor} 교수 | 연쇄 창업가 & 벤처 투자자
              </div>
            </div>
          </div>

          <section className="success-story-section">
            <h2 className="section-title with-icon">
              <span className="section-icon">🚀</span>
              첫 창업 성공 스토리: DDR 프로그램 개발
            </h2>
            <div className="story-card premium">
              <div className="story-highlight">
                <div className="highlight-header">
                  <span className="highlight-icon">💡</span>
                  <h3>창업 계기</h3>
                </div>
                <p>대학생 시절, 프로그램 개발 능력을 활용한 첫 창업</p>
              </div>
              <div className="success-metrics premium">
                <div className="metric">
                  <div className="metric-icon">💰</div>
                  <span className="number">500</span>
                  <span className="unit">원</span>
                  <p>프로그램 장당 가격</p>
                </div>
                <div className="metric highlight">
                  <div className="metric-icon">🎯</div>
                  <span className="number">2,000</span>
                  <span className="unit">만원</span>
                  <p>첫 창업 수익</p>
                </div>
              </div>
              <div className="key-learning premium">
                <div className="learning-icon">💫</div>
                <div className="learning-content">
                  <h4>주요 교훈</h4>
                  <p>"작은 기회도 큰 성공의 시작점이 될 수 있습니다"</p>
                </div>
              </div>
            </div>
          </section>

          <section className="eris-model-section">
            <h2 className="section-title with-icon">
              <span className="section-icon">🎯</span>
              스타트업 성공 방정식: ERIS 모델
            </h2>
            <div className="eris-grid premium">
              <div className="eris-card">
                <div className="card-header">
                  <span className="card-icon">👨‍💼</span>
                  <h3>E - Entrepreneur</h3>
                </div>
                <p>창업자 역량</p>
                <ul>
                  <li>문제 해결 능력</li>
                  <li>리더십</li>
                  <li>실행력</li>
                </ul>
              </div>
              <div className="eris-card">
                <div className="card-header">
                  <span className="card-icon">💎</span>
                  <h3>R - Resource</h3>
                </div>
                <p>자원 확보 능력</p>
                <ul>
                  <li>자금 조달</li>
                  <li>인적 자원</li>
                  <li>기술력</li>
                </ul>
              </div>
              <div className="eris-card">
                <div className="card-header">
                  <span className="card-icon">🌍</span>
                  <h3>I - Industry</h3>
                </div>
                <p>시장/산업 분석</p>
                <ul>
                  <li>시장 규모</li>
                  <li>진입 장벽</li>
                  <li>경쟁 구도</li>
                </ul>
              </div>
              <div className="eris-card">
                <div className="card-header">
                  <span className="card-icon">⚡</span>
                  <h3>S - Strategy</h3>
                </div>
                <p>사업 전략</p>
                <ul>
                  <li>비즈니스 모델</li>
                  <li>마케팅 전략</li>
                  <li>성장 전략</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="success-factors-section">
            <h2 className="section-title with-icon">
              <span className="section-icon">🔑</span>
              스타트업 핵심 성공 요인
            </h2>
            <div className="factors-timeline premium">
              <div className="factor">
                <div className="factor-header">
                  <span className="number">1</span>
                  <h3>타이밍</h3>
                </div>
                <p>시장 진입 시점의 중요성</p>
              </div>
              <div className="factor">
                <div className="factor-header">
                  <span className="number">2</span>
                  <h3>팀</h3>
                </div>
                <p>조직 구성과 역량</p>
              </div>
              <div className="factor">
                <div className="factor-header">
                  <span className="number">3</span>
                  <h3>아이디어</h3>
                </div>
                <p>문제 해결 방안</p>
              </div>
              <div className="factor">
                <div className="factor-header">
                  <span className="number">4</span>
                  <h3>비즈니스 모델</h3>
                </div>
                <p>수익 창출 구조</p>
              </div>
              <div className="factor">
                <div className="factor-header">
                  <span className="number">5</span>
                  <h3>자금</h3>
                </div>
                <p>자금 조달과 운용</p>
              </div>
            </div>
          </section>

          <section className="government-support-section">
            <h2 className="section-title with-icon">
              <span className="section-icon">🏛️</span>
              정부 지원 정책 활용
            </h2>
            <div className="policy-timeline premium">
              <div className="policy-era">
                <div className="era-header">
                  <span className="era-year">1998-2003</span>
                  <h3>김대중 정부</h3>
                </div>
                <p>벤처기업 육성</p>
              </div>
              <div className="policy-era">
                <div className="era-header">
                  <span className="era-year">2003-2008</span>
                  <h3>노무현 정부</h3>
                </div>
                <p>모태펀드 신설</p>
              </div>
              <div className="policy-era">
                <div className="era-header">
                  <span className="era-year">2008-2013</span>
                  <h3>이명박 정부</h3>
                </div>
                <p>창업절차 간소화</p>
              </div>
              <div className="policy-era">
                <div className="era-header">
                  <span className="era-year">2013-2017</span>
                  <h3>박근혜 정부</h3>
                </div>
                <p>TIPS 프로그램</p>
              </div>
              <div className="policy-era">
                <div className="era-header">
                  <span className="era-year">2017-2022</span>
                  <h3>문재인 정부</h3>
                </div>
                <p>벤처투자촉진법</p>
              </div>
              <div className="policy-era">
                <div className="era-header">
                  <span className="era-year">2022-현재</span>
                  <h3>윤석열 정부</h3>
                </div>
                <p>초격차 프로젝트</p>
              </div>
            </div>
          </section>

          <section className="statistics-section">
            <h2 className="section-title with-icon">
              <span className="section-icon">📊</span>
              스타트업 생존율 통계
            </h2>
            <div className="stats-container premium">
              <div className="stat-card warning">
                <div className="stat-header">
                  <span className="stat-icon">⚠️</span>
                  <h3>1년차 폐업률</h3>
                </div>
                <span className="stat-number">35.2%</span>
              </div>
              <div className="stat-card danger">
                <div className="stat-header">
                  <span className="stat-icon">🚨</span>
                  <h3>5년차 폐업률</h3>
                </div>
                <span className="stat-number">66.2%</span>
              </div>
            </div>
            <div className="survival-tips premium">
              <h3>생존율 높이기</h3>
              <div className="tips-grid">
                <div className="tip-item">
                  <span className="tip-icon">🎯</span>
                  <p>액셀러레이터 활용</p>
                </div>
                <div className="tip-item">
                  <span className="tip-icon">👥</span>
                  <p>전문가 멘토링</p>
                </div>
                <div className="tip-item">
                  <span className="tip-icon">📊</span>
                  <p>시장 검증 강화</p>
                </div>
                <div className="tip-item">
                  <span className="tip-icon">💰</span>
                  <p>자금 운용 계획</p>
                </div>
              </div>
            </div>
          </section>

          <section className="takeaways-section">
            <h2 className="section-title with-icon">
              <span className="section-icon">💡</span>
              핵심 시사점
            </h2>
            <div className="takeaways-grid premium">
              <div className="takeaway-card">
                <div className="takeaway-icon">🎯</div>
                <h3>문제 해결 능력</h3>
                <p>시장의 문제를 포착하고 해결하는 것이 핵심</p>
              </div>
              <div className="takeaway-card">
                <div className="takeaway-icon">🧠</div>
                <h3>멘탈 관리</h3>
                <p>불확실성을 견디는 체력과 정신력 필요</p>
              </div>
              <div className="takeaway-card">
                <div className="takeaway-icon">⏰</div>
                <h3>시장 타이밍</h3>
                <p>ICT, 모바일, 플랫폼 등 큰 흐름 파악</p>
              </div>
              <div className="takeaway-card">
                <div className="takeaway-icon">🏛️</div>
                <h3>정부 지원 활용</h3>
                <p>TIPS, 모태펀드 등 전략적 활용</p>
              </div>
            </div>
          </section>

          <section className="resources-section">
            <h2 className="section-title with-icon">
              <span className="section-icon">📚</span>
              추천 자료
            </h2>
            <div className="resources-grid premium">
              <div className="resource-card">
                <div className="resource-icon">📚</div>
                <div className="resource-content">
                  <h3>📚 추천 도서</h3>
                  <ul>
                    <li>린 스타트업</li>
                    <li>제로 투 원</li>
                    <li>스타트업 바이블</li>
                  </ul>
                </div>
              </div>
              <div className="resource-card">
                <div className="resource-content">
                  <h3>🌐 온라인 플랫폼</h3>
                  <ul>
                    <li>K-Startup</li>
                    <li>창업진흥원</li>
                    <li>테크크런치</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Next Week Preview */}
          <section className="next-week-preview">
            <h2>다음 주 미리보기</h2>
            <div className="preview-card">
              <h3>3주차: 시장 분석과 고객 발굴</h3>
              <p>시장 조사 방법론과 고객 니즈 파악 전략을 학습합니다.</p>
              <div className="preparation">
                <h4>준비사항</h4>
                <ul>
                  <li>관심 시장 분야 선정해오기</li>
                  <li>경쟁사 3개 이상 조사해오기</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      );
    }
    // 권규현 교수의 2주차 3교시인 경우 현대적인 레이아웃 제공
    else if (week === 2 && period === 3 && professor === "권규현") {
      return (
        <div className="lecture-content-container modern">
          {/* 헤더 섹션 */}
          <section className="header-section premium">
            <div className="gradient-overlay"></div>
            <div className="header-content">
              <div className="badge-container">
                <span className="badge theory">이론 심화</span>
                <span className="badge methodology">연구방법론</span>
                <span className="badge entrepreneurship">기업가정신</span>
              </div>
              <h1>창업의 복잡성과 학문적 접근</h1>
              <div className="professor-info">
                <div className="professor-details">
                  <h2>권규현 교수</h2>
                  <p>창업이론 및 방법론 전문가</p>
                </div>
              </div>
            </div>
          </section>

          {/* 위키드 프라블럼 섹션 */}
          <section className="wicked-problem premium">
            <h2>
              <span className="section-icon">🌀</span>
              위키드 프라블럼 (Wicked Problem)
            </h2>
            <div className="quote-box highlight">
              <blockquote>
                "창업이라는 것 자체는 복잡다단한 구성 요소들, 이해 당사자들이 있기 때문에 스테이크홀더들과의 인터랙션을 통해 문제를 잘 접근하는 것이 되게 중요한 이슈입니다."
              </blockquote>
            </div>
            <div className="problem-diagram">
              <div className="center-circle">창업 문제</div>
              <div className="outer-circle tech">기술</div>
              <div className="outer-circle market">시장</div>
              <div className="outer-circle social">사회</div>
              <div className="outer-circle culture">문화</div>
              <div className="outer-circle regulation">규제</div>
            </div>
            <div className="example-card">
              <h3>🌍 기후테크 사례</h3>
              <div className="quote-content">
                <p>"기술은 완성도가 높아도, 소비자나 정부·개발도상국의 반발 등 복잡한 스테이크홀더 이슈로 인해 실행이 어려워질 수 있습니다."</p>
                <p>"개발도상국은 '너희는 싸게 성장해놓고 우리한테 왜 규제하느냐'라고 반발합니다. 일종의 사다리 걷어차기죠."</p>
                <p>"위키드 프라블럼을 정리할 때 가장 중요한 키워드 중 하나가 'Complexity(복잡성)'입니다. 단순히 '기술·아이디어가 좋으면 성공'이 아니라 사회적 공감·제도·규제·비즈니스 모델 등 전방위적 요소가 작동해야 합니다."</p>
              </div>
            </div>
          </section>

          {/* 소셜 테크니컬 시스템 섹션 */}
          <section className="socio-technical premium">
            <h2>
              <span className="section-icon">🔄</span>
              소셜 테크니컬 시스템
            </h2>
            <div className="quote-box">
              <blockquote>
                "인문사회대는 소셜 시스템만 열심히 배우고, 공대는 테크니컬 시스템만 열심히 배워요. 하지만 이 둘은 떨어질 수 없는 관계입니다."
              </blockquote>
            </div>
            <div className="system-diagram">
              <div className="technical-side">
                <h3>Technical</h3>
                <ul>
                  <li>제품/서비스</li>
                  <li>특허/기술</li>
                  <li>개발 역량</li>
                </ul>
              </div>
              <div className="connection-arrows">
                <span>←→</span>
              </div>
              <div className="social-side">
                <h3>Social</h3>
                <ul>
                  <li>조직/팀</li>
                  <li>소비자 문화</li>
                  <li>규제/제도</li>
                </ul>
              </div>
            </div>
            <div className="case-study">
              <h3>📱 토스 사례 연구</h3>
              <div className="case-content">
                <p>"토스가 8번 실패하고 9번째 성공한 것이 바로 이런 접근법 때문입니다. 고스트 프로토콜을 통해 3개월간 사용자 행동을 관찰하여 숨은 니즈를 발견했죠."</p>
                <div className="discovery-process">
                  <div className="process-step">
                    <span className="step-number">1</span>
                    <p>7~8명의 팀원들이 매일 밖에 나가 사람들의 행동 관찰</p>
                  </div>
                  <div className="process-step">
                    <span className="step-number">2</span>
                    <p>은행에서 전화 받으며 계좌번호 외우기 어려워하는 사용자 발견</p>
                  </div>
                  <div className="process-step">
                    <span className="step-number">3</span>
                    <p>전화번호 기반 간편송금 솔루션 개발</p>
                  </div>
                </div>
                <p>"테크니컬 시스템과 소셜 시스템의 균형을 맞추는 것이 '조인트 옵티미제이션'이며, 하나의 시스템만 최적화하면 글로벌 최적점을 찾기 어렵습니다."</p>
              </div>
            </div>
          </section>

          {/* 인식론 섹션 */}
          <section className="epistemology premium">
            <h2>
              <span className="section-icon">🧠</span>
              인식론: 실증주의 vs 구성주의
            </h2>
            <div className="quote-box">
              <blockquote>
                "세상을 이해하는 방법에는 여러 가지가 있습니다. 실증주의적 접근과 구성주의적 접근, 두 가지 모두 중요합니다."
              </blockquote>
            </div>
            <div className="comparison-table">
              <div className="table-header">
                <div className="column">구분</div>
                <div className="column">실증주의 (Positivism)</div>
                <div className="column">구성주의 (Constructivism)</div>
              </div>
              <div className="table-row">
                <div className="column">접근방식</div>
                <div className="column">가설 검증, 데이터 기반</div>
                <div className="column">직접 관찰, 체험 기반</div>
              </div>
              <div className="table-row">
                <div className="column">예시</div>
                <div className="column">MVP 테스트, 통계분석</div>
                <div className="column">에스노그래피, 디자인씽킹</div>
              </div>
              <div className="table-row">
                <div className="column">장점</div>
                <div className="column">정량화, 명확성</div>
                <div className="column">숨은 니즈 발견</div>
              </div>
              <div className="table-row">
                <div className="column">한계</div>
                <div className="column">정의되지 않은 시장에서 가설 자체가 불명확</div>
                <div className="column">정량 비교나 빠른 통계 검증에 약함</div>
              </div>
              <div className="table-row">
                <div className="column">실제 적용</div>
                <div className="column">고객 세그먼트 검증, 수익 모델 테스트</div>
                <div className="column">토스의 고스트 프로토콜, LG의 인도 냉장고 개발</div>
              </div>
            </div>
            <div className="example-card">
              <h3>🌐 LG 인도 냉장고 사례</h3>
              <div className="quote-content">
                <p>"LG가 인도에 냉장고를 팔려고 했으나 초기에 판매가 부진했습니다. 에스노그래피 방법론을 적용하여 인도 가정에서 2-3개월 생활하며 관찰한 결과, 인도 가정에서는 향신료 보관과 같은 특수한 니즈가 있음을 발견했습니다."</p>
                <p>"인도 사람들은 종교적 이유로 고기를 잘 먹지 않고, 향신료 위주로 식품을 보관했습니다. 이를 바탕으로 향신료 보관에 최적화된 냉장고를 개발하여 성공할 수 있었습니다."</p>
              </div>
            </div>
          </section>

          {/* DAR(E) 키워드 섹션 */}
          <section className="dare-keywords premium">
            <h2>
              <span className="section-icon">🎯</span>
              DAR(E) 키워드
            </h2>
            <div className="keyword-grid">
              <div className="keyword-card">
                <h3>D</h3>
                <p>Digital Powered</p>
                <span>디지털 기술 활용</span>
                <div className="quote-box">
                  <p>"세상이 빠르게 변하고 있어요. GPT, 디지털 도구들을 잘 활용하되, 사고력은 유지해야 합니다. 이미 중학생들도 GPT를 1위로, 2층을 2위로 사용하고 있습니다."</p>
                  <p>"워킹 메모리의 한계(매직넘버 7±2)로 인해 디지털 도구에 의존하면서도 사고력을 유지하는 균형이 중요합니다."</p>
                </div>
              </div>
              <div className="keyword-card">
                <h3>A</h3>
                <p>Action-Oriented</p>
                <span>실전 중심 접근</span>
                <div className="quote-box">
                  <p>"실제로 창업을 시도해보고, 프로젝트를 통해 직접 경험해보는 것이 중요합니다. 이론만으로는 창업의 복잡한 문제를 해결할 수 없습니다."</p>
                  <p>"창업대학원에서의 프랙티컴 과정이 액션 오리엔티드의 백본이며, 교수들과 다양한 전문가들의 도움을 받아 실제 창업을 시도해보는 것이 핵심입니다."</p>
                </div>
              </div>
              <div className="keyword-card">
                <h3>R</h3>
                <p>Resilience</p>
                <span>회복탄력성</span>
                <div className="quote-box">
                  <p>"창업 과정에서의 크고 작은 실패, 자금압박 등 변동성이 큰 환경을 견뎌내는 회복탄력성이 핵심입니다."</p>
                  <p>"투자를 받아도 30명 규모 회사면 월 3억씩 비용이 나가 10개월이면 30억이 소진됩니다. 이런 상황에서 멘탈 관리가 매우 중요합니다."</p>
                  <p>"작은 실패부터 경험하며 회복탄력성을 훈련하는 것이 창업 성공의 열쇠입니다."</p>
                </div>
              </div>
              <div className="keyword-card">
                <h3>E</h3>
                <p>Entrepreneurship</p>
                <span>기업가정신</span>
                <div className="quote-box">
                  <p>"기업가정신은 타고나는 것이 아니라 훈련될 수 있습니다. MIT의 'Disciplined Entrepreneurship' 철학처럼 창업대학원에서도 체계적인 교육을 통해 기업가정신을 함양할 수 있습니다."</p>
                  <p>"여러분의 인생에서 한 번은 어떤 형태로든 창업을 경험하게 될 것입니다. 그때 필요한 기업가정신을 미리 준비하는 것이 중요합니다."</p>
                </div>
              </div>
            </div>
          </section>

          {/* 실무 사례 및 조언 섹션 */}
          <section className="practical-advice premium">
            <h2>
              <span className="section-icon">💡</span>
              실무 사례 및 조언
            </h2>
            <div className="advice-grid">
              <div className="advice-card">
                <h3>창업 타이밍</h3>
                <p>"기술 준비 후 진입 vs 시장 형성 후 진입, 정답은 없습니다. 네오위즈 사례처럼 각 회사의 경영 철학에 따라 시장이 성숙된 후 효율적으로 진입하거나, 기술로 시장을 먼저 개척하는 전략을 선택할 수 있습니다."</p>
                <p>"마켓 풀(Market Pull)과 테크놀로지 푸시(Technology Push) 관점에서 혁신 접근법을 생각해볼 수 있습니다."</p>
              </div>
              <div className="advice-card">
                <h3>회복탄력성</h3>
                <p>"자금 소진, 팀원 스트레스, 실패와 성공의 반복... 멘탈 관리가 핵심입니다. 회사가 성장하면서 꼬꾸라졌다 일어나기를 반복하는 사이클이 필연적으로, 멘탈이 나가는 창업자들이 많습니다."</p>
                <p>"대학원에서 작은 실패부터 경험하고 멘탈을 보완하는 훈련을 하는 것이 중요합니다."</p>
              </div>
              <div className="advice-card">
                <h3>학습 방향</h3>
                <p>"이론적 깊이와 실무적 경험을 모두 갖추세요. 창업대학원은 비학위 과정과 달리 학문적으로 접근하는 방식도 배울 수 있는 곳입니다."</p>
                <p>"자신만의 창업 목표와 대학원 교육·네트워킹을 결합해 최대 시너지를 낼 수 있도록 노력하세요."</p>
                <p>"개인별 목표 설정이 중요합니다. 논문을 쓰든, 네트워크를 형성하든, 아이템 사업화를 추진하든 스스로 명확한 목적을 가지고 접근하세요."</p>
              </div>
            </div>
          </section>

          {/* 다음 주 미리보기 */}
          <section className="next-week-preview">
            <h2>
              <span className="section-icon">📅</span>
              다음 주 미리보기
            </h2>
            <div className="preview-card">
              <h3>3주차: 시장 조사와 분석</h3>
              <p>목표 시장을 정의하고 분석하는 방법과 시장 조사 기법에 대해 학습합니다.</p>
              <ul>
                <li>준비사항: 관심 있는 시장의 문제점 3가지 이상 조사해오기</li>
                <li>사전학습: TAM, SAM, SOM 개념 숙지</li>
                <li>질문 준비: 교수님들께 이메일로 개인적인 창업 관련 질문을 미리 준비해오세요</li>
              </ul>
            </div>
          </section>
        </div>
      );
    }
    // 그 외 모든 강의에 대한 기본 렌더링
    else {
      return (
        <div className="default-content styled">
          <div className="lecture-meta">
            <div className="lecture-week-badge">{week}주차</div>
            <div className="lecture-period-badge">{period}교시</div>
            <h1 className="lecture-title-simple">{title}</h1>
            <div className="lecture-professor-simple">{professor} 교수</div>
          </div>
          
          <div className="lecture-content">
            {content && (
              <ReactMarkdown>{content}</ReactMarkdown>
            )}
          </div>
        </div>
      );
    }
  } catch (error) {
    console.error("Error rendering lecture content:", error);
    return (
      <div className="default-content error">
        <h3>컨텐츠 로딩 중 오류가 발생했습니다</h3>
        <p>관리자에게 문의하세요.</p>
      </div>
    );
  }
};

export default LectureContentRenderer; 