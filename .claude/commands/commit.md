---
description: 현재 변경사항을 검토하고 git commit을 생성한다 (push는 하지 않음).
argument-hint: [커밋 메시지 힌트 (선택)]
---

작업 디렉터리의 변경사항을 커밋한다. $ARGUMENTS

1. `git status`, `git diff`로 변경된 내용을 파악한다.
2. 의도치 않은 파일(스크린샷 붙여넣기 잔여물, `.env`, 시크릿 등)이 섞여 있는지 확인한다.
3. 관련 파일만 `git add`로 스테이징한다 (`git add -A`, `git add .` 금지).
4. 변경의 "왜"를 중심으로 1~2문장 커밋 메시지를 작성한다. `$ARGUMENTS`가 있으면 참고한다.
5. 아래 형식으로 커밋한다 (heredoc 사용, Co-Authored-By와 Claude-Session 트레일러 포함):

```
git commit -m "$(cat <<'EOF'
<커밋 메시지>

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
Claude-Session: <현재 세션 URL>
EOF
)"
```

6. `git status`로 커밋이 성공했는지 확인한다.

`--no-verify`, `--amend`, force 관련 옵션은 사용하지 않는다. 스테이징할 변경사항이 없으면 커밋하지 않고 그대로 알린다.
