module.exports = function () {
    let homePage = require('./index/index.js');
    let mock = [
        homePage()
    ]
    return Object.assign({}, ...mock);
}
