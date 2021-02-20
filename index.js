// ------------------------------------------ Classes ------------------------------------------- //
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const render = require("./lib/render");

// ------------------------------------------ Dependencies ------------------------------------------- //
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// ------------------------------------------ Variables ------------------------------------------- //
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
      const manager = new Manager(res.managerName, res.managerId, res.managerEmail, res.officeNumber)
      teamArr.push(manager)
      // call cross road function
    
  });
};

function addTeamMembers() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'pizza',
            message: 'What team of team member would you like to add?',
            choices: [
                'Engineer',
                'Intern',
                'Done!'
            ]
        }
    ]) .then(res => {
        const Engineer = new Engineer(res.engineerName, res.engineerId, res.engineerEmail, res.engineerGithub)
    })
}


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

// ------------------------------------------ Run the App. ------------------------------------------- //

function start() {
  inquirer.prompt(teamMembers).then((answer) => {
    if (answer.addmember == "yes") {
      addRole();
    } else {
      fs.writeFileSync;
    }
  });
}
