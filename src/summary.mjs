function getSummary(host, names) {
    const summary = {}
    names.forEach(name => {
        const hostClone = new URL(host.toString())
        hostClone.pathname += name
        summary[`${name}_url`] = hostClone.toString()
    })
    return summary
}

export default getSummary
