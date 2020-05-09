import fs from 'fs'
import path from 'path'
import { settings, readJSON, writeJSON, welcome } from './_lib'

welcome("Order tea's field")

const yamlFields = settings.yamlFiles.teas.fields

const jsonFile = path.format({
    root: process.cwd(),
    dir: 'data/json',
    name: 'teas',
    ext: '.json'
})

const jsonContent = readJSON(jsonFile)

const classifyItems = jsonContent.map(item => {
    const classifyItem = {}
    yamlFields.forEach(field => (classifyItem[field] = item[field]))
    return classifyItem
})

writeJSON(jsonFile, classifyItems)
