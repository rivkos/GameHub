window.addEventListener('DOMContentLoaded', () => {
  fetch('data/games.json')
    .then(res => res.json())
    .then(data => renderGames(data))
    .catch(err => console.error('Ошибка загрузки игр:', err));
});

function renderGames(games) {
  const container = document.getElementById('gamesList');

  games.forEach((game, index) => {
    const card = document.createElement('div');
    card.className = 'game-item';
    card.style.animationDelay = `${0.3 + index * 0.2}s`;

    // Создание иконки с изображением
    const icon = document.createElement('img');
    icon.src = game.icon; // Путь к иконке игры
    icon.alt = `${game.title} Icon`; // Альт-текст для иконки
    icon.style.width = '60px'; // Установка ширины иконки
    icon.style.height = '60px'; // Установка высоты иконки

    // Заполнение карточки игры
    card.innerHTML = `
      <!-- Вставка изображения иконки -->
      <div class="icon-container" style="text-align: center;">
        ${icon.outerHTML}
      </div>
      <h3>${game.title}</h3>
      <p>${game.description || ''}</p>
      <button onclick="window.open('${game.link}', '_blank')">
        ${game.buttonText || 'Скачать'}
      </button>
    `;

    // Добавление карточки в контейнер
    container.appendChild(card);
  });
}
