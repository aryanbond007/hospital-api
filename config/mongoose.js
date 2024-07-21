//this file is used to set connection with the database
const mongoose= require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const dotenv = require('dotenv').config();

//Set up default mongoose connection
const mongoDB = process.env.DEVELOPMENT_DB;
module.exports = mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESTABLISHED"));
//name of the db is products-api
// mongoose.connect('mongodb+srv://araj8764:oWLDyam0j2VLB00k@cluster0.aatwmd2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
// mongoose.connect(process.env.db);

const db=mongoose.connection;
//for error
 db.on('error', console.error.bind(console,"ERROR CONNECTING TO DATABASE!!"));

 //on success
 db.once('open', ()=>{
     console.log("Conncted to database");
 });

 module.exports=db;