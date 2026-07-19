# Joy Harness Commands

이 문서는 Joy Harness Production System의 **사용자 매뉴얼**입니다. 사용자는 내부 Agent나 Template를 알 필요 없이, 여기 있는 Command만 기억하면 됩니다.

```
User → Command → Agent → Template → Result
```

Agent와 Template는 언제든 바뀔 수 있지만, Command는 그대로 유지됩니다. 새 Command가 추가되거나 제거될 때는 이 문서도 함께 업데이트합니다.

---

## Content Creation

| Command | 설명 |
|---------|------|
| `/card` | 카드형 HTML 생성 |
| `/worksheet` | 학생 활동지 생성 |
| `/lesson` | 수업 페이지 HTML 생성 |
| `/md` | 노션 Markdown 생성 |

## Teaching

| Command | 설명 |
|---------|------|
| `/activity` | 프로젝트형 활동 설계 |
| `/review` | 수업 콘텐츠 리뷰 |
| `/eng` | 영어 수업 지원 (Claire — 자신감 우선 코칭 스타일) |

## Workflow

| Command | 설명 |
|---------|------|
| `/publish` | 완성된 콘텐츠를 `published/`에 최종본으로 정리 |
| `/commit` | 현재 변경사항을 git commit (push는 안 함) |
| `/commit-push` | 현재 변경사항을 commit하고 origin에 push |

> `/publish`, `/commit`, `/commit-push`는 "결과물 생성"이 아니라 작업을 마무리/반영하는 워크플로우 커맨드라, 위 Command Mapping 원칙(하나의 Command = 하나의 대표 결과물)과는 성격이 다릅니다. 별도 카테고리로 분리했습니다.

## Meta

| Command | 설명 |
|---------|------|
| `/new-command` | 새 Slash Command를 일관된 구조로 생성 (Command Generator) |
| `/plan` | 막연한 아이디어를 고품질 실행 프롬프트로 다듬은 뒤 승인 시 실행 (Prompt Architect) |
| `/wrap-up` | 이번 세션 작업 요약 + 남은 TODO/논의거리 체크리스트 + 공유용 Session Summary |
| `/session-summary` | 지금까지의 대화를 공유 가능한 독립 요약으로만 (TODO 체크 없이, 언제든 사용 가능) |

## Future

- `/image`
- `/slides`
- `/poster`
- `/banner`
- `/landing`
- `/curriculum`
- `/proposal`
- `/translate`
- `/checklist`

---

## `/card`

**목적**: 카드형 HTML 생성

**Agent**: `html-lesson`
**Template**: `.claude/templates/html/postcard.html`

**출력**
- 중보기도 카드
- 홍보 카드
- 소개 카드
- 감사 카드

**사용 예시**
```text
/card

치앙마이 중보기도 카드를 만들어줘.
```

---

## `/worksheet`

**목적**: 학생 활동지 생성

**Agent**: `worksheet`
**Template**: `.claude/templates/html/worksheet.html`

**출력**
- Student Worksheet
- Teacher Note

**사용 예시**
```text
/worksheet

잼샌드위치 알고리즘 활동지를 만들어줘.
```

---

## `/lesson`

**목적**: 수업 페이지 생성

**Agent**: `html-lesson`
**Template**: `.claude/templates/html/lesson.html`

**출력**
- Lesson Page
- 수업 자료
- 프로젝트 소개

**사용 예시**
```text
/lesson

Discovery Lab 소개 페이지를 만들어줘.
```

---

## `/md`

**목적**: 노션 Markdown 생성

**Agent**: `markdown-document`
**Template**: `.claude/templates/markdown/`

**출력**
- 수업계획서
- 회의록
- 제안서
- 기획서

**사용 예시**
```text
/md

오늘 회의를 노션 문서로 정리해줘.
```

---

## `/review`

**목적**: 수업 콘텐츠 리뷰

**Agent**: `lesson-review`

**출력**
- 개선사항
- 학생 관점 피드백
- 교사 관점 피드백
- 위험 요소

**사용 예시**
```text
/review

이 수업안을 검토해줘.
```

---

## `/eng`

**목적**: 영어 수업 지원 — Claire(20년차 영어 교사 페르소나)가 코칭 스타일로 지원. 사용자가 직접 쓴 영어 초안을 처음부터 다시 쓰지 않고, 끝까지 스스로 표현하도록 기다린 뒤 막히는 부분만 작은 힌트로 돕는다. 완벽한 영어보다 사용자가 자신감을 갖고 영어로 수업하는 것이 목표.

