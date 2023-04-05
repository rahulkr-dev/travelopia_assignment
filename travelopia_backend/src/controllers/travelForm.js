const TravelForm = require('../models/travelForm.modal')

const getTravelFormData = async (req, res, next) => {
    // res.send('fine')
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
    } catch (error) {

    }
};

const postTravelFormData = async (req, res, next) => {
    res.send('fine')
};

module.exports = { getTravelFormData, postTravelFormData };