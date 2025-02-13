const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function connectMongoDB(url) {
    // Connection to Mongo DB:
    return mongoose.connect(url)
        .then(() => 
            console.log("Mongo DB Connection Created")
        )
        .catch(err => console.log('Mongo error', err));
}

module.exports = {
    connectMongoDB
};
