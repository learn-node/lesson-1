function recursiveEach(arr, idx = 0) {
    return new Promise((resolve) => {
        console.log(`value: ${arr[idx]} on index: ${idx}`);
        return resolve(idx + 1);
    }).then((idx) => (idx < arr.length ? recursiveEach(arr, idx) : idx));
}

module.exports = {
    recursiveEach
};
