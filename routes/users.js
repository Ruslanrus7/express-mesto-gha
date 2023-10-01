const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const urlRegular = require('../utils/constans');
const {
  getUsers,
  getUserById,
  editUser,
  editAvatarUser,
  getDataUser,
} = require('../controllers/users');

router.get('/', getUsers);

router.get('/me', getDataUser);

router.get('/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().length(24).hex().required(),
  }),
}), getUserById);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
}), editUser);

router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().pattern(urlRegular),
  }),
}), editAvatarUser);

module.exports = router;
