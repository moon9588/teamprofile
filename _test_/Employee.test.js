const Employee = require('../lib.Employee');
const employee = new Employee('Mamona', '70210', 'mamonam4@gmail.com');

test('test to see if we can get the values for employee object', () =>{
    expect(employee.name).toBe('Mamona')
    expect(employee.id).toBe('70210')
    expect(employee.email).toBe('mamona4@gmail.com')

});

test('test to get a name from getName() method',() => {
    expect(employee.getName()).toBe('Mamona')
});

test('test to get id from getId() method',() => {
    expect(employee.getId()).toBe('70210')
});

test('test to get email from getEmail() method',() => {
    expect(employee.getEmail()).toBe('mamonam4@gmail.com')
});


test('test to get intern role from getRole() method',() => {
    expect(employee.getRole()).toBe('Employee')
});

