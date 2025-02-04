const startButton = document.getElementById('startButton');
const contentDiv = document.getElementById('content');

startButton.addEventListener('click', () => {
    Telegram.WebApp.ready();
    Telegram.WebApp.expand();

    fetch('/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chatId: Telegram.WebApp.initDataUnsafe.user?.id,
            text: 'Привет из мини-приложения!',
        }),
    })
    .then(response => response.json())
    .then(data => {
        contentDiv.innerHTML = `<p>Сообщение отправлено: ${JSON.stringify(data)}</p>`;
    })
    .catch(error => {
        contentDiv.innerHTML = `<p>Ошибка: ${error.message}</p>`;
    });
});