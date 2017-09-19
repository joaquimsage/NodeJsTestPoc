var builder = require('botbuilder');

var assert = require('assert');

var common = require('./common');
var luisMock = require('./luis-mock');
var testBot = require('../bot');
var helpMessages = require('./dialog-flows/help');
var setAlarmMessages = require('./dialog-flows/set-alarm');
var setAlarmMessages2 = require('./dialog-flows/set-alarm2');

luisMock.setup();

//Our parent block
describe('Dummy tests', () => {

    it('Should locate position number 1 on base start at 0', function () {
        assert.equal(1, [1, 2, 3].indexOf(2));
    });



    it('Should locate position 3', function () {
        //assert.equal(Math.floor(Math.random()*(3-1+1)+1), [1, 2, 3].indexOf(3), 'Sometimes this assertion fails, maybe has sth to do with the Random number?!');
        assert.ok('Empty test', 'Assert test is executed.');
    });

    it('Hello and Bye Words', function () {
        //assert.equal(Math.floor(Math.random()*(3-1+1)+1), [1, 2, 3].indexOf(3), 'Sometimes this assertion fails, maybe has sth to do with the Random number?!');
        assert.equal('Bye', 'Bye', 'These words are not the same and they should be.');
        assert.notEqual('Hello', 'Bye', 'Words should not be euqal...and they are mf!');
    });

});
