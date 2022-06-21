const bcrypt = require('bcrypt');
const { User } = require('../db/models');

exports.regControl = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userName = await User.findOne({ where: { name } });
    if (userName) {
      return res.status(400).json({message: 'данное имя пользователя уже используется'});
    }
    const userEmail = await User.findOne({ where: { email } });
    if (userEmail) {
      return res.status(400).json({message: 'данная почта уже используется'});
    }
    const hashedPas = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPas });
    req.session.user = {
      id: user.id,
      name: user.name,
    };
    const thisUser = req.session.user
    res.json(thisUser);
  } catch (err) {
    return res.status(500).json({message: 'ошибка на сервере, попробуйте позже'})
  }
};

exports.loginControl = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({message: 'введен неверный логин или пароль'});
    }
    const pass = await bcrypt.compare(password, user.password);
    if (user && pass) {
      req.session.user = {
        id: user.id,
        name: user.name,
      };
      return res.status(200).json(req.session.user);
    } else {
      return res.status(401).json({message: 'введен неверный логин или пароль'});
    }
  } catch (err) {
    // return res.send(500).json(err)
    return res.status(500).json({message: 'ошибка на сервере, попробуйте позже'})
  }
};


exports.logoutControl = (req, res) => {
  req.session.destroy();
  res.clearCookie('englishCookie');
  res.sendStatus(200);
};

exports.sessionControl = async (req, res) => {
  if (!req.session.user) {
     res.json({})
  } else {
    res.json(req.session.user)
  }
}
