import mongoose from 'mongoose'

var CommentsSchema = new mongoose.Schema({
  message: String,
  rfCommentedUser: mongoose.Schema.Types.ObjectId,
  rfCommenterUser: mongoose.Schema.Types.ObjectId
})

export default mongoose.model('Comments', CommentsSchema, 'comments')
