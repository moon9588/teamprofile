const Intern = require('../lib/Intern');
const intern = new Intern('Mubi', '90210', 'mamonam4@gmail.com', 'CCSU');

test('test to see if we can get the vales for intern objects',
() => {
    expect(intern.name).toBE('Mubi');
    expect(intern.id).tobe('90210');
    expect(intern.email).toBe('mamonam4@gmail.com');

});

test('test to get a name from getName() method',() => {
    expect(intern.getName()).toBe('Mubi')
});

test('test to get id from getId() method',() => {
    expect(intern.getId()).toBe('90210')
});

test('test to get email from getEmail() method',() => {
    expect(intern.getEmail()).toBe('mamonam4@gmail.com')
});

test('test to get school from getSchool() method',() => {
    expect(intern.getSchool()).toBe('CCSU')
});

test('test to get intern role from getRole() method',() => {
    expect(intern.getRole()).toBe('Intern')
});
