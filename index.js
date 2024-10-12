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


// Function to generate README content
const generateReadme = (response) => {
    console.log(response); // Debug the response here
    return `${generateMarkdown(response)}`;
  };
  
  // Function to write README file
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log(colors.bgGreen('README successfully created!'))
    );
  }
  
  // Function to initialize app
  function init() {
    inquirer.prompt(questions).then((response) => {
      const readmePageContent = generateReadme(response);
      writeToFile('./Generated/README-generated.md', readmePageContent);
    });
  }
  
  // Function call to initialize app
  init();