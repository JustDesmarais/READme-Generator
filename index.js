// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown')

// An array of questions for user input
const questions = [
    'What is the title of your project?', 
    'Please provide a brief description of your project:',
    'Please enter any specific installation instructions required for this project:',
    'Please enter any specific usage information pertinent to this project:', 
    'Please provide any guidelines for contributing to this project:',
    'Please provide any instructions for testing this application:',
    'Please list your GitHub username for any follow-up questions:',
    'Please provide an email address:'
];

// A function to write README file
function writeToFile(data) {
    fs.writeFile('./Sample-READme/READme.md', markdown.generateMarkdown(data), (err) =>
      err ? console.error(err) : console.log('Successfully Written!'))
}



// A function to initialize app and prompt user for info
function init() {

    inquirer
    .prompt([
        {
        type: 'input',
        message: questions[0],
        name: 'title',
        },
        {
        type: 'input',
        message: questions[1],
        name: 'description',
        },
        {
        type: 'input',
        message: questions[2],
        name: 'install',
        },
        {
        type: 'input',
        message: questions[3],
        name: 'usage',
        },
        {
        type: 'input',
        message: questions[4],
        name: 'contribute',
        },
        {
        type: 'input',
        message: questions[5],
        name: 'testing',
        },
        {
        type: 'input',
        message:questions[6],
        name: 'gitHub',
        },
        {
        type: 'input',
        message: questions[7],
        name: 'email',
        },
        {
        type: 'input', 
        message: 'Please choose one of the following license options: \nGNU AGPLv3    GNU GPLv3    GNU LGPLv3 \nMozilla Public License 2.0    Apache License 2.0\nMIT License    Boost Software License 1.0    The Unlicense',
        name: 'license',
        }
                        
    ])
    .then((response) =>
    writeToFile(response)
    );

}

// Function call to initialize app
init();