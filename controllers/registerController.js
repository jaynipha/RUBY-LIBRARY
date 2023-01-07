const User = require("../model/User");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { firstname, lastname, phone, email, pwd } = req.body;
  if (!email || !pwd || !lastname || !phone || !firstname)
    return res.status(400).json({ message: "all fields are required." });

  // check for duplicate emails in the db
  const duplicate = await User.findOne({ email: email }).exec();
  if (duplicate) return res.sendStatus(409); //Conflict

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(pwd, 10);

    //create and store the new user
    const result = await User.create({
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      email: email,
      password: hashedPwd,
    });

    console.log(result);

    res.status(201).json({ success: `New user ${firstname} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };
