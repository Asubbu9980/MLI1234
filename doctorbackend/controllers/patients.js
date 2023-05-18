const PatientModel=require("../models/patients")

const getPatients=function(req,res,next){
    PatientModel.find({})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
   
}

const postPatient=async function(req,res,next){
    console.log(req.body)
    
    try{
       let data=await PatientModel.create(req.body)
        res.send(data)
    }
    catch(error){
       return res.send(error)
    }
}

module.exports={getPatients,postPatient}