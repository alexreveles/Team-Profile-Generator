

const Employee = require('../lib/Employee');

// ------------------------------------------ checks for variables ------------------------------------------- //
test(' creates a manager object', () => {
    const employee = new Employee('alex', '1', 'alex@yahoo.com');

    expect(employee.name).toBe('alex');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('alex@yahoo.com');

});


// ------------------------------------------ checks for methods ------------------------------------------- //
test(' checks validity of employee methods, getName, getId, getEmail, getRole', () => {
    const employee = new Employee('alex', '1', 'alex@yahoo.com');


    expect(employee.getName()).toBe('alex');
    expect(employee.getId()).toBe('1');
    expect(employee.getEmail()).toBe('alex@yahoo.com');

    expect(employee.getRole()).toBe('Employee');
});








