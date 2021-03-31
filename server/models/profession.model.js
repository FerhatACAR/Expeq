import mongoose from 'mongoose'

var ProfessionSchema = new mongoose.Schema({
  name: String
})

export default mongoose.model("Profession", ProfessionSchema, "professions")
