const inquirer = require ('inquirer')

const fs = require("fs");
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateSite = require('./src/generate-site.js');
const path = require('path');
const internal = require('stream');
const OUTPUT_DIR = path.resolve(_dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? ',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter your name!');
                    return false;
                }  
            }
        },
        {
            type: 'input',
            name:'employeeID',
            meassage: 'Enter your employee ID ',
            validate: employeeId => {
                if (employeeId){
                    return true;
                } else {
                    console.log('Enter employee ID');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'email',
            meassage: 'Enter your email address ',
            validate: email => {
                if (email){
                    return true;
                } else{
                    console.log('Enter email address');
                    return false;
                }
            }

        },
        {
            type:'input',
            name:'officePhone',
            meassage: 'Enter office phone number',
            validate: OfficePhone => {
                if (OfficePhone){
                    return true;
                } else{
                    console.log('Enter email address');
                    return false;
                }
            }
        },
    ])
    .then(answers => {
        console.log(answers);
        const manager = new Manager (answers.name, answers.employeeId, answers.email, answers.OfficePhone);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type:'list',
            name:'menu',
            meassage:'Please enter the position of employee you would like to add to this team:',
            choices: ['add engineer', 'add intern', 'team is ready now!']

        }
    ])
    .then(userChoice => {
        switch (userChoice.menu){
            case "add an engineer":
                promptEngineer();
                break;
            case "add an intern":
                promptIntern();
                break;    
            default:
                buildTeam();
        }
    });

};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter your name!');
                    return false;
                }  
            }
        },
        {
            type: 'input',
            name:'employeeID',
            meassage: 'Enter employee ID ',
            validate: employeeId => {
                if (employeeId){
                    return true;
                } else {
                    console.log('Enter employee ID');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'email',
            meassage: 'Enter email address',
            validate: email => {
                if (email){
                    return true;
                } else{
                    console.log('Enter email address');
                    return false;
                }
            }

        },
        {
            type:'input',
            name:'githubUsername',
            meassage: 'Enter engineer githubUsername (Required)',
            validate: githubUsername => {
                if (githubUsername){
                    return true;
                } else{
                    console.log('Enter github Username');
                    return false;
                }
            }
        },
    ])
    .then(answers => {
        console.log(answers);
        const manager = new Manager (answers.name, answers.employeeId, answers.email, answers.OfficePhone);
        teamMembers.push(manager);
        promptMenu();
    })
};



const promptIntern = () => {
    console.log(`
    ===
    add new intern
    ===

    `);

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            meassage: 'What is interns name (Required)',
            validate: internName => {
                if (internName){
                    return true;
                } else {
                    console.log ('Enter the name of intern!');
                    return false;
                }
                }
            },
        {
            type: 'input',
            name: 'employeeID',
            meassage: "Enter intern's employee ID (Required)",
            validate: employeeID => {
                if (employeeID){
                    return true;
                } else {
                    console.log ("Enter intern's employee ID");
                    return false;   
                }
            }
        },
        {
            type: 'input',
            name: 'Email',
            meassage: "Enter intern's email address",
            validate: email => {
                if (email){
                    return true;
                } else {
                    console.log ("Enter intern's email");
                    return false;   
                }
            }
        },  

        {
            type: 'input',
            name: 'school',
            meassage: "Enter intern's school ",
            validate: school => {
                if (school){
                    return true;
                } else {
                    console.log ("Enter intern's school");
                    return false;   
                }
            }
        },

    ])
    .then (answers => {
        console.log (answers);
        const intern = new Intern (answers.name, answers.employeeID, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log(` 
    ==================
    Team is now ready!
    ==================
    `);

    if (!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
}

promptManager();

