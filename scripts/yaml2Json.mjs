import { settings, getPath, writeJSON, readYAML, welcome } from './_lib'

welcome('Convert YAML files to JSON')

settings.yamlNames.forEach(name =>
    writeJSON(getPath(name, 'json'), readYAML(getPath(name, 'yaml')))
)
