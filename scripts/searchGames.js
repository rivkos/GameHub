document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.game-card');

  input.addEventListener('input', () => {
    const filter = input.value.toLowerCase();

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.classList.remove('highlight');

      if (filter && text.includes(filter)) {
        card.classList.add('highlight');
        setTimeout(() => card.classList.remove('highlight'), 300);
        setTimeout(() => card.classList.add('highlight'), 600);
        setTimeout(() => card.classList.remove('highlight'), 900);
      }
    });
  });
});
 
