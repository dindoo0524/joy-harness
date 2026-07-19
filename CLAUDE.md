# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is right now

Joy Harness is a workspace for an AI project-based education practitioner (real-world use case: the Chiang Mai AI education project). There is no application code yet. Two things exist today:

1. **`docs/product-model.md`** — the Product Constitution. Defines the target product's conceptual model (Workspace → Program → Project → Session → Artifact, Rehearsal, Checkpoint, Lifecycle). Read this before proposing any feature, screen, or data model — it's the standing design reference, not a historical doc. Major design decisions are additionally tracked as ADRs in `docs/adr/` (see `docs/adr/README.md`); `product-model.md` itself serves as ADR-001.
2. **`.claude/` production system** — a set of Claude Code subagents, slash commands, and HTML/Markdown templates for actually producing classroom content (lesson pages, worksheets, activities, reviews, English-teaching support). This is the current priority: **build and use the content-production workflow before building the Joy Harness product itself.** The product model gets validated by real use of this system, not the other way around.

## Content-production system (`.claude/`)

- `.claude/agents/*.md` — one subagent per role. Each agent does exactly one job (generate HTML, generate Notion-ready Markdown, generate a worksheet, design an activity, review a lesson, support English teaching, write an image prompt). Don't add multi-purpose agents — split by role instead.
- `.claude/commands/*.md` — slash commands are the user-facing layer: `User → Command → Agent → Template → Result`. Users only need to remember a Command; Agent and Template are internal and can change freely. Command names are chosen by *output*, not implementation (`/card`, `/worksheet`, `/lesson`, `/md`, `/activity`, `/review`, `/eng`, plus workflow commands `/publish`, `/commit`, `/commit-push`, and meta commands `/new-command` for scaffolding new commands, `/plan` for turning a rough idea into an approved execution prompt via the `prompt-architect` subagent, `/wrap-up` for an end-of-session summary + open-TODO checklist, and `/session-summary` for a standalone, shareable Session Summary block usable any time, not just at session end). **`docs/commands.md` is the authoritative, user-facing reference for every command — update it whenever a command is added, removed, or remapped to a different agent/template.**
- `.claude/templates/html/` and `.claude/templates/markdown/` — starting structure for each output type. Agents should check these first before generating from scratch, so repeated output stays consistent.

Cross-cutting rules for anything produced here (from the working spec, not to be silently relaxed):
- Must be usable directly in an actual Chiang Mai classroom — production speed matters more than polish.
- HTML output: single self-contained file, mobile-responsive, print-friendly (`@media print`), Pretendard-based font, minimal external dependencies (a font CDN is fine, no JS frameworks).
- Markdown output: paste-ready into Notion with minimal reformatting needed.
- Same input should produce similarly-good output each time — consistency over cleverness.

## Working order

Per the user's explicit direction: **Workflow → repeated real use → validated → then Product.** Don't jump ahead to implementing Joy Harness as a product (UX, database, agent orchestration platform) until the content-production agents above have been used and proven on real Chiang Mai material. When that work resumes, `docs/product-model.md` is the reference to build against, in the order it states: UX/information architecture → Agent architecture → data model/API → AI workflow.
