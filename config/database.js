const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect('mongodb+srv://jaiparasher30:Jaipandat11@cluster0.a9gta72.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongoose Connected");
    }).catch((error) => {
        console.log(error);
    });
}

module.exports = connectDatabase;