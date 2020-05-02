import fs from 'fs'
import express from 'express'

const app = express()

res.status(200).send({
    xx        api: JSON.parse(fs.readFileSync('./data/json/api-tea.json', 'utf8'))
})
})

app.get('/api/v1/teas', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'teas retrieved successfully',
        teas: JSON.parse(fs.readFileSync('./data/json/teas.json', 'utf8'))
    })
})

app.get('/api/v1/types', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'tea types retrieved successfully',
        teas: JSON.parse(fs.readFileSync('./data/json/types.json', 'utf8'))
    })
})

app.get('/api/v1/cultivars', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'tea cultivars retrieved successfully',
        teas: JSON.parse(fs.readFileSync('./data/json/cultivars.json', 'utf8'))
    })
})

app.get('/api/v1/families', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'tea families retrieved successfully',
        teas: JSON.parse(fs.readFileSync('./data/json/families.json', 'utf8'))
    })
})

app.get('/api/v1/picking', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'tea picking retrieved successfully',
        teas: JSON.parse(fs.readFileSync('./data/json/picking.json', 'utf8'))
    })
})

app.get('/api/v1/provinces', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'tea provinces retrieved successfully',
        teas: JSON.parse(fs.readFileSync('./data/json/provinces.json', 'utf8'))
    })
})

app.get('/api/v1/towns', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'tea towns retrieved successfully',
        teas: JSON.parse(fs.readFileSync('./data/json/towns.json', 'utf8'))
    })
})

app.get('/api/v1/brewing-types', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'tea brewing-types retrieved successfully',
        teas: JSON.parse(fs.readFileSync('./data/json/brewing-types.json', 'utf8'))
    })
})

app.get('/api/v1/harvests', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'tea harvests retrieved successfully',
        teas: JSON.parse(fs.readFileSync('./data/json/harvests.json', 'utf8'))
    })
})

app.listen(process.env.PORT || 3000, () => console.log("Server is running : http://localhost:3000"))
