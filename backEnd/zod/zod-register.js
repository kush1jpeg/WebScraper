import zod from 'zod';

//zodRegister
const Register = zod.object({
  username: zod.string().trim().min(3 , message:"Username must be 3 char long").max(10 , message:"Name must be less than 10 chars") ,
  email:zod.string().trim().email({message:"Please enter a valid email"}) ,
  password:zod.string().trim().min(4 , message:"Password should be minimum 4 chars long").max(8 , "Password should be less than 8 chars") ,
})

export const zodRegister = (req, res, next) => {
  try {
    req.validatedBody = Register.safeParse(req.body);
    next();
  } catch (err) {
    res.status(400).json({ error: err.errors });
  }
};

module.exports = zodRegister ;



//zodLogin
const Login = zod.object({
  username: zod.string().trim().min(3 , message:"Username must be 3 char long").max(10 , message:"Name must be less than 10 chars") ,
  password:zod.string().trim().min(4 , message:"Password should be minimum 4 chars long").max(8 , "Password should be less than 8 chars") ,  
})
export const zodLogin = (req, res, next) => {
  try {
    req.validatedBody = Login.safeParse(req.body); 
    next();
  } catch (err) {
    res.status(400).json({ error: err.errors });
  }
};

module.exports = zodLogin ;
