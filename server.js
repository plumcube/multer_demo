var express = require("express");
var multer = require('multer')
var upload = multer({ dest: 'public/images/' })

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.file);
    console.log(req.body);
    res.end('ok');
})

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
