import mongoose from 'mongoose'

var UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: { type: String, unique: true},
  password: String,
  photo: String,
  rfUserDetail: mongoose.Schema.Types.ObjectId,
  userType: String,
  userGender: String
})

export default mongoose.model('User', UserSchema, 'user')
