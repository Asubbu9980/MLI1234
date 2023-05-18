const mongoose=require('mongoose');
const {Schema}=mongoose;

const patientsSchema=new Schema({
   name:String,
   age:Number,
   doctor:String,
   purpose:String,
   date:String,
   time:String
})
const Patient=mongoose.model('users',patientsSchema)
module.exports=Patient