const mongoose = require('mongoose');
const databaseConfig = require('../config/database-config')

const connectDB = async ()=> {
    try{
 const con = await  mongoose.connect(databaseConfig.uri, {
    dbName: databaseConfig.database,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, err => err ? console.log(err) : console.log(`MongoDB connected`));
    }catch(err){
console.log(err);
process.exit(1);
    }
}

module.exports = connectDB;



// const connectDB = async ()=> {
//     try{
//  const con = await  mongoose.connect('mongodb://localhost:27017/', {
//     dbName: 'inlogs',
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify:false,
//     useCreateIndex : true 
// }, err => err ? console.log(err) : console.log('MongoDB connected : ${con.connection.host}'));
//     }catch(err){
// console.log(err);
// process.exit(1);
//     }
// }

// for cloud cluster