// 烟花效果
function startFireworks() {
  const fireworksContainer = document.getElementById("fireworks-container");

  function createFirework() {
    const firework = document.createElement("div");
    firework.classList.add("firework");

    // 随机位置
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight;

    firework.style.left = `${startX}px`;
    firework.style.bottom = "0px";

    // 随机颜色
    const colors = [
      "#FF69B4",
      "#FF1493",
      "#8A2BE2",
      "#9400D3",
      "#FF00FF",
      "#BA55D3",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    firework.style.backgroundColor = color;
    firework.style.boxShadow = `0 0 10px 5px ${color}`;

    // 随机方向
    const angle = Math.random() * Math.PI;
    const distance = 100 + Math.random() * 200;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    firework.style.setProperty("--dx", `${dx}px`);
    firework.style.setProperty("--dy", `${-dy}px`);

    fireworksContainer.appendChild(firework);

    // 动画结束后移除
    setTimeout(() => {
      firework.remove();
    }, 2000);
  }

  // 创建多个烟花
  for (let i = 0; i < 50; i++) {
    setTimeout(createFirework, Math.random() * 2000);
  }
}

// 心形烟花
function createHeartFireworks() {
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = "0";
  container.style.left = "0";
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.pointerEvents = "none";
  container.style.zIndex = "999";
  document.body.appendChild(container);

  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.style.position = "absolute";
      heart.style.fontSize = `${20 + Math.random() * 20}px`;
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.top = "100%";
      heart.style.opacity = "1";
      heart.style.transition = "top 3s ease-out, opacity 3s ease-out";
      container.appendChild(heart);

      setTimeout(() => {
        heart.style.top = `${Math.random() * 70}%`;
        heart.style.opacity = "0";

        setTimeout(() => {
          heart.remove();
        }, 3000);
      }, 100);
    }, i * 200);
  }

  setTimeout(() => {
    container.remove();
  }, 10000);
}

// 初始化礼物盒点击事件
document.addEventListener("DOMContentLoaded", () => {
  const giftBox = document.getElementById("gift-box");
  if (giftBox) {
    giftBox.addEventListener("click", () => {
      Swal.fire({
        title: "生日快乐！",
        text: "这是我为你准备的特别礼物，希望你喜欢！请联系我领取你的实体礼物 ❤️",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/4213/4213958.png",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "生日礼物",
        confirmButtonText: "谢谢你！",
        confirmButtonColor: "#FF1493",
        showConfetti: true,
        background: "rgba(255, 192, 203, 0.2)",
      }).then(() => {
        // 心形烟花效果
        createHeartFireworks();
      });
    });
  }
});
