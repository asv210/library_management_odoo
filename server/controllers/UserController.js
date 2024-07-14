const User = require("../models/UserSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const {email,firstName,lastName, password, role } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(409).send( "User already exists" );
    }

    user = new User({ email, lastName,firstName, password, role });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        password: user.password,
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        role: user.role,
      },
    };

    jwt.sign(payload, process.env.JWT_TOKEN_KEY, { expiresIn: "1h" }, (err, token) => {
      if (err) throw err;
      res.status(200).send("registered successfully").json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    jwt.sign(payload, process.env.JWT_TOKEN_KEY, { expiresIn: "1h" }, (err, token) => {
      if (err) throw err;
      res.json({ token, user });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
