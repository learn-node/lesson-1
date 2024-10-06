const { recursiveEach } = require('./test.js');

recursiveEach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).then(() => {
    console.log('target: olala');
});
