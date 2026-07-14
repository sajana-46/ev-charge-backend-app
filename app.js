

const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")


const app=express()

app.use(cors())

app.use(express.json())


mongoose.connect("mongodb://sajana:2504@ac-ltz4eec-shard-00-00.pdwztor.mongodb.net:27017,ac-ltz4eec-shard-00-01.pdwztor.mongodb.net:27017,ac-ltz4eec-shard-00-02.pdwztor.mongodb.net:27017/chargedb?ssl=true&replicaSet=atlas-ptliri-shard-0&authSource=admin&appName=Cluster0").then(
    ()=>{
        console.log("db connected")
    }
).catch(
    (error)=>{
        console.log(error)
    }
)


const Charge=mongoose.model("charge",new mongoose.Schema(
    {
        
        

    bookingId: Number,
    ownerName: String,
    batteryCapacity: Number,
    email: String,
    connectorType: String,
    chargingDate: Date,
    phone: String,
    vehicleRegistrationNumber: String,
    vehicleBrand: String,
    timeSlot: String,
    estimatedUnits: Number,
    vehicleModel: String,
    chargingBayNumber: Number

})
        
        


    


    
)


app.post("/add-vehicle",async(req,res)=>{
    await Charge.create(req.body)
    res.json({"status":"success"})
    

})

app.post("/view-booking",async(req,res)=>{
    const charge=await Charge.find()
    res.json(charge)
})





app.listen(3000,()=>{
    console.log("server started")
})
