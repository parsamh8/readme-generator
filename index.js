// TODO: Include packages needed for this application
import generateMarkdown from "./utils/generateMarkdown";
import inquirer from 'inquirer';
import fs from 'fs';

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
    message: 'Describe the project:'
}, {
    type: 'input',
    name: 'Usage',
    message: 'Describe the project:'
}, {
    type: 'input',
    name: 'Contribuiting',
    message: 'Describe the project:'
}
];

// TODO: Create a function to write README file
function writeToFile(response) {
    fs.writeFile('README-Generator.md', response, (err) =>
        err ? console.error(err) : console.log("data successfully added")
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
