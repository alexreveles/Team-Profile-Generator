
const Engineer = require('../lib/Engineer');


// ------------------------------------------ checks for variables ------------------------------------------- //
test(' creates an engineer object', () => {
    const engineer = new Engineer('alexr', '2', 'alex@gmail.com', 'alexreveles' );

    expect(engineer.name).toBe('alexr');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('alex@gmail.com');
    expect(engineer.github).toBe('alexreveles');
});


// ------------------------------------------ checks for methods ------------------------------------------- //
test(' creates a validity for engineer methods', () => {
    const engineer = new Engineer('alexr', '2', 'alex@gmail.com', 'alexreveles', 'Engineer' );


    expect(engineer.getGithub()).toBe('alexreveles');
    expect(engineer.getRole()).toBe('Engineer')
});