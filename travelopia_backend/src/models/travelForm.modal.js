const { Schema, model } = require('mongoose')

// Define a Schema for a travel form submission
const travelFormSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    destination: { type: String, required: true },
    numTravellers: { type: Number, required: true },
    budgetPerPerson: { type: Number, required: true },
    currency: { type: String, default: 'USD' },
    createdAt: { type: Date, default: Date.now },
});

// Define model for travel form submissiom
const TravelForm = model("TravelForm", travelFormSchema)

// Export model

module.exports = TravelForm