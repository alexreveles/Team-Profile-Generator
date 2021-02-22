

const Intern = require('../lib/Intern');



// ------------------------------------------ checks for variables ------------------------------------------- //
test(' creates an intern object', ()=> {
    const intern = new Intern('alex', '3', 'al@yahoo.com');

    expect(intern.name).toBe('alex');
    expect(intern.id).toBe('3');
    expect(intern.email).toBe('al@yahoo.com');
});



// ------------------------------------------ checks for methods ------------------------------------------- //
test(' creates a validity for intern methods', ()=> {
    const intern = new Intern('alex', '3', 'al@yahoo.com', 'ucla');

    expect(intern.getSchool()).toBe('ucla');
    expect(intern.getRole()).toBe('Intern');
});