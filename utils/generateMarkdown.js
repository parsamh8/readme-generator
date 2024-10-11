// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (license === "apache") {
  return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
  } else if (license === "boost") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]"
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  } else {
    return ""
  }

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "apache") {
    return "(https://opensource.org/licenses/Apache-2.0)"
    } else if (license === "boost") {
      return "(https://www.boost.org/LICENSE_1_0.txt)"
    } else if (license === "MIT") {
      return "(https://opensource.org/licenses/MIT)"
    } else {
      return ""
    }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${data.title}

## Description

${data.description}

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Installation

${data.installation}

## Usage

this is the usage section

## Contributing

this is contributing section

## Tests
this is a test section

##Link

`
}

export default generateMarkdown;
