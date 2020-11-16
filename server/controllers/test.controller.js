import Test from '../models/test.model'

const testGet = async (req, res) => {
    try {
        let result = await Test.find()
        res.json(result)

    } catch (err) {
        return res.status(400).json({
            error: err
        })
    }
}

const testCreate = async (req, res) => {
    const user = new Test(req.body)
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

const testPut = async (req, res) => {
    try {
        let result = await Test.findByIdAndUpdate(req.body._id, req.body, {
            new: true
        })
        res.json(result)
    } catch (err) {
        return res.status(400).json({
            error: err
        })
    }
}

const testDelete = async (req, res) => {
    try{
      let result = await Test.findByIdAndRemove(req.body._id)
      res.json(result)
    }catch(err){
      return res.status(400).json({
        error: err
      })
    }
  }

export default {
    testGet,
    testCreate,
    testPut,
    testDelete
}