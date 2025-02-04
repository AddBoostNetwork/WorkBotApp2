const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const BOT_TOKEN = '7851422609:AAGLGzpbLltyAgu0g_F_Orogf27AuBl6-8c';

app.use(express.json());
app.use(express.static('public'));

app.post('/send-message', async (req, res) => {
    const { chatId, text } = req.body;
    try {
        const response = await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            chat_id: chatId,
            text: text,
        });
        res.json({ success: true, data: response.data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});