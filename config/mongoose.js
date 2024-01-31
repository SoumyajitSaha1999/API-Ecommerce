const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommerceDB
mongoose.connect('mongodb+srv://ssoumyajit245:dTKpC3sYvV2eVkIy@cluster0.rsfkjyj.mongodb.net/ecommerce_API?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;

// "mongodb+srv://bireswarghosh770:PuDhHGRHMNqu1Elc@cluster0.zuuqekg.mongodb.net/burger_app_backend?retryWrites=true&w=majority"