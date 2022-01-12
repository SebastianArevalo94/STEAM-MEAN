const mongoose = require('mongoose');
const local = 'mongodb://localhost:27017/steam';

mongoose.connect(local,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(db=>console.log('Database is connect ! :)'))
    .catch(err=>console.log(err))

module.exports = mongoose;