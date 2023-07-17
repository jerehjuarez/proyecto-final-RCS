const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/User")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017")


app.post("/login", (req, res) => {
    const {email, password} = req.body
    UserModel.findOne({ email: email })
    .then(user => {
        if (user) {
            if (user.password === password && user.email === email) {
                res.json("Exitoso")
            } else {
                res.json("Los datos no son correctos")
            }
        } else {
            res.json("No existe")
        }
    }) 
}) 

app.post("/register", (req, res) => {
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
}) 

app.listen(3000, ()  => {
    console.log("Connection")
})