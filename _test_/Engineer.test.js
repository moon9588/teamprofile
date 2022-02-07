const Engineer = require('../lib.Engineer');
const Engineer = new Engineer('Innaya', '50210', 'mamonam4@gmail.com', 'moon9588');

test('test to see if we can get the values for Engineer object', () =>{
    expect(Engineer.name).toBe('Innaya')
    expect(Engineer.id).toBe('50210')
    expect(Engineer.email).toBe('mamona4@gmail.com')

});

test('test to get a name from getName() method',() => {
    expect(Engineer.getName()).toBe('Innaya')
});

test('test to get id from getId() method',() => {
    expect(Engineer.getId()).toBe('50210')
});

test('test to get email from getEmail() method',() => {
    expect(Engineer.getEmail()).toBe('mamonam4@gmail.com')
});

test('test to get github username from getGithub() method',() => {
    expect(Engineer.getGithub()).toBe('moon9588')
});

test('test to get intern role from getRole() method',() => {
    expect(Engineer.getRole()).toBe('Engineer')
});

