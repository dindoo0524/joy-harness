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
  bindRecordList();
  bindConfirmDialog();
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
    "btn-summary": () => scrollToId("summary-section"),
    "btn-record": () => scrollToId("record-form"),
    // btn-more는 아직 이동할 화면이 없어서, 스크롤 대신 짧은 안내만 보여줍니다.
    "btn-more": () => showToast("더보기 메뉴는 다음 업데이트에서 추가될 예정이에요."),
  };

  Object.entries(bindings).forEach(([buttonId, handler]) => {
    const button = document.getElementById(buttonId);
    if (button) button.addEventListener("click", handler);
  });
}

// 기록 목록 안의 체크/삭제 버튼은 다시 그려질 때마다 새로 생기므로,
// 버튼 하나하나가 아니라 목록 전체(record-list)에 클릭을 걸어두고 위임합니다.
function bindRecordList() {
  const list = document.getElementById("record-list");
  if (!list) return;

  list.addEventListener("click", (event) => {
    const deleteButton = event.target.closest(".record-delete-btn");
    if (deleteButton) {
      const item = deleteButton.closest(".record-item");
      if (item) openDeleteConfirm(item.getAttribute("data-record-id"));
      return;
    }

    const checkButton = event.target.closest(".record-check-btn");
    if (checkButton) {
      const item = checkButton.closest(".record-item");
      if (!item) return;

      Storage.toggleComplete(item.getAttribute("data-record-id"));
      refreshRecordViews();
    }
  });
}

let pendingDeleteId = null;

function openDeleteConfirm(recordId) {
  pendingDeleteId = recordId;
  const dialog = document.getElementById("confirm-dialog");
  if (dialog) dialog.hidden = false;
}

function closeDeleteConfirm() {
  pendingDeleteId = null;
  const dialog = document.getElementById("confirm-dialog");
  if (dialog) dialog.hidden = true;
}

function bindConfirmDialog() {
  const dialog = document.getElementById("confirm-dialog");
  const cancelButton = document.getElementById("confirm-cancel");
  const confirmButton = document.getElementById("confirm-delete");
  if (!dialog || !cancelButton || !confirmButton) return;

  cancelButton.addEventListener("click", closeDeleteConfirm);

  // 배경(오버레이) 클릭도 취소로 처리합니다.
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDeleteConfirm();
  });

  confirmButton.addEventListener("click", () => {
    const idToDelete = pendingDeleteId;
    closeDeleteConfirm();
    if (!idToDelete) return;

    const result = Storage.deleteRecord(idToDelete);
    if (!result) return;

    refreshRecordViews();
    showToast("기록이 삭제되었습니다.", {
      actionLabel: "되돌리기",
      onAction: () => {
        Storage.restoreRecord(result.record, result.index);
        refreshRecordViews();
      },
    });
  });
}

let toastTimer = null;

function showToast(message, options = {}) {
  const toast = document.getElementById("toast");
  const messageEl = document.getElementById("toast-message");
  const actionButton = document.getElementById("toast-action");
  if (!toast || !messageEl || !actionButton) return;

  messageEl.textContent = message;

  if (options.actionLabel && options.onAction) {
    actionButton.textContent = options.actionLabel;
    actionButton.hidden = false;
    actionButton.onclick = () => {
      options.onAction();
      toast.classList.remove("is-visible");
    };
  } else {
    actionButton.hidden = true;
    actionButton.onclick = null;
  }

  toast.classList.add("is-visible");

  clearTimeout(toastTimer);
  const visibleDuration = options.actionLabel ? 4000 : 1600;
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), visibleDuration);
}

document.addEventListener("DOMContentLoaded", initApp);
