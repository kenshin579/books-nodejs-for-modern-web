var async = require('async');

async.series([
    function (callback) {
        console.log('first function');
        callback(null, 1);
    },
    function (callback) {
        console.log('second function');
        callback(null, 2);
    },
    function (callback) {
        console.log('third function');
        callback(null, 3);
    }
], function (error, result) {
    console.log('last function', result);
});