// CORE AREA
// 이 함수의 이름은 변경하지 마세요.
// Alt + G 를 누르면 화면의 data-guide 이름표(Guide Mode)가 켜지고 꺼집니다.
function toggleGuideMode() {
  document.body.classList.toggle("guide-mode");
}

window.addEventListener("keydown", (event) => {
  // Alt+Shift+G는 이번 버전에서 다루지 않으므로 shiftKey가 눌리지 않은 경우만 반응합니다.
  if (event.altKey && !event.shiftKey && event.code === "KeyG") {
    event.preventDefault();
    toggleGuideMode();
  }
});
