var async = require('async');

async.parallel([
    function (callback) {
        console.log('first function start');
        setTimeout(function () {
            console.log('first function');
            callback(null, 1);
        }, 2000);
    },
    function (callback) {
        console.log('second function start');
        setTimeout(function () {
            console.log('second function');
            callback(null, 2);
        }, 1000);
    }
], function (error, result) {
    console.log('last function', result);
});