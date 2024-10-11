// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (license === "apache") {
  return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "boost") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else {
    return ""
  }

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function rendertoc(license) {  //this will be generating toc
  if (license != "none") {
      return `Table of content:
      - Installation
      - Usage
      - License : 
      - Tests`
    } else {
      return "N/A"
    }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {  // this will generate JUST a  link section
  if (license != "none") {
    return `This project is licensed under following badge:
    ${renderLicenseBadge(license)}.`
  } else {
    return "N/A"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `${response.title}


## Description

${response.description}


##TOC




## Installation

${response.installation}


## Usage

${response.usage}


## License

${renderLicenseSection(license)}


## Tests

${response.test}

`
}

export default generateMarkdown;
