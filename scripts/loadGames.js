document.addEventListener("DOMContentLoaded", function() {
  // Загружаем данные из JSON файла
  fetch("data/games.json")  // Проверь путь к файлу, это зависит от того, где у тебя находится games.json
    .then(response => response.json())
    .then(games => {
      const gamesContainer = document.getElementById("gamesList");

      // Для каждой игры создаём карточку
      games.forEach(game => {
        const div = document.createElement("div");
        div.classList.add("game-card");
        div.innerHTML = `
          <img src="${game.icon}" class="game-icon" alt="${game.title}">
          <h2>${game.title}</h2>
          <a href="${game.link}" class="download-btn" target="_blank">Скачать</a>
        `;
        gamesContainer.appendChild(div);
      });
    })
    .catch(error => console.error("Ошибка загрузки игр:", error));
});
