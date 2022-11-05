const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI_LOCAL,{useNewURLParser : true, useUnifiedTopology:true})
.then(() => {
    console.log("mongoDB connected");
}).catch(err => {
    console.log(err);
})