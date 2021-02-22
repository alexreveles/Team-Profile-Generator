
const Manager = require('../lib/Manager');


// ------------------------------------------ checks for variables ------------------------------------------- //
test(' creates an manager object', ()=> {
    const manager = new Manager('alex', '4', 'al@yahoo.com');

    expect(manager.name).toBe('alex');
    expect(manager.id).toBe('4');
    expect(manager.email).toBe('al@yahoo.com');
});






// ------------------------------------------ checks for methods ------------------------------------------- //
test(' creates a validity for manager methods', ()=> {
    const manager = new Manager('alex', '4', 'al@yahoo.com', '5', 'Manager');

    expect(manager.getOfficeNumber()).toBe('5');
    expect(manager.getRole()).toBe('Manager');
});





