//dependancies//
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//imports//
const authenticate = require('./auth/restricted_middleware');
const authRouter = require('./auth/auth_router.js');
const celebsRouter = require('./celebs/celebs_router.js');
const usersRouter = require('./users/users_router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/auth', authRouter);
server.use('/celebs', celebsRouter);
server.use('/users', authenticate, usersRouter); //authenticate

//initial Get//
server.get('/', (req, res) => {
  res.json({ api: 'Im Alive!!'})
});

module.exports = server;