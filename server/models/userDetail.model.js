import mongoose from 'mongoose'

var UserDetailSchema = new mongoose.Schema({
  address: String,
  phone: String,
  summary: String,
  website: String,
  bio: String,
  degree: String,
  rfProfession: mongoose.Schema.Types.ObjectId,
  rfCity: mongoose.Schema.Types.ObjectId,
  userType: String,
  education: String
})

export default mongoose.model('UserDetail', UserDetailSchema, 'userDetail')
