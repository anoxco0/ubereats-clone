const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const userSchama=new mongoose.Schema({
    firstName:{type:"String",require:true,},
    lastName:{type:"String",require:true},
    email:{type:"String",require:true,unique:true},
    password:{type:"String",require:true},
    ip:{type:"String",required:true}
},{versionKey:false,timestamps:true});

userSchama.methods.check=function(password){
    return bcrypt.compareSync(password,this.password)
}

userSchama.pre("save",function(next){
    if(!this.isModified("password")){return next()};
    var hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
})
module.exports =mongoose.model("projectuser",userSchama);