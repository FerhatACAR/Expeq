require('dotenv').config();

const config = {
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: "mongodb+svr://" + process.env.DB_USER + 
      ":" + process.env.DB_PASSWORD  + process.env.DB_HOST + "/" +
      process.env.DB_NAME + "?retryWrites=true&w=majority"
  }
  
  export default config
  