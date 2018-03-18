const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/key');

require('./models/User');
require('./services/passport'); // ไม่มีค่า Return ใน passport.js ทัาให้ไม่ต้องใช้ตัวเเปรในการเก็บ



mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30*24*60*1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000; // เป็นการกําหนด PORT ต้องใช่Port ของ Webserver ที่กําหนดให้ เเต่ถ้าก๊สหนดให้เเล้วให้ใช้ Port 5000

app.listen(PORT);