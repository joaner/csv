/**
 * string to array
 */
function parse(lines) {
    return lines.map(line => {
        const items = line.replace(/""/g, '"').split(',')
        return items.map(item => {
            if (item.charAt(0) === '"') {
                return item.slice(1, -1)
            } else if (isFinite(item)) {
                return Number(item)
            } else {
                return item
            }
        })
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