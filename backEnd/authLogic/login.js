const User = require("../userSchema/user.js");
const argon2 = require("argon2");
const pass = process.env.HASHING;


const userLogin = async function (req , res) {
  try {
    const{username , password} = req.validatedData ;
    const user = await User.findOne(username);
    hashedPass = user.password ;
    unhashedPass = argon2.verify(hashedPass , pass)
    if(password == unhashedPass)
    {
    res.status(201).json({ message: 'User validated successfully!', user: username });
     next() ;
    }else{res.status(400).json({ message: 'User does not exist!'});  }
  } catch (error) {
    console.log("error during login -"+error ) ;
  }
}

module.exports = userLogin ;
