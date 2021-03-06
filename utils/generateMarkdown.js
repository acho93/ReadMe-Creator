// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Table of Contents 
[Description](#description)  
[Installation](#installation)  
[Usage](#usage)  
[License](#license)  
[Contribution](#contribution)  
[Tests](#test)  
[Questions](#question)  

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is covered under ${data.license}.

## Contribution
${data.contribution}

## Tests
${data.test}

## Questions
${data.question}
GitHub: https://github.com/${data.GitHub}
Email: ${data.email}
`;

}

module.exports = generateMarkdown;
