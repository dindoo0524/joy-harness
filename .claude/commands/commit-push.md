---
description: 현재 변경사항을 커밋하고 origin에 push까지 한다.
argument-hint: [커밋 메시지 힌트 (선택)]
---

작업 디렉터리의 변경사항을 커밋하고 push한다. $ARGUMENTS

1. `/commit`과 동일한 절차로 커밋을 생성한다 (상태 확인 → 관련 파일만 스테이징 → "왜" 중심 메시지 → Co-Authored-By/Claude-Session 트레일러 포함).
2. 커밋이 성공하면 `git push`로 origin의 현재 브랜치에 push한다. upstream이 없으면 `git push -u origin <현재 브랜치>`.
3. push 결과(반영된 커밋 범위, 브랜치)를 보고한다.

force push, `--no-verify`는 사용하지 않는다. 커밋할 변경사항이 없으면 커밋을 건너뛰고 이미 push되지 않은 커밋이 있는지만 확인해서 push한다.
