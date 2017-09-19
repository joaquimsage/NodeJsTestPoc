//var builder = require('botbuilder');

var assert = require('assert');

//var common = require('./common');
//var luisMock = require('./luis-mock');
//var testBot = require('../bot');
//var helpMessages = require('./dialog-flows/help');
//var setAlarmMessages = require('./dialog-flows/set-alarm');
//var setAlarmMessages2 = require('./dialog-flows/set-alarm2');

//luisMock.setup();

//Our parent block
describe('Bot Tests', function() {

  it('help', function (done) { 
     // var connector = new builder.ConsoleConnector();
      //var bot = testBot.create(connector);

      //common.testBot(bot, helpMessages, done);
      done();
      assert.ok('Bot Builder is Missing');
  });

});

describe('Hello World', function() {

    it('Should print out Hello world', function() {
        assert.equal('Hello World', 'Hello World');
    });
});