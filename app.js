const { recursiveEach } = require('./helpers');

recursiveEach([1, 'ds', 3, 4, 5, 6, 7, 8, 9, 10]).then(() => {
    console.log('target: olala');
});
