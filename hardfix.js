document.addEventListener('DOMContentLoaded', () => {
  // Добавляем ПОВЕРХ всех стилей наш «килл-слой»
  const css = `
    /* убить розовый градиент и любые эффекты у body::before */
    body::before{
      content:none !important;
      display:none !important;
      background:none !important;
      filter:none !important;
    }
    /* спрятать/убрать старое фото, независимо от класса/стиля */
    img.hero, .hero, .hero-full, .img-wrap { display:none !important; }
  `;
  const s = document.createElement('style');
  s.id = 'hardfix-style';
  s.textContent = css;
  document.head.appendChild(s);

  // На всякий случай удалить элементы-картинки из DOM
  document.querySelectorAll('img.hero, .hero, .hero-full, .img-wrap')
    .forEach(el => el.remove());
});
