import mongoose from "mongoose";


// People doc in mongodb
const peopleSchema = new mongoose.Schema({
    automatedNumber: { type: Number, required: true },
    nationalNumber: { type: Number, required: true },
    registrNumber: { type: Number, required: true },
    familyPaperNumber: { type: Number, required: true },
    firstName: { type: String, required: true },
    fatherName: { type: String, required: true },
    grandfatherName: { type: String, required: true },
    lastName: { type: String, required: true },
    fullName: { type: String, required: true },
    dateOfBirth : { type: Date, required: true},
    motherFullName: { type: String , required: true},
    motherNationality: { type: String, required: true},
    gender: { type: String, required: true},
    placeOfBirth: { type: String , required: true}

})


const People = mongoose.model("people",peopleSchema);

export default People; 

