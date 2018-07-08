/**
 * string to array
 */
function parse(lines) {
    return lines.map(line => {
        console.log(line)
        return JSON.parse(`[${line}]`)
    })
}

/**
 * array to string
 */
function stringify(rows) {
    return rows.map(row => {
        const item = Array.isArray(row) ? row : Object.values(row)
        return JSON.stringify(item).slice(1, -1)
    })
}

module.exports = {
    parse,
    stringify,
}