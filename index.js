// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";
import colors from 'colors'
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is your project called?'
}, {
    type: 'input',
    name: 'description',
    message: 'Describe the project:'
}, {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?'
}, {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information?'
}, {
    type: 'list',
    name: 'license',
    message: 'What is the license?',
    choices: ['apache', 'boost', 'MIT', 'none'] 
}, {
    type: 'input',
    name: 'test',
    message: 'What are the test instructions?'
}
];

// TODO: Create a function to write README file
function writeToFile(response) {
    fs.writeFile('README-Generator.md', generateMarkdown(response), (err) =>
        err ? console.error(err) : console.log(colors.bgGreen("README successfully created!"))
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            writeToFile(response);
        }
        );
};

// Function call to initialize app
init();
