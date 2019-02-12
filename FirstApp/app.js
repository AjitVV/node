const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(express.static(path.join(__dirname, 'public/build')));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/home*',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'public','build','index.html'));
});

app.use('/admin',adminRouter);

app.use('/shop',shopRouter);

app.use((req,res,next) => {
    console.log('page not found');
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});
app.listen(3000);