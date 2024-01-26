const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster0.niwywzq.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log("connected"))