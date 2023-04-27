const mongoose = require('mongoose')

const etudientSchema = mongoose.Schema({
    cin: {
        type : Number,
        required: true,
    },
    nom: {
        type : String,
        required: true,
    },
    prenom: {
        type : String,
        required: true,
    },
    email: {
        type : String,
        required: true,
    }
});

module.exports = Etudient = mongoose.model('etudient', etudientSchema)