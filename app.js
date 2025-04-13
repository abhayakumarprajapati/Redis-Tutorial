const express = require("express")
// const { getProducts } = require("./api")
// const Redis = require('ioredis')

const app = express()
//changes
// const redis = new Redis({
//     host: "",
//     port: "",
//     password: ""
// })

// redis.on("connect", () => {
//     console.log("redis connectd")
// })

app.get('/', (req, res) => {
    res.send("hello")
})

// app.get('/products', async (req, res) => {

//     // const isExist = await redis.exists("products")
//     let products = await redis.get("products")

//     if (products) {
//         console.log('get from cache')


//         return res.json({
//             products: JSON.parse(products)
//         })

//     }


//     products = await getProducts()

//     // await redis.set("products",JSON.stringify(products))
//     await redis.setex("products", 20, JSON.stringify(products))


//     res.json({
//         products
//     })
// })


app.listen(3000, () => {
    console.log('server running')
})
