import path from 'path'
import fs from 'fs'
import yaml from 'js-yaml'
import { writeJSON, readYAML, welcome } from './_lib'

welcome('Group all chinese terms and his pinyin')

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

const createPinyinItems = themes =>
    themes.flatMap(theme =>
        readYAML(getYamlPath(theme)).map(item => ({
            zh: item.zh,
            pinyin: item.pinyin,
            theme: theme
        }))
    )

writeJSON(getJsonPath('pinyin'), createPinyinItems(themes))
