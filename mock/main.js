module.exports = function () {
    let index = require('./index');
    let mock = [
         index(),
    ]
    return Object.assign({}, ...mock);
}