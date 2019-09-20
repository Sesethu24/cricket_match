let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let cricket_match = require("./cricket_match")

let theMatch = cricket_match();

app.use(express.static('public'));
var exphbs = require('express-handlebars');

const handlebarSetup = exphbs({
    partialsDir: "./views/partials",
    viewPath: './views',
    layoutsDir: './views/layouts'
});

app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {

    res.render('index',
        {
            total: theMatch.getCurrentScore()
        });
})
app.post('/action', function (req, res) {

    theMatch.extractScore({ total: req.body.total
    
    })
   res.redirect('/')
});

let PORT = process.env.PORT || 3010;

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
});