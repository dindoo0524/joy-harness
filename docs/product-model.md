# Joy Harness Product Model

이 문서는 Joy Harness의 구현 문서가 아니라, **Product Constitution**입니다. 앞으로 수백 개의 기능이 추가되더라도 흔들리지 않아야 할 제품의 정체성과 개념 구조를 정의하며, 이후의 UX·화면·Agent·데이터·API·AI Workflow 설계는 모두 이 문서를 기준으로 파생됩니다.

---

## 1. Product Philosophy

### 왜 이 제품을 만드는가

Joy Harness는 **AI 프로젝트 기반 수업을 만들고, 여러 해에 걸쳐 그 프로그램을 발전시켜 나가는 교육자**를 위한 Workspace입니다. 여기서 "AI 교육자"는 일반적인 학교 교사가 아니라, AI 관련 주제로 프로젝트형 수업(캠프, 워크숍 등)을 기획·제작·운영하는 사람을 의미합니다.

이 교육자의 실제 업무는 하나의 "수업"을 만드는 것이 아니라, 하나의 "프로젝트"를 중심으로 이질적인 여러 산출물 — 아이디어, 학생 경험, 커리큘럼, 워크시트, 활동지, HTML 인터랙티브 자료, 이미지, 발표자료, 홍보 콘텐츠, 영어 버전 — 을 서로 어긋나지 않게 만들어내고, 실제 학생 앞에 서기 전에 이 모든 것이 "정말 괜찮은지" 반복적으로 검토하는 일입니다. 그리고 이 일은 한 번으로 끝나지 않고, 같은 프로그램이 해를 거듭하며 계속 개선되어 나갑니다.

### 기존 AI 툴과 무엇이 다른가

기존 AI 도구들은 대부분 **Agent(또는 Chat) 중심**입니다 — 사용자가 하나의 대화창에서 하나씩 요청하고, 결과물은 그 대화 안에만 존재합니다. 이 방식은 산출물이 하나일 때는 괜찮지만, 하나의 프로젝트 안에 여러 종류의 서로 연결된 산출물이 존재해야 하는 상황에서는 각 산출물이 서로 참조해야 할 맥락(학생 경험, 난이도, 시간 배분 등)을 잃어버리기 쉽고, 한 해의 경험이 다음 해로 이어지지도 않습니다.

Joy Harness는 **Program/Project 중심**입니다. Agent는 산출물을 만들거나 검토하는 데 동원되는 "실행 수단"일 뿐이며, 언제든 교체·추가될 수 있습니다. 반면 Program과 Project, 그 안의 Artifact 구조와 관계는 제품의 정체성이며 바뀌지 않는 뼈대입니다.

### 왜 Project 중심인가

하나의 프로젝트가 실제로 "쓸 수 있는" 상태가 되려면, 여러 산출물이 개별적으로 훌륭한 것만으로는 부족하고 **서로 일관성**을 유지해야 합니다 (예: Worksheet의 난이도가 Curriculum이 설정한 학생 수준과 맞아야 하고, Presentation의 시간 배분이 실제 세션 시간과 맞아야 함). 이 일관성은 산출물들을 독립적으로 생성해서는 보장할 수 없고, 하나의 공유된 컨테이너(Project)가 모든 산출물과 그 관계를 붙잡고 있을 때만 가능합니다.

### 왜 Program이 필요한가

실제 사용 시나리오는 하나의 일회성 프로젝트로 끝나지 않습니다. 같은 교육자가 "Chiang Mai 2026"을 운영하고, 그 경험을 바탕으로 "Chiang Mai 2027"을 만듭니다. 또 같은 시기에도 School Track과 Church Track처럼 대상(Audience), 목표(Goal), 진행 방식(Teaching Style), 제약(Constraints), 톤(Tone), 사용 기기(Devices), 세계관(Worldview)이 전혀 다른 여러 Project가 동시에 존재합니다.

이 둘을 하나의 층위로 뭉치면 서로 다른 맥락이 섞이거나, 한 해의 경험이 다음 해로 이어지지 못합니다. **Program**은 이 문제를 해결하는 상위 계층으로, 목적·기간·운영 맥락을 공유하는 여러 Project를 묶고, 장기적인 Reflection과 재사용 가능한 지식을 보존합니다.

---

## 2. Core Principle

이 문서에서 단 하나만 기억해야 한다면 다음과 같습니다.

> **Program은 교육 프로그램의 장기적인 기억(Long-term Memory)이다.**
> **Project는 교육 설계의 Single Source of Truth이다.**
>
> 모든 Session, 모든 Artifact, 모든 Rehearsal, 모든 Agent, 모든 Reflection은 하나의 Project에 속한다.
>
> Project는 교육 설계의 맥락(Context)을 보존하고, 산출물 간 일관성을 유지하며, 실제 운영 가능한 상태를 관리한다.
>
> Agent는 언제든 교체될 수 있지만, **Program과 Project 구조는 Joy Harness의 변하지 않는 중심**이다.
>
> 앞으로 UX, Database, Agent, API는 모두 이 원칙 위에서 설계된다.

