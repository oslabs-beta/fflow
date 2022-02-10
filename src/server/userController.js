const User = require('./userModel.js');
const bcrypt = require('bcrypt');

const userController = {};

userController.bcrypt = (req, res, next) => {
  const { password } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    res.locals.hashedPassword = hash;
    return next();
  });
};

userController.signup = (req, res, next) => {
  User.create({ username: req.body.username, password: res.locals.hashedPassword }, (err, newUser) => {
    if (err) return next(err);
    res.locals.userId = newUser._id;
    return next();
  });
};

userController.userLogin = (req, res, next) => {
  try {
    const { username, password } = req.body;

    User.findOne({ username: username }).exec((error, user) => {
      if (error || !user) return next(error);
      bcrypt.compare(password, user.password, (error, result) => {
        if (error) return next(error);
        if (result === true) {
          res.locals.loggedIn = 'successfully logged in';
          return next();
        } else if (result === false) {
          alert('Incorrect password.');
          return next();
        }
      });
    });
  } catch (err) {
    return next({ err });
  }
};

module.exports = userController;
