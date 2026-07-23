// DEMO ONLY — 실제 Starter(starter-project)에는 없는 파일입니다.
// 학생이 며칠 동안 앱을 써왔다면 기록이 어떻게 쌓이는지 보여주기 위해,
// 처음 열었을 때 한 번만 예시 기록을 localStorage에 채워 넣습니다.
// (이미 기록이 있으면 아무 것도 하지 않습니다.)
(function seedDemoRecords() {
  if (Storage.loadRecords().length > 0) return;

  function daysAgoISO(n, hour, minute) {
    const d = new Date();
    d.setDate(d.getDate() - n);
    d.setHours(hour, minute, 0, 0);
    return d.toISOString();
  }

  const texts = [
    "새 학기 잘 적응하게 해달라고 기도했다",
    "친구 시험 잘 보게 해달라고 기도했다",
    "가족 건강을 위해 기도했다",
    "짜증났던 마음을 가라앉혀 달라고 기도했다",
    "동생이랑 화해하게 해줘서 감사 기도했다",
    "선생님께 감사한 마음을 기도로 표현했다",
    "다음 주 발표가 잘 되게 해달라고 기도했다",
    "힘들어하는 친구를 위해 기도했다",
    "오늘 하루도 무사히 지나가게 해줘서 감사했다",
    "새벽에 일어나서 짧게라도 기도했다",
    "이 기도 습관을 계속 이어가게 해달라고 기도했다",
  ];

  // 하루도 안 빠지고 기도하고, 그날그날 바로 체크까지 마친 학생 — 전부 완료 처리
  const demoRecords = texts.map((text, index) => ({
    id: `demo_${index}`,
    text,
    createdAt: daysAgoISO(texts.length - 1 - index, 21, 0),
    completed: true,
  }));

  Storage.saveRecords(demoRecords);
})();
