const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const checkUser = require('./login')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

// routes
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const userInput = req.body
    const checkedResult = checkUser(userInput)
    // error alarm
    if (!checkedResult) {
        // Username/Password 錯誤
        const errMessage = 'Wrong Username/Password!!'
        res.render('index', {errMessage: errMessage, userEmail: userInput.email, userPassword: userInput.password})
    } else {
        res.render('loginPage', { userName: checkedResult.firstName})
    }
   
})

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
})