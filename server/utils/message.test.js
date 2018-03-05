var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('Should generate a correct location object', () => {
        var from = 'Deb';
        var latitude = 10;
        var longitude = 25;
        var url = 'https://www.google.com/maps?q=10,25';
        var message = generateLocationMessage(from, latitude, longitude);

        expect(typeof message.createdAt).toBe('number');
        expect(message.from).toBeTruthy();
        expect(message.url).toBeTruthy();
    });
});