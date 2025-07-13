const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

(async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
    await mongoose.disconnect();
  } catch (e) {
    console.error('Connection failed', e);
    process.exit(1);
  }
})();
