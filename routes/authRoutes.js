const passport = require('passport');

//ต้องการไปเรียก Module Express ของในส่วนของ index.js
module.exports = app =>{


//เวลาที่เรียก Path /auth/google ให้ไปเรียก passport.authentication 
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

};