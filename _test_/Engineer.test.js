const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Innaya', '50210', 'mamonam4@gmail.com', 'moon9588');

test('test to see if we can get the values for Engineer object', () =>{
    expect(engineer.name).toBe('Innaya')
    expect(engineer.id).toBe('50210')
    expect(engineer.email).toBe('mamonam4@gmail.com')

});

test('test to get a name from getName() method',() => {
    expect(engineer.getName()).toBe('Innaya');
});

test('test to get id from getId() method',() => {
    expect(engineer.getId()).toBe('50210');
});

test('test to get email from getEmail() method',() => {
    expect(engineer.getEmail()).toBe('mamonam4@gmail.com');
});

test('test to get github username from getGithub() method',() => {
    expect(engineer.getGithub()).toBe('moon9588');
});

test('test to get intern role from getRole() method',() => {
    expect(engineer.getRole()).toBe('Engineer');
});

