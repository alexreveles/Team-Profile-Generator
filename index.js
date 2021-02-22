// ------------------------------------------ Classes ------------------------------------------- //
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


// ------------------------------------------ Dependencies ------------------------------------------- //
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const render = require('./src/template.js')

// ------------------------------------------ Variables ------------------------------------------- //
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outPutPath = path.join(OUTPUT_DIR, "team.html")
let teamArr = [];

// ------------------------------------------ Functions ------------------------------------------- //

function addManager() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the manager name?",
      name: "managerName",
    },
    {
      type: "input",
      message: "What is the manger ID?",
      name: "managerId",
    },
    {
      type: "input",
      message: "What is the manger Email address?",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "What is the manager office number?",
      name: "officeNumber",
    },
  ]).then(res => {
      console.log(res);
      const manager = new Manager(res.managerName, res.managerId, res.managerEmail, res.officeNumber)
      teamArr.push(manager)

    addTeamMembers();
      // ------------------------------------------ call cross road function ------------------------------------------- //
      
    
  });
};

function addTeamMembers() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'You_choosen',
            message: 'What type of team member would you like to add?',
            choices: [
                'Engineer',
                'Intern',
                'Team Completed!'
            ]
        }
    ]) .then(res => {
        console.log(res);

        if( res.You_choosen === 'Engineer') {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is the engineer name?",
                    name: "engineerName",
                  },
                  {
                    type: "input",
                    message: "What is the engineer Id?",
                    name: "engineerId",
                  },
                  {
                    type: "input",
                    message: "What is the engineer Email address?",
                    name: "engineerEmail",
                  },
                  {
                    type: "input",
                    message: "What is the engineer github username?",
                    name: "Github",
                  },
            ])
            .then(res => {
                const engineer = new Engineer(res.engineerName, res.engineerId, res.engineerEmail, res.engineerGithub)
        teamArr.push(engineer)
        console.log('You added a Engineer');
        addTeamMembers();
            })
        } else if (res.You_choosen === 'Intern') {

            inquirer.prompt([
                {
                    type: "input",
                    message: "What is the intern name?",
                    name: "internName",
                  },
                  {
                    type: "input",
                    message: "What is the intern Id?",
                    name: "internId",
                  },
                  {
                    type: "input",
                    message: "What is the intern Email address?",
                    name: "internEmail",
                  },
                  {
                    type: "input",
                    message: "What is the intern school?",
                    name: "school",
                  },
            ])
            .then(res=> {
                const intern = new Intern(res.internName, res.internId, res.internEmail, res.school)
                teamArr.push(intern)
                console.log('You added Intern!')
                addTeamMembers();
            })
        } else {
            console.log('Dream Team Completed!')
            buildPage();
            return
            
        }
        
        

    

        
    });
};


// ------------------------------------------ Array of Q's ------------------------------------------- //

const teamMembers = {
  Manager: [
    {
      type: "input",
      message: "What is the manager name?",
      name: "managerName",
    },
    {
      type: "input",
      message: "What is the manger ID?",
      name: "managerId",
    },
    {
      type: "input",
      message: "What is the manger Email address?",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "What is the manager office number?",
      name: "officeNumber",
    },
  ],

  Engineer: [
    {
      type: "input",
      message: "What is the engineer name?",
      name: "engineerName",
    },
    {
      type: "input",
      message: "What is the engineer Id?",
      name: "engineerId",
    },
    {
      type: "input",
      message: "What is the engineer Email address?",
      name: "engineerEmail",
    },
    {
      type: "input",
      message: "What is the engineer github username?",
      name: "Github",
    },
  ],

  Intern: [
    {
      type: "input",
      message: "What is the intern name?",
      name: "internName",
    },
    {
      type: "input",
      message: "What is the intern Id?",
      name: "internId",
    },
    {
      type: "input",
      message: "What is the intern Email address?",
      name: "internEmail",
    },
    {
      type: "input",
      message: "What is the intern school?",
      name: "school",
    },
  ],
};

// ------------------------------------------ Calling Functions ------------------------------------------- //
addManager();

// ------------------------------------------ Function to Create Team. ------------------------------------------- //
function buildPage()
{
    // If output directory isn't there then it will build one.
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outPutPath, render(teamArr), 'utf-8');
}    




