const User = require("../userSchema/user.js");
const argon2 = require("argon2");
const pass = process.env.HASHING;

const registerUser = async (req, res) => 
{
  try {
    const { username, email, password } = validatedData;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists - Login instead" });
    }

    // Hashint the fucking password
    const hashedPass = await argon2.hash(pass);

    // Save user
   const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
});

res.status(201).json({ message: 'User registered successfully!', user: newUser });
    next();

}    catch (error) {
  console.log("Error during registering user");
  }


module.exports = registerUser;

