const mongoose = require('mongoose');

const mongoURI = `mongodb+srv://OspDatabase:TempPassword@cluster0.6uvsd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;