const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.static(__dirname + '/public'));
    app.listen(process.env.PORT || 3000, ()=>{
        console.log('Esta vivo');
    })