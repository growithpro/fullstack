import express from "express";
import cors from "cors";
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use(cors())

let products = [
    { "id": 1, "pname": "product1", "price": 3000 },
    { "id": 2, "pname": "product2", "price": 4000 },
    { "id": 3, "pname": "product3", "price": 5000 },
    { "id": 4, "pname": "product4", "price": 6000 },
    { "id": 5, "pname": "product5", "price": 7000 },
     { "id": 6, "pname": "product6", "price": 8000 },
]


app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Backend, its new message " });
})

app.get("/api/products", (req, res) => {
    res.json(products)
})

app.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`)
})