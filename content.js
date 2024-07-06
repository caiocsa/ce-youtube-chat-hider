document.addEventListener("DOMContentLoaded", () => {
  const hideChatAndResizeVideo = () => {
    const chat = document.querySelector("#chat");
    const panels = document.querySelector("#panels-full-bleed-container");

    if (chat) {
      chat.style.display = "none";
    }

    if (panels) {
      panels.style.display = "none";
    }     
  };

  hideChatAndResizeVideo();

  const observer = new MutationObserver(hideChatAndResizeVideo);
  observer.observe(document.body, { childList: true, subtree: true });
});