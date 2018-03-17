const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/key');


const app = express();


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log('access token', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile ', profile);
}));

//เวลาที่เรียก /auth/google ให้ไปเรียก passport.authentication 
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000; // เป็นการกําหนด PORT ต้องใช่Port ของ Webserver ที่กําหนดให้ เเต่ถ้าก๊สหนดให้เเล้วให้ใช้ Port 5000

app.listen(PORT);