const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
            "mongodb+srv://riggur:riggur123@kool.pmmlais.mongodb.net/",
            { useNewUrlParser: true }
        );
    } catch (err) {
        console.log(err);
    }
}

module.exports = { connect };