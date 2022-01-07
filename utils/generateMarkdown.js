// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents

  [Description](#Description)
  
  [License](#License)
  
  [Installation-Requirements](#Installation-Requirements)
  
  [Installation](#Installation)
  
  [Usage](#Usage)
  
  [Contributions](#Contributions)
  
  [Testing](#Testing)
  
  [Username](#Username)
  
  [Contact-Information](#Contact-Information)


## Description
${data.description}

## License
[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

## Installation-Requirements
${data.requirements}

## Installation
${data.install}

## Usage
${data.usage}

## Contributions
${data.contributing}

## Testing
${data.test}

## Username
https://github.com/${data.username}

## Contact-Information
${data.contact}

`;
}

module.exports = generateMarkdown;
