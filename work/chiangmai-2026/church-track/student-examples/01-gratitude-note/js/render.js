// CORE AREA
// 이 함수들의 이름과 반환 구조는 변경하지 마세요.
// 실제로 보이는 문구/색상을 바꾸고 싶다면 config.js를 수정하세요.
const Render = {
  applyTheme() {
    const root = document.documentElement;
    root.style.setProperty("--primary-color", CONFIG.theme.primaryColor);
    root.style.setProperty("--progress-color", CONFIG.theme.progressColor);
  },

  renderHeader() {
    setText("app-logo", CONFIG.appName);
    setText("app-badge", CONFIG.appBadge);
  },

  renderMission() {
    setText("mission-category", CONFIG.missionCategory);
    setText("mission-title", CONFIG.missionTitle);
    setText("mission-description", CONFIG.missionDescription);

    const icon = document.querySelector("#mission-image .material-symbols-outlined");
    if (icon) icon.textContent = CONFIG.missionImageIcon;
  },

  renderNavigation() {
    Object.entries(CONFIG.navigation).forEach(([key, item]) => {
      const button = document.getElementById(`btn-${key}`);
      if (!button) return;
      const icon = button.querySelector(".material-symbols-outlined");
      const label = button.querySelector(".bottom-button-label");
      if (icon) icon.textContent = item.icon;
      if (label) label.textContent = item.label;
    });
  },

  renderProgress(records) {
    const target = Math.max(1, CONFIG.targetCount);
    const completedCount = records.filter((record) => record.completed).length;
    const done = Math.min(completedCount, target);
    const percent = Math.min(100, Math.round((done / target) * 100));

    const fill = document.getElementById("progress-fill");
    if (fill) fill.style.width = `${percent}%`;

    setText("progress-label", `${done} / ${target} 완료`);
  },

  // 오늘 기록/남은 도전/연속 기록은 체크(완료) 표시한 기록만 셉니다.
  renderSummary(records) {
    const completedRecords = records.filter((record) => record.completed);

    const today = new Date().toDateString();
    const todayCount = completedRecords.filter(
      (record) => new Date(record.createdAt).toDateString() === today
    ).length;
    const remaining = Math.max(CONFIG.targetCount - completedRecords.length, 0);
    const streak = calculateStreak(completedRecords);

    setSummaryValue("summary-card-1", todayCount);
    setSummaryValue("summary-card-2", remaining);
    setSummaryValue("summary-card-3", streak);
  },

  renderRecordList(records) {
    const list = document.getElementById("record-list");
    if (!list) return;

    list.innerHTML = "";

    if (records.length === 0) {
      const empty = document.createElement("p");
      empty.className = "record-empty";
      empty.textContent = "아직 기록이 없습니다. 첫 도전을 기록해보세요!";
      list.appendChild(empty);
      return;
    }

    records
      .slice()
      .reverse()
      .forEach((record) => {
        const item = document.createElement("div");
        item.className = record.completed ? "record-item is-complete" : "record-item";
        item.setAttribute("data-guide", "record-item");
        item.setAttribute("data-record-id", record.id);

        const main = document.createElement("div");
        main.className = "record-item-main";

        const checkButton = document.createElement("button");
        checkButton.type = "button";
        checkButton.className = "record-check-btn";
        checkButton.setAttribute("data-guide", "record-check-btn");
        checkButton.setAttribute("aria-label", "완료 체크");
        checkButton.innerHTML = `<span class="material-symbols-outlined" aria-hidden="true">${
          record.completed ? "check_circle" : "radio_button_unchecked"
        }</span>`;

        const text = document.createElement("span");
        text.className = "record-item-text";
        text.textContent = record.text;

        main.appendChild(checkButton);
        main.appendChild(text);

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "record-delete-btn";
        deleteButton.setAttribute("data-guide", "record-delete-btn");
        deleteButton.setAttribute("aria-label", "기록 삭제");
        deleteButton.innerHTML =
          '<span class="material-symbols-outlined" aria-hidden="true">delete</span>';

        item.appendChild(main);
        item.appendChild(deleteButton);
        list.appendChild(item);
      });
  },
};

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setSummaryValue(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  const valueEl = el.querySelector(".summary-value");
  if (valueEl) valueEl.textContent = value;
}

// 오늘부터 거꾸로 하루씩 확인해서, 기록이 하루도 빠지지 않고 이어진 날수를 셉니다.
// 오늘 기록이 없으면 스트릭은 0입니다.
function calculateStreak(records) {
  if (records.length === 0) return 0;

  const recordedDays = new Set(
    records.map((record) => new Date(record.createdAt).toDateString())
  );

  let streak = 0;
  const cursor = new Date();

  while (recordedDays.has(cursor.toDateString())) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}
