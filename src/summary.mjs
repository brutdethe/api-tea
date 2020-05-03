import url from 'url'

function getSummary(host, names) {
    const summary = {}
    names.forEach(name => {
        const hostClone = { ...host }
        hostClone.pathname += name
        summary[`${name}_url`] = url.format(hostClone, { unicode: true })
    })
    return summary
}

export default getSummary