**Agent**: `english-teaching` (Claire)

**출력** (상황에 따라 필요한 것만)
- Classroom English
- Activity Script
- Presentation Script
- Student Questions
- Vocabulary Hint
- Alternative Expressions

**사용 예시**
```text
/eng

이 수업을 영어로 진행할 수 있도록 바꿔줘.
```

```text
/eng

내가 써본 문장인데 막히는 부분만 살짝 도와줘: "Today we make a robot..."
```

---

## `/activity`

**목적**: 프로젝트형 활동 설계

**Agent**: `activity-designer`

**출력**
- 활동 흐름
- 준비물
- 진행 순서
- 발표 방식

**사용 예시**
```text
/activity

50분 언플러그드 알고리즘 활동을 설계해줘.
```

---

## `/publish`

**목적**: 완성된 콘텐츠를 현장에서 바로 쓸 수 있는 형태로 정리

**출력**
- `published/YYYY-MM-DD-<slug>/` 아래로 정리된 최종본

**사용 예시**
```text
/publish

.claude/templates/html/lesson.html 로 만든 결과물을 정리해줘.
```

---

## `/commit`

**목적**: 현재 변경사항을 git commit (push는 하지 않음)

**출력**
- 새 커밋 (관련 파일만 스테이징, "왜" 중심 메시지)

**사용 예시**
```text
/commit
```

---

## `/commit-push`

**목적**: 현재 변경사항을 commit하고 origin에 push

**출력**
- 새 커밋 + push된 원격 브랜치

**사용 예시**
```text
/commit-push
```

---

## `/new-command`

**목적**: 새 Slash Command를 일관된 구조로 생성하는 Command Generator

**출력**
- `.claude/commands/<name>.md`
- `docs/commands.md` 업데이트 (표 + 상세 섹션)
- 재사용 가능한 Agent/Template 연결, 또는 신규 필요 시 제안(자동 생성하지 않음)
- CLAUDE.md 반영이 필요하면 제안

**사용 예시**
```text
/new-command

Name: poster
Purpose: 포스터 HTML 생성
```

---

## `/plan`

**목적**: 막연한 아이디어를 `prompt-architect` subagent와 함께 고품질 실행 프롬프트로 다듬고, 승인되면 Main Claude가 바로 실행

**Agent**: `prompt-architect` (Read/Grep/Glob만 가능 — 직접 파일을 만들거나 코드를 쓰지 않음)

**출력**
- 버전이 매겨진 실행 프롬프트 (v1 → v2 → ... 최신 버전만 유지)
- `Prompt Approved` 승인 블록
- 승인 후 Main Claude의 실제 실행 결과

**사용 예시**
```text
/plan

학생 진도 추적 기능을 뭔가 만들고 싶어. 아직 구체적이진 않아.
```

---

## `/wrap-up`

**목적**: 세션을 끝내기 전에 이번 세션에서 한 작업을 요약하고, 남은 TODO·열린 논의거리를 체크리스트로 정리 (커밋 안 된 변경사항, 보류된 논의, 답 안 된 질문 등 확인). 추가로 이 대화를 모르는 사람/다른 AI에게 그대로 공유할 수 있는 독립적인 Session Summary도 만든다.

**출력**
- 이번 세션 작업 요약 (파일 변경, 커밋, 주요 결정) — 내부용
- 남은 TODO/논의거리 체크리스트 (없으면 "안전하게 끊어도 됨" 안내)
- **Session Summary** — `/session-summary`와 동일한 방식으로 만드는 공유용 Markdown 블록
- 미기록 open item이 있으면 메모리 저장 여부를 먼저 확인

**사용 예시**
```text
/wrap-up
```

---

## `/session-summary`

**목적**: 지금까지의 대화를 이 대화를 전혀 모르는 독자(다른 AI 포함)도 이해할 수 있는 독립적인 요약으로 만든다. `/wrap-up`과 달리 TODO 체크리스트나 커밋 상태 확인은 하지 않고, 세션 도중 언제든 가볍게 쓸 수 있다.

**출력**
- 공유 가능한 Session Summary 하나 (Project / What happened / Key decisions / Current state / Open next steps), code fence로 감싸서 바로 복사 가능하게

**사용 예시**
```text
/session-summary
```
