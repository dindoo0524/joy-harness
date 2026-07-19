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
| `/eng` | 영어 수업 지원 |

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

**목적**: 영어 수업 지원

**Agent**: `english-teaching`

**출력**
- Classroom English
- 발표 스크립트
- 학생 질문
- 자연스러운 영어 표현

**사용 예시**
```text
/eng

이 수업을 영어로 진행할 수 있도록 바꿔줘.
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
