# 학생 시뮬레이션 결과물 — "기도챌린지"

`../../starter-project`를 학생이 21일 기도 챌린지용으로 바꿔 3주 가까이 매일 기도하고 그날그날 체크까지 해왔다고 가정한 예시입니다. 다른 예시들은 [`../README.md`](../README.md)에 모아뒀습니다.

## 학생이 한 요청 → 바뀐 곳

| 학생이 한 말 | 바뀐 곳 |
|---|---|
| "앱 이름을 '기도챌린지'로, 21일 목표로 바꿔줘" | `config.js` → `appName`, `appBadge`, `targetCount` |
| "미션 문구를 매일 5분 기도하고 한 줄 남기기로 바꿔줘" | `config.js` → `missionTitle`, `missionDescription` |
| "아이콘을 명상하는 사람 모양으로 바꿔줘" | `config.js` → `missionImageIcon` (`self_improvement`) |
| "포인트 색을 보라색으로 바꿔줘" | `config.js` → `theme.primaryColor`/`progressColor` (`#7c3aed`) |
| "mission-title 글씨를 좀 더 크게 해줘" | `css/style.css` → `.mission-title { font-size }` (19px → 23px, `data-guide` 이름으로 요청한 CSS 레벨 수정 예시) |

## 이 예시가 보여주는 것

이 학생은 다른 예시보다 한 단계 더 나아가, `config.js` 값 교체를 넘어 `css/style.css`를 직접 수정해달라고 요청했습니다 (`starter-project/README.md`의 4단계 "더 세밀하게 바꾸고 싶으면 `data-guide` 이름으로 CSS 수정을 요청한다"에 해당). `CORE AREA`(`storage.js`/`render.js`/`guide.js`/`app.js`)는 여전히 그대로입니다.

`js/demo-seed.js`가 하루도 빠짐없이 이어진 11일치 기록(오늘 포함)을 채워 넣고, **전부 그날 바로 체크까지 완료** 처리해 다음과 같은 화면이 됩니다.

- **오늘 기록**: 1
- **남은 도전**: 10 (목표 21 − 체크 완료 11)
- **연속 기록**: 11 (하루도 안 빠지고 체크가 이어짐)
- **진행률**: 11 / 21 완료 (52%)
- 기록 목록의 11개 모두 체크 아이콘(●)과 취소선으로 표시됩니다 (체크 안 한 기록이 하나도 없는 예시).

`js/storage.js`의 `STORAGE_KEY`에는 `__02-prayer-challenge` 접미사가 붙어 있습니다. 여러 예시를 같은 브라우저에서 연달아 열어봐도 기록이 서로 섞이지 않게 하기 위한 DEMO 전용 조정입니다.
