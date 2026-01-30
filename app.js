// 미션 포인트 계산에 필요한 MOCK 데이터 묶음
const LOAN_CONFIG = {
  "웨이팅 대출": {
    basePoints: { credit: 40, interest: 30, principal: 35 },
    histories: {
      "난 재대출": {
        interestBonus: 5,
        principalBonus: 4,
        statuses: {
          "Clean ✌️": 6,
          "Non-Clean 😪": 2,
        },
      },
      "난 처음": {
        interestBonus: 3,
        principalBonus: 5,
        statuses: {
          "지금 처음 (One ☝️)": 4,
          "몇 번 (Several 😋)": 6,
        },
      },
    },
  },
  "롸잇나우 대출": {
    basePoints: { credit: 32, interest: 28, principal: 30 },
    histories: {
      "모든 고객": {
        interestBonus: 6,
        principalBonus: 4,
        statuses: {
          "No Matter": 5,
        },
      },
    },
  },
  "블랙찬스 티켓 사용": {
    basePoints: { credit: 38, interest: 32, principal: 33 },
    histories: {
      "바로 재대출": {
        interestBonus: 7,
        principalBonus: 6,
        statuses: {
          블찬원: 4,
          블찬이: 5,
          블찬현: 7,
        },
      },
    },
  },
  "이벤트 대출": {
    basePoints: { credit: 35, interest: 27, principal: 28 },
    histories: {
      "1월 한정 스페셜티": {
        interestBonus: 5,
        principalBonus: 4,
        statuses: {
          "붉은말 🔴🐎 대출": 8,
        },
      },
    },
  },
};

const WAITING_SEAT_RANGES = [
  {
    seat: "Box Seat (귀빈석)",
    startDate: "2026-01-01",
    endDate: "2026-01-05",
    creditDeadline: "앱에서 신청한 날로부터 48시간 내",
    interestRate: "1%",
    interestDeadline: "2026-01-15",
    principalRate: "1%",
    principalDeadline: "2026-01-15",
  },
  {
    seat: "VIP Seat (1열)",
    startDate: "2026-01-06",
    endDate: "2026-01-10",
    creditDeadline: "앱에서 신청한 날로부터 48시간 내",
    interestRate: "1%",
    interestDeadline: "2026-01-20",
    principalRate: "2%",
    principalDeadline: "2026-01-20",
  },
  {
    seat: "Royal Seat (2열)",
    startDate: "2026-01-11",
    endDate: "2026-01-15",
    creditDeadline: "앱에서 신청한 날로부터 48시간 내",
    interestRate: "1%",
    interestDeadline: "2026-01-25",
    principalRate: "4%",
    principalDeadline: "2026-01-25",
  },
  {
    seat: "Standard Seat (3열)",
    startDate: "2026-01-16",
    endDate: "2026-01-20",
    creditDeadline: "앱에서 신청한 날로부터 48시간 내",
    interestRate: "1%",
    interestDeadline: "2026-01-30",
    principalRate: "6%",
    principalDeadline: "2026-01-30",
  },
  {
    seat: "Original Seat (입석)",
    startDate: "2026-01-21",
    endDate: "2026-01-25",
    creditDeadline: "앱에서 신청한 날로부터 48시간 내",
    interestRate: "1%",
    interestDeadline: "2026-02-05",
    principalRate: "8%",
    principalDeadline: "2026-02-05",
  },
];

const LOAN_PRODUCT_TABLE = [
  {
    amountText: "10만 원",
    amount: 100000,
    baseRepayment: "원리현 상품",
    description: "원금과 이자 모두를 현금으로 상환",
    baseCredit: 4000,
    baseInterestRate: "없음",
    baseInterestPoints: 0,
    basePrincipalRate: "없음",
    basePrincipalPoints: 0,
    totalPoints: 4000,
  },
  {
    amountText: "20만 원",
    amount: 200000,
    baseRepayment: "이포 상품",
    description: "원금은 현금으로 이자는 포인트로 상환",
    baseCredit: 5000,
    baseInterestRate: "1%",
    baseInterestPoints: 2000,
    basePrincipalRate: "없음",
    basePrincipalPoints: 0,
    totalPoints: 7000,
  },
  {
    amountText: "30만 원",
    amount: 300000,
    baseRepayment: "원리포 상품",
    description: "원금의 일부와 이자 전부를 포인트로 상환",
    baseCredit: 6000,
    baseInterestRate: "1%",
    baseInterestPoints: 3000,
    basePrincipalRate: "10%",
    basePrincipalPoints: 30000,
    totalPoints: 39000,
  },
  {
    amountText: "50만 원",
    amount: 500000,
    baseRepayment: "원리포 상품",
    description: "원금의 일부와 이자 전부를 포인트로 상환",
    baseCredit: 12000,
    baseInterestRate: "1%",
    baseInterestPoints: 5000,
    basePrincipalRate: "10%",
    basePrincipalPoints: 50000,
    totalPoints: 67000,
  },
];

const LOAN_OPTION_STATUS_TABLE = {
  "웨이팅 대출": {
    재대출: ["Clean", "Non-Clean"],
    신규: ["One", "Several"],
  },
  "롸잇나우 대출": {
    "모든 고객": ["No Matter"],
  },
  "블랙찬스 티캣": {
    "바로 재대출": ["블찬원", "블찬이", "블찬현"],
  },
  "이벤트 대출": {
    "1월 한정 스페셜티": ["붉은말 🔴🐎 대출"],
  },
};

const LOAN_REVIEW_SCHEDULE = [
  {
    option: "웨이팅 대출",
    history: "재대출",
    status: "Clean",
    startDate: "2026-02-01",
    endDate: "2026-02-05",
  },
  {
    option: "웨이팅 대출",
    history: "재대출",
    status: "Non-Clean",
    startDate: "2026-02-01",
    endDate: "2026-02-05",
  },
  {
    option: "웨이팅 대출",
    history: "신규",
    status: "One",
    startDate: "2026-02-01",
    endDate: "2026-02-05",
  },
  {
    option: "웨이팅 대출",
    history: "신규",
    status: "Several",
    startDate: "2026-02-01",
    endDate: "2026-02-05",
  },
  {
    option: "롸잇나우 대출",
    history: "모든 고객",
    status: "No Matter",
    startDate: "매일",
    endDate: "",
  },
  {
    option: "블랙찬스 티켓",
    history: "바로 재대출",
    status: "블찬원",
    startDate: "매일",
    endDate: "",
  },
  {
    option: "블랙찬스 티켓",
    history: "바로 재대출",
    status: "블찬이",
    startDate: "매일",
    endDate: "",
  },
  {
    option: "블랙찬스 티켓",
    history: "바로 재대출",
    status: "블찬현",
    startDate: "2026-02-01",
    endDate: "2026-02-05",
  },
  {
    option: "이벤트 대출",
    history: "1월 한정 스페셜티",
    status: "붉은말 🔴🐎 대출",
    startDate: "매일",
    endDate: "",
  },
];

const LOAN_BENEFITS = {
  "웨이팅 대출": "부담스런 포인트 적립이 🐶널널!",
  "롸잇나우 대출": "빠른 대출과 한도 상향 가산점",
  "블랙찬스 티켓": "50만 원, 30만 원을 크레딧 미션만으로!",
  "이벤트 대출": "빠른 대출과 원금 미션 감면!",
};

const POINT_SUMMARY_RAW = `
금액	금액	기본 상환 방식	대출 옵션	좌석명	대출 이력	대출 상태	변경 상환 방식	기본 크레딧 미션	크레딧 미션 할인		기본 이자 미션		변경 이자 미션		기본 원금 미션		변경 원금 미션		총 포인트
텍스트	숫자	기본 상환 방식	대출 옵션	좌석명	대출 이력	대출 상태	변경 상환 방식	기본 포인트	할인율	할인된 포인트	기본 %	기본 포인트	변경 %	변경 포인트	기본 %	기본 포인트	변경 %	변경 포인트	총 포인트
10만 원	100,000	원리현 상품	웨이팅 대출	Box Seat (귀빈석)	재대출	Clean	원리현 상품	4,000	50%	2,000	0%	0	0%	0	0%	0	0%	0	2,000
10만 원	100,000	원리현 상품	웨이팅 대출	Box Seat (귀빈석)	재대출	Non-Clean	원리현 상품	4,000	25%	3,000	0%	0	0%	0	0%	0	0%	0	3,000
10만 원	100,000	원리현 상품	웨이팅 대출	Box Seat (귀빈석)	신규	One	원리현 상품	4,000	40%	2,400	0%	0	0%	0	0%	0	0%	0	2,400
10만 원	100,000	원리현 상품	웨이팅 대출	Box Seat (귀빈석)	신규	Several	원리현 상품	4,000	20%	3,200	0%	0	0%	0	0%	0	0%	0	3,200
10만 원	100,000	원리현 상품	웨이팅 대출	VIP Seat (1열)	재대출	Clean	원리현 상품	4,000	45%	2,200	0%	0	0%	0	0%	0	0%	0	2,200
10만 원	100,000	원리현 상품	웨이팅 대출	VIP Seat (1열)	재대출	Non-Clean	원리현 상품	4,000	20%	3,200	0%	0	0%	0	0%	0	0%	0	3,200
10만 원	100,000	원리현 상품	웨이팅 대출	VIP Seat (1열)	신규	One	원리현 상품	4,000	35%	2,600	0%	0	0%	0	0%	0	0%	0	2,600
10만 원	100,000	원리현 상품	웨이팅 대출	VIP Seat (1열)	신규	Several	원리현 상품	4,000	15%	3,400	0%	0	0%	0	0%	0	0%	0	3,400
10만 원	100,000	원리현 상품	웨이팅 대출	Royal Seat (2열)	재대출	Clean	원리현 상품	4,000	40%	2,400	0%	0	0%	0	0%	0	0%	0	2,400
10만 원	100,000	원리현 상품	웨이팅 대출	Royal Seat (2열)	재대출	Non-Clean	원리현 상품	4,000	15%	3,400	0%	0	0%	0	0%	0	0%	0	3,400
10만 원	100,000	원리현 상품	웨이팅 대출	Royal Seat (2열)	신규	One	원리현 상품	4,000	30%	2,800	0%	0	0%	0	0%	0	0%	0	2,800
10만 원	100,000	원리현 상품	웨이팅 대출	Royal Seat (2열)	신규	Several	원리현 상품	4,000	10%	3,600	0%	0	0%	0	0%	0	0%	0	3,600
10만 원	100,000	원리현 상품	웨이팅 대출	Standard Seat (3열)	재대출	Clean	원리현 상품	4,000	35%	2,600	0%	0	0%	0	0%	0	0%	0	2,600
10만 원	100,000	원리현 상품	웨이팅 대출	Standard Seat (3열)	재대출	Non-Clean	원리현 상품	4,000	10%	3,600	0%	0	0%	0	0%	0	0%	0	3,600
10만 원	100,000	원리현 상품	웨이팅 대출	Standard Seat (3열)	신규	One	원리현 상품	4,000	25%	3,000	0%	0	0%	0	0%	0	0%	0	3,000
10만 원	100,000	원리현 상품	웨이팅 대출	Standard Seat (3열)	신규	Several	원리현 상품	4,000	5%	3,800	0%	0	0%	0	0%	0	0%	0	3,800
10만 원	100,000	원리현 상품	웨이팅 대출	Original Seat (입석)	재대출	Clean	원리현 상품	4,000	30%	2,800	0%	0	0%	0	0%	0	0%	0	2,800
10만 원	100,000	원리현 상품	웨이팅 대출	Original Seat (입석)	재대출	Non-Clean	원리현 상품	4,000	5%	3,800	0%	0	0%	0	0%	0	0%	0	3,800
10만 원	100,000	원리현 상품	웨이팅 대출	Original Seat (입석)	신규	One	원리현 상품	4,000	20%	3,200	0%	0	0%	0	0%	0	0%	0	3,200
10만 원	100,000	원리현 상품	웨이팅 대출	Original Seat (입석)	신규	Several	원리현 상품	4,000	0%	4,000	0%	0	0%	0	0%	0	0%	0	4,000
10만 원	100,000	원리현 상품	롸잇나우 대출	Free Seat (자유석)	모든 고객	No Matter	원리포 상품	4,000	0%	4,000	1%	1,000	1%	1,000	10%	10,000	10%	10,000	15,000
10만 원	100,000	원리현 상품	블랙찬스 티켓	Thanks Seat (감사석)	바로 재대출	블찬원	원리포 상품	4,000	0%	4,000	1%	1,000	1%	1,000	10%	10,000	4%	4,000	9,000
10만 원	100,000	원리현 상품	블랙찬스 티켓	Thanks Seat (감사석)	바로 재대출	블찬이	이포 상품	4,000	0%	4,000	1%	1,000	1%	1,000	0%	0	0%	0	5,000
10만 원	100,000	원리현 상품	블랙찬스 티켓	Thanks Seat (감사석)	바로 재대출	블찬현	원리현 상품	4,000	0%	4,000	0%	0	0%	0	0%	0	0%	0	4,000
20만 원	200,000	이포 상품	웨이팅 대출	Box Seat (귀빈석)	재대출	Clean	이포 상품	5,000	50%	2,500	1%	2,000	1%	2,000	0%	0	0%	0	4,500
20만 원	200,000	이포 상품	웨이팅 대출	Box Seat (귀빈석)	재대출	Non-Clean	이포 상품	5,000	25%	3,750	1%	2,000	1%	2,000	0%	0	0%	0	5,750
20만 원	200,000	이포 상품	웨이팅 대출	Box Seat (귀빈석)	신규	One	이포 상품	5,000	40%	3,000	1%	2,000	1%	2,000	0%	0	0%	0	5,000
20만 원	200,000	이포 상품	웨이팅 대출	Box Seat (귀빈석)	신규	Several	이포 상품	5,000	20%	4,000	1%	2,000	1%	2,000	0%	0	0%	0	6,000
20만 원	200,000	이포 상품	웨이팅 대출	VIP Seat (1열)	재대출	Clean	이포 상품	5,000	45%	2,750	1%	2,000	1%	2,000	0%	0	0%	0	4,750
20만 원	200,000	이포 상품	웨이팅 대출	VIP Seat (1열)	재대출	Non-Clean	이포 상품	5,000	20%	4,000	1%	2,000	1%	2,000	0%	0	0%	0	6,000
20만 원	200,000	이포 상품	웨이팅 대출	VIP Seat (1열)	신규	One	이포 상품	5,000	35%	3,250	1%	2,000	1%	2,000	0%	0	0%	0	5,250
20만 원	200,000	이포 상품	웨이팅 대출	VIP Seat (1열)	신규	Several	이포 상품	5,000	15%	4,250	1%	2,000	1%	2,000	0%	0	0%	0	6,250
20만 원	200,000	이포 상품	웨이팅 대출	Royal Seat (2열)	재대출	Clean	이포 상품	5,000	40%	3,000	1%	2,000	1%	2,000	0%	0	0%	0	5,000
20만 원	200,000	이포 상품	웨이팅 대출	Royal Seat (2열)	재대출	Non-Clean	이포 상품	5,000	15%	4,250	1%	2,000	1%	2,000	0%	0	0%	0	6,250
20만 원	200,000	이포 상품	웨이팅 대출	Royal Seat (2열)	신규	One	이포 상품	5,000	30%	3,500	1%	2,000	1%	2,000	0%	0	0%	0	5,500
20만 원	200,000	이포 상품	웨이팅 대출	Royal Seat (2열)	신규	Several	이포 상품	5,000	10%	4,500	1%	2,000	1%	2,000	0%	0	0%	0	6,500
20만 원	200,000	이포 상품	웨이팅 대출	Standard Seat (3열)	재대출	Clean	이포 상품	5,000	35%	3,250	1%	2,000	1%	2,000	0%	0	0%	0	5,250
20만 원	200,000	이포 상품	웨이팅 대출	Standard Seat (3열)	재대출	Non-Clean	이포 상품	5,000	10%	4,500	1%	2,000	1%	2,000	0%	0	0%	0	6,500
20만 원	200,000	이포 상품	웨이팅 대출	Standard Seat (3열)	신규	One	이포 상품	5,000	25%	3,750	1%	2,000	1%	2,000	0%	0	0%	0	5,750
20만 원	200,000	이포 상품	웨이팅 대출	Standard Seat (3열)	신규	Several	이포 상품	5,000	5%	4,750	1%	2,000	1%	2,000	0%	0	0%	0	6,750
20만 원	200,000	이포 상품	웨이팅 대출	Original Seat (입석)	재대출	Clean	이포 상품	5,000	30%	3,500	1%	2,000	1%	2,000	0%	0	0%	0	5,500
20만 원	200,000	이포 상품	웨이팅 대출	Original Seat (입석)	재대출	Non-Clean	이포 상품	5,000	5%	4,750	1%	2,000	1%	2,000	0%	0	0%	0	6,750
20만 원	200,000	이포 상품	웨이팅 대출	Original Seat (입석)	신규	One	이포 상품	5,000	20%	4,000	1%	2,000	1%	2,000	0%	0	0%	0	6,000
20만 원	200,000	이포 상품	웨이팅 대출	Original Seat (입석)	신규	Several	이포 상품	5,000	0%	5,000	1%	2,000	1%	2,000	0%	0	0%	0	7,000
20만 원	200,000	이포 상품	롸잇나우 대출	Free Seat (자유석)	모든 고객	No Matter	원리포 상품	5,000	0%	5,000	1%	2,000	1%	2,000	10%	20,000	10%	20,000	27,000
20만 원	200,000	이포 상품	블랙찬스 티켓	Thanks Seat (감사석)	바로 재대출	블찬원	원리포 상품	5,000	0%	5000	1%	2,000	1%	2,000	10%	20,000	4%	8,000	15,000
20만 원	200,000	이포 상품	블랙찬스 티켓	Thanks Seat (감사석)	바로 재대출	블찬이	이포 상품	5,000	0%	5000	1%	2,000	1%	2,000	0%	0	0%	0	7,000
20만 원	200,000	이포 상품	블랙찬스 티켓	Thanks Seat (감사석)	바로 재대출	블찬현	원리현 상품	5,000	0%	5000	0%	0	0%	0	0%	0	0%	0	5,000
20만 원	200,000	이포 상품	이벤트 대출	Special Seat (특별석)	1월 한정 스페셜티	붉은말 🔴🐎 대출	이포 상품	8,000	0%	8000	1%	2,000	1%	2,000	0%	0	0%	0	10,000
30만 원	300,000	원리포 상품	웨이팅 대출	Box Seat (귀빈석)	재대출	Clean	원리포 상품	6,000	50%	3,000	1%	3,000	1%	3,000	10%	30,000	1%	3,000	9,000
30만 원	300,000	원리포 상품	웨이팅 대출	Box Seat (귀빈석)	재대출	Non-Clean	원리포 상품	6,000	25%	4,500	1%	3,000	1%	3,000	10%	30,000	1%	3,000	10,500
30만 원	300,000	원리포 상품	웨이팅 대출	Box Seat (귀빈석)	신규	One	원리포 상품	6,000	40%	3,600	1%	3,000	1%	3,000	10%	30,000	1%	3,000	9,600
30만 원	300,000	원리포 상품	웨이팅 대출	Box Seat (귀빈석)	신규	Several	원리포 상품	6,000	20%	4,800	1%	3,000	1%	3,000	10%	30,000	1%	3,000	10,800
30만 원	300,000	원리포 상품	웨이팅 대출	VIP Seat (1열)	재대출	Clean	원리포 상품	6,000	45%	3,300	1%	3,000	1%	3,000	10%	30,000	2%	6,000	12,300
30만 원	300,000	원리포 상품	웨이팅 대출 대출	VIP Seat (1열)	재대출	Non-Clean	원리포 상품	6,000	20%	4,800	1%	3,000	1%	3,000	10%	30,000	2%	6,000	13,800
30만 원	300,000	원리포 상품	웨이팅 대출	VIP Seat (1열)	신규	One	원리포 상품	6,000	35%	3,900	1%	3,000	1%	3,000	10%	30,000	2%	6,000	12,900
30만 원	300,000	원리포 상품	웨이팅 대출	VIP Seat (1열)	신규	Several	원리포 상품	6,000	15%	5,100	1%	3,000	1%	3,000	10%	30,000	2%	6,000	14,100
30만 원	300,000	원리포 상품	웨이팅 대출	Royal Seat (2열)	재대출	Clean	원리포 상품	6,000	40%	3,600	1%	3,000	1%	3,000	10%	30,000	4%	12,000	18,600
30만 원	300,000	원리포 상품	웨이팅 대출	Royal Seat (2열)	재대출	Non-Clean	원리포 상품	6,000	15%	5,100	1%	3,000	1%	3,000	10%	30,000	4%	12,000	20,100
30만 원	300,000	원리포 상품	웨이팅 대출	Royal Seat (2열)	신규	One	원리포 상품	6,000	30%	4,200	1%	3,000	1%	3,000	10%	30,000	4%	12,000	19,200
30만 원	300,000	원리포 상품	웨이팅 대출	Royal Seat (2열)	신규	Several	원리포 상품	6,000	10%	5,400	1%	3,000	1%	3,000	10%	30,000	4%	12,000	20,400
30만 원	300,000	원리포 상품	웨이팅 대출	Standard Seat (3열)	재대출	Clean	원리포 상품	6,000	35%	3,900	1%	3,000	1%	3,000	10%	30,000	6%	18,000	24,900
30만 원	300,000	원리포 상품	웨이팅 대출	Standard Seat (3열)	재대출	Non-Clean	원리포 상품	6,000	10%	5,400	1%	3,000	1%	3,000	10%	30,000	6%	18,000	26,400
30만 원	300,000	원리포 상품	웨이팅 대출	Standard Seat (3열)	신규	One	원리포 상품	6,000	25%	4,500	1%	3,000	1%	3,000	10%	30,000	6%	18,000	25,500
30만 원	300,000	원리포 상품	웨이팅 대출	Standard Seat (3열)	신규	Several	원리포 상품	6,000	5%	5,700	1%	3,000	1%	3,000	10%	30,000	6%	18,000	26,700
30만 원	300,000	원리포 상품	웨이팅 대출	Original Seat (입석)	재대출	Clean	원리포 상품	6,000	30%	4,200	1%	3,000	1%	3,000	10%	30,000	8%	24,000	31,200
30만 원	300,000	원리포 상품	웨이팅 대출	Original Seat (입석)	재대출	Non-Clean	원리포 상품	6,000	5%	5,700	1%	3,000	1%	3,000	10%	30,000	8%	24,000	32,700
30만 원	300,000	원리포 상품	웨이팅 대출	Original Seat (입석)	신규	One	원리포 상품	6,000	20%	4,800	1%	3,000	1%	3,000	10%	30,000	8%	24,000	31,800
30만 원	300,000	원리포 상품	웨이팅 대출	Original Seat (입석)	신규	Several	원리포 상품	6,000	0%	6,000	1%	3,000	1%	3,000	10%	30,000	8%	24,000	33,000
30만 원	300,000	원리포 상품	롸잇나우 대출	Free Seat (자유석)	모든 고객	No Matter	원리포 상품	6,000	0%	6,000	1%	3,000	1%	3,000	10%	30,000	10%	30,000	39,000
30만 원	300,000	원리포 상품	블랙찬스 티켓	Thanks Seat (감사석)	바로 재대출	블찬원	원리포 상품	6,000	0%	6000	1%	3,000	1%	3,000	10%	30,000	4%	12,000	21,000
30만 원	300,000	원리포 상품	블랙찬스 티켓	Thanks Seat (감사석)	바로 재대출	블찬이	이포 상품	6,000	0%	6000	1%	3,000	1%	3,000	0%	0	0%	0	9,000
30만 원	300,000	원리포 상품	블랙찬스 티켓	Thanks Seat (감사석)	바로 재대출	블찬현	원리현 상품	6,000	0%	6000	0%	0	0%	0	0%	0	0%	0	6,000
30만 원	300,000	원리포 상품	이벤트 대출	Special Seat (특별석)	1월 한정 스페셜티	붉은말 🔴🐎 대출	이포 상품	12,000	0%	12000	1%	3,000	1%	3,000	0%	0	0%	0	15,000
50만 원	500,000	원리포 상품	웨이팅 대출	Box Seat (귀빈석)	재대출	Clean	원리포 상품	12,000	50%	6,000	1%	5,000	1%	5,000	10%	50,000	1%	5,000	16,000
50만 원	500,000	원리포 상품	웨이팅 대출	Box Seat (귀빈석)	재대출	Non-Clean	원리포 상품	12,000	25%	9,000	1%	5,000	1%	5,000	10%	50,000	1%	5,000	19,000
50만 원	500,000	원리포 상품	웨이팅 대출	Box Seat (귀빈석)	신규	One	원리포 상품	12,000	40%	7,200	1%	5,000	1%	5,000	10%	50,000	1%	5,000	17,200
50만 원	500,000	원리포 상품	웨이팅 대출	Box Seat (귀빈석)	신규	Several	원리포 상품	12,000	20%	9,600	1%	5,000	1%	5,000	10%	50,000	1%	5,000	19,600
50만 원	500,000	원리포 상품	웨이팅 대출	VIP Seat (1열)	재대출	Clean	원리포 상품	12,000	45%	6,600	1%	5,000	1%	5,000	10%	50,000	2%	10,000	21,600
50만 원	500,000	원리포 상품	웨이팅 대출	VIP Seat (1열)	재대출	Non-Clean	원리포 상품	12,000	20%	9,600	1%	5,000	1%	5,000	10%	50,000	2%	10,000	24,600
50만 원	500,000	원리포 상품	웨이팅 대출	VIP Seat (1열)	신규	One	원리포 상품	12,000	35%	7,800	1%	5,000	1%	5,000	10%	50,000	2%	10,000	22,800
50만 원	500,000	원리포 상품	웨이팅 대출	VIP Seat (1열)	신규	Several	원리포 상품	12,000	15%	10,200	1%	5,000	1%	5,000	10%	50,000	2%	10,000	25,200
50만 원	500,000	원리포 상품	웨이팅 대출	Royal Seat (2열)	재대출	Clean	원리포 상품	12,000	40%	7,200	1%	5,000	1%	5,000	10%	50,000	4%	20,000	32,200
50만 원	500,000	원리포 상품	웨이팅 대출	Royal Seat (2열)	재대출	Non-Clean	원리포 상품	12,000	15%	10,200	1%	5,000	1%	5,000	10%	50,000	4%	20,000	35,200
50만 원	500,000	원리포 상품	웨이팅 대출	Royal Seat (2열)	신규	One	원리포 상품	12,000	30%	8,400	1%	5,000	1%	5,000	10%	50,000	4%	20,000	33,400
50만 원	500,000	원리포 상품	웨이팅 대출	Royal Seat (2열)	신규	Several	원리포 상품	12,000	10%	10,800	1%	5,000	1%	5,000	10%	50,000	4%	20,000	35,800
50만 원	500,000	원리포 상품	웨이팅 대출	Standard Seat (3열)	재대출	Clean	원리포 상품	12,000	35%	7,800	1%	5,000	1%	5,000	10%	50,000	6%	30,000	42,800
50만 원	500,000	원리포 상품	웨이팅 대출	Standard Seat (3열)	재대출	Non-Clean	원리포 상품	12,000	10%	10,800	1%	5,000	1%	5,000	10%	50,000	6%	30,000	45,800
50만 원	500,000	원리포 상품	웨이팅 대출	Standard Seat (3열)	신규	One	원리포 상품	12,000	25%	9,000	1%	5,000	1%	5,000	10%	50,000	6%	30,000	44,000
50만 원	500,000	원리포 상품	웨이팅 대출	Standard Seat (3열)	신규	Several	원리포 상품	12,000	5%	11,400	1%	5,000	1%	5,000	10%	50,000	6%	30,000	46,400
50만 원	500,000	원리포 상품	웨이팅 대출	Original Seat (입석)	재대출	Clean	원리포 상품	12,000	30%	8,400	1%	5,000	1%	5,000	10%	50,000	8%	40,000	53,400
50만 원	500,000	원리포 상품	웨이팅 대출	Original Seat (입석)	재대출	Non-Clean	원리포 상품	12,000	5%	11,400	1%	5,000	1%	5,000	10%	50,000	8%	40,000	56,400
50만 원	500,000	원리포 상품	웨이팅 대출	Original Seat (입석)	신규	One	원리포 상품	12,000	20%	9,600	1%	5,000	1%	5,000	10%	50,000	8%	40,000	54,600
50만 원	500,000	원리포 상품	웨이팅 대출	Original Seat (입석)	신규	Several	원리포 상품	12,000	0%	12,000	1%	5,000	1%	5,000	10%	50,000	8%	40,000	57,000
50만 원	500,000	원리포 상품	롸잇나우 대출	Free Seat (자유석)	모든 고객	No Matter	원리포 상품	12,000	0%	12,000	1%	5,000	1%	5,000	10%	50,000	10%	50,000	67,000
50만 원	500,000	원리포 상품	블랙찬스 티켓	Thanks Seat (감사석)	바로 재대출	블찬원	원리포 상품	12,000	0%	12,000	1%	5,000	1%	5,000	10%	50,000	4%	20,000	37,000
50만 원	500,000	원리포 상품	블랙찬스 티켓	Thanks Seat (감사석)	바로 재대출	블찬이	이포 상품	12,000	0%	12,000	1%	5,000	1%	5,000	0%	0	0%	0	17,000
50만 원	500,000	원리포 상품	블랙찬스 티켓	Thanks Seat (감사석)	바로 재대출	블찬현	원리현 상품	12,000	0%	12,000	0%	0	0%	0	0%	0	0%	0	12,000
`
;


