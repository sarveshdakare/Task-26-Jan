// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
   
//     name: String,
//     content: String, 
//     Date:Date,
  
// });

// module.exports = mongoose.model('products', productSchema);
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    content: String,
    date: {
        type: Date,
        required: true, // You can make the date field required if needed
    },
});

module.exports = mongoose.model('products', productSchema);
