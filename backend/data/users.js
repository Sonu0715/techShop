const bcrypt = require('bcryptjs')

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ram User',
    email: 'ram@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sam User',
    email: 'sam@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]
module.exports = users