const POINT_SUMMARY_TABLE = parsePointSummaryTable(POINT_SUMMARY_RAW);
const SEAT_CREDIT_RANGE = buildSeatCreditRanges(POINT_SUMMARY_TABLE);

function parsePointSummaryTable(raw) {
  const lines = raw.trim().split("\n").filter((line) => line.trim());
  const dataLines = lines.slice(2);
  return dataLines.map((line) => {
    const columns = line.split("\t");
    while (columns.length < 20) {
      columns.push("");
    }

    const [
      amountText,
      amountValue,
      baseRepayment,
      loanOption,
      seat,
      loanHistory,
      loanStatus,
      changedRepayment,
      baseCreditPoints,
      creditDiscountRate,
      creditDiscountPoints,
      baseInterestRate,
      baseInterestPoints,
      changedInterestRate,
      changedInterestPoints,
      basePrincipalRate,
      basePrincipalPoints,
      changedPrincipalRate,
      changedPrincipalPoints,
      totalPoints,
    ] = columns.map((item) => item.trim());

    return {
      amountText,
      amountValue: toNumber(amountValue),
      baseRepayment,
      loanOption: normalizeTableOption(loanOption),
      seat,
      loanHistory,
      loanStatus,
      changedRepayment,
      baseCreditPoints: toNumber(baseCreditPoints),
      creditDiscountRate,
      creditDiscountPoints: toNumber(creditDiscountPoints),
      baseInterestRate,
      baseInterestPoints: toNumber(baseInterestPoints),
      interestDiscountRate: changedInterestRate,
      interestDiscountPoints: toNumber(changedInterestPoints),
      basePrincipalRate,
      basePrincipalPoints: toNumber(basePrincipalPoints),
      principalDiscountRate: changedPrincipalRate,
      principalDiscountPoints: toNumber(changedPrincipalPoints),
      totalPoints: toNumber(totalPoints),
    };
  });
}

function normalizeTableOption(option) {
  if (!option) return "";
  if (option.includes("웨이팅 대출")) return "웨이팅 대출";
  if (option.includes("롸잇나우")) return "롸잇나우 대출";
  if (option.includes("블랙찬스")) return "블랙찬스 티켓";
  if (option.includes("이벤트")) return "이벤트 대출";
  return option;
}

function toNumber(value) {
  if (!value || value === "없음") return 0;
  const cleaned = String(value).replace(/[^\d.-]/g, "");
  const parsed = Number(cleaned);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function buildSeatCreditRanges(table) {
  const seatRates = {};

  table.forEach((row) => {
    if (row.loanOption !== "웨이팅 대출" || !row.seat) return;
    const rateValue = toNumber(row.creditDiscountRate);
    if (!seatRates[row.seat]) {
      seatRates[row.seat] = { max: rateValue, min: rateValue };
      return;
    }
    seatRates[row.seat].max = Math.max(seatRates[row.seat].max, rateValue);
    seatRates[row.seat].min = Math.min(seatRates[row.seat].min, rateValue);
  });

  return Object.keys(seatRates).reduce((acc, seat) => {
    acc[seat] = `${seatRates[seat].max}% ~ ${seatRates[seat].min}%`;
    return acc;
  }, {});
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("calculatorForm");
  const loanOption = document.getElementById("loanOption");
  const loanHistory = document.getElementById("loanHistory");
  const loanStatus = document.getElementById("loanStatus");
  const waitingInfo = document.getElementById("waitingInfo");
  const loanDateInput = document.getElementById("loanDate");
  const calendarGrid = document.getElementById("calendarGrid");
  const calendarMonthLabel = document.getElementById("calendarMonthLabel");
  const calendarPrev = document.getElementById("calendarPrev");
  const calendarNext = document.getElementById("calendarNext");
  const discountSeat = document.getElementById("discountSeat");
  const creditRange = document.getElementById("creditRange");
  const wonmiRate = document.getElementById("wonmiRate");
  const waitingPeriod = document.getElementById("waitingPeriod");
  const waitingDateText = document.getElementById("waitingDateText");
  let calendarViewDate = new Date();

  const requestAmount = document.getElementById("requestAmount");
  const loanPeriod = document.getElementById("loanPeriod");
  const rudolphSpecial = document.getElementById("rudolphSpecial");
  const eventOption = loanOption.querySelector('option[value="이벤트 대출"]');
  const eventAmountNote = document.getElementById("eventAmountNote");
  const calculateButton = document.getElementById("calculateButton");
  const resultPanel = document.getElementById("resultPanel");
  const recalcNote = document.getElementById("recalcNote");

  const benefitTitle = document.getElementById("benefitTitle");
  const benefitLines = [
    document.getElementById("benefitLine1"),
    document.getElementById("benefitLine2"),
    document.getElementById("benefitLine3"),
    document.getElementById("benefitLine4"),
  ];
  const resultAmount = document.getElementById("resultAmount");
  const resultPeriod = document.getElementById("resultPeriod");
  const resultOption = document.getElementById("resultOption");
  const resultSeat = document.getElementById("resultSeat");
  const resultHistory = document.getElementById("resultHistory");
  const resultStatus = document.getElementById("resultStatus");
  const resultRepayment = document.getElementById("resultRepayment");
  const reviewPeriod = document.getElementById("reviewPeriod");
  const creditSummary = document.getElementById("creditSummary");
  const creditPointsLine = document.getElementById("creditPointsLine");
  const interestRateLine = document.getElementById("interestRateLine");
  const interestPointsLine = document.getElementById("interestPointsLine");
  const principalRateLine = document.getElementById("principalRateLine");
  const principalPointsLine = document.getElementById("principalPointsLine");
  const totalPointsLine = document.getElementById("totalPointsLine");
  const currentPointsLine = document.getElementById("currentPointsLine");
  const additionalPointsLine = document.getElementById("additionalPointsLine");
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  const step3 = document.getElementById("step3");
  const step4 = document.getElementById("step4");
  const step5 = document.getElementById("step5");
  const step3Deadline = document.getElementById("step3Deadline");
  const step4Deadline = document.getElementById("step4Deadline");
  const step4Warning = document.getElementById("step4Warning");
  const step5Interest = document.getElementById("step5Interest");
  const step5Principal = document.getElementById("step5Principal");
  const step5Deadline = document.getElementById("step5Deadline");
  const step5Warning = document.getElementById("step5Warning");
  const summaryCredit = document.getElementById("summaryCredit");
  const summaryInterest = document.getElementById("summaryInterest");
  const summaryPrincipal = document.getElementById("summaryPrincipal");
  const summaryTotal = document.getElementById("summaryTotal");
  const summaryCurrent = document.getElementById("summaryCurrent");
  const summaryAdditional = document.getElementById("summaryAdditional");
  const pointHintBox = document.getElementById("pointHintBox");
  const pointSubscribeSection = document.getElementById("pointSubscribeSection");
  const subscribeStartDate = document.getElementById("subscribeStartDate");

  const santaApply = document.getElementById("santaApply");
  const appApply = document.getElementById("appApply");
  const creditMission = document.getElementById("creditMission");
  const communicationStatus = document.getElementById("communicationStatus");
  const currentPoints = document.getElementById("currentPoints");

  const userName = document.getElementById("userName");
  const userBirth = document.getElementById("userBirth");
  const userPhone = document.getElementById("userPhone");

  const selectionSummary = document.getElementById("selectionSummary");
  const creditPoints = document.getElementById("creditPoints");
  const interestPoints = document.getElementById("interestPoints");
  const principalPoints = document.getElementById("principalPoints");
  const totalPoints = document.getElementById("totalPoints");
  const additionalPoints = document.getElementById("additionalPoints");
  const scriptPreview = document.getElementById("scriptPreview");

  populateLoanHistories(loanOption.value);
  toggleWaitingFields(loanOption.value);
  updateEventOptionAvailability();
  document.querySelectorAll("select").forEach(updatePlaceholderStyle);
  startClock();

  const handleLoanOptionChange = () => {
    populateLoanHistories(loanOption.value);
    toggleWaitingFields(loanOption.value);
    markResultsStale();
    updatePlaceholderStyle(loanOption);
  };

  loanOption.addEventListener("change", handleLoanOptionChange);
  loanOption.addEventListener("input", handleLoanOptionChange);

  if (calculateButton) {
    calculateButton.addEventListener("click", () => {
      clearFieldErrors();
      if (!validateForm()) {
        return;
      }

      updateResults();
      if (resultPanel) {
        resultPanel.classList.remove("hidden");
        resultPanel.classList.remove("is-stale");
        resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (recalcNote) {
        recalcNote.classList.add("hidden");
      }
    });
  }

  if (calendarPrev && calendarNext) {
    calendarPrev.addEventListener("click", () => {
      calendarViewDate = new Date(
        calendarViewDate.getFullYear(),
        calendarViewDate.getMonth() - 1,
        1
      );
      renderCalendar(calendarViewDate);
    });

    calendarNext.addEventListener("click", () => {
      calendarViewDate = new Date(
        calendarViewDate.getFullYear(),
        calendarViewDate.getMonth() + 1,
        1
      );
      renderCalendar(calendarViewDate);
    });
  }

  form.querySelectorAll("input, select").forEach((element) => {
    if (element === loanOption) {
      return;
    }

    element.addEventListener("change", () => {
      if (element.tagName === "SELECT") {
        updatePlaceholderStyle(element);
      }
      if (element === requestAmount) {
        updateEventOptionAvailability();
      }

      if (element === loanHistory) {
        populateLoanStatuses(loanOption.value, loanHistory.value);
      }

      if (element === loanDateInput) {
        updateDiscountBox(loanDateInput.value);
      }

      markResultsStale();
    });

    if (element.tagName === "INPUT" && element.type === "number") {
      element.addEventListener("input", markResultsStale);
    } else if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
      element.addEventListener("input", markResultsStale);
    }
  });

  function populateLoanHistories(option) {
    const config = LOAN_CONFIG[option];

    loanHistory.innerHTML = "";
    if (!config) {
      setSelectPlaceholder(loanHistory, "대출 옵션 선택하고 오기!");
      setSelectPlaceholder(loanStatus, "대출 옵션과 이력 쌍으로 선택하고 오기!");
      return;
    }

    if (option === "웨이팅 대출") {
      setSelectPlaceholder(loanHistory, "여기서 대출 받은 적 있어?");
      addSelectOption(loanHistory, "난 재대출", "난 재대출");
      addSelectOption(loanHistory, "난 처음", "난 처음");
    } else {
      Object.keys(config.histories).forEach((history, index) => {
        const optionEl = document.createElement("option");
        optionEl.value = history;
        optionEl.textContent = history;
        if (index === 0) {
          optionEl.selected = true;
        }
        loanHistory.appendChild(optionEl);
      });
    }

    populateLoanStatuses(option, loanHistory.value);
  }

  function updateEventOptionAvailability() {
    if (!eventOption) return;

    const amountValue = requestAmount.value;
    const shouldDisable =
      amountValue === "10" || amountValue === "50";

    eventOption.disabled = shouldDisable;

    if (eventAmountNote) {
      eventAmountNote.style.display = shouldDisable ? "block" : "none";
    }

    if (shouldDisable && loanOption.value === "이벤트 대출") {
      loanOption.selectedIndex = 0;
    }
  }

  function markResultsStale() {
    if (!resultPanel || resultPanel.classList.contains("hidden")) {
      return;
    }
    resultPanel.classList.add("is-stale");
    if (recalcNote) {
      recalcNote.classList.remove("hidden");
    }
  }

  function clearFieldErrors() {
    document.querySelectorAll(".field-error").forEach((el) => el.remove());
  }

  function showFieldError(fieldEl, message) {
    if (!fieldEl) return;
    const error = document.createElement("p");
    error.className = "field-error";
    const labelText = fieldEl.querySelector("label")?.textContent?.trim();
    error.textContent = labelText
      ? `⚠️ ${message} (${labelText})`
      : `⚠️ ${message}`;
    fieldEl.appendChild(error);
  }

  function isSelectValid(selectEl) {
    if (!selectEl || !selectEl.options.length) return false;
    const option = selectEl.options[selectEl.selectedIndex];
    return option && !option.disabled && Boolean(selectEl.value);
  }

  function isInputValid(inputEl) {
    if (!inputEl) return false;
    const value = inputEl.value.trim();
    if (!value) return false;
    if (inputEl === currentPoints) {
      return !Number.isNaN(toNumber(value));
    }
    return true;
  }

  function validateForm() {
    const validations = [
      { el: requestAmount, type: "select" },
      { el: loanPeriod, type: "select" },
      { el: loanOption, type: "select" },
      { el: loanHistory, type: "select" },
      { el: loanStatus, type: "select" },
      { el: santaApply, type: "select" },
      { el: appApply, type: "select" },
      { el: creditMission, type: "select" },
      { el: communicationStatus, type: "select" },
      { el: currentPoints, type: "input" },
      { el: userName, type: "input" },
      { el: userBirth, type: "input" },
      { el: userPhone, type: "input" },
    ];

    for (const item of validations) {
      const field = item.el?.closest(".field");
      const valid =
        item.type === "select"
          ? isSelectValid(item.el)
          : isInputValid(item.el);
      if (!valid) {
        showFieldError(field, "🤪 선택(또는 입력) 안 하면 뚝딱! 안 눌려져.");
        field?.scrollIntoView({ behavior: "smooth", block: "center" });
        return false;
      }
    }

    return true;
  }

  function formatPoints(value, suffix) {
    if (value === null || value === undefined || Number.isNaN(value)) {
      return "없음";
    }
    const formatted = Number(value).toLocaleString("ko-KR");
    return suffix ? `${formatted}${suffix}` : formatted;
  }

  function formatRateLine(baseRate, discountRate) {
    const base = baseRate && baseRate !== "0%" ? baseRate : "";
    const discount = discountRate && discountRate !== "0%" ? discountRate : "";

    if (base && discount && base !== discount) {
      return `${base} → ${discount}`;
    }
    if (base) return base;
    if (discount) return discount;
    return "없음";
  }

  function formatPointsLine(basePoints, discountPoints) {
    if (!basePoints && !discountPoints) return "없음";
    if (basePoints && discountPoints && basePoints !== discountPoints) {
      return `${formatPoints(basePoints, "포")} → ${formatPoints(
        discountPoints,
        "🅿"
      )}`;
    }
    return formatPoints(discountPoints || basePoints, "🅿");
  }

  function formatChangedRate(rateValue, pointsValue) {
    const rate = toNumber(rateValue);
    const points = toNumber(pointsValue);
    if (!rate && !points) return "없음";
    return rateValue && rateValue !== "0%" ? rateValue : "0%";
  }

  function formatChangedPoints(pointsValue, rateValue) {
    const rate = toNumber(rateValue);
    const points = toNumber(pointsValue);
    if (!rate && !points) return "없음";
    return formatPoints(points, "🅿");
  }

  function setBenefitLines(lines) {
    benefitLines.forEach((line, index) => {
      if (!line) return;
      const text = lines[index] || "";
      line.textContent = text;
      line.classList.toggle("hidden", !text);
    });
  }

  function formatChecklistLine(prefix, doneText, pendingText, isDone) {
    const badge = isDone ? "✅" : "☑️";
    return `${badge} ${prefix} ${isDone ? doneText : pendingText}`;
  }

  function formatSummaryItem(label, valueText) {
    return `${label} ${valueText}`;
  }

  function formatKoreanDate(dateString) {
    if (!dateString) return "";
    const parts = dateString.split("-");
    if (parts.length !== 3) return dateString;
    const [year, month, day] = parts;
    return `${Number(year)}년 ${Number(month)}월 ${Number(day)}일`;
  }

  function formatShortDate(dateString) {
    if (!dateString) return "-";
    const parts = dateString.split("-");
    if (parts.length !== 3) return dateString;
    const [year, month, day] = parts;
    return `${year}.${month}.${day}`;
  }

  function getReviewPeriodText(state) {
    const option = normalizeOption(state.loanOption);
    const history = normalizeHistory(state.loanHistory);
    const status = normalizeStatus(state.loanStatus);
    const schedule = LOAN_REVIEW_SCHEDULE.find(
      (item) =>
        item.option === option &&
        item.history === history &&
        item.status === status
    );

    if (!schedule) return "-";
    if (schedule.startDate === "매일") return "매일";
    if (schedule.startDate && schedule.endDate) {
      return `${formatKoreanDate(schedule.startDate)} ~ ${formatKoreanDate(
        schedule.endDate
      )}`;
    }
    return schedule.startDate || "-";
  }

  function populateLoanStatuses(option, history) {
    if (!LOAN_CONFIG[option]) {
      setSelectPlaceholder(loanStatus, "대출 옵션과 이력 쌍으로 선택하고 오기!");
      return;
    }

    const statusConfig =
      LOAN_CONFIG[option].histories[history]?.statuses || {};
    const statusValues = Object.keys(statusConfig);

    loanStatus.innerHTML = "";
    if (option === "웨이팅 대출") {
      if (history === "난 재대출") {
        setSelectPlaceholder(loanStatus, "깔끔하게 갚았어?");
        addSelectOption(loanStatus, "Clean ✌️", "Clean ✌️");
        addSelectOption(loanStatus, "Non-Clean 😪", "Non-Clean 😪");
      } else if (history === "난 처음") {
        setSelectPlaceholder(loanStatus, "신청헤 본 적은?");
        addSelectOption(loanStatus, "지금 처음 (One ☝️)", "지금 처음 (One ☝️)");
        addSelectOption(loanStatus, "몇 번 (Several 😋)", "몇 번 (Several 😋)");
      } else {
        setSelectPlaceholder(loanStatus, "대출 옵션과 이력 쌍으로 선택하고 오기!");
      }
    } else {
      statusValues.forEach((label, index) => {
        const statusEl = document.createElement("option");
        statusEl.value = label;
        statusEl.textContent = label;
        if (index === 0) statusEl.selected = true;
        loanStatus.appendChild(statusEl);
      });
    }

    if (!statusValues.length) {
      const emptyOption = document.createElement("option");
      emptyOption.value = "";
      emptyOption.textContent = "대출 옵션과 이력 쌍으로 선택하고 오기!";
      loanStatus.appendChild(emptyOption);
    }
  }

  function toggleWaitingFields(option) {
    const isWaiting = option === "웨이팅 대출";
    waitingInfo.classList.toggle("hidden", !isWaiting);

    if (!isWaiting) {
      loanDateInput.value = "";
      resetDiscountBox();
      return;
    }

    if (!loanDateInput.value) {
      loanDateInput.value = getTodayDateString();
    }

    calendarViewDate = new Date(loanDateInput.value);
    renderCalendar(calendarViewDate);
    updateDiscountBox(loanDateInput.value);
  }

  function updateDiscountBox(dateValue) {
    if (!dateValue) {
      resetDiscountBox();
      return;
    }

    const found = findWaitingSeat(dateValue);

    if (!found) {
      waitingPeriod.textContent = "기간 정보 없음";
      discountSeat.textContent = "좌석 정보 없음";
      creditRange.textContent = "-";
      wonmiRate.textContent = "-";
      waitingDateText.textContent = "-";
      return;
    }

    waitingPeriod.textContent = formatRangePeriod(
      found.startDate,
      found.endDate
    );
    discountSeat.textContent = found.seat;
    creditRange.textContent = SEAT_CREDIT_RANGE[found.seat] || "-";
    wonmiRate.textContent = found.principalRate || "-";
    waitingDateText.textContent = formatKoreanDate(dateValue);
  }

  function resetDiscountBox() {
    waitingPeriod.textContent = "-";
    discountSeat.textContent = "-";
    creditRange.textContent = "-";
    wonmiRate.textContent = "-";
    waitingDateText.textContent = "-";
  }

  function getTodayDateString() {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Seoul",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return formatter.format(now);
  }

  function renderCalendar(viewDate) {
    if (!calendarGrid || !calendarMonthLabel) return;

    const year = viewDate.getFullYear();
    const monthIndex = viewDate.getMonth();
    const firstDay = new Date(year, monthIndex, 1).getDay();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const selectedDate = loanDateInput.value
      ? new Date(loanDateInput.value)
      : null;

    calendarMonthLabel.textContent = `${year}년 ${monthIndex + 1}월`;
    calendarGrid.innerHTML = "";

    for (let i = 0; i < firstDay; i += 1) {
      const spacer = document.createElement("div");
      spacer.className = "calendar-day is-empty";
      calendarGrid.appendChild(spacer);
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      const cellDate = new Date(year, monthIndex, day);
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "calendar-day";
      cell.textContent = day;

      const dateValue = toDateValue(cellDate);
      if (selectedDate && isSameDate(cellDate, selectedDate)) {
        cell.classList.add("is-selected");
      }

      cell.addEventListener("click", () => {
        loanDateInput.value = dateValue;
        updateDiscountBox(dateValue);
        renderCalendar(cellDate);
        updateResults();
      });

      calendarGrid.appendChild(cell);
    }
  }

  function toDateValue(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function isSameDate(a, b) {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  function formatKoreanDate(dateValue) {
    const [year, month, day] = dateValue.split("-");
    return `${year}년 ${Number(month)}월 ${Number(day)}일`;
  }

  function formatRangePeriod(startDate, endDate) {
    if (!startDate || !endDate) return "-";
    const [startYear, startMonth, startDay] = startDate.split("-");
    const [endYear, endMonth, endDay] = endDate.split("-");

    if (startYear === endYear && startMonth === endMonth) {
      return `${startYear}년 ${Number(startMonth)}월 ${Number(
        startDay
      )}일 ~ ${Number(endDay)}일`;
    }

    return `${startYear}년 ${Number(startMonth)}월 ${Number(
      startDay
    )}일 ~ ${endYear}년 ${Number(endMonth)}월 ${Number(endDay)}일`;
  }

  function findWaitingSeat(dateValue) {
    const target = new Date(dateValue);
    return WAITING_SEAT_RANGES.find((seat) => {
      const start = new Date(seat.startDate);
      const end = new Date(seat.endDate);
      return target >= start && target <= end;
    });
  }

  function setSelectPlaceholder(selectEl, message) {
    selectEl.innerHTML = "";
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = message;
    placeholder.selected = true;
    placeholder.disabled = true;
    selectEl.appendChild(placeholder);
    updatePlaceholderStyle(selectEl);
  }

  function addSelectOption(selectEl, value, label, isDisabled = false) {
    const optionEl = document.createElement("option");
    optionEl.value = value;
    optionEl.textContent = label;
    if (isDisabled) {
      optionEl.disabled = true;
    }
    selectEl.appendChild(optionEl);
    updatePlaceholderStyle(selectEl);
  }

  function updatePlaceholderStyle(selectEl) {
    if (!selectEl || !selectEl.options.length) return;
    const isPlaceholder =
      selectEl.selectedIndex === 0 && selectEl.options[0].disabled;
    selectEl.classList.toggle("is-placeholder", isPlaceholder);
  }

  function getFormState() {
    return {
      loanOption: loanOption.value,
      loanHistory: loanHistory.value,
      loanStatus: loanStatus.value,
      loanDate: loanDateInput.value,
      requestAmount: toNumber(requestAmount.value),
      loanPeriod: loanPeriod.value,
      rudolphSpecial: rudolphSpecial ? rudolphSpecial.checked : false,
      santaApply: santaApply.value,
      appApply: appApply.value,
      creditMission: creditMission.value,
      communicationStatus: communicationStatus.value,
      currentPoints: toNumber(currentPoints.value) || 0,
      userName: userName.value.trim(),
      userBirth: userBirth.value,
      userPhone: userPhone.value.trim(),
    };
  }

  function normalizeOption(option) {
    if (!option) return "";
    if (option.includes("웨이팅")) return "웨이팅 대출";
    if (option.includes("롸잇나우")) return "롸잇나우 대출";
    if (option.includes("블랙찬스")) return "블랙찬스 티켓";
    if (option.includes("이벤트")) return "이벤트 대출";
    return option;
  }

  function normalizeHistory(history) {
    if (!history) return "";
    if (history.includes("난 재대출")) return "재대출";
    if (history.includes("난 처음")) return "신규";
    return history;
  }

  function normalizeStatus(status) {
    if (!status) return "";
    if (status.includes("Clean")) return "Clean";
    if (status.includes("Non-Clean")) return "Non-Clean";
    if (status.includes("One")) return "One";
    if (status.includes("Several")) return "Several";
    if (status.includes("No Matter") || status.includes("All")) return "No Matter";
    if (status.includes("블찬원") || status.includes("4%원")) return "블찬원";
    if (status.includes("블찬이") || status.includes("블변이")) return "블찬이";
    if (status.includes("블찬현") || status.includes("블현")) return "블찬현";
    if (status.includes("붉은말")) return "붉은말 🔴🐎 대출";
    return status;
  }

  function getSeatForState(state) {
    if (normalizeOption(state.loanOption) === "웨이팅 대출" && state.loanDate) {
      return findWaitingSeat(state.loanDate)?.seat || "";
    }
    if (normalizeOption(state.loanOption) === "롸잇나우 대출") {
      return "Free Seat (자유석)";
    }
    if (normalizeOption(state.loanOption) === "블랙찬스 티켓") {
      return "Thanks Seat (감사석)";
    }
    if (normalizeOption(state.loanOption) === "이벤트 대출") {
      return "Special Seat (특별석)";
    }
    return "";
  }

  function findPointSummaryRow(state) {
    const amountText = `${state.requestAmount}만 원`;
    const option = normalizeOption(state.loanOption);
    const history = normalizeHistory(state.loanHistory);
    const status = normalizeStatus(state.loanStatus);
    const seat = getSeatForState(state);

    let rows = POINT_SUMMARY_TABLE.filter(
      (row) => row.amountText === amountText && row.loanOption === option
    );

    if (history) {
      rows = rows.filter((row) => row.loanHistory === history);
    }

    if (status) {
      rows = rows.filter((row) => row.loanStatus === status);
    }

    if (seat) {
      const seatMatch = rows.find((row) => row.seat === seat);
      if (seatMatch) return seatMatch;
    }

    return rows[0] || null;
  }

  function calculatePoints(state) {
    const summaryRow = findPointSummaryRow(state);

    if (summaryRow) {
      const credit = summaryRow.creditDiscountPoints;
      const interest = summaryRow.interestDiscountPoints;
      const principal = summaryRow.principalDiscountPoints;
      const total = summaryRow.totalPoints || credit + interest + principal;
      const additional = Math.max(total - state.currentPoints, 0);

      return {
        credit,
        interest,
        principal,
        total,
        additional,
      };
    }

    return {
      credit: 0,
      interest: 0,
      principal: 0,
      total: 0,
      additional: Math.max(0 - state.currentPoints, 0),
    };
  }

  function buildSummary(state) {
    if (!LOAN_CONFIG[state.loanOption]) {
      return "-";
    }
    return `${state.loanOption} · ${state.loanHistory || "-"} (${state.loanStatus || "상태 선택"}) · ${state.requestAmount}만원 / ${state.loanPeriod}일`;
  }

  function buildScript(state, result) {
    if (!LOAN_CONFIG[state.loanOption]) {
      return "대출 옵션을 선택해 주세요.";
    }
    const displayName = state.userName || "고객님";
    const periodText = state.loanPeriod === "30" ? "1개월" : `${state.loanPeriod}일`;

    return [
      `안녕하세요 ${displayName} 😊`,
      `새해복 대출 ${state.loanOption} 조건으로 ${state.requestAmount}만원 (${periodText}) 접수 상태를 안내드립니다.`,
      `현재 미션 포인트는 총 ${result.total}점이며, 추가 적립 필요 포인트는 ${result.additional}점입니다.`,
      state.rudolphSpecial
        ? "루돌프 스페셜티가 적용되어 일부 미션이 선반영되었습니다."
        : "루돌프 스페셜티는 아직 미참여 상태예요.",
      `카카오 상담톡에서 확인 후 ${state.loanStatus} 단계 진행 부탁드립니다.`,
    ].join("\n");
  }

  function updateResults() {
    const state = getFormState();
    const result = calculatePoints(state);
    const summaryRow = findPointSummaryRow(state);
    const hasSummary = Boolean(summaryRow);
    const optionLabel = normalizeOption(state.loanOption);
    const historyLabel = state.loanHistory || "";
    const statusLabel = state.loanStatus || "";
    const normalizedHistory = normalizeHistory(state.loanHistory);
    const normalizedStatus = normalizeStatus(state.loanStatus);
    const amountText = state.requestAmount
      ? `${state.requestAmount}만 원`
      : "-";
    const periodText =
      state.loanPeriod === "30"
        ? "1개월 (30일)"
        : state.loanPeriod
        ? `${state.loanPeriod}일`
        : "-";
    const productInfo = LOAN_PRODUCT_TABLE.find(
      (product) => product.amountText === amountText
    );
    const repaymentType =
      summaryRow?.changedRepayment ||
      summaryRow?.baseRepayment ||
      productInfo?.baseRepayment ||
      "-";
    const repaymentDescription =
      productInfo?.description ? ` (${productInfo.description})` : "";
    const seatName = getSeatForState(state);

    if (selectionSummary) {
      selectionSummary.textContent = buildSummary(state);
    }
    if (creditPoints) {
      creditPoints.textContent = `${result.credit} pt`;
    }
    if (interestPoints) {
      interestPoints.textContent = `${result.interest} pt`;
    }
    if (principalPoints) {
      principalPoints.textContent = `${result.principal} pt`;
    }
    if (totalPoints) {
      totalPoints.textContent = `${result.total} pt`;
    }
    if (additionalPoints) {
      additionalPoints.textContent = `${result.additional} pt`;
    }
    if (scriptPreview) {
      scriptPreview.value = buildScript(state, result);
    }

    if (benefitTitle) {
      benefitTitle.textContent = optionLabel
        ? `✨ ${optionLabel}의 가장 큰 혜택`
        : "✨ 대출의 가장 큰 혜택";
      const benefit = LOAN_BENEFITS[optionLabel] || "";
      setBenefitLines([benefit, "", "", ""]);
    }

    if (resultAmount) {
      resultAmount.textContent = `금액 : ${amountText}`;
    }
    if (resultPeriod) {
      resultPeriod.textContent = `기간 : ${periodText}`;
    }
    if (resultOption) {
      resultOption.textContent = `대출 옵션 : ${optionLabel || "-"}`;
    }
    if (resultHistory) {
      resultHistory.textContent = `대출 이력 : ${historyLabel || "-"}`;
    }
    if (resultStatus) {
      resultStatus.textContent = `대출 상태 : ${statusLabel || "-"}`;
    }
    if (resultSeat) {
      const showSeat =
        optionLabel === "웨이팅 대출" && seatName;
      resultSeat.classList.toggle("hidden", !showSeat);
      if (showSeat) {
        resultSeat.textContent = `좌석명 : ${seatName}`;
      }
    }
    if (resultRepayment) {
      resultRepayment.textContent = `상환 방식 : ${repaymentType}${repaymentDescription}`;
    }

    if (reviewPeriod) {
      reviewPeriod.textContent = getReviewPeriodText(state);
    }

    if (creditSummary) {
      if (!summaryRow) {
        creditSummary.textContent = "-";
      } else {
        const creditRate = summaryRow.creditDiscountRate || "0%";
        const creditRateValue = toNumber(creditRate);
        const rateText =
          creditRateValue > 0 ? `${creditRate} 할인` : "할인 없음";
        const statusText = normalizedStatus || "상태";
        creditSummary.textContent = `${statusText}, ${rateText}`;
      }
    }
    if (creditPointsLine) {
      creditPointsLine.textContent = summaryRow
        ? formatPointsLine(
            summaryRow.baseCreditPoints,
            summaryRow.creditDiscountPoints
          )
        : "-";
    }

    if (interestRateLine) {
      interestRateLine.textContent = summaryRow
        ? formatChangedRate(
            summaryRow.interestDiscountRate,
            summaryRow.interestDiscountPoints
          )
        : "-";
    }
    if (interestPointsLine) {
      interestPointsLine.textContent = summaryRow
        ? formatChangedPoints(
            summaryRow.interestDiscountPoints,
            summaryRow.interestDiscountRate
          )
        : "-";
    }

    if (principalRateLine) {
      principalRateLine.textContent = summaryRow
        ? formatChangedRate(
            summaryRow.principalDiscountRate,
            summaryRow.principalDiscountPoints
          )
        : "-";
    }
    if (principalPointsLine) {
      principalPointsLine.textContent = summaryRow
        ? formatChangedPoints(
            summaryRow.principalDiscountPoints,
            summaryRow.principalDiscountRate
          )
        : "-";
    }

    if (totalPointsLine) {
      totalPointsLine.textContent = hasSummary
        ? `${formatPoints(result.total, "🅿")}`
        : "-";
    }
    if (currentPointsLine) {
      currentPointsLine.textContent = `${formatPoints(
        state.currentPoints,
        "🅿"
      )}`;
    }
    if (additionalPointsLine) {
      if (!hasSummary) {
        additionalPointsLine.textContent = "조건 없음";
      } else {
        additionalPointsLine.textContent =
          result.additional > 0
            ? `${formatPoints(result.additional, "🅿")} 적립 필요`
            : "적립 필요 없음";
      }
    }

    const seatInfo = getSeatForState(state);
    let waitingSeat = seatInfo ? findWaitingSeat(state.loanDate) : null;
    if (!waitingSeat && seatInfo) {
      waitingSeat = WAITING_SEAT_RANGES.find(
        (seat) => seat.name === seatInfo
      );
    }
    const reviewText = getReviewPeriodText(state);
    const creditValue = summaryRow?.creditDiscountPoints || 0;
    const interestValue = summaryRow?.interestDiscountPoints || 0;
    const principalValue = summaryRow?.principalDiscountPoints || 0;
    const repaymentTotal = interestValue + principalValue;

    if (step1) {
      const done = santaApply.value.includes("신청했어");
      step1.textContent = formatChecklistLine(
        "⓵ 1️⃣🈷️ 새해복🧧 대출 신청",
        "완료",
        "완료하세요.",
        done
      );
    }
    if (step2) {
      const done = appApply.value.includes("신청했어");
      const amountText = state.requestAmount
        ? `${state.requestAmount}만 원`
        : "-";
      const periodText =
        state.loanPeriod === "30"
          ? "1개월(30일)"
          : state.loanPeriod
          ? `${state.loanPeriod}일`
          : "-";
      step2.textContent = formatChecklistLine(
        `⓶ 써주세요. 앱에서 ${amountText}과 ${periodText} 신청`,
        "완료",
        "완료하세요.",
        done
      );
    }
    if (step3) {
      const creditText = formatPoints(creditValue, "🅿");
      const done = creditValue > 0 && state.currentPoints >= creditValue;
      step3.textContent = formatChecklistLine(
        `⓷ 앱에서 크미 (${creditText})`,
        "완료",
        "완료하세요.",
        done
      );
    }
    if (step3Deadline) {
      step3Deadline.textContent =
        waitingSeat?.creditDeadline || "신청 후 48시간 이내";
    }
    if (step4) {
      const done = communicationStatus.value.includes("디 엔드");
      step4.textContent = formatChecklistLine(
        "⓸ 앱에서 소통거리 미션",
        "완료",
        "완료하세요.",
        done
      );
    }
    if (step4Deadline) {
      step4Deadline.textContent = "크미 완료 후 48시간 이내";
    }
    if (step4Warning) {
      const periodText = reviewText !== "-" ? reviewText : "심사 기간";
      step4Warning.textContent = `⚠️⚠️⚠️여기까지 했다면 앱에선 '검토중'으로 보이겠지만, 실제로는 검토를 안 합니다. 아래 ⓹번까지 완료해야 ${periodText}에 검토 시작됩니다.⚠️⚠️⚠️`;
    }
    if (step5) {
      const done = repaymentTotal > 0 && state.currentPoints >= repaymentTotal;
      step5.textContent = formatChecklistLine(
        "⓹ 포인트 상환 미션(이미 + 원미)",
        "완료",
        "완료하세요.",
        done
      );
    }
    if (step5Interest) {
      if (summaryRow) {
        const rateText = formatChangedRate(
          summaryRow.interestDiscountRate,
          summaryRow.interestDiscountPoints
        );
        const pointsText = formatChangedPoints(
          summaryRow.interestDiscountPoints,
          summaryRow.interestDiscountRate
        );
        step5Interest.textContent = `이자 미션, 이미 (${rateText}) : ${pointsText}`;
      } else {
        step5Interest.textContent = "-";
      }
    }
    if (step5Principal) {
      if (summaryRow) {
        const rateText = formatChangedRate(
          summaryRow.principalDiscountRate,
          summaryRow.principalDiscountPoints
        );
        const pointsText = formatChangedPoints(
          summaryRow.principalDiscountPoints,
          summaryRow.principalDiscountRate
        );
        step5Principal.textContent = `원금 미션, 원미 (${rateText}) : ${pointsText}`;
      } else {
        step5Principal.textContent = "-";
      }
    }
    if (step5Deadline) {
      const showDeadline =
        optionLabel === "웨이팅 대출" && waitingSeat?.principalDeadline;
      step5Deadline.classList.toggle("hidden", !showDeadline);
      if (showDeadline) {
        step5Deadline.textContent = `적립 기한 : ${formatKoreanDate(
          waitingSeat.principalDeadline
        )}까지❗️`;
      } else {
        step5Deadline.textContent = "";
      }
    }
    if (step5Warning) {
      step5Warning.textContent =
        "⚠️⚠️⚠️앱에선 포인트 상환 미션이 따로 보이지 않으니, 포인트 적립소에서 적립하시면 됩니다.⚠️⚠️⚠️";
    }

    if (summaryCredit) {
      if (summaryRow) {
        const creditRate = summaryRow.creditDiscountRate || "0%";
        const creditRateValue = toNumber(creditRate);
        const rateText =
          creditRateValue > 0 ? `${creditRate} 할인` : "할인 없음";
        summaryCredit.textContent = formatSummaryItem(
          `크미 (${rateText}) :`,
          formatPoints(creditValue, "🅿")
        );
      } else {
        summaryCredit.textContent = "-";
      }
    }
    if (summaryInterest) {
      if (summaryRow) {
        const rateText = formatChangedRate(
          summaryRow.interestDiscountRate,
          summaryRow.interestDiscountPoints
        );
        summaryInterest.textContent = formatSummaryItem(
          `이자 미션, 이미 (${rateText}) :`,
          formatChangedPoints(
            summaryRow.interestDiscountPoints,
            summaryRow.interestDiscountRate
          )
        );
      } else {
        summaryInterest.textContent = "-";
      }
    }
    if (summaryPrincipal) {
      if (summaryRow) {
        const rateText = formatChangedRate(
          summaryRow.principalDiscountRate,
          summaryRow.principalDiscountPoints
        );
        summaryPrincipal.textContent = formatSummaryItem(
          `원금 미션, 원미 (${rateText}) :`,
          formatChangedPoints(
            summaryRow.principalDiscountPoints,
            summaryRow.principalDiscountRate
          )
        );
      } else {
        summaryPrincipal.textContent = "-";
      }
    }
    if (summaryTotal) {
      summaryTotal.textContent = `🟰 총 ${formatPoints(result.total, "🅿")} 필요`;
    }
    if (summaryCurrent) {
      summaryCurrent.textContent = `🛢️ 현재 ${formatPoints(
        state.currentPoints,
        "🅿"
      )} 보유`;
    }
    if (summaryAdditional) {
      summaryAdditional.textContent =
        result.additional > 0
          ? `➕ 추가 포인트 ${formatPoints(result.additional, "🅿")} 적립 필요`
          : "➕ 추가 포인트 적립 필요 없음";
    }

    if (pointHintBox) {
      const showHint =
        optionLabel === "웨이팅 대출" ||
        optionLabel === "롸잇나우 대출" ||
        optionLabel === "이벤트 대출";
      pointHintBox.classList.toggle("hidden", !showHint);
    }

    if (pointSubscribeSection) {
      const showSubscribe = optionLabel === "웨이팅 대출";
      pointSubscribeSection.classList.toggle("hidden", !showSubscribe);
      if (showSubscribe && subscribeStartDate) {
        subscribeStartDate.textContent = formatShortDate(state.loanDate);
      }
    }
  }
});

function startClock() {
  const clockEl = document.getElementById("liveClock");
  if (!clockEl) return;

  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const timeFormatter = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
  const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const tick = () => {
    const now = new Date();
    const dateText = dateFormatter.format(now);
    const timeText = timeFormatter.format(now);
    const weekdayName = days[getKoreaWeekdayIndex(now)];
    clockEl.textContent = `${dateText} ${weekdayName}요일 ${timeText}`;
  };

  tick();
  setInterval(tick, 1000);
}

function getKoreaWeekdayIndex(date) {
  const utc = date.getTime();
  const kst = new Date(utc + 9 * 60 * 60 * 1000);
  return kst.getUTCDay();
}
