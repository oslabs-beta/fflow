const express = require('express');
const userController = require('./userController');

const app = express();

const PORT = 8080;

app.use(express.json());

//test
app.get('/', (req, res) => {
  res.send('Hi');
});

//POST -> USER SIGNUP
app.post('/signup', userController.bcrypt, userController.signup, (req, res) => {
  return res.status(200).send('Sign up successful');
});

//POST -> USER LOGIN
app.post('/login', userController.userLogin, (req, res) => {
  res.status(200).send(res.locals.loggedIn);
});

app.use('*', (req, res) => {
  res.status(404).send('Page not Found');
});

app.use((err, req, res, next) => {
  return res.status(500).send(`Internal Server Error: ${err}`);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

module.exports = app;
