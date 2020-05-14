require("dotenv").config({ path: __dirname + "/../.env" })
const express = require("express")
const session = require("express-session")
const massive = require("massive")
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env
const app = express()

app.use(express.json())
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 },
  })
)
//Controllers
const authCtrl = require("./controllers/authController")
const villageCtrl = require("./controllers/villageController")
const combatCtrl = require("./controllers/combatController")

//db and socket connections
massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set("db", db)
    console.log("database is building its tribe")
    const io = require("socket.io")(
      app.listen(SERVER_PORT, () =>
        console.log(`server is raiding tribes at port ${SERVER_PORT}`)
      )
    )

    //SOCKET ENDPOINTS
    io.on("connection", (socket) => {
      socket.on("attack", (body) => combatCtrl.attack(io, socket, db, body))
    })
  })
  .catch((err) => console.log(err))

//MIDDLEWARE
const authMid = require("./middleware/authMiddleware")

//REST ENDPOINTS

//auth endpoints

app.get("/api/user", authCtrl.getUser)
app.post("/auth/login", authCtrl.login)
app.post("/auth/register", authCtrl.register)
app.post("/auth/logout", authMid.usersOnly, authCtrl.logout)

//village endpoints
app.get("/api/village/:village_id", authMid.usersOnly, villageCtrl.getVillage)
app.get("/api/villages", authMid.usersOnly, villageCtrl.getVillages)
app.get("/api/villages/other", authMid.usersOnly, villageCtrl.getOtherVillages)

//new village endpoint
// app.get('/api/villages', villageCtrl.getVillagesNew)
