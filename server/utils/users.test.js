const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Room'
        },
        {
            id: '2',
            name: 'Bob',
            room: 'React Room'
        },
        {
            id: '3',
            name: 'John',
            room: 'Node Room'
        }];
    });

    it('Should add a new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Bob',
            room: 'Test Room'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users[0].id).toBeTruthy();
        expect(users.users[0].name).toBeTruthy();
        expect(users.users[0].room).toBeTruthy();
    });

    it('Should remove a user', () => {
        var userID = '1';
        var user = users.removeUser(userID);

        expect(user.id).toBe(userID);
        expect(users.users.length).toBe(2);
    });

    it('Should not remove a user', () => {
        var userID = '99';
        var user = users.removeUser(userID);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('Should find a user', () => {
        var userID = '2';
        var user = users.getUser(userID);

        expect(user.id).toBe(userID);
    });

    it('Should not find a user', () => {
        var userID = '99';
        var user = users.getUser(userID);

        expect(user).toBeFalsy();
    });

    it('Should return names for node room', () => {
        var usersList = users.getUsersList('Node Room');

        expect(usersList).toEqual(['Mike', 'John']);
    });

    it('Should return names for react room', () => {
        var usersList = users.getUsersList('React Room');

        expect(usersList).toEqual(['Bob']);
    });
})