// CORE AREA
// 앱이 시작될 때 실행되는 진입점입니다.
function initApp() {
  Render.applyTheme();
  Render.renderHeader();
  Render.renderMission();
  Render.renderNavigation();
  refreshRecordViews();

  bindRecordForm();
  bindShareButton();
  bindBottomNav();
}

function refreshRecordViews() {
  const records = Storage.loadRecords();
  Render.renderProgress(records);
  Render.renderSummary(records);
  Render.renderRecordList(records);
}

function bindRecordForm() {
  const form = document.getElementById("record-form");
  const input = document.getElementById("record-input");
  if (!form || !input) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const added = Storage.addRecord(input.value);
    if (!added) return;
    input.value = "";
    refreshRecordViews();
  });
}

function bindShareButton() {
  const button = document.getElementById("btn-share");
  if (!button) return;

  button.addEventListener("click", async () => {
    const shareText = `내가 만든 ${CONFIG.appName} 앱입니다.`;

    if (navigator.share) {
      try {
        await navigator.share({ title: CONFIG.appName, text: shareText });
      } catch (error) {
        // 사용자가 공유를 취소한 경우 등은 조용히 무시합니다.
      }
      return;
    }

    alert("이 브라우저에서는 공유 기능을 지원하지 않습니다.");
  });
}

function bindBottomNav() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToId = (id) => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const bindings = {
    "btn-home": scrollToTop,
    "btn-record": () => scrollToId("record-form"),
    "btn-summary": () => scrollToId("summary-section"),
    "btn-more": () => scrollToId("bottom-nav"),
  };

  Object.entries(bindings).forEach(([buttonId, handler]) => {
    const button = document.getElementById(buttonId);
    if (button) button.addEventListener("click", handler);
  });
}

document.addEventListener("DOMContentLoaded", initApp);
