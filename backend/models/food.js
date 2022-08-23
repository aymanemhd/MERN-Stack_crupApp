const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
    foodname: {
        type: String,
        required: true,
    },
    daysSinceIAte: {
        type: Number,
        required: true,
    },
});

const Fooddd = mongoose.model('Food',FoodSchema)
module.exports = Fooddd