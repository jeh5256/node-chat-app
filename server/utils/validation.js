var isRealString = function(string) {
    return typeof string == 'string' && string.trim().length > 0;
};

module.exports = {isRealString};