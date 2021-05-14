import User from '../models/user.model'
import Comments from '../models/comments.model'
import UserDetail from '../models/userDetail.model'
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
    }]);

    res.json(result)
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
}

const UserSignUp = async (req, res) => {
  var detailId = mongoose.Types.ObjectId();
  var userId = mongoose.Types.ObjectId();
  const userDetail = new UserDetail({_id: detailId});

  try {
    await userDetail.save();

    req.body.params.rfUserDetail = detailId;
    req.body.params._id = userId;
    const user = new User(req.body.params)

    await user.save();
    return res.status(200).json({
      message: "Kayıt Başarılı!",
      userId: userId
    })
    await UserDetail.save();
  } catch (err) {
    return res.status(400).json({
      error: err
    })

  }
}


const UserComment = async (req, res) => {
  let query = {
    message: req.body.params.comment,
    rfCommentedUser: ObjectId(req.body.params.commentedUserId),
    rfCommenterUser: ObjectId(req.body.params.commenterUserId)
  }
  const comments = new Comments(query)

  try {
    await comments.save()
    return res.status(200).json({
      message: "Kayıt Başarılı!"
    })
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
}

const GetComments = async (req, res) => {
  try {
    let query = {
      rfCommentedUser: ObjectId(req.query.commentedUserId)
    }
    console.log(query)
    let result = await Comments.aggregate([{
        $match: query
      },
      {
        $lookup: {
          from: 'user',
          localField: 'rfCommenterUser',
          foreignField: '_id',
          as: 'user',
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

const EditUserDetail = async (req, res) => {
  let query = {
    degree: req.body.params.degree,
    phone: req.body.params.phone,
    website: req.body.params.website,
    address: req.body.params.address,
    summary: req.body.params.summary,
    bio: req.body.params.bio,
    education: req.body.params.education,
    _id: ObjectId(req.body.params._id),
    rfProfession: ObjectId(req.body.params.rfProfession),
    rfCity: ObjectId(req.body.params.rfCity),
    userType: '1'
  }

  try {
    let result = await UserDetail.updateOne({_id: query._id}, query, {
      upsert: true
    })
    res.json(result)
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
}

export default {
  GetUserById,
  UserLogin,
  UserSignUp,
  UserComment,
  GetComments,
  EditUserDetail
}
