module.exports = function toReadable (number) {
    let zeroToNineteen = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let twentyToNinety = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (number < 20) {
        return zeroToNineteen[number];
    } else if (number < 100) {
        return twentyToNinety[Math.floor(number / 10) - 2] + (number % 10 !== 0 ? " " + toReadable(number % 10) : "");
    } else if (number < 1000) {
        return zeroToNineteen[Math.floor(number / 100)] + " hundred" + (number % 100 !== 0 ? " " + toReadable(number % 100) : "");
    }
}
