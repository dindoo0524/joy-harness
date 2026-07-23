# Challenge Log — Starter v0.1

치앙마이중앙교회 청소년 AI 코딩 프로그램 Church Track에서 쓰는 앱 스타터입니다. 학생이 이 코드를 직접 처음부터 짜지 않고, AI와 대화하며 자신의 프로젝트로 바꿉니다.

## 이 Starter의 목적

학생이 빈 화면에서 코드를 짜는 대신, **이미 동작하는 앱을 자기 것으로 바꾸는 경험**을 하는 것이 목적입니다. "React", "함수", "DOM" 같은 개발 용어 대신 화면에 보이는 이름(`data-guide`)으로 AI에게 요청하면서 디자인과 문구를 바꿔갑니다.

## 학생이 수정하는 순서

1. `index.html`을 열어 지금 상태로 실행되는지 확인한다.
2. `Alt + G`(Guide Mode)로 화면 구조와 각 영역의 이름을 확인한다.
3. `js/config.js`에서 앱 이름·문구·색·아이콘 같은 값부터 바꿔본다.
4. 더 세밀하게 바꾸고 싶으면, `data-guide` 이름으로 AI에게 `css/style.css` 수정을 요청한다.
5. 완성되면 발표한다.

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

`config.js`부터 바꾸는 이유는, 이 파일이 **값만 바꾸는 안전한 곳**이기 때문입니다. `storage.js`/`render.js`/`guide.js`/`app.js`는 `CORE AREA` 주석이 붙어 있는데, 이 파일들은 서로 함수 이름으로 연결되어 있어서 구조를 바꾸면 앱이 멈출 수 있습니다. 반면 `config.js`는 문자열·숫자·색상 코드만 바꾸면 되므로 실수해도 앱이 잘 멈추지 않습니다.

프로그래밍 용어 대신, 화면에서 본 이름으로 AI에게 요청하면 됩니다.

- "mission-title 글씨를 크게 해줘."
- "progress-fill 색을 초록색으로 바꿔줘."
- "mission-image 아이콘을 바꿔줘."

## data-guide와 Guide Mode

화면의 모든 주요 영역에는 `id`(JavaScript가 찾는 이름), `class`(CSS 스타일용 이름)와 별개로 `data-guide`라는 이름이 붙어 있습니다. `data-guide`는 **학생과 AI가 화면 영역을 부를 때 쓰는 공통 이름**입니다. 개발 용어를 몰라도 "mission-title", "progress-fill"처럼 화면에서 본 이름 그대로 AI에게 요청할 수 있게 해줍니다.

어떤 이름을 써야 할지 모르겠으면 `Alt + G`를 누르세요. 화면의 모든 요소 위에 `data-guide` 이름표가 표시됩니다(다시 누르면 꺼짐).

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
