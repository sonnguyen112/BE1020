import express from "express"
const app = express()

//set middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//set route
app.use("/", require("./routes/index"))

app.listen(3000, () => {
    console.log("http://localhost:3000")
})