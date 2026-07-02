const bcrypt = require("bcryptjs")

async function hashPassword(password){
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword
}

async function checkPassword(plainPassword, hashedPassword){
    return await bcrypt.compare(plainPassword, hashedPassword)
}

module.exports = {
    hashPassword,
    checkPassword,
};