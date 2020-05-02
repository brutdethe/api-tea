import express from 'express'
import db from './teas'

const app = express()
app.get('/api/v1/teas', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'teas retrieved successfully',
        teas: db
    })
})

const PORT = 5000

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})