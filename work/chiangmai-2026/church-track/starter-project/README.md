# Challenge Log — Starter v0.1

치앙마이중앙교회 청소년 AI 코딩 프로그램 Church Track에서 쓰는 앱 스타터입니다. 학생이 이 코드를 직접 처음부터 짜지 않고, AI와 대화하며 자신의 프로젝트로 바꿉니다.

## 실행 방법

빌드 과정이 없습니다. `index.html`을 더블클릭해서 브라우저로 열면 바로 실행됩니다.

## 학생이 가장 먼저 바꾸는 파일: `js/config.js`

```js
const CONFIG = {
  appName: "Challenge Log",
  appBadge: "7 DAY",
  missionTitle: "...",
  theme: { primaryColor: "#2f855a", progressColor: "#2f855a" },
  ...
};
```

프로그래밍 용어 대신, 화면에서 본 이름으로 AI에게 요청하면 됩니다.

- "mission-title 글씨를 크게 해줘."
- "progress-fill 색을 초록색으로 바꿔줘."
- "mission-image 아이콘을 바꿔줘."

## Guide Mode

`Alt + G`를 누르면 화면의 모든 요소 위에 `data-guide` 이름표가 표시됩니다(다시 누르면 꺼짐). 어떤 이름으로 AI에게 요청해야 할지 찾을 때 사용합니다.

## 파일 구조

```
starter-project/
  index.html        전체 마크업
  css/
    style.css        실제 화면 디자인
    guide.css         Guide Mode 표시
  js/
    config.js          학생이 바꾸는 값
    storage.js          localStorage 저장/불러오기 (CORE AREA)
    render.js            화면 렌더링 (CORE AREA)
    guide.js              Alt+G 토글 (CORE AREA)
    app.js                 시작점, 이벤트 연결 (CORE AREA)
  assets/images/            (v0.1에서는 비어 있음 — 아이콘은 Material Symbols 사용)
```

`CORE AREA`로 주석 표시된 함수는 이름과 반환 구조를 바꾸면 다른 파일이 연결되지 않을 수 있어 그대로 두는 것을 권장합니다.

## 요약 카드(summary-card) 계산 방식

원래 기획은 "연속 기록(스트릭)"이었지만, v0.1에서는 스펙이 허용한 단순 버전으로 구현했습니다.

- `summary-card-1` (오늘 기록): 오늘 날짜로 추가된 기록 수
- `summary-card-2` (현재 진행): 전체 기록 수를 `targetCount`로 제한한 값 (진행률 바와 동일한 기준)
- `summary-card-3` (전체 기록): 지금까지 추가한 모든 기록 수

실제 "연속 며칠째"를 계산하려면 날짜를 하루씩 비교하는 로직이 필요한데, 다음 버전에서 확장할 수 있습니다.

## 알려진 제한사항

- 기록 수정/삭제 불가 (추가만 가능)
- GitHub Pages 배포 미포함
- 카카오톡 전용 공유, 로그인, 서버 저장 없음
- 복잡한 차트, 여러 페이지 이동 없음
- `localStorage`는 브라우저·기기별로 따로 저장되어 다른 기기와 공유되지 않음

## 다음 작업 후보

- 기록 수정/삭제 기능
- GitHub Pages 배포
- 실제 연속 기록(스트릭) 계산
- Kakao 공유 연동