---

## 3. Core Concepts

| 개념 | 정의 |
|---|---|
| **Workspace** | 교육자(또는 조직)가 여러 Program을 운영하는 전체 공간. |
| **Program** | 목적, 기간, 운영 맥락을 공유하는 상위 단위. 장기적인 Reflection과 재사용 가능한 지식(Program Knowledge)을 보존한다. 예: Chiang Mai 2026, Chiang Mai 2027, Korea AI Camp 2027, Teacher Workshop. |
| **Project** | Program 안에서 서로 다른 Audience/Goal/Teaching Style/Constraints/Tone/Devices/Worldview를 가지는 독립된 교육 설계 단위. 교육 설계의 Single Source of Truth. 예: School Track, Church Track, Volunteer Training, Final Showcase. |
| **Session** | Project의 Curriculum을 구성하는 개별 수업 회차. 해당 회차에 필요한 Worksheet, Activity, HTML, Lesson Guide, Presentation 등의 Artifact를 묶는다. |
| **Artifact** | Project(와 그 안의 Session)를 구성하는 개별 작업 단위(Working Unit)다. 생성되고, 개선되며, 버전을 쌓고, 다른 Artifact와 연결되고, Rehearsal을 통해 검증되며, 실제 운영에서도 계속 참조된다. 한 번 만들어지고 끝나는 결과물이 아니라 계속 살아있는 작업 단위다. |
| **Version** | Artifact가 개선되며 남기는 히스토리. 각 버전은 그 시점의 내용과, 그 시점에 통과/미통과한 Checkpoint 결과를 함께 가진다. Rehearsal의 결과는 새 Artifact가 아니라 새 Version으로 반영된다. |
| **Checkpoint** | 특정 관점(Student, Teacher, Time & Flow, Difficulty, Presentation, English)에서 Artifact 또는 Project가 통과해야 하는 검증 기준. 같은 이름의 Checkpoint라도 Artifact 단위와 Project 단위에서 점검하는 범위가 다르다. |
| **Rehearsal** | 실제 운영 전에 Artifact나 Project를 미리 실행/검토해보는 Validation Capability. 새로운 Artifact를 만드는 것이 아니라, 기존 Artifact의 Version과 Checkpoint 결과를 갱신하는 피드백을 만든다. Artifact 단위(빠른 반복)와 Project 단위(최종 리허설), 두 층위로 존재한다. |
| **Ready** | 적용 가능한 모든 Checkpoint를 통과한 상태에서 도출되는 결과. Production과 Facilitation 사이의 명확한 Gate 역할을 한다. |
| **Reflection** | 실제 운영 이후 진행하는 사후 회고. Project 단위로 발생해 다음 Project의 Ideation에 인풋이 되고, 여러 Project의 Reflection이 쌓이면 Program 단위의 재사용 가능한 지식(Program Knowledge)이 된다. |

---

## 4. Product Model

```
Workspace
  ↓
Program
  ↓
Project
  ↓
Session
  ↓
Artifacts (생성)
  ↓
Artifact Rehearsal  ── 빠른 반복 (Artifact 단위 개선)
  ↓
Project Rehearsal   ── 최종 검토 (조립된 전체 경험 검증)
  ↓
Ready                ── Production과 Facilitation 사이의 명확한 Gate
  ↓
Facilitation         ── 실제 운영
  ↓
Reflection            ── 사후 회고
  ↓
Next Project / Next Program
```

**핵심 원칙: Program → Project → Artifact → Agent 순서로 설계한다.** Agent는 Artifact를 생성/수정/검토하기 위해 동원되는 교체 가능한 실행 수단이다. 새로운 AI 모델이나 Agent가 등장해도 Program·Project·Artifact 구조는 그대로 유지되고, Agent만 교체·추가하면 된다. 이것이 이 제품이 시간이 지나도 낡지 않는 방식이다.

---

## 5. Structural Model — Program → Project → Session → Artifact

### 5.1 계층 구조

```
Workspace
  └─ Programs
       ├─ Chiang Mai 2026
       ├─ Chiang Mai 2027
       ├─ Korea AI Camp 2027
       └─ Teacher Workshop
            └─ Projects
                 ├─ School Track
                 ├─ Church Track
                 ├─ Volunteer Training
                 └─ Final Showcase
                      └─ Sessions
                           └─ Artifacts
```

같은 Program 안에 있어도 School Track과 Church Track은 단순히 "다른 수업"이 아니라, 다음 차원들이 서로 다르기 때문에 **독립된 Project**가 됩니다.

