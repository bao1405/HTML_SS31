function confirmEnding(str, target) {
    return str.endsWith(target);
}
console.log(confirmEnding("Hello world", "world"));
console.log(confirmEnding("Hello world", "orld"));
console.log(confirmEnding("Hello world", "world2"));
