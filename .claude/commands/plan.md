---
description: 막연한 아이디어를 prompt-architect와 함께 고품질 실행 프롬프트로 다듬은 뒤, 승인되면 바로 실행한다.
argument-hint: <막연한 아이디어/요청>
---

$ARGUMENTS 를 `prompt-architect` subagent에게 넘겨 Prompt Architect 워크플로우를 시작한다.

## 절차

1. `prompt-architect` subagent를 호출해서 Phase 1(Planning)부터 시작한다. 정보가 부족하면 subagent가 낸 질문을 그대로 사용자에게 전달한다.
2. 사용자 답변이 올 때마다 **같은 subagent 대화를 이어간다** (매번 새 subagent를 만들지 않는다). subagent가 만든 draft(Prompt v1, v2, ...)를 그대로 사용자에게 보여준다. 이전 버전은 다시 보여주지 않는다.
3. 사용자가 승인 표현("좋아", "오케이", "승인", "이걸로 가자", "괜찮다", "실행하자" 등)을 쓰면 subagent가 출력한 `Prompt Approved` 블록(`[Y] Execute` / `[N] Continue Editing`)을 그대로 보여준다.
4. 사용자가 **Y**를 선택하면: subagent 관여를 끝내고, 승인된 프롬프트 전문을 지금 이 세션(Main Claude)이 직접 실행한다. 프롬프트를 사용자에게 복사/붙여넣기 시키지 않는다.
5. 사용자가 **N**을 선택하면: 2번으로 돌아가 같은 subagent와 계속 개선한다(버전 증가).

## 제약

- 진행되는 동안 Main Claude는 prompt-architect의 draft를 대신 수정하거나 승인 전에 먼저 실행하지 않는다.
- 승인된 프롬프트는 그대로 실행한다. 임의로 축소/확대하지 않는다.
