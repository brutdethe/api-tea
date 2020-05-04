import path from 'path'
import fs from 'fs'
import yaml from 'js-yaml'

const names = [
    'brewing-types',
    'families',
    'picking',
    'towns',
    'cultivars',
    'harvests',
    'provinces',
    'teas',
    'types'
]

const getYamlPath = name =>
    path.format({
        root: process.cwd(),
        dir: 'data/yaml',
        name: name,
        ext: '.yaml'
    })

const getJsonPath = name =>
    path.format({
        root: process.cwd(),
        dir: 'data/json',
        name: name,
        ext: '.json'
    })

writeJSON(
    getJsonPath('pinyin'),
    names.flatMap(name => {
        try {
            const items = yaml.safeLoad(
                fs.readFileSync(getYamlPath(name)),
                'utf8'
            )
            return items.map(item => ({
                zh: item.zh,
                pinyin: item.pinyin,
                class: name
            }))
        } catch (e) {
            console.log(`${jsonFile} error:`, e)
        }
    })
)

function writeJSON(jsonFile, content) {
    try {
        fs.writeFileSync(jsonFile, JSON.stringify(content, null, 2), 'utf8')
        console.info('save', jsonFile)
    } catch (e) {
        console.log(`${jsonFile} error:`, e)
    }
}
