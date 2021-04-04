import mongoose from 'mongoose'

var UserDetailSchema = new mongoose.Schema({
  adress: String,
  phone: String,
  summary: String,
  website: String,
  bio: String,
  degree: String,
  rfProfession: String,
  userType: String
})

export default mongoose.model('UserDetail', UserDetailSchema, 'userDetail')
