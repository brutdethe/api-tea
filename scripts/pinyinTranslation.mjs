import {
    settings,
    getPath,
    writeJSON,
    readYAML,
    welcome
} from './_lib.mjs'

welcome('Group all chinese terms and his pinyin')

const createPinyinItems = themes =>
    themes.flatMap(theme =>
        readYAML(getPath(theme, 'yaml')).map(item => ({
            ideogram: item.ideogram,
            pinyin: item.pinyin,
            theme: theme
        }))
    )

writeJSON(getPath('pinyin', 'json'), createPinyinItems(settings.themes))