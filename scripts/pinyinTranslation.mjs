import path from 'path'
import fs from 'fs'
import yaml from 'js-yaml'

const themes = [
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
    themes.flatMap(theme => {
        try {
            const items = yaml.safeLoad(
                fs.readFileSync(getYamlPath(theme)),
                'utf8'
            )
            return items.map(item => ({
                zh: item.zh,
                pinyin: item.pinyin,
                theme: theme
            }))
        } catch (e) {
            console.log(`${jsonFile} error:`, e)
        }
    })
)

function writeJSON(jsonFile, content) {
    try {
        if (!fs.existsSync('data/json')) {
            fs.mkdirSync('data/json', { recursive: true })
        }
        fs.writeFileSync(jsonFile, JSON.stringify(content, null, 2), 'utf8')
        console.info('save', jsonFile)
    } catch (e) {
        console.log(`${jsonFile} error:`, e)
    }
}
