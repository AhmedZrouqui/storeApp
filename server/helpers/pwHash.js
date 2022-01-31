const bcrypt = require("bcrypt");
module.exports = async (pw) => {

    const salt = bcrypt.genSaltSync(10);
    
    return await bcrypt.hashSync(pw, salt)
}