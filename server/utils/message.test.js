var expect = require('expect');

var {generateMessage} = require('./message');

describe('Generate Message', () => {
    it('Should generate the correct message object', () => {
        var from = 'Gen';
        var text = 'Some text';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message.from).toBeTruthy();
        expect(message.text).toBeTruthy();

    });
});