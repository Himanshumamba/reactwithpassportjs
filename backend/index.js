const cookieSession = require('cookie-session');
const express = require('express');
const cors = require('cors');
const passport = require('passport');

const app = express();
const PORT = 5000;

require('./passport');

const authRoute = require('./routes/auth');

app.use(cookieSession({
  name: 'session', 
  keys: ['Himanshu'], 
  maxAge: 24 * 60 * 60 * 1000, 

}));

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5000',
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
    credentials: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
