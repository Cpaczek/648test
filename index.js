module.exports = function verifyEmail(email){
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email)
}
