module.exports = function verifyEmail(email){
    console.log("Testing Email")
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email)
}
