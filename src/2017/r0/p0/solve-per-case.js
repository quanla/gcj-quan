function flip(index, pancakesHappy, flipperSize) {
    for (let i = 0; i < flipperSize; i++) {
        pancakesHappy[index + i] = !pancakesHappy[index + i];
    }
}

function checkRemaining(pancakesHappy, flipperSize) {
    for (let i = 0; i < flipperSize; i++) {
        if (!pancakesHappy[pancakesHappy.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
function solve(pancakesHappy, flipperSize) {
    let count = 0;
    for (let i = 0; i < pancakesHappy.length - flipperSize + 1; i++) {
        let happy = pancakesHappy[i];
        if (!happy) {
            flip(i, pancakesHappy, flipperSize);
            count++;
        }
    }

    return !checkRemaining(pancakesHappy, flipperSize) ? null : count;
}

module.exports = (input) => {
    let [a, b] = input.split(" ");

    let pancakesHappy = a.split("").map((c) => c == "+");

    let flipperSize = +b;

    return solve(pancakesHappy, flipperSize);
};