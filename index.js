const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({
        hi: 'there'
    });
});

const PORT = process.env.PORT || 5000 ; // เป็นการกําหนด PORT ต้องใช่Port ของ Webserver ที่กําหนดให้ เเต่ถ้าก๊สหนดให้เเล้วให้ใช้ Port 5000

app.listen(PORT);