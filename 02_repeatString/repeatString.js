const repeatString = function(string, num) {
    let fullString = string;
    if (num === 0) {
        return '';
    }
    if (num < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < num - 1; i++) {
        fullString += string;
    }
    return fullString;
};

// Do not edit below this line
module.exports = repeatString;
