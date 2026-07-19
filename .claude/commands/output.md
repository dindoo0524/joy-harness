---
description: Output Target(어디서 쓸지)과 Output Quality(얼마나 다듬을지)를 독립적으로 조합해서 결과물을 만든다. 예 - /output notion --draft, /output html --final
argument-hint: <target> --<quality> [내용/파일/지시]
---

$ARGUMENTS를 파싱해서 Output Target과 Output Quality를 조합해 결과물을 만든다.

## 파싱 규칙

- 첫 단어 = **Target** (`notion` / `docs` / `artifact` / `html` / `prompt` / `brief`)
- `--`로 시작하는 단어 = **Quality** (`--draft` / `--review` / `--clean` / `--final` / `--share`)
- 나머지 = 실제로 출력할 내용, 참조할 파일, 또는 지시사항
- Target이 없으면 반드시 되묻는다 (기본값 없음). Quality가 없으면 `--draft`를 기본값으로 제안하고 확인 후 진행한다.

## Output Target

### `notion`
노션에 바로 붙여넣기 위한 Markdown. Markdown 코드블록 사용, 불필요한 줄바꿈 최소화, Heading 구조 유지, 체크박스 정상 동작, 복붙 후 수정이 거의 필요 없어야 한다. **`markdown-document` subagent 재사용** (`/md`와 같은 agent).

### `docs`
프로젝트 `docs/` 폴더에 저장하기 위한 Markdown. Git 친화적인 구조, 파일명 제안, 문서 목적을 첫 줄에 명확히, 장기 유지보수 가능한 형태. `markdown-document` subagent를 쓰되, 저장 경로·파일명까지 제안한다.

### `artifact`
Lesson Plan, Worksheet, Activity Guide 등 결과물 중심 출력. Artifact 단위로 저장 가능한 형태. 어떤 Artifact를 만드는지에 맞춰 기존 subagent로 라우팅한다 — Worksheet → `worksheet`, Activity → `activity-designer`, Lesson Page → `html-lesson` 등. 어떤 Artifact인지 불명확하면 되묻는다.

### `html`
단일 HTML 파일 출력. CSS 포함 가능, 배포 가능한 형태. **`html-lesson` subagent 재사용** (`/lesson`, `/card`와 같은 agent).

### `prompt`
다른 AI에게 전달 가능한 Prompt 생성. 대화 맥락 없이도 이해 가능한 독립적 텍스트로 작성한다 — 로컬 파일 경로나 "아까 말씀하신 것처럼" 같은 표현 금지 (`/session-summary`와 동일 원칙).

### `brief`
공유용 요약본 (카톡, 이메일, 목사님 공유, 학부모 안내 등). 전달 대상에 맞는 톤과 길이로, 핵심만 전달한다.

## Output Quality

### `--draft`
빠른 초안. 속도 우선, 구조 중심, 문장 다듬기 최소. **사용 시점**: 아이디어 탐색, 기획 초안.

### `--review`
검토용. 논리 확인, 중복 제거, 누락 점검. **사용 시점**: 리뷰 직전.

### `--clean`
프로젝트 문서 품질. 문장 정리, 구조 개선, 장기 보관 가능한 수준. **사용 시점**: docs 저장.

### `--final`
최종 배포 품질. 문장 완성, 표현 통일, 가독성 최적화. **사용 시점**: 공유·배포·출력 직전.

### `--share`
공유 최적화. 짧고 읽기 쉬움, 핵심만 전달, 대상 맞춤(목사님/학부모/팀원 등). **사용 시점**: 외부 공유 직전.

## 결합 원칙

Output은 단순한 파일 형식이 아니라 "어디에서 쓸지(Target)"와 "어느 수준까지 다듬을지(Quality)"를 함께 정의한다. Target이 무엇을 만들지·어떤 subagent를 쓸지 정하고, Quality가 그 결과물의 완성도를 정한다. 둘은 서로 독립적으로 자유롭게 조합한다.

새 Target이나 Quality가 추가돼도 이 구조(파싱 → Target 정의 → Quality 정의 → 결합)는 그대로 유지하고, 위 목록에 항목만 추가한다 — 기존 구조를 고치지 않는다.

## 예시

```
/output notion --draft   → 노션에 붙여넣을 빠른 초안
/output notion --final   → 노션에 붙여넣을 최종본
/output docs --clean     → docs/ 폴더에 저장할 장기 보관용 문서
/output html --final     → 배포 가능한 최종 HTML
/output prompt --share   → 다른 AI에게 공유할 압축된 프롬프트
```
