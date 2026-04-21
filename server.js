import express from "express";

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Backend, its new message " });
})

app.get("/api/products", (req, res) => {
    res.json({ message: "All Products" })
})

app.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`)
})