import City from '../models/city.model'
import Profession from '../models/profession.model'
import User from '../models/user.model'
import UserDetail from '../models/userDetail.model'

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

const getUsersBySelected = async (req, res) => {
  try {
    let query = {
      rfCity: req.query.rfCity,
      rfProfession: req.query.rfProfession
    }
    
    let result = await UserDetail.aggregate([{
        $match: query
      },
      {
        $lookup: {
          from: 'user',
          localField: '_id',
          foreignField: 'rfUserDetail',
          as: 'user',
        }
      }
    ]);

    res.json(result)
    console.log(result);
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
  professionsGet,
  getUsersBySelected
  // testPut,
  // testDelete
}
