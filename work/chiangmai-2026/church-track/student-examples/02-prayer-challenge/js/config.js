// STUDENT CUSTOM AREA
//
// 바꿔도 되는 것: 따옴표(" ") 안의 글자, #으로 시작하는 색상 코드, 숫자.
// 바꾸면 안 되는 것: appName, theme, home 처럼 콜론(:) 왼쪽에 있는 이름(key).
//                   이 이름들은 다른 파일(js/render.js, js/app.js)이 화면을
//                   그릴 때 그대로 찾아 쓰는 값이라, 바꾸면 화면이 비어 보이거나
//                   멈출 수 있어요.
const CONFIG = {
  // 화면 위쪽 (app-logo, app-badge)
  appName: "기도챌린지",
  appBadge: "21 DAY",

  // 미션 카드 (mission-category, mission-title, mission-description)
  missionCategory: "오늘의 기도",
  missionTitle: "매일 5분 기도하고 한 줄 남기기",
  missionDescription: "짧아도 매일 이어가는 기도가 힘이 됩니다.",

  // 미션 카드 오른쪽 아이콘 (mission-image)
  // 아이콘 이름은 https://fonts.google.com/icons 에서 찾을 수 있어요.
  missionImageIcon: "self_improvement",

  // 목표로 하는 완료 체크 개수 (progress-fill, progress-label, 요약 카드 계산에 사용)
  // 0보다 큰 숫자로만 바꾸세요.
  targetCount: 21,

  // 앱의 포인트 색상. "#으로 시작하는 6자리 색상 코드"만 넣으세요.
  // (예: 빨강 "#e53e3e", 파랑 "#2563eb")
  theme: {
    primaryColor: "#7c3aed",
    progressColor: "#7c3aed",
  },

  // 하단 메뉴(bottom-nav) 아이콘과 이름.
  // home / record / summary / more 라는 이름(key)은 그대로 두고,
  // 안쪽의 icon, label 값만 바꾸세요.
  navigation: {
    home: { icon: "home", label: "홈" },
    summary: { icon: "monitoring", label: "요약" },
    record: { icon: "edit_note", label: "기록" },
    more: { icon: "more_horiz", label: "더보기" },
  },
};
