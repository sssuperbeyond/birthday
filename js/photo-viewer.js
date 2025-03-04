document.addEventListener("DOMContentLoaded", () => {
  // 照片数据
  const photoData = {
    favorite: [
      { src: "images/1.jpg", caption: "第一次约会" },
      { src: "images/3.jpg", caption: "一起看的电影" },
      // 添加更多照片...
    ],
    artistic: [
      { src: "images/5.jpg", caption: "金色阳光下的剪影" },
      // 添加更多照片...
    ],
    travel: [
      { src: "images/2.jpg", caption: "美好的旅行回忆" },
      { src: "images/6.jpg", caption: "风景如画" },
      // 添加更多照片...
    ],
    work: [{ src: "images/4.jpg", caption: "辛勤劳动的瞬间" }],
  };

  // 装载照片墙
  function loadPhotoWall() {
    // 为每个类别加载照片
    Object.keys(photoData).forEach((category) => {
      const container = document.getElementById(`${category}-photos`);
      if (!container) return;

      photoData[category].forEach((photo) => {
        const photoElement = createPhotoElement(photo, category);
        container.appendChild(photoElement);
      });
    });

    // 添加点击事件 - 查看大图
    document.querySelectorAll(".photo-item").forEach((photo) => {
      photo.addEventListener("click", function () {
        showPhotoDetail(this.dataset.src, this.dataset.caption);
      });
    });
  }

  // 创建单个照片元素
  function createPhotoElement(photo, category) {
    const photoDiv = document.createElement("div");
    photoDiv.className =
      "photo-item relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer";
    photoDiv.dataset.src = photo.src;
    photoDiv.dataset.caption = photo.caption;

    // 照片
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.caption;
    img.className = "w-full h-64 object-cover";

    photoDiv.appendChild(img);

    return photoDiv;
  }

  // 显示照片大图
  function showPhotoDetail(src, caption) {
    Swal.fire({
      imageUrl: src,
      imageAlt: caption,
      showCloseButton: true,
      showConfirmButton: false,
      width: "auto",
      padding: "1em",
      background: "#fff",
      backdrop: `rgba(0,0,0,0.8)`,
      imageWidth: "100%",
      imageHeight: "auto",
      customClass: {
        container: "photo-modal-container",
        image: "max-h-[80vh] object-contain",
      },
    });
  }

  // 初始化照片墙
  loadPhotoWall();
});
