const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
            "mongodb+srv://riggur:riggur123@kool.pmmlais.mongodb.net/"
        );
    } catch (err) {
        console.log(err);
    }
}

module.exports = { connect };