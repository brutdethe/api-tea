import fs from 'fs'
import express from 'express'

const app = express()
app.get('/api/v1/teas', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'teas retrieved successfully',
        teas: JSON.parse(fs.readFileSync('teas.json', 'utf8'))
    })
})

app.get('/', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'API-tea documentation',
        api: JSON.parse(fs.readFileSync('api-tea.json', 'utf8'))
    })
})

app.listen(process.env.PORT || 3000, () => console.log("Server is running : http://localhost:3000"))
