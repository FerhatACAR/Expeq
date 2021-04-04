import mongoose from 'mongoose'

var UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  rfCity: String,
  email: String,
  password: String,
  photo: String,
  rfUserDetail: mongoose.Schema.Types.ObjectId
})

export default mongoose.model('User', UserSchema, 'user')
