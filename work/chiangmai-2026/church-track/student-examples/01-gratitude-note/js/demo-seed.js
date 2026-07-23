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

  const demoRecords = [
    { text: "학교 급식으로 내가 좋아하는 떡볶이가 나와서 감사했다", offset: 6, hour: 13, completed: true },
    { text: "친구가 숙제를 도와줘서 고마웠다", offset: 4, hour: 16, completed: true },
    { text: "엄마가 아침에 깨워줘서 학교에 안 늦었다", offset: 3, hour: 8, completed: true },
    { text: "체육 시간에 넘어졌는데 다치지 않아서 다행이었다", offset: 2, hour: 12, completed: true },
    { text: "동생이랑 안 싸우고 사이좋게 지낸 하루였다", offset: 1, hour: 20, completed: true },
    { text: "아침에 늦잠 잤는데 버스를 놓치지 않아서 감사했다", offset: 0, hour: 8, completed: true },
    // 오늘 막 적었지만 아직 체크는 안 한 기록 — record-check-btn 동작을 보여주기 위해 일부러 남겨둠
    { text: "이 챌린지 앱을 내가 원하는 대로 꾸며서 뿌듯했다", offset: 0, hour: 15, completed: false },
  ].map((item, index) => ({
    id: `demo_${index}`,
    text: item.text,
    createdAt: daysAgoISO(item.offset, item.hour, 0),
    completed: item.completed,
  }));

  Storage.saveRecords(demoRecords);
})();
