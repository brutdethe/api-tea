import fs from 'fs'
import yaml from 'js-yaml'

function readYaml(yamlFile) {
    try {
        return yaml.safeLoad(fs.readFileSync(yamlFile), 'utf8')
    } catch (e) {
        console.log(`${yamlFile} error:`, e)
    }
}

const settings = readYaml('./scripts/_settings.yaml')

settings.yamlNames = Object.keys(settings.yamlFiles).map(
    yamlKey => settings.yamlFiles[yamlKey].name
)

export { settings }
