var StringUtil = require("common-utils/string-util.js").StringUtil;

function findUntidyIndex(number) {
    let last = null;
    for (let i = 0; i < number.length; i++) {
        let num = +number[i];
        if (last != null && num < last) {
            return i;
        }
        last = num;
    }
}

function getReducableIndex(number, toIndex) {
    for (var i = toIndex - 1; i > 0; i--) {
        if (number[i] > number[i-1]) {
            return i;
        }
    }
    return 0;
}
function findReduceIndex(number) {
    let untidyIndex = findUntidyIndex(number);
    if (untidyIndex == null) {
        return null;
    }

    return getReducableIndex(number, untidyIndex);
}
function solve(number) {
    let reduceIndex = findReduceIndex(number);

    if (reduceIndex == null) {
        return number;
    }
    return (""+number.substring(0, reduceIndex) + (+number[reduceIndex] - 1)).replace(/^0+/,"") + StringUtil.createString("9", number.length - reduceIndex - 1);
}

module.exports = (number) => {
    return solve(number);
};