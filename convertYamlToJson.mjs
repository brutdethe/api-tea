import path from 'path'
import fs from 'fs'
import yaml from 'js-yaml'


const fileNames = ['brewing-types', 'families', 'picking', 'towns', 'cultivars', 'harvests', 'provinces', 'teas', 'types']

fileNames.forEach(fileName => {
    const yamlFile = path.format({ dir: 'data/yaml', name: fileName, ext: '.yaml' })
    const jsonFile = path.format({ dir: 'data/json', name: fileName, ext: '.json' })
    convertYamlToJson(yamlFile, jsonFile)
})

function convertYamlToJson(yamlFile, jsonFile) {
    try {
        const content = yaml.safeLoad(fs.readFileSync(yamlFile), 'utf8')
        fs.writeFileSync(jsonFile, JSON.stringify(content, null, 2), 'utf8')
        console.info('save', jsonFile)
    } catch (e) {
        console.log(`${jsonFile} error:`, e)
    }
}