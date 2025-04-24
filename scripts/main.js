// Получение игр из localStorage
function getGames() {
  return JSON.parse(localStorage.getItem('games')) || [];
}

// Сохранение новой игры
function saveGame(game) {
  const games = getGames();
  games.push(game);
  localStorage.setItem('games', JSON.stringify(games));
}

// Обработка формы
const form = document.getElementById('gameForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const game = {
      title: form.title.value,
      link: form.link.value,
      icon: form.icon.value,
    };
    saveGame(game);
    alert("Игра добавлена!");
    form.reset();
  });
}

// Вывод на главной странице
function renderGames() {
  const gamesContainer = document.getElementById('gamesList');
  if (!gamesContainer) return;

  const games = getGames();
  gamesContainer.innerHTML = '';

  games.forEach(game => {
    const div = document.createElement('div');
    div.className = 'game-card';
    div.innerHTML = `
      <img src="${game.icon}" class="game-icon" alt="${game.title}">
      <h2>${game.title}</h2>
      <a href="${game.link}" class="download-btn" target="_blank">Скачать</a>
    `;
    gamesContainer.appendChild(div);
  });
}

renderGames();
