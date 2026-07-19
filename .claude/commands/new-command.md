---
description: 새 Slash Command를 빠르고 일관된 구조로 생성하는 Command Generator.
argument-hint: Name: <command-name> / Purpose: <목적>
---

$ARGUMENTS 로 주어진 이름(Name)과 목적(Purpose)으로 새 Slash Command를 만든다. 둘 중 하나라도 없으면 먼저 되묻는다.

## 절차

1. **중복 확인**: `.claude/commands/<name>.md`가 이미 있으면 덮어쓰기 전에 먼저 확인한다.
2. **기존 자산 확인**: `.claude/agents/`, `.claude/templates/html/`, `.claude/templates/markdown/`, `docs/commands.md`를 살펴서 이 목적에 재사용할 수 있는 Agent/Template가 있는지 찾는다.
3. **Agent 연결**
   - 목적에 맞는 기존 Agent가 있으면 그걸 쓰도록 연결한다.
   - 없으면 어떤 새 Agent가 필요한지 제안만 하고, 사용자 확인 없이 새 Agent 파일을 만들지 않는다.
4. **Template 연결**
   - 목적에 맞는 기존 Template가 있으면 그걸 쓰도록 연결한다.
   - 없으면 어떤 새 Template가 필요한지(`templates/html/<name>.html` 등) 제안만 하고, 사용자 확인 없이 새 Template 파일을 만들지 않는다.
5. **`.claude/commands/<name>.md` 생성** — 기존 Command들과 동일한 구조:
   - frontmatter: `description`, `argument-hint`
   - 본문: 무엇을 만드는지, 어떤 subagent/template를 쓰는지
   - `## Output` 섹션 (예상 산출물 목록)
6. **`docs/commands.md` 업데이트**
   - 적절한 카테고리 표(Content Creation / Teaching / Workflow / Meta 등, 마땅한 게 없으면 새 카테고리 제안)에 한 줄 추가
   - 문서 하단에 `## /<name>` 상세 섹션(목적, Agent, Template, 출력, 사용 예시) 추가
7. **CLAUDE.md 반영 제안** — Command 목록을 나열하는 문장이 있으면 새 Command를 추가할지 제안한다. 자동으로 고치지 않고 제안만 한다.

## Output Rules

- 기존 Agent/Template를 최대한 재사용하고 중복 생성하지 않는다.
- 새 Agent나 Template가 실제로 필요하면 먼저 "만들까요?"라고 묻고, 확인 후에만 만든다.
- `docs/commands.md`는 항상 최신 상태로 유지한다.
- 작업이 끝나면 아래 형식으로 요약한다.

```text
✅ Command Created

- /<name>
- .claude/commands/<name>.md
- docs/commands.md updated
- Template: <template 경로 또는 "신규 제안">
- Agent: <agent 이름 또는 "신규 제안">
```
