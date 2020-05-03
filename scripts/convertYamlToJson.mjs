import path from 'path'
import fs from 'fs'
import yaml from 'js-yaml'

const names = ['brewing-types', 'families', 'picking', 'towns', 'cultivars', 'harvests', 'provinces', 'teas', 'types']

const getFilePaths = name => ({
    yamlFile: path.format({ root: process.cwd(), dir: 'data/yaml', name: name, ext: '.yaml' }),
    jsonFile: path.format({ root: process.cwd(), dir: 'data/json', name: name, ext: '.json' })
})

names.forEach(name => convertYamlToJson(getFilePaths(name)))

function convertYamlToJson({ yamlFile, jsonFile }) {
    try {
        const content = yaml.safeLoad(fs.readFileSync(yamlFile), 'utf8')
        fs.writeFileSync(jsonFile, JSON.stringify(content, null, 2), 'utf8')
        console.info('save', jsonFile)
    } catch (e) {
        console.log(`${jsonFile} error:`, e)
    }
}