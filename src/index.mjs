import fs from 'fs'
import path from 'path'
import express from 'express'
import cors from 'cors'
import getSummary from './summary.mjs'

const filesEndPoints = [
    'teas',
    'type',
    'cultivars',
    'families',
    'pickings',
    'provinces',
    'towns',
    'teaware',
    'brews',
    'harvests',
    'themes',
    'pinyin'
]

const dynamicEndpoints = ['tea/{ideogram}']
const endPoints = filesEndPoints.concat(dynamicEndpoints)

const getJsonPath = name =>
    path.format({
        root: process.cwd(),
        dir: 'data/json',
        name: name,
        ext: '.json'
    })

const app = express()

app.get('/', cors(), (req, res) => {
    const host = {
        protocol: req.protocol,
        pathname: 'api/v1/',
        host: req.get('host')
    }
    res.status(200).send({
        success: 'true',
        message: 'API-tea documentation',
        api: getSummary(host, endPoints)
    })
})

function getTea(ideogram) {
    const teas = JSON.parse(fs.readFileSync(getJsonPath('teas'), 'utf8'))
    return teas.filter(tea => tea.ideogram === ideogram)[0]
}

app.get('/api/v1/tea/:ideogram', cors({ origin: '*' }), (req, res) => {
    const query = req.params.ideogram
    const result = getTea(query)
    if (result) {
        res.status(200).send({
            success: 'true',
            message: `${query} retrieved successfully`,
            api: result
        })
    } else {
        res.status(400).send({
            success: 'false',
            message: `${query} not found`
        })
    }
})

function AddStaticEndPointsRoutes(endPoints, app) {
    endPoints.forEach(endPoint =>
        app.get(`/api/v1/${endPoint}`, cors({ origin: '*' }), (req, res) => {
            res.status(200).send({
                success: 'true',
                message: `${endPoint} retrieved successfully`,
                api: JSON.parse(fs.readFileSync(getJsonPath(endPoint), 'utf8'))
            })
        })
    )
}

AddStaticEndPointsRoutes(filesEndPoints, app)

app.listen(process.env.PORT || 5000, function() {
    console.log('Server is running : http://localhost:5000')
})
