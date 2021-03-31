import City from '../models/city.model'
import Profession from '../models/profession.model'

const citiesGet = async (req, res) => {
  try {
    let result = await City.find()
    res.json(result)
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
}

const professionsGet = async (req, res) => {
  try {
    let result = await Profession.find()
    res.json(result)
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
}

// const testCreate = async (req, res) => {
//     const user = new Test(req.body)
//     try {
//         await user.save()
//         return res.status(200).json({
//             message: "Kayıt Başarılı!"
//         })
//     } catch (err) {
//         return res.status(400).json({
//             error: err
//         })
//     }
// }
//
// const testPut = async (req, res) => {
//     try {
//         let result = await Test.findByIdAndUpdate(req.body._id, req.body, {
//             new: true
//         })
//         res.json(result)
//     } catch (err) {
//         return res.status(400).json({
//             error: err
//         })
//     }
// }
//
// const testDelete = async (req, res) => {
//     try{
//       let result = await Test.findByIdAndRemove(req.body._id)
//       res.json(result)
//     }catch(err){
//       return res.status(400).json({
//         error: err
//       })
//     }
//   }

export default {
  citiesGet,
  professionsGet
  // testPut,
  // testDelete
}
