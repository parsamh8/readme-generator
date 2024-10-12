// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge;
    if (license === "apache") {
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    } else if (license === "boost") {
      badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
    } else if (license === "MIT") {
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    } else {
      return "";
    }
    return `${badge}`;
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    let link;
    if (license === "apache") {
      link = `https://opensource.org/licenses/Apache-2.0`;
    } else if (license === "boost") {
      link = `https://www.boost.org/LICENSE_1_0.txt`;
    } else if (license === "MIT") {
      link = `https://opensource.org/licenses/MIT`;
    } else {
      return ``;
    }
    return `See the [full license](${link}) for more information.`;
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    return (license) ? `## License` : 'N/A';
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(response) {
    return `${response.title}
  
  ${renderLicenseBadge(response.license)}
  
  ## Description
  
  ${response.description}
  
  ## TOC
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  
  ${response.installation}
  
  ## Usage
  
  ${response.usage}
  
  ## License
  
  ${renderLicenseSection(response.license)}
  This application is covered under ${response.license}.
  ${renderLicenseLink(response.license)}
  
  ## Tests
  
  ${response.test}
  `;
  }
  
  export default generateMarkdown;