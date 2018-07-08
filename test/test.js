const CSV = require('../index')
const assert = require('assert')

describe('CSV.parse', () => {
    it('parse from standard', () => {
        const lines = [
            '1,"abc","c"',
        ]
        const rows = CSV.parse(lines)
        assert.equal(rows.length, 1)
        assert.deepEqual(rows[0], [1, 'abc', 'c'])
    })
})

describe('CSV.stringify', () => {
    it('stringify from standard', () => {
        const rows = [
            [1, 'abc', 'c']
        ]
        const lines = CSV.stringify(rows)
        assert.equal(lines.length, 1)
        assert.equal(lines[0], '1,"abc","c"')
    })
})