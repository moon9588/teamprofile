const Manager = require('../lib/Manager');
const manager = new Manager('Zim', '80210', 'mamonam4@gmail.com','2037895432');

test('test to see if we can get the values for manager object', () =>{
    expect(manager.name).toBe('Zim')
    expect(manager.id).toBe('80210')
    expect(manager.email).toBe('mamona4@gmail.com')

});

test('test to get a name from getName() method',() => {
    expect(manager.getName()).toBe('Zim')
});

test('test to get id from getId() method',() => {
    expect(manager.getId()).toBe('80210')
});

test('test to get email from getEmail() method',() => {
    expect(manager.getEmail()).toBe('mamonam4@gmail.com')
});

test('test to get github username from getGithub() method',() => {
    expect(manager.getGithub()).toBe('moon9588')
});

test('test to get github username from getPhone() method',() => {
    expect(manager.getPhone()).toBe('2037895432')
});

test('test to get intern role from getRole() method',() => {
    expect(manager.getRole()).toBe('manager')
});

