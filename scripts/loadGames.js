window.addEventListener('DOMContentLoaded', () => {
  fetch('data/games.json')
    .then(res => res.json())
    .then(data => renderGames(data))
    .catch(err => console.error('Ошибка загрузки JSON:', err));
});

function renderGames(games) {
  const container = document.getElementById('gamesList');

  games.forEach((game, index) => {
    const card = document.createElement('div');
    card.className = 'game-item';
    card.style.animationDelay = `${0.3 + index * 0.2}s`;

    card.innerHTML = `
      <i class="${game.icon || 'fas fa-gamepad'}"></i>
      <h3>${game.title}</h3>
      <p>${game.description || ''}</p>
      <button onclick="window.open('${game.link}', '_blank')">
        ${game.buttonText || 'Играть'}
      </button>
    `;

    container.appendChild(card);
  });
}
