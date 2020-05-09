import { settings, getPath, writeJSON, readYAML, welcome } from './_lib'

welcome('Group all chinese terms and his pinyin')

const createPinyinItems = themes =>
    themes.flatMap(theme =>
        readYAML(getPath(theme, 'yaml')).map(item => ({
            zh: item.zh,
            pinyin: item.pinyin,
            theme: theme
        }))
    )

writeJSON(getPath('pinyin', 'json'), createPinyinItems(settings.themes))
