const mongoose = require('mongoose');

module.exports=()=>{
    return mongoose.connect('mongodb+srv://navneetfw14:navnee7250@cluster0.iowwj.mongodb.net/uberEats?retryWrites=true&w=majority')
}