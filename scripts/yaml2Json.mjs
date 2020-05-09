import path from 'path'
import { settings, writeJSON, readYAML, welcome } from './_lib'

welcome('Convert YAML files to JSON')

const getFilePaths = name => ({
    yamlFile: path.format({
        root: process.cwd(),
        dir: 'data/yaml',
        name: name,
        ext: '.yaml'
    }),
    jsonFile: path.format({
        root: process.cwd(),
        dir: 'data/json',
        name: name,
        ext: '.json'
    })
})

settings.yamlNames.forEach(name => {
    const { jsonFile, yamlFile } = getFilePaths(name)
    writeJSON(jsonFile, readYAML(yamlFile))
})
