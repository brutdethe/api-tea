import fs from 'fs'
import path from 'path'
import express from 'express'
import summary from '../src/summary'
import getSummary from './summary.mjs'

const app = express()

const getJsonPath = name =>
    path.format({
        root: process.cwd(),
        dir: 'data/json',
        name: name,
        ext: '.json'
    })

app.get('/', (req, res) => {
    const host = new URL('api/v1/', `${req.protocol}://${req.get('host')}/`)
    res.status(200).send({
        success: 'true',
        message: 'API-tea documentation',
        api: getSummary(host, [
            'teas',
            'types',
            'cultivars',
            'families',
            'picking',
            'provinces',
            'towns',
            'brewing-types',
            'harvests'
        ])
    })
})

app.get('/api/v1/teas', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'teas retrieved successfully',
        teas: JSON.parse(fs.readFileSync(getJsonPath('teas'), 'utf8'))
    })
})

app.get('/api/v1/types', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'tea types retrieved successfully',
        teas: JSON.parse(fs.readFileSync(getJsonPath('types'), 'utf8'))
    })
})

app.get('/api/v1/cultivars', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'tea cultivars retrieved successfully',
        teas: JSON.parse(fs.readFileSync(getJsonPath('cultivars'), 'utf8'))
    })
})

app.get('/api/v1/families', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'tea families retrieved successfully',
        teas: JSON.parse(fs.readFileSync(getJsonPath('families'), 'utf8'))
    })
})

app.get('/api/v1/picking', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'tea picking retrieved successfully',
        teas: JSON.parse(fs.readFileSync(getJsonPath('picking'), 'utf8'))
    })
})

app.get('/api/v1/provinces', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'tea provinces retrieved successfully',
        teas: JSON.parse(fs.readFileSync(getJsonPath('provinces'), 'utf8'))
    })
})

app.get('/api/v1/towns', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'tea towns retrieved successfully',
        teas: JSON.parse(fs.readFileSync(getJsonPath('towns'), 'utf8'))
    })
})

app.get('/api/v1/brewing-types', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'tea brewing-types retrieved successfully',
        teas: JSON.parse(fs.readFileSync(getJsonPath('brewing-types'), 'utf8'))
    })
})

app.get('/api/v1/harvests', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'tea harvests retrieved successfully',
        teas: JSON.parse(fs.readFileSync(getJsonPath('harvests'), 'utf8'))
    })
})

app.listen(process.env.PORT || 5000, function() {
    console.log('Server is running : http://localhost:5000')
})
