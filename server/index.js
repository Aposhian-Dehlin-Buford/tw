require('dotenv').config()
const express= require('express');
const session= require('express-session');
const massive= require('massive');
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING}= process.env
const app= express()

app.usee(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 *60}
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('database is building its tribe')
    app.listen(SERVER_PORT, () => console.log(`server is raiding tribes at port ${SERVER_PORT}`))  
}).catch(err => console.log(err))

//Controllers
const authCtrl = require('./controllers/authController')


//ENDPOINTS

//auth endpoints

app.get('/api/user', authCtrl.getUser)
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.post('/auth/logout', authCtrl.logout)