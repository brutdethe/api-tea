import fs from 'fs'
import path from 'path'
import express from 'express'
import cors from 'cors'
import getSummary from './summary.mjs'

const endPoints = [
    'teas',
    'types',
    'cultivars',
    'families',
    'picking',
    'provinces',
    'towns',
    'brewing-types',
    'harvests'
]

const app = express()

app.options('*', cors())

function AddEndPointsRoutes(endPoints, app) {
    const getJsonPath = name =>
        path.format({
            root: process.cwd(),
            dir: 'data/json',
            name: name,
            ext: '.json'
        })

    endPoints.forEach(endPoint =>
        app.get(`/api/v1/${endPoint}`, cors(), (req, res) => {
            res.status(200).send({
                success: 'true',
                message: `${endPoint} retrieved successfully`,
                api: JSON.parse(fs.readFileSync(getJsonPath(endPoint), 'utf8'))
            })
        })
    )
}

app.get('/', cors(), (req, res) => {
    const host = new URL('api/v1/', `${req.protocol}://${req.get('host')}/`)
    res.status(200).send({
        success: 'true',
        message: 'API-tea documentation',
        api: getSummary(host, endPoints)
    })
})

AddEndPointsRoutes(endPoints, app)

app.listen(process.env.PORT || 5000, function() {
    console.log('Server is running : http://localhost:5000')
})
