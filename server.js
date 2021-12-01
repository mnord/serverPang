const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname, 'pang')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/test', function(req, res) {
    var name = req.body.namn;
    fs.appendFile("test.txt", name, (err) => {
        if(err) throw err;
    });
    //console.log(name);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));