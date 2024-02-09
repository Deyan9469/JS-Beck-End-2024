const jwt = require('jsonwebtoken');
const util = require('util');

// by hand with this function, we are creating callback base function to promice base funtion
function sign(payload, secretOrPrivateKey, options = {}) {
    const promise = new Promise((resolve, reject) => {
        jwt.sign(payload, secretOrPrivateKey, options, (err, token)=>{
            if(err){
                return reject(err);
            }

            resolve(token);

        });
    });

    return promise;
};
// this is the same thing but easyer
const verify = util.promisify(jwt.verify);

module.exports = {
    sign,
    verify,
};