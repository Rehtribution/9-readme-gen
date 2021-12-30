const inqurier = require('inquirer');
const fs = require('fs')
const generate = require('./utils/generateMarkdown')

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', generate(data), (err) => err ? console.log(err) : console.log('Read me file has been created!'))
}

// TODO: Create a function to initialize app
function init() {
    inqurier.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("invalid entry");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("invalid entry");
                }
                return true;
            }
        },
        {
            type: 'rawlist',
            name: 'license',
            default: 'MIT',
            choices: ['Apache_2.0',
                'BSD_3--Clause',
                'BSD_2--Clausee',
                'GNU',
                'MIT',
                'Mozilla Public License 2.0',
                'Eclipse_2.0'
            ]},
        {
            type: 'input',
            name: 'requirements',
            message: 'What are the installation requirements?'
        },
        {
            type: 'input',
            name: 'install',
            message: 'How is this installed?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is this project used?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Can contributions be made to this project?',
            default: false
        },
        {
            type: 'input',
            name: 'test',
            message: 'How can this project be tested?'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("invalid entry");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'contact',
            message: 'What is your email?'
        },
    ]).then(answers => {

        writeToFile(answers)
    })
}

// Function call to initialize app
init();
