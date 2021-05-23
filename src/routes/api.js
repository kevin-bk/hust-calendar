const express = require('express');
const router = express.Router();

const Users = require('../api/user');
const Events = require('../api/event');
const fileUpload = require('../middlewares/fileUpload');

router.get('/getAllUsers', Users.getAllUsers);
router.get('/user/get-self-info', Users.getSelfInfo);
router.post('/account/update', fileUpload, Users.updateInfo);

router.post('/event/create', Events.create);
router.post('/event/follow', Events.follow);
router.post('/event/un-follow', Events.unFollow);
router.get('/delete-all-event', Events.deleteAll);
router.get('/event/get-all', Events.getAll);
router.get('/event/get-followed', Events.getFollowed);
router.get('/event/get-in-date', Events.getInDate);
router.get('/event/get-self', Events.getSelf);

module.exports = router;
