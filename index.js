// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")
const generateMarkdown = require("./utils/generateMarkdown.js")
const writeFileAsync = util.promisify(writeToFile)


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},

{
    type: "input",
    name: "description",
    message: "Write a description for your project."
},

{
    type: "input",
    name: "installation",
    message: "What are the installation instructions of your project?"
},

{
    type: "input",
    name: "usage",
    message: "What is the project used for?"
},

{
    type: "list",
    name: "license",
    message: "What license will your project have?",
    choices: ["Apache", "BSD", "GNU", "MIT", "Mozilla", "Eclipse"]
},

{
    type: "input",
    name: "contribution",
    message: "Who contributed to this project?"
},

{
    type: "input",
    name: "test",
    message: "Is there a test included?"
},

{
    type: "input",
    name: "question",
    message: "What should I do if there is an issue?"
},

{
    type: "input",
    name: "GitHub",
    message: "Enter your GitHub username."
},

{
    type: "input",
    name: "email",
    message: "Enter your email."
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

// TODO: Create a function to initialize app
async function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log(answers)
        console.log(generateMarkdown(answers))
        fs.writeFileSync("ReadMe-Template.md", generateMarkdown(answers))
    })

} 

// Function call to initialize app
init();