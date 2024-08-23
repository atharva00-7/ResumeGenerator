const moongoose = require("mongoose");
const Auth = require("../models/Auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Auth.findOne({ email });
    if (!user) {
      return res.status(500).json({
        success: false,
        message: "No user exits",
      });
    }
    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        process.env.JWT_SECRET, 
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token,user });
        }
      );
    }
    else {
        return res.status(401).json({message: 'Passowrd wrong'});
    }
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
