document.addEventListener("DOMContentLoaded", () => {
  // 音乐控制
  const musicControl = document.getElementById("music-control");
  const bgMusic = document.getElementById("bg-music");

  // 尝试自动播放音乐
  autoPlayMusic();

  // 自动播放音乐的函数
  function autoPlayMusic() {
    bgMusic
      .play()
      .then(() => {
        musicControl.classList.add("playing");
        console.log("音乐自动播放成功");
      })
      .catch((err) => {
        console.log("音乐自动播放失败，需要用户交互：", err);
        // 如果自动播放失败，添加页面点击监听
        document.addEventListener("click", initAudio, { once: true });
      });
  }

  // 用户交互时播放音乐
  function initAudio() {
    bgMusic
      .play()
      .then(() => {
        musicControl.classList.add("playing");
      })
      .catch((err) => {
        console.log("用户交互后音乐播放失败：", err);
      });
  }

  musicControl.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicControl.classList.add("playing");
    } else {
      bgMusic.pause();
      musicControl.classList.remove("playing");
    }
  });
});