- Audience (대상)
- Goal (목표)
- Teaching Style (진행 방식)
- Constraints (제약)
- Tone (톤)
- Devices (사용 기기)
- Worldview (세계관)

### 5.2 Artifact 분류 — 모든 Artifact가 같은 층위가 아니다

| 레이어 | Artifact | 개수(존재 방식) |
|---|---|---|
| ① 기반 | Project Idea | Project당 1개 |
| ② 설계 | Student Experience | Project당 1개 |
| | Curriculum | Project당 1개 (Session들의 구조를 정의) |
| ③ Session별 제작물 | Worksheet | Session당 N개 |
| | Activity | Session당 N개 |
| | HTML | 필요한 Session만 N개 |
| | Lesson Guide | Session당 N개 |
| | Presentation | Session당 N개 |
| ④ 대외 | Promotion | Project당 1개 (Idea 단계부터 병행 가능) |
| ⑤ 회고 | Reflection | Project당 1개 (실제 운영 후) |
| 교차축 A | Image Assets | 공용 자원 풀 (여러 Artifact가 참조) |
| 교차축 B | English Version | 다른 Artifact들에 적용되는 언어 변형 (독립된 Artifact 종류가 아님) |

Image Assets와 English Version은 별도의 산출물 종류가 아니라, 다른 Artifact 위에 얹히는 **공용 자원**과 **언어 변형 축**입니다.

### 5.3 관계 그래프

```
Project Idea
   ├──▶ Student Experience ──▶ Curriculum ──▶ Session (×N)
   │                                              │
   │                                              ├──▶ Worksheet
   │                                              ├──▶ Activity ──▶ HTML (필요시)
   │                                              ├──▶ Lesson Guide
   │                                              └──▶ Presentation
   │
   └──▶ Promotion (독립적으로 병행 가능)

Image Assets ⇢ (Worksheet, Presentation, Promotion이 참조)
English Version ⇢ (위 산출물들 각각의 언어 변형)

[Facilitation] ──▶ Reflection ──▶ (다음 Project의 Ideation, 나아가 Program Knowledge에 누적)
```

이 그래프의 실질적 의미: 상류 Artifact(예: Curriculum)가 바뀌면 그에 의존하는 하류 Session/Artifact들이 낡은(stale) 상태가 될 수 있다는 신호가 됩니다. 이것이 "Artifact 간 일관성 유지"가 실제로 작동하는 지점입니다.

---

## 6. Lifecycle

```
Ideation → Design → Production
                        │
                        │  (Artifact마다 반복)
                        ▼
              Artifact Rehearsal ↔ 개선 (v1 → v2 → ...)
                        │
                        ▼  (핵심 Artifact들이 각자 Ready에 가까워지면)
                Project Rehearsal ↔ 개선
                        │
                        ▼  (모든 Project-level Checkpoint 통과)
                     Ready
                        ▼
                  Facilitation (실제 운영)
                        ▼
                    Reflection
                        │
              ┌─────────┴──────────┐
              ▼                    ▼
    다음 Project의 Ideation    Program Knowledge에 누적
                                    │
                                    ▼
                          다음 Program의 Ideation
```

- **Ideation**: 프로젝트 아이디어 발굴 — 트렌드 리서치, 컨셉 브레인스토밍, 실현 가능성 검토
- **Design**: Student Experience(학생 여정) → Curriculum(Session 구조)으로 구체화
- **Production**: Session별 제작물(Worksheet, Activity, HTML, Lesson Guide, Presentation)과 Image Assets, Promotion, English Version 생성
- **Artifact Rehearsal**: Production 중 수시로, 개별 Artifact를 빠르게 검토·개선하는 반복 루프
- **Project Rehearsal**: 조립된 Project 전체를 대상으로 하는 최종 리허설
- **Ready**: 모든 적용 가능한 Checkpoint 통과 — Production과 Facilitation 사이의 명확한 Gate
- **Facilitation**: 실제 현장에서 프로젝트 운영
- **Reflection**: 운영 후 사후 회고. 같은 Project의 다음 반복(Ideation)으로 순환되는 동시에, Program 전체의 지식으로도 누적됨

Rehearsal은 이 Lifecycle에서 Production과 Facilitation 사이의 **게이트(gate)**입니다. Ready 상태가 될 때까지 Rehearsal ↔ 개선을 반복합니다.

---

## 7. Validation Model

### 7.1 Checkpoint

Checkpoint는 특정 관점에서 Artifact 또는 Project가 통과해야 하는 검증 기준입니다. 같은 이름의 Checkpoint라도 적용 층위에 따라 점검 범위가 다릅니다.

