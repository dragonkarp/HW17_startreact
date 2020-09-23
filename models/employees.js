const mongoose = require("mongoose")
const Schema = mongoose.Schema

const emplSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: true,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true
    }
})

const Employees = mongoose.model("Employees", emplSchema)

modules.exports = Employees