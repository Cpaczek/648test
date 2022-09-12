module.exports = function verifyEmail(email){
    console.warn("Testing Email")
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email)
}
