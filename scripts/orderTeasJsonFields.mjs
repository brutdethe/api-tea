import fs from 'fs'
import path from 'path'

const jsonFile = path.format({
    root: process.cwd(),
    dir: 'data/json',
    name: 'teas',
    ext: '.json'
})

const fields = [
    'zh',
    'pinyin',
    'type',
    'family',
    'harvest',
    'province',
    'town',
    'cultivar',
    'picking',
    'elevation',
    'fermentation',
    'post-fermentation',
    'brewing'
]

const jsonContent = readJSON(jsonFile)

const classifyItems = jsonContent.map(item => {
    const classifyItem = {}
    fields.forEach(field => (classifyItem[field] = item[field]))
    return classifyItem
})

writeJSON(jsonFile, classifyItems)

function readJSON(jsonFile) {
    try {
        return JSON.parse(fs.readFileSync(jsonFile, 'utf8'))
    } catch (e) {
        console.log(`${jsonFile} error:`, e)
    }
}

function writeJSON(jsonFile, content) {
    try {
        fs.writeFileSync(jsonFile, JSON.stringify(content, null, 2), 'utf8')
        console.info('save', jsonFile)
    } catch (e) {
        console.log(`${jsonFile} error:`, e)
    }
}
