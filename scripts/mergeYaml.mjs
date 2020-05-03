import path from 'path'
import fs from 'fs'
import yaml from 'js-yaml'

const getFileNames = name => ({
    yaml: path.format({ root: process.cwd(), dir: 'data/yaml', name: name, ext: '.yaml' }),
    json: path.format({ root: process.cwd(), dir: 'data/json', name: name, ext: '.json' })
})

const teasYamlFile = extractYaml(getFileNames('teas').yaml)
const teasi18nFile = extractYaml(getFileNames('teasi18n').yaml)

writeJSON(getFileNames('teas').json, teasYamlFile.map(tea => {
    try {
        tea.pinyin = teasi18nFile[tea.zh].pinyin
    } catch {
        console.log('pas de pinyin:', tea.zh)
    }

    return tea
}))

function extractYaml(yamlFile) {
    try {
        return yaml.safeLoad(fs.readFileSync(yamlFile), 'utf8')

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
