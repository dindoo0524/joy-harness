// STUDENT CUSTOM AREA
// 아래 값을 자유롭게 바꿔보세요. 따옴표 안의 글자, #으로 시작하는 색상 코드,
// 숫자를 바꾸면 화면 문구와 색이 바로 바뀝니다.
const CONFIG = {
  // 화면 위쪽 (app-logo, app-badge)
  appName: "Challenge Log",
  appBadge: "7 DAY",

  // 미션 카드 (mission-category, mission-title, mission-description)
  missionCategory: "TODAY'S MISSION",
  missionTitle: "하루 한 번, 나의 도전을 기록해요",
  missionDescription: "작지만 꾸준한 기록이 나만의 성장 이야기가 됩니다.",

  // 미션 카드 오른쪽 아이콘 (mission-image)
  // 아이콘 이름은 https://fonts.google.com/icons 에서 찾을 수 있어요.
  missionImageIcon: "rocket_launch",

  // 목표로 하는 기록 개수 (progress-fill, progress-label 계산에 사용)
  targetCount: 7,

  // 앱의 포인트 색상
  theme: {
    primaryColor: "#2f855a",
    progressColor: "#2f855a",
  },

  // 하단 메뉴 (bottom-nav) 아이콘과 이름
  navigation: {
    home: { icon: "home", label: "홈" },
    record: { icon: "edit_note", label: "기록" },
    summary: { icon: "monitoring", label: "요약" },
    more: { icon: "more_horiz", label: "더보기" },
  },
};
