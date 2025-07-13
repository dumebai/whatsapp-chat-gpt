const mongoose = require('mongoose');
const User = require('../backend/models/User');
const bcrypt = require('bcryptjs');
require('dotenv').config();

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  await User.deleteMany({});
  const hash = await bcrypt.hash('password', 10);
  await User.create({ email: 'test@pingu.ro', password: hash, verified: true });
  console.log('Seeded user test@pingu.ro / password');
  process.exit();
}

seed();
