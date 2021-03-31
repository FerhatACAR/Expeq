require('dotenv').config();

const config = {
    port: 4000,
    //jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: "mongodb+srv://ferhatacar:22121997FerhatA@expeqcluster.koriu.mongodb.net/ExpeqDb?retryWrites=true&w=majority"
  }

  export default config
