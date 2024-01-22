const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use(cors());

app.listen(8088, function(){
    console.log('listening on 8088');
})