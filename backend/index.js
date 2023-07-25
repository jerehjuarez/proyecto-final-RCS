const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/User")
const bcrypt = require("bcrypt")
const ContactModel = require("./models/ContactData")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017")

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await UserModel.findOne({ email: email })

        if (user) {
            const response = await bcrypt.compare(password, user.password)

            if (response) {
                res.json("Exitoso")
            } else {
                res.json("Los datos no son correctos")
            }
        } else {
            res.json("No existe")
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body
        const hash = await bcrypt.hash(password, 10)
        const user = await UserModel.create({ name, email, password: hash })
        res.json(user)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

app.post("/contact", async (req, res) => {
    const { nombre, apellido, email, mensaje } = req.body
    const contact = new ContactModel({ nombre, apellido, email, mensaje })
  
    try {
      await contact.save();
      res.status(200).json({ message: "Datos guardados correctamente." })
    } catch (error) {
      console.error("Error al guardar los datos:", error);
      res.status(500).json({ message: "Ha ocurrido un error al guardar los datos." })
    }
})

app.get("/about-us", async (req, res) => {
    try {
      const db = mongoose.connection;
      const collection = db.collection("about-us");
      const aboutUsData = await collection.find({}).toArray();
      res.json(aboutUsData);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      res.status(500).json({ message: "Ha ocurrido un error al obtener los datos." });
    }
  });

app.listen(3000, ()  => {
    console.log("Connection")
})
