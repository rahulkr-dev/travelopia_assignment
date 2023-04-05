const TravelForm = require('../models/travelForm.modal')

const postTravelFormData = async (req, res, next) => {
    try {
        const { name, email, destination, numTravellers, budgetPerPerson, currency } = req.body;
        const newTravelForm = new TravelForm({
            name,
            email,
            destination,
            numTravellers,
            budgetPerPerson,
            currency,
        });

        await newTravelForm.save();

        res.status(201).send({msg:"Form submission saved sucessfully"})
    } catch (error) {
        next(error)
    }
};

const getTravelFormData = async (req, res, next) => {
    // res.send('fine')
    try {
        const travelData = await TravelForm.find().sort({createdAt:"desc"});
        res.status(200).json({
            data:travelData
        })
    } catch (error) {
        next(error)
    }
};

module.exports = { getTravelFormData, postTravelFormData };