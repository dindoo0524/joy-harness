---
description: 작은 미션 하나를 설계하고, docs/missions/에 고유 Mission ID로 파일을 생성한다.
argument-hint: [오늘 하고 싶은 주제/방향 (선택)]
---

현재 프로젝트 맥락을 바탕으로 작은 미션 하나를 설계하고 `docs/missions/`에 파일로 만든다. 목표는 프로젝트를 완성하는 것이 아니라, 실제 작업을 한 단계 앞으로 진행시키는 것이다.

## Mission 철학

Mission은 단순한 TODO가 아니다. Mission은 프로젝트를 구성하는 가장 작은 실행 단위(Unit of Work)이며, 프로젝트의 성장 기록이다. Mission 하나는 하나의 의미 있는 진전을 만든다. 프로젝트는 Mission들의 연속으로 완성된다.

Mission은 하루 단위가 아니다. 하루에 여러 개가 생길 수도, 며칠에 걸쳐 하나만 진행할 수도 있다. 날짜는 메타데이터일 뿐이고, **Mission ID가 프로젝트의 기준**이다.

## Mission ID & 파일 이름

1. `docs/missions/` 폴더를 확인해서 가장 마지막 Mission 번호를 찾는다 (폴더가 없거나 비어있으면 M001부터 시작).
2. 다음 번호를 자동 생성한다 (M037 → M038). 사용자가 번호를 직접 입력할 필요는 없다.
3. Mission ID는 영구 식별자(Permanent ID)다 — 절대 재사용하거나 변경하지 않는다.
4. 파일명 형식: `M{ID}-{YYYYMMDD}-{짧은-slug}.md`
   - 좋은 예: `M012-20260802-session1.md`, `M013-20260802-review.md`
   - 나쁜 예: `M013-20260802-first-session-program-overview-final-v2.md` (slug는 최대한 짧고 명확하게)
5. `docs/missions/` 안에 실제 파일로 생성한다 — 채팅 출력만으로 끝내지 않는다.

## 진행 순서

`$ARGUMENTS`로 방향이 주어졌으면 그것을 기준으로 삼는다. 없으면 최근 대화 맥락(직전 우선순위, 열려있는 항목 등)에서 후보를 파악하되, 방향이 애매하거나 여러 후보가 있으면 먼저 사용자에게 되묻는다 — 잘못된 Scope로 시작하면 뽀모도로를 낭비하게 되므로, 확신 없이 진행하지 않는다.

Mission 문서는 아래 구조로 **생성과 동시에** 작성한다:

```
# Mission M{ID}

Status: Planned
Date: {YYYY-MM-DD}
Title: {미션 이름}

---

## Objective

{이번 미션의 목표}

---

## Scope

포함
- ...

제외
- ...

---

## Mission Budget

Expected: 🍅🍅🍅 (N)
Minimum: 🍅🍅 (N)
Maximum: 🍅🍅🍅🍅🍅 (N)

---

## Success Criteria

반드시 달성
- ...

추가 성공
- ...

---

## Deliverables

- ...

---

## First Pomodoro

{15분 안에 끝낼 수 있는 수준까지 아주 구체적으로 — "교회 수업 기획하기" 같은 큰 단위 금지}

---

## Actual

Pomodoro Used: -
Started: -
Finished: -
Duration: -
Status: Planned

---

## Reflection

잘된 점
-

어려웠던 점
-

다음 시작점
-
```

Expected는 가장 현실적인 예상 작업량이어야 한다. Scope는 작고 명확하게, 하루 안에 끝낼 수 있는 수준으로 제한한다.

## Mission 완료

Mission 종료 시(`/wrap-up` 등)에는 이 파일이 아니라 **해당 Mission 문서 자체**를 아래 항목 기준으로 업데이트한다 (자세한 절차는 `.claude/commands/wrap-up.md` 참고):

- Status → `Completed` / `Cancelled` / `Paused`
- Actual (Pomodoro Used, Started, Finished, Duration)
- Reflection (잘된 점 / 어려웠던 점 / 다음 시작점)

**Estimated vs Actual**(Expected 🍅 대비 실제 사용량)은 반드시 기록한다 — 작업 추정 정확도, 작업 유형별 소요 시간, 프로젝트 회고에 쓰이는 핵심 데이터다.

## 원칙

- 큰 프로젝트를 작은 실행 가능한 미션으로 나눈다.
- 첫 Pomodoro는 생각보다 더 작게 제안한다.
- 오늘 끝낼 수 없는 일을 오늘의 Scope에 넣지 않는다.
- 결과물(Output)을 항상 명확하게 정의한다.
- 실제 작업을 시작하기 쉬운 상태를 만드는 것을 가장 중요한 목표로 한다.
- Mission 문서들은 프로젝트의 성장 기록이다 — `docs/missions/` 폴더만 봐도 프로젝트가 어떤 작은 단계들을 거쳐 성장했는지 한눈에 이해할 수 있어야 한다.
