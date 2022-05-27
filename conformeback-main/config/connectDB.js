const mongoose=require("mongoose")
const config = require("config");

const db = config.get('db');
const connectDB = async () => {

 try {
  await mongoose.connect(db, {
   useNewUrlParser: true,
   useUnifiedTopology: true
  })
  console.log('data base connect...');
 } catch (error) {
  console.error(error);
 }
}
module.exports = connectDB;