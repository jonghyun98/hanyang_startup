import { LectureList } from './types';

// 1주차부터 16주차까지의 강의 데이터
export const lectures: LectureList = [
  {
    id: 1,
    week: 1,
    title: "창업의 기초와 오리엔테이션",
    date: "2025-03-07",
    content: "이번 주차에서는 창업 과정에서 필요한 기본적인 개념과 본 강의의 목표, 진행 방식에 대해 알아봅니다. 창업가의 마인드셋과 창업 여정에서 맞닥뜨릴 수 있는 다양한 도전과제를 소개하고, 이를 극복하기 위한 전략적 접근법에 대해 논의합니다.",
    classes: [
      {
        id: 101,
        period: 1,
        title: "창업가의 여정과 멘탈 관리",
        professor: "김동화",
        content: "창업가의 여정에 필요한 의사결정 능력, 실무적 문제해결 능력, 효율적인 시간 및 인력 관리, 그리고 심리적 회복탄력성을 키우는 방법에 대해 배웁니다.",
        severity: 'high',
      },
      {
        id: 102,
        period: 2,
        title: '투자 유치와 M&A',
        professor: '전화성',
        content: `# 1주차 2교시: 투자 유치와 M&A

CNT테크 대표이며 500개 이상의 스타트업에 투자 경험이 있는 전화성 교수가 한국 투자 생태계 현황, 엑셀러레이터의 역할, 팁스(TIPS) 활용법, M&A 시장 현황 및 창업자의 사회적 가치 구현에 대해 설명합니다.`,
        severity: 'normal',
      },
      {
        id: 103,
        period: 3,
        title: '투자 유치 현실과 창업공간 활용',
        professor: '류창완',
        content: `# 1주차 3교시: 투자 유치 현실과 창업공간 활용

## 1. 투자 유치 및 벤처캐피탈 운영 방식

### 펀드 특성과 투자 방식
- 펀드 규모(예: 300억)와 운용 기간(7년)에 따라 투자 전략이 달라짐
- "초창기엔 돈이 많으니까 적극 투자하죠. 그런데 한 2년 지나 '남은 돈이 얼마 안 된다' 싶으면 투자 심사가 빡빡해져요."
- 시기에 따라 투자 심사 기준이 유동적으로 변화

### 투자 협상의 현실
- "밸류를 300억으로 하기로 다 합의해놓고, 뒤에서 대표이사가 '아, 300억은 너무 과하다'고... 결국 창업자는 을(乙)이라서 다 끌려가요."
- 복수의 투자자와 동시에 협상하는 것이 협상력 강화의 핵심
- "결국 두세 곳 동시에 협상해야 되는데, 심사역들이 '우리한테만 충성해라' 식으로 말해서 다른 투자처를 다 자르게 만들어요."

### 심사역의 전략과 대응법
- 경험 부족, 정보 비대칭으로 인한 창업자의 불리한 입장
- 협상력을 높이기 위한 투자자 다변화 전략
- 투자 유치 시 주의해야 할 함정과 심리전

## 2. 학교 시설 및 창업보육센터 활용

### 창업 공간 운영 및 활용법
- 학교 내 창업보육센터 입주 방법과 선정 과정
- "창업보육센터 입주하실 분? 공고는 아직 안 냈는데, 운영위원회에서 선정하긴 해야죠. 학생분들은 거의 웬만하면 들어오실 수 있게 해주려고요."
- 캠퍼스타운, 지자체 연계 공간 등 다양한 창업 지원 인프라

### 지자체-대학 협업 프로그램
- "성동교 건너 아파트 밑에 창업 보육 공간이 생기는데... 아마 허가 주면서 기부채납처럼 만든 모양이에요."
- 공공 지원 사업의 장단점과 활용 전략
- 규제와 지원금 사이의 균형 잡기

## 3. 창업 네트워크 구축

### 창업대학원 협업 활성화
- "자기 사업 소개할 때, '뭐가 부족하고, 뭘 도와달라' 솔직히 말하면 돼요. 서로 공유해요."
- 창업자 간 네트워킹을 통한 상호 보완 및 협력 도모
- 정보와 자원 교환의 중요성

### 아이디어 보완 전략
- "비즈니스 모델링이 허술하면... 특허 검색해보세요. 우산 특허만 해도 3~40페이지 돼요."
- 기존 특허 및 시장 조사를 통한 사업 아이템 정교화
- 현실적인 시장성 검증 방법

## 4. 투자 유치 성공 전략

### 협상력 강화 방법
- 복수의 투자 옵션 확보
- "저쪽이 밸류 갑자기 깎으면, 안 받겠습니다 하고 나올 카드가 있어야죠."
- 투자 협상 단계별 대응 전략

### 창업자의 심리적 준비
- 투자 협상 과정에서의 균형 유지
- 실패와 좌절을 극복하는 회복탄력성
- 장기적 관점에서의 투자 유치 계획`,
        severity: 'normal',
      }
    ]
  },
  {
    id: 2,
    week: 2,
    title: '아이디어 발상과 기회 포착',
    date: '2025-03-15',
    content: '창업 아이디어를 발상하는 다양한 방법론과 시장의 기회를 포착하는 방법에 대해 학습합니다. 브레인스토밍, 디자인 씽킹, SCAMPER 등 창의적 발상 기법을 실습합니다.',
    classes: [
      {
        id: 201,
        period: 1,
        title: '창업 실무와 인적 자본 관리',
        professor: '류창완',
        content: `# 2주차 1교시: 창업 실무와 인적 자본 관리

류창완 교수가 창업자의 필수 역량, 공동창업과 조직 관리, 인적 자본 구축과 유지 전략에 대해 현장 경험을 바탕으로 실무적인 조언을 제공합니다.

창업자가 갖춰야 할 경험과 자질, 가족·친지 고용 문제, 주주간 합의서, 임원 관리 등 스타트업 경영에서 발생하는 현실적인 문제에 대한 해결책을 함께 모색합니다.`,
        severity: 'normal',
      },
      {
        id: 202,
        period: 2,
        title: "스타트업 전략과 성공 사례",
        professor: "전화성",
        content: "스타트업의 성공 요인과 ERIS 모델을 통한 전략적 접근, 실제 창업 사례와 도전 과정을 다룹니다. DDR 프로그램 개발을 통한 첫 창업 성공 사례부터 창업 과정의 도전과 극복, 서비스 운영 전략, 정부 정책 활용까지 실전적인 창업 지식을 학습합니다.",
        severity: 'normal',
      },
      {
        id: 203,
        period: 3,
        title: "창업의 복잡성과 학문적 접근",
        professor: "권규현",
        content: `
# 창업의 복잡성과 학문적 접근

## 위키드 프라블럼(Wicked Problem)
- 복잡다층적 이해관계가 얽힌 현안
- 단순 이론이나 한 부문만으로 해결 어려움
- 규제, 소비자 문화, 공감대 형성 등 여러 사회적 변수 고려 필요

## 소셜 테크니컬 시스템
- 기술(Technical)과 사회(Social)의 불가분성
- 제품/서비스와 조직/문화의 상호작용
- 균형점(Joint Optimization) 찾기

## 인식론적 접근
### 실증주의(Positivism)
- 가설 검증과 데이터 기반 접근
- MVP 테스트와 시장 반응 수집
- 통계와 설문을 통한 검증

### 구성주의(Constructivism)
- 직접 관찰과 체험 기반
- 에스노그래피와 디자인 씽킹
- 현장 인터뷰와 사용자 관찰

## DAR(E) 키워드
- Digital Powered: 디지털 기술 활용
- Action-Oriented: 실전 중심 접근
- Resilience: 회복탄력성
- Entrepreneurship: 기업가정신

## 실무 사례 및 조언
- 창업 타이밍의 중요성
- 멘탈 관리와 회복탄력성
- 이론과 실무의 균형
`,
        severity: 'normal',
      }
    ]
  },
  {
    id: 3,
    week: 3,
    title: '미정',
    date: '2025-03-22',
    content: '목표 시장을 정의하고 분석하는 방법과 시장 조사 기법에 대해 학습합니다. TAM, SAM, SOM 개념과 시장 세분화, 타겟팅, 포지셔닝 전략을 수립하는 방법을 다룹니다.',
    classes: [
      {
        id: 301,
        period: 1,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 302,
        period: 2,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 303,
        period: 3,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      }
    ]
  },
  {
    id: 4,
    week: 4,
    title: '미정',
    date: '2025-03-29',
    content: '비즈니스 모델 캔버스를 활용한 비즈니스 모델 설계 방법에 대해 학습합니다. 가치 제안, 고객 세그먼트, 수익 모델 등 비즈니스 모델의 핵심 요소를 이해하고 적용합니다.',
    classes: [
      {
        id: 401,
        period: 1,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 402,
        period: 2,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 403,
        period: 3,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      }
    ]
  },
  {
    id: 5,
    week: 5,
    title: '미정',
    date: '2025-04-05',
    content: '최소 기능 제품(MVP) 개발과 린 스타트업 방법론의 원리와 적용 방법에 대해 학습합니다. 가설 검증, 피봇, 고객 개발 등의 개념을 이해하고 실제 사례를 분석합니다.',
    classes: [
      {
        id: 501,
        period: 1,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 502,
        period: 2,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 503,
        period: 3,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      }
    ]
  },
  {
    id: 6,
    week: 6,
    title: '미정',
    date: '2025-04-12',
    content: '제품 및 서비스 개발의 기본 원리와 프로세스에 대해 학습합니다. 고객 중심 설계, 프로토타이핑, 사용자 테스트 등 제품 개발의 핵심 단계를 다룹니다.',
    classes: [
      {
        id: 601,
        period: 1,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 602,
        period: 2,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 603,
        period: 3,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      }
    ]
  },
  {
    id: 7,
    week: 7,
    title: '미정',
    date: '2025-04-19',
    content: '스타트업에 적합한 마케팅 전략과 채널에 대해 학습합니다. 디지털 마케팅, 콘텐츠 마케팅, 그로스 해킹 등 효과적인 마케팅 방법론을 배웁니다.',
    classes: [
      {
        id: 701,
        period: 1,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 702,
        period: 2,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 703,
        period: 3,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      }
    ]
  },
  {
    id: 8,
    week: 8,
    title: '미정',
    date: '2025-04-26',
    content: '지금까지 학습한 내용을 바탕으로 자신의 창업 아이디어를 발표하고 피드백을 받는 시간입니다. 다른 팀의 아이디어를 평가하고 건설적인 의견을 나누며 협업 능력을 키웁니다.',
    classes: [
      {
        id: 801,
        period: 1,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 802,
        period: 2,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 803,
        period: 3,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      }
    ]
  },
  {
    id: 9,
    week: 9,
    title: '미정',
    date: '2025-05-03',
    content: '스타트업의 재무 계획 수립과 관리 방법에 대해 학습합니다. 기본적인 재무제표 이해, 현금흐름 관리, 손익분기점 분석 등 창업자가 알아야 할 재무 지식을 다룹니다.',
    classes: [
      {
        id: 901,
        period: 1,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 902,
        period: 2,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 903,
        period: 3,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      }
    ]
  },
  {
    id: 10,
    week: 10,
    title: '미정',
    date: '2025-05-10',
    content: '스타트업 자금 조달의 다양한 방법과 전략에 대해 학습합니다. 부트스트래핑, 엔젤 투자, 벤처캐피탈, 크라우드펀딩 등 각 방식의 특징과 적합한 상황을 이해합니다.',
    classes: [
      {
        id: 1001,
        period: 1,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 1002,
        period: 2,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 1003,
        period: 3,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      }
    ]
  },
  {
    id: 11,
    week: 11,
    title: '미정',
    date: '2025-05-17',
    content: '창업 과정에서 알아야 할 법률 지식과 지식재산권 보호 방법에 대해 학습합니다. 회사 설립 절차, 계약서 작성, 특허/상표/저작권 등록 등 법적 이슈를 다룹니다.',
    classes: [
      {
        id: 1101,
        period: 1,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 1102,
        period: 2,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 1103,
        period: 3,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      }
    ]
  },
  {
    id: 12,
    week: 12,
    title: '미정',
    date: '2025-05-24',
    content: '효과적인 팀 구성과 건강한 조직 문화 형성 방법에 대해 학습합니다. 공동창업자 선택, 인재 채용, 팀워크 증진, 갈등 관리 등 팀 관리의 핵심 요소를 다룹니다.',
    classes: [
      {
        id: 1201,
        period: 1,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 1202,
        period: 2,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 1203,
        period: 3,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      }
    ]
  },
  {
    id: 13,
    week: 13,
    title: '미정',
    date: '2025-05-31',
    content: '스타트업의 성장 단계별 전략과 스케일업 방법에 대해 학습합니다. 성장 지표 설정, 국내외 시장 진출, 인수합병 등 사업 확장의 다양한 방법을 다룹니다.',
    classes: [
      {
        id: 1301,
        period: 1,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 1302,
        period: 2,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 1303,
        period: 3,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      }
    ]
  },
  {
    id: 14,
    week: 14,
    title: '미정',
    date: '2025-06-07',
    content: '창업의 사회적 가치와 지속가능성에 대해 고민하는 시간입니다. ESG 경영, 소셜 임팩트, 지속가능한 비즈니스 모델 등 현대 창업에서 중요해지는 가치를 탐구합니다.',
    classes: [
      {
        id: 1401,
        period: 1,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 1402,
        period: 2,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 1403,
        period: 3,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      }
    ]
  },
  {
    id: 15,
    week: 15,
    title: '미정',
    date: '2025-06-14',
    content: '창업자로서의 삶과 개인적인 균형을 유지하는 방법에 대해 논의합니다. 스트레스 관리, 시간 관리, 멘토링 활용, 네트워크 구축 등 창업자의 지속가능한 성장을 위한 방법을 배웁니다.',
    classes: [
      {
        id: 1501,
        period: 1,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 1502,
        period: 2,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 1503,
        period: 3,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      }
    ]
  },
  {
    id: 16,
    week: 16,
    title: '미정',
    date: '2025-06-21',
    content: '한 학기 동안 발전시킨 창업 아이디어를 최종 발표하고 평가받는 시간입니다. 외부 전문가와 투자자를 초청하여 피드백을 받고 네트워킹하는 기회를 가집니다.',
    classes: [
      {
        id: 1601,
        period: 1,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 1602,
        period: 2,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      },
      {
        id: 1603,
        period: 3,
        title: '준비 중',
        professor: '미정',
        content: '이 강의는 현재 준비 중입니다. 강의 내용은 추후 업데이트될 예정입니다.',
        severity: 'low',
      }
    ]
  }
]; 