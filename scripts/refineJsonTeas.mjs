import {
    settings,
    welcome,
    getPath,
    readJSON,
    writeJSON,
    typeOf
} from './_lib.mjs'

welcome('Refine teas.json')

const jsonTeas = readJSON(getPath('teas', 'json'))

const fieldsType = {
    yaml: [{
            key: 'name',
            value: [{
                key: 'ideogram',
                value: '',
                key: 'pinyin',
                value: ''
            }]
        },
        {
            key: 'type',
            value: ''
        },
        {
            key: 'families',
            value: []
        },
        {
            key: 'harvests',
            value: []
        },
        {
            key: 'provinces',
            value: []
        },
        {
            key: 'towns',
            value: []
        },
        {
            key: 'cultivars',
            value: []
        },
        {
            key: 'pickings',
            value: []
        },
        {
            key: 'elevations',
            value: []
        },
        {
            key: 'oxidations',
            value: []
        },
        {
            key: 'fermentation',
            value: false
        },
        {
            key: 'brews',
            value: [{
                type: '',
                temperatures: [],
                quantities: [],
                durations: [],
                times: []
            }]
        }
    ],
    json: [{
            key: 'name',
            value: [{
                key: 'ideogram',
                value: '',
                key: 'pinyin',
                value: ''
            }]
        },
        {
            key: 'type',
            value: {
                ideogram: '',
                pinyin: ''
            }
        },
        {
            key: 'families',
            value: [{
                key: 'ideogram',
                value: '',
                key: 'pinyin',
                value: ''
            }]
        },
        {
            key: 'harvests',
            value: [{
                key: 'ideogram',
                value: '',
                key: 'pinyin',
                value: ''
            }]
        },
        {
            key: 'origins',
            value: [{
                key: 'provinces',
                value: '',
                key: 'towns',
                value: '[]'
            }]
        },
        {
            key: 'cultivars',
            value: [{
                key: 'ideogram',
                value: '',
                key: 'pinyin',
                value: ''
            }]
        },
        {
            key: 'pickings',
            value: [{
                key: 'ideogram',
                value: '',
                key: 'pinyin',
                value: ''
            }]
        },
        {
            key: 'elevations',
            value: []
        },
        {
            key: 'oxidations',
            value: []
        },
        {
            key: 'fermentation',
            value: []
        },
        {
            field: 'brews',
            type: [{
                type: {
                    ideogram: '',
                    pinyin: ''
                },
                temperatures: [],
                quantities: [],
                durations: [],
                times: []
            }]
        }
    ]
}

/* toudoux : chainer les étapes */

welcome('- complete the raw json with yaml schema')

const formatRawJsonWithYamlSchema = jsonTeas.map(tea => {
    fieldsType.yaml.map(field => {
        if (!(field.key in tea)) {
            tea[field.key] = field.value
        }
    })
    return tea
})

welcome('- convert the raw json with right types')

const convertWrongTypes = formatRawJsonWithYamlSchema.map(tea => {
    fieldsType.yaml.forEach(field => {
        // check null
        if (tea[field.key] === null) {
            return
        }

        switch (typeOf(field.value)) {
            case 'boolean':
                if (tea[field.key] !== true) {
                    tea[field.key] = false
                }
                break
            case 'string':
                tea[field.key] = String(tea[field.key])
                break
            case 'number':
                tea[field.key] = isNaN(+tea[field.key]) ? 0 : +tea[field.key]
                break
            case 'array':
                if (!Array.isArray(tea[field.key])) {
                    tea[field.key] = [tea[field.key]]
                }
                break
            case 'collection':
                // console.log(typeOf(field.value), field.key)
                break
                /* refait ça */
        }
    })

    return tea
})

welcome("- order tea's field")

const yamlFields = settings.yamlFiles.teas.fields

const classifyItems = convertWrongTypes.map(item => {
    const classifyItem = {}
    yamlFields.forEach(field => (classifyItem[field] = item[field]))
    return classifyItem
})

writeJSON(getPath('teas', 'json'), classifyItems)

/*
welcome('- insert all pinyins')

const fieldsToPinyinConvert = [
    'types',
    'families',
    'harvests',
    'cultivars',
    'pickings'
]

function createI18nField(ideograms, theme) {
    const getPinyin = (ideogram, theme) =>
        jsonPinyin.filter(
            item => item.ideogram === ideogram && item.theme === theme
        )[0] || {}
    return ideograms.map(ideogram => ({
        ideogram: ideogram,
        pinyin: getPinyin(ideogram, theme).pinyin
    }))
}

const teasWithPinyins = teasConsistent.map(tea => {
    fieldsToPinyinConvert.forEach(field => {
        console.log('field', field)
        console.log('tea', tea)
        tea[field] = createI18nField(tea[field], field)
    })
    return tea
})

*/