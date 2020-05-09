import { settings, getPath, readJSON, writeJSON, welcome } from './_lib'

welcome("Order tea's field")

const yamlFields = settings.yamlFiles.teas.fields

const classifyItems = readJSON(getPath('teas', 'json')).map(item => {
    const classifyItem = {}
    yamlFields.forEach(field => (classifyItem[field] = item[field]))
    return classifyItem
})

writeJSON(getPath('teas', 'json'), classifyItems)
