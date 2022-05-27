const user = require("../models/user");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const config = require('config');
const secret = config.get('secret');
exports.Register = async (req, res) => {
  const { UserName, Email, Phone, Password } = req.body;
  let User = await user.findOne({ Email });
  try {
    if (User) {
      return res.status(400).json("user is exist");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(Password, salt);
    let newUser = await new user({
      UserName,
      Email,
      Phone,
      Password,
    });
    newUser.Password = hash;
    await newUser.save();
    const payload = {
      id: newUser.id,
      email: newUser.Email,
    };
    const token = jwt.sign(payload, secret);
    return res.send({
      token,
    });
  } catch (error) {
    return res.status(401).json(error);
  }
};

exports.Login = async (req, res) => {
  const { Email, Password } = req.body;
  try {
    let User = await user.findOne({ Email });
    if (!User) {
      return res
        .status(400)
        .json("votre mail ou votre mot de passe est incorrecte ");
    }
    let verificationPassword = await bcrypt.compare(Password, User.Password);

    if (verificationPassword) {
      const payload = {
        id: User.id,
        email: User.Email,
      };
      const token = await jwt.sign(payload, secret);
      return res.send({
        token,
      });
    } else {
      return res.status(403).json("votre mail ou mot de passe est incorrecte!");
    }
  } catch (error) {
    return res.status(401).json(error);
  }
};



exports.getuserinfo = async (req, res) => {
  // const token = await req.headers.authorization.split(' ')[1]
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, secret);
    const id = decodedToken.id;
    console.log(id)
    const USER = await user.findById(id);
    console.log(USER.UserName)
    if (!USER) {
      return res.status(403).json("user id invalide!");
    }

    const userinfo = {
      UserName: USER.UserName,
      LastName: USER.LastName,
      Email: USER.Email,
    }
    return res.send({ userinfo })

  } catch (error) {
    res.status(401).json({
      error
    });
  }


}