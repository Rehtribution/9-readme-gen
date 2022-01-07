//generate markdown function to format and populate the information provided by the user inputs
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

<img alt = "GitHub Profile Picture" src = "${data.profilePic}">

## Contact-Information
${data.contact}

`;
}

module.exports = generateMarkdown;
