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
function renderLicenseLink(license) {  //this will be generating toc
  if (license != "none") {
      return `\n //table of content`
    } else {
      return ""
    }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {  // this will generate JUST a  link section
  if (license != "none") {
    return //like markdown but for licenseection
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `${response.title}


## Description

${response.description}

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?


##TOC



## Installation

${response.installation}


## Usage

${response.usage}


## License

${response.license}


## Tests

${response.test}

`
}

export default generateMarkdown;
