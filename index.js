const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('/.config/key');


const app = express();

//clientId 
// clientSecret 
passport.use(new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret
}));


const PORT = process.env.PORT || 5000; // เป็นการกําหนด PORT ต้องใช่Port ของ Webserver ที่กําหนดให้ เเต่ถ้าก๊สหนดให้เเล้วให้ใช้ Port 5000

app.listen(PORT);