# 학생 시뮬레이션 결과물 모음

`../starter-project`를 학생이 AI와 대화하며 자기 프로젝트로 바꿨다면 실제로 어떤 결과물이 나오는지 보여주는 예시들입니다. 각 폴더는 독립적으로 열어볼 수 있는 완성된 앱이고, 폴더 안 `README.md`에 어떤 요청으로 어디가 바뀌었는지 정리돼 있습니다.

| 폴더 | 상태 | 한 줄 설명 |
|---|---|---|
| [01-gratitude-note](01-gratitude-note/) | 완성 | 감사노트 — config.js 값 교체 위주, 오늘 기록만 아직 미체크 |
| [02-prayer-challenge](02-prayer-challenge/) | 완성 | 기도챌린지 — config.js + CSS(`.mission-title` font-size) 수정, 완주 스트릭 |
| [03-workout-log](03-workout-log/) | 폴더만 (내용 비움) | 헬스노트 — 최소 커스터마이징 예정 |
| [04-reading-challenge](04-reading-challenge/) | 폴더만 (내용 비움) | 독서챌린지 — CSS 라운드 처리 예정 |
| [05-kindness-challenge](05-kindness-challenge/) | 폴더만 (내용 비움) | 친절실천 — 하단 메뉴 라벨 수정 예정 |
| [06-digital-detox](06-digital-detox/) | 폴더만 (내용 비움) | 디지털디톡스 — 스트릭 끊긴 케이스 예정 |

## 주의할 점

- `starter-project`가 아직 수정 중이라 03~06은 폴더 구조만 잡아두고 내용은 비워뒀습니다. Starter 베이스가 확정되면 그 위에 순서대로 채웁니다.
- 각 예시는 `js/storage.js`의 `STORAGE_KEY`에 폴더 이름 접미사를 붙여, 같은 브라우저에서 여러 예시를 연달아 열어도 `localStorage` 기록이 섞이지 않게 해뒀습니다(DEMO 전용 조정, 실제 Starter에는 없음).
- 여기 있는 예시들은 "정답"이 아니라 Starter를 얼마나 바꾸면 어떤 결과가 나오는지 보여주는 참고용입니다.
