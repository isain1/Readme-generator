// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your application?"
    }, 
    {
        type: "input",
        name: "description", 
        message: "please write a short description of your application."
    }, 
    {
        type: "input",
        name: "installation", 
        message: "please list instructions for installation"
    },
    {
        type: "input",
        name: "usage", 
        message: "What is this application used for?" 
    },
    {
        type: "input",
        name: "email", 
        message: "what is you email?"
    },
    {
        type: "input",
        name: "github", 
        message: "what is your GitHub username?"
    },
    {
        type: "input",
        name: "contributions", 
        message: "please list any other contributors of this application"
    },
    {
        type: "list",
        name: "license", 
        message: "Please select one of the following licenses.",
        choices: [
            "Mozilla",
            "MIT", 
            "IBM", 
            "ISC"
        ]
    },
    {
        type: "input",
        name: "tests", 
        message: "Please list any tests you would like the user to try with your application."
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((response) => {
            console.log(response);
            const content = generateMarkdown(response);
            console.log(content);
            fs.writeFile('generatedReadme.md', content, (err) =>
              err ? console.log(err) : console.log("succesfully ran program"))
        })
}

// Function call to initialize app
init();

