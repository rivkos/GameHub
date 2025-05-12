document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;

    // Здесь должен быть AJAX-запрос к серверу для поиска в bd.txt
    // Пример:
    
   fetch('search.php?query=' + encodeURIComponent(query))
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = ''; // Очистить предыдущие результаты

            if (data.length > 0) {
                data.forEach(item => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'result-item';
                    resultItem.textContent = item; // Здесь выводим данные
                    resultsDiv.appendChild(resultItem);
                });
            } else {
                resultsDiv.textContent = 'Ничего не найдено';
            }
        })
        .catch(error => console.error('Ошибка:', error));
});
