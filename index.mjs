import express from 'express'
import db from './teas.mjs'

const app = express()
app.get('/api/v1/teas', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'teas retrieved successfully',
        teas: db
    })
})

app.get('/', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'teas retrieved successfully',
        teas: db
    })
})

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."))
