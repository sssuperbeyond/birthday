document.addEventListener("DOMContentLoaded", () => {
  // 模拟加载进度
  let progress = 0;
  const progressBar = document.getElementById("progress-bar");
  const loadingInterval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress > 100) progress = 100;
    progressBar.style.width = `${progress}%`;

    if (progress === 100) {
      clearInterval(loadingInterval);
      setTimeout(() => {
        document
          .getElementById("loading-screen")
          .classList.add("animate__animated", "animate__fadeOut");
        setTimeout(() => {
          document.getElementById("loading-screen").style.display = "none";
          document.getElementById("main-content").classList.remove("hidden");
          // 调用其他初始化函数
          if (typeof startFireworks === "function") startFireworks();
          if (typeof checkFadeInElements === "function") checkFadeInElements();
        }, 1000);
      }, 500);
    }
  }, 200);
});
