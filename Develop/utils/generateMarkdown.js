// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const licenseBadges = {
        Mozilla: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
        MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        IBM: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
        ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"  
    }
    return licenseBadges.license;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const links = {
        Mozilla: "(https://opensource.org/licenses/MPL-2.0)",
        MIT: "(https://opensource.org/licenses/MIT)",
        IBM: "(https://opensource.org/licenses/IPL-1.0)",
        ISC: "(https://opensource.org/licenses/ISC)" 
    }
    return links.license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//     if (license) {
//         return answers.title
//     }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ## Description

  ${answers.description}

  ## Table of contents
  - [Description](#description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [License](#License)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Installation

  ${answers.installation}

  ## Usage

  ${answers.usage}

  ## Credits

  ${answers.contributions}

  ## License 

  This repository is licensed by 

  ## Tests

  ${answers.tests}

  ## Questions

  If you have any questions about, or would like to contribute to this project please feel free to reach out to me at ${answers.email}.
  If you are interested in seeing some of my other work- [GitHub](github.com/${answers.github}).

`;
}

//module.exports = generateMarkdown;

module.exports = generateMarkdown;