| Checkpoint | Artifact 단위 의미 | Project 단위 의미 |
|---|---|---|
| Student Review | 이 자료 하나가 학생에게 이해되는가 | 전체 여정이 처음부터 끝까지 몰입감 있게 이어지는가 |
| Teacher Review | 이 자료를 교육자가 준비/진행할 수 있는가 | 전체 운영 부담이 현실적인가 |
| Difficulty Review | 이 활동/워크시트 난이도가 적절한가 | 프로젝트 전체의 난이도 곡선이 매끄러운가 |
| Time & Flow Review | 이 활동이 배정 시간 안에 끝나는가 | Session 간 시간 배분과 전환이 자연스러운가 |
| Presentation Review | 이 Session 발표의 전달력 | 전체 발표 리듬(지루해지는 구간 등) |
| English Review | 이 자료의 영어 버전이 자연스러운가 | 프로젝트 전체 영어 자료의 용어/톤 일관성 |

필요한 Checkpoint만 선택해서 수행할 수 있으며, 적용 가능한 Checkpoint를 모두 통과하면 그 Artifact 또는 Project는 **Ready**로 간주됩니다.

### 7.2 Version History

Version History는 Artifact가 어떻게 다듬어져 왔는지의 기록입니다. 각 버전은 그 시점의 내용과, 그 시점에 통과/미통과한 Checkpoint 결과를 함께 가집니다.

```
Worksheet
 ├─ v1 (초안 생성)
 │    ├─ Student Review   → ✗ (초5에게 어려운 표현 있음)
 │    └─ Difficulty Review → ✗ (문항 수 과다)
 ├─ v2 (피드백 반영해서 개선)
 │    ├─ Student Review   → ✓
 │    ├─ Difficulty Review → ✓
 │    └─ Time & Flow Review → (아직 안 돌림)
 └─ v3 (Time & Flow 반영)
      └─ Time & Flow Review → ✓  ──▶ 모든 Checkpoint 통과 = Ready
```

### 7.3 Ready의 정의

"Ready"는 별도로 저장되는 상태값(Status)이 아니라, **적용 가능한 모든 Checkpoint가 ✓인 상태에서 자연스럽게 도출되는 결과(derived state)**입니다. Draft → Ready라는 단일 트랙이 아니라, Student Review ✓ / Difficulty Review ✓ / Time & Flow Review ✓ 처럼 체크리스트를 하나씩 통과해나가는 경험입니다. Product Model(4장)에서 보듯, Ready는 Production과 Facilitation 사이의 명확한 Gate이기도 합니다.

### 7.4 Artifact Rehearsal vs Project Rehearsal

| | Artifact Rehearsal | Project Rehearsal |
|---|---|---|
| **대상** | 개별 Artifact 하나 | 조립된 Project 전체(현재 각 Artifact의 최신 버전) |
| **빈도** | Production 중 수시로, 빠르게 | 거의 완성된 시점에 한 번, 무겁게 |
| **성격** | 이 조각 하나가 그 자체로 괜찮은가 | 각 조각을 이어붙였을 때도 괜찮은가 |
| **예** | "이 Worksheet, 초5 입장에서 검토해줘" | Session 3개를 연달아 진행했을 때 난이도 곡선이 급격하지 않은가 |

두 층위는 대체 관계가 아니라 보완 관계입니다. 개별 Artifact가 각자의 Checkpoint를 모두 통과해도, Project Rehearsal에서만 드러나는 문제(전체 흐름, 시간 초과, Session 간 부조화)가 있을 수 있습니다.

Rehearsal의 결과는 **새로운 Artifact를 생성하지 않습니다.** 기존 Artifact의 Version과 Checkpoint 상태를 갱신하는 피드백을 만들 뿐입니다.

---

## 8. Reuse Philosophy

Program 계층이 있기 때문에 다음과 같은 흐름이 자연스럽게 가능해집니다.

```
Chiang Mai 2026
     ↓
Reflection (각 Project의 사후 회고가 쌓임)
     ↓
Program Knowledge (재사용 가능한 지식으로 누적)
     ↓
Chiang Mai 2027 생성 시 Ideation의 인풋으로 활용
```

Project의 Reflection이 "이번 프로젝트를 어떻게 개선할까"를 위한 것이라면, Program Knowledge는 "이 프로그램을 다음 해에 어떻게 더 잘 만들까"를 위한 것입니다. 즉 Reflection이 Project 단위의 단기 루프라면, Program Knowledge는 Program 단위의 장기 루프입니다.

이 구조 덕분에 Joy Harness는 단순히 "수업을 만드는 도구"가 아니라, **교육자가 여러 해에 걸쳐 교육 프로그램을 발전시키고 축적하는 Workspace**가 됩니다.

---

## 9. 다음 단계

이 문서가 확정되면, 이후 설계는 이 모델을 기준으로 다음 순서로 진행합니다: UX/화면 구조 → Agent 설계 → 데이터 모델/API → AI Workflow.
