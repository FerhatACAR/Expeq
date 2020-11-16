import mongoose from 'mongoose'

var TestSchema = new mongoose.Schema({
  name: String,
  surname: String,
  age: Number
})

export default mongoose.model("Test", TestSchema, "TestCollection")
