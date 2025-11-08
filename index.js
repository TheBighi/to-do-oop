import express from 'express'
import bodyParser from 'body-parser'

import todoRoutes from './routes/todos.js'

const app = express()
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

app.use("/todos", todoRoutes)

app.get("/fortnite", (req, res) => {
    res.send({
        message: "666677777"
    })
})

app.listen(3001, () => {
    console.log('server is http://localhost:3001')
}) 