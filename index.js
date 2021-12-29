const inqurier = require('inquirer');
const fs = require('fs')
const generate = require('./utils/generateMarkdown')
const api = require('./utils/api')

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generate(data), (err) => err ? console.log(err) : console.log('Read me file has been created!'))
}

// TODO: Create a function to initialize app
function init() {
    inqurier.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?'
        },
        {
            type: 'rawlist',
            name: 'license',
            default: 'MIT license',
            choices: ['Apache License 2.0',
                'BSD 3-Clause "New" or "Revised" license',
                'BSD 2-Clause "Simplified" or "FreeBSD" license',
                'GNU General Public License (GPL)',
                'GNU Library or "Lesser" General Public License (LGPL)',
                'MIT license',
                'Mozilla Public License 2.0',
                'Common Development and Distribution License',
                'Eclipse Public License version 2.0'
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
            message: 'How can contributions be made to this project?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'How can this project be tested?'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'contact',
            message: 'What is your email?'
        },
    ]).then(answers => {
        const userInfo = api.getUser(answers.username);
        answers.contact = userInfo.contact;

        writeToFile('README.md', answers)
    })
}

// Function call to initialize app
init();
