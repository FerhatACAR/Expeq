import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'


// Connection URL
mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://ferhatacar:22121997FerhatA@expeqcluster.koriu.mongodb.net/ExpeqDb?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})


app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
