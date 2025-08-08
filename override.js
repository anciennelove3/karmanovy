// на всякий случай удалим картинку из DOM
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero').forEach(el => el.remove());
});
