import fs from 'fs'
import yaml from 'js-yaml'

/* SETTINGS */

const settings = readYAML('./scripts/_settings.yaml')

settings.yamlNames = Object.keys(settings.yamlFiles).map(
    yamlKey => settings.yamlFiles[yamlKey].name
)

/* IO */

if (!fs.existsSync('data/json')) {
    fs.mkdirSync('data/json', { recursive: true })
}

function readYAML(yamlFile) {
    try {
        console.info('\x1b[32m', 'LOAD:', yamlFile)
        return yaml.safeLoad(fs.readFileSync(yamlFile), 'utf8')
    } catch (e) {
        console.warn(`${yamlFile} error:`, e)
    }
}

function readJSON(jsonFile) {
    try {
        console.info('\x1b[32m', 'LOAD:', jsonFile)
        return JSON.parse(fs.readFileSync(jsonFile, 'utf8'))
    } catch (e) {
        console.warn(`${jsonFile} error:`, e)
    }
}

function writeJSON(jsonFile, content) {
    try {
        fs.writeFileSync(jsonFile, JSON.stringify(content, null, 2), 'utf8')
        console.info('\x1b[33m', 'SAVE:', jsonFile)
    } catch (e) {
        console.warn(`\x1b[31m${jsonFile} error:`, e)
    }
}

/* console */

function welcome(message) {
    console.log('\x1b[37m')
    console.log('-'.repeat(message.length + 4))
    console.log(`| ${message} |`)
    console.log('-'.repeat(message.length + 4))
}

export { settings, readJSON, writeJSON, readYAML, welcome }
