const verifyEmail = require('./index')
describe('Check if email is valid', ()=>{
    it('should return true if email is valid', ()=>{
        const email = 'cpaczek@sfsu.edu'
        const result = verifyEmail(email)
        expect(result).toBe(true)
    })
    it('should return false if email is invalid', ()=>{
        const email = 'foobar'
        const result = verifyEmail(email)
        expect(result).toBe(false)
    })
})
