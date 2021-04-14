import User from '../models/user.model'
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

const GetUserById = async (req, res) => {
  try {
    let query = {
      _id: ObjectId(req.query.userId)
    }

    let result = await User.aggregate([{
        $match: query
      },
      {
        $lookup: {
          from: 'userDetail',
          localField: 'rfUserDetail',
          foreignField: '_id',
          as: 'userDetail',
        }
      }
    ]);

    res.json(result)
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
}

const UserLogin = async (req, res) => {
  try {
    let query = {
      email: req.query.userEmail,
      password: req.query.userPassword
    }

    let result = await User.aggregate([{
        $match: query
      }
    ]);

    res.json(result)
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
}

const UserSignUp = async (req, res) => {
    const user = new User(req.body.params)
    
    try {
        await user.save()
        return res.status(200).json({
            message: "Kayıt Başarılı!"
        })
    } catch (err) {
        return res.status(400).json({
            error: err
        })
    }
}

export default {
  GetUserById,
  UserLogin,
  UserSignUp
  // testPut,
  // testDelete
}
