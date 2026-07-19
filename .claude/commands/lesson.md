---
description: 수업 활동 설계부터 HTML 수업 페이지까지 한 번에 만든다.
argument-hint: <수업 주제> / <대상> / <시간>
---

다음 요청으로 수업 콘텐츠 전체를 만든다: $ARGUMENTS

1. `activity-designer` subagent로 활동(순서/준비물/진행 방법/발표 방식)을 설계한다.
2. 설계된 활동을 바탕으로 `html-lesson` subagent로 학생에게 보여줄 단일 HTML 수업 페이지를 만든다.
3. 결과 HTML 파일 경로를 알려준다.

대상 연령이나 시간이 명시되지 않았으면 진행 전에 되묻는다.
