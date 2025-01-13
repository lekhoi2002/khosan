document.addEventListener('DOMContentLoaded', () => {
  const imageModal = document.getElementById('imageModal');
  imageModal.addEventListener('show.bs.modal', (event) => {
      const trigger = event.relatedTarget;
      const imageUrl = trigger.getAttribute('data-image');
      const title = trigger.getAttribute('data-title'); // Biến này chưa sử dụng, có thể thêm logic nếu cần
      const caption = trigger.getAttribute('data-caption');

      const modalImage = imageModal.querySelector('#modalImage');
      const modalCaption = imageModal.querySelector('#modalCaption');

      modalImage.src = imageUrl;
      modalImage.alt = caption;
      modalCaption.textContent = caption;
  });
});
