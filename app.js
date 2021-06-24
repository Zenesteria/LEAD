const express = require('express');
const port = process.env.PORT || '3000';

const app = express();

//MIDDLEWARE
app.set('view engine', 'ejs');
app.use(express.static('public'));

//ROUTES
app.use('/',require('./routes/index'));



//PORT
app.listen(port,function(){
    console.log('Server Running');
});