document.addEventListener("DOMContentLoaded", () => {
  // 获取所有需要显示的部分
  const sections = document.querySelectorAll("section");
  let currentSectionIndex = 0;

  // 显示指定索引的部分
  function showSection(index) {
    // 隐藏所有部分
    sections.forEach((section) => {
      section.classList.add("hidden");
      section.classList.remove("fade-in-section", "is-visible");
    });

    // 显示指定部分
    if (index >= 0 && index < sections.length) {
      sections[index].classList.remove("hidden");
      sections[index].classList.add("fade-in-section", "is-visible");

      // 如果是祝福语部分，触发消息显示
      if (
        sections[index].id === "wishes" &&
        !sections[index].dataset.messagesRevealed
      ) {
        revealMessages();
        sections[index].dataset.messagesRevealed = "true";
      }

      // 如果是照片部分，初始化照片展示
      if (sections[index].id === "gallery") {
        initPhotoGallery();
      }
    }
  }

  // 页面点击事件处理
  document.addEventListener("click", (e) => {
    // 排除特定元素的点击（如音乐控制按钮）
    if (
      e.target.id === "music-control" ||
      e.target.closest("#music-control") ||
      e.target.id === "photo-nav-prev" ||
      e.target.id === "photo-nav-next" ||
      e.target.id === "gift-box" ||
      e.target.closest("#gift-box") ||
      e.target.closest(".photo-item") ||
      e.target.closest(".swal2-popup")
    ) {
      return;
    }

    // 前进到下一部分
    currentSectionIndex++;
    if (currentSectionIndex >= sections.length) {
      currentSectionIndex = 0; // 循环回到首页
    }

    showSection(currentSectionIndex);
  });

  // 逐行显示祝福语
  function revealMessages() {
    const messages = document.querySelectorAll("#message p");
    messages.forEach((msg, index) => {
      setTimeout(() => {
        msg.style.opacity = "1";
      }, index * 1500);
    });
  }

  // 页面加载时显示第一个部分
  showSection(0);
});
