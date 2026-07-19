# Mission M001

Status: Completed
Date: 2026-07-19
Title: Church Track Program Overview 초안 작성

---

## Objective

School Track처럼 실제 콘텐츠를 만들기 전에, Church Track의 기본 파라미터(대상/목표/톤/제약)를 확정하고 Program Overview 초안을 만든다. 지금은 Church Track에 대해 "교회 청소년 대상, 한국어 진행"만 알려져 있어서, 콘텐츠부터 만들면 School Track 때처럼 나중에 뒤집힐 가능성이 크다.

---

## Scope

포함
- Church Track 기본 정보 확인 (대상 연령/인원, 목표, 세션 구성, 톤/분위기, 제약사항)
- Program Overview 문서 초안 작성 (School Track과 어떻게 다른지 명시)

제외
- 실제 세션 콘텐츠(워크시트/스크립트 등) 제작
- Private Group 트랙
- 기존 School Track 자료 수정

---

## Mission Budget

Expected: 🍅🍅🍅 (3)
Minimum: 🍅🍅 (2)
Maximum: 🍅🍅🍅🍅🍅 (5)

---

## Success Criteria

반드시 달성
- Church Track 기본 파라미터(대상/인원/목표/세션 구성) 확정
- Program Overview 문서 초안 존재

추가 성공
- `work/` 폴더 구조까지 스캐폴딩
- Session 1 주제 후보 도출

---

## Deliverables

- Church Track Program Overview (문서)
- (달성 시) `work/chiangmai-2026/church-track/` 폴더 구조

---

## First Pomodoro

Church Track 기본 정보를 질문으로 확인받는다: 대상 연령/인원, 목표, 세션 수·시간, 톤/분위기, 꼭 들어가야 할 요소가 있는지. 문서 작성은 하지 않는다 — 이번 뽀모도로는 질문하고 답 받는 것까지만.

---

## Actual

Pomodoro Used: - (사용자 미기록 — Claude가 추측으로 채우지 않음, 실제 값은 사용자 확인 필요)
Started: 2026-07-19 (문서만 작성된 채 방치 — 재개 시점에 "새 Mission 만들지 말고 M001을 실제로 끝내라"는 방향으로 정정)
Finished: 2026-07-19 (같은 날, 여러 라운드에 걸쳐 완료)
Duration: 한 세션 내 여러 라운드 (기본 파라미터 질문 → 포스터 기반 1차 초안 → GPT 컨텍스트로 Starter Kit/사전지식 확인 → GPT 컨텍스트로 인원/노트북/학부모 확인 → GPT 컨텍스트로 Discovery Showcase 발표회 형식 확인 → 커밋/push)
Status: Completed

---

## Reflection

잘된 점
- 포스터 한 장으로 대상/목표/톤/제약사항이 한 번에 명확해짐 — 참고 자료(포스터, 기존 GPT 대화)를 먼저 받는 게 질문보다 빠름
- School Track 커리큘럼 문서를 참고해서 "차이점 비교표"를 넣으니 Church Track 포지셔닝이 뚜렷해짐
- 사용자가 별도 ChatGPT 스레드에 이미 쌓아둔 맥락(Starter Kit 기술스택, Discovery Showcase 발표회 구조)을 프롬프트로 뽑아와 붙여넣는 방식이 잘 작동함 — Claude Code가 모르는 디테일을 빠르게 채울 수 있었음
- Discovery Showcase처럼 "초안에는 없던 더 완성도 높은 기존 계획"이 있을 때, 사용자가 바로 얘기해줘서 잘못된 추측("아이디어 단계") 대신 실제 확정안으로 바로 교체됨

어려웠던 점
- Mission 문서를 먼저 만들고 실제 First Pomodoro(질문하기)를 바로 실행하지 않아서, 시작이 늦어짐 — 문서 작성과 실제 착수를 분리해서 착수를 뒤로 미루지 않기
- 참가 인원/팀 수, 학부모 참여 범위는 교회 측 신청 마감 전이라 이번 Mission 안에서 완전히 못 닫힘 (2026-07-21 확인 예정) — 외부 일정에 막힌 TBD와 "질문만 하면 풀리는" TBD를 구분해서 다룰 필요

다음 시작점
- 2026-07-21(화) 즈음 참가 인원/학부모 참여 최종안 확인되면 program-overview.md §2, §10 업데이트
- 발표회 세부 운영(전체 시간/사회자/참관 대상/오프닝·시상·사진·다과)은 별도로 GPT에 확인해서 채우기
- Section 후보(4개) 중 Day1-① "팀 빌딩 + 문제 정의"부터 구체적 커리큘럼 설계 (다음 Mission, M002)
