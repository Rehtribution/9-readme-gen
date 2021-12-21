const inqurier = require('inquirer');
const fs = require('fs')
const generate = require('./utils/generateMarkdown')

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generate(data), (err) => err ? console.log(err) : console.log('Read me file has been created!'))
}

// TODO: Create a function to initialize app
function init() {
    inqurier.prompt([
        {
            type:'input',
            name:'title',
            message:'What is the title of your project?'
        },
        {
            type:'input',
            name:'description',
            message:'What is the description of your project?'
        },
    ]).then(answers => {
        writeToFile('README.md', answers)
    })
}

// Function call to initialize app
init();
