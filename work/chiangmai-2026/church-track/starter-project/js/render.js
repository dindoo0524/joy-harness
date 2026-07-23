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
    const done = Math.min(records.length, target);
    const percent = Math.min(100, Math.round((done / target) * 100));

    const fill = document.getElementById("progress-fill");
    if (fill) fill.style.width = `${percent}%`;

    setText("progress-label", `${done} / ${target} 완료`);
  },

  // 연속 기록(스트릭) 대신, 첫 버전에서는 아래 3가지 단순 값을 사용합니다.
  // 이유는 README.md의 "스트릭 계산 방식"을 참고하세요.
  renderSummary(records) {
    const today = new Date().toDateString();
    const todayCount = records.filter(
      (record) => new Date(record.createdAt).toDateString() === today
    ).length;
    const inProgress = Math.min(records.length, CONFIG.targetCount);

    setSummaryValue("summary-card-1", todayCount);
    setSummaryValue("summary-card-2", inProgress);
    setSummaryValue("summary-card-3", records.length);
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
        item.className = "record-item";
        item.setAttribute("data-guide", "record-item");

        const text = document.createElement("span");
        text.className = "record-item-text";
        text.textContent = record.text;

        const icon = document.createElement("span");
        icon.className = "material-symbols-outlined";
        icon.setAttribute("aria-hidden", "true");
        icon.textContent = "check_circle";

        item.appendChild(text);
        item.appendChild(icon);
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
