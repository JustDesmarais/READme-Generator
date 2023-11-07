// An array of the license options the user can choose from
const licenseOptions = [
  {
    license: 'GNU AGPLv3', 
    badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)', 
    link: 'https://choosealicense.com/licenses/agpl-3.0/', 
    desc: 'Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.'
  },
  {
    license: 'GNU GPLv3', 
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', 
    link: 'https://choosealicense.com/licenses/gpl-3.0/', 
    desc: 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.'
  },
  {
    license: 'GNU LGPLv3', 
    badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)', 
    link: 'https://choosealicense.com/licenses/lgpl-3.0/', 
    desc: 'Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.'
  },
  {
    license: 'Mozilla Public License 2.0', 
    badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', 
    link: 'https://choosealicense.com/licenses/mpl-2.0/', 
    desc: 'Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.'
  },
  {
    license: 'Apache License 2.0', 
    badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 
    link: 'https://choosealicense.com/licenses/apache-2.0/',
    desc: 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
  },
  {
    license: 'MIT License', 
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
    link: 'https://choosealicense.com/licenses/mit/', 
    desc: 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
  },
  {
    license: 'Boost Software License 1.0', 
    badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', 
    link: 'https://choosealicense.com/licenses/bsl-1.0/', 
    desc: 'A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
  },
  {
    license: 'The Unlicense', 
    badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)', 
    link: 'https://choosealicense.com/licenses/unlicense/', 
    desc: 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.'
  },
];


// A function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  if (license.length > 0) {
    return license[0].badge;
  } else return '';
}


// A function that returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(license) {
  if (license.length > 0) {
    return license[0].link;
  } else return '';
}

// A function that returns the license section of README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  if (license.length > 0) {
    return license[0].desc;
  } else return '';
}


// A function to generate markdown for README
function generateMarkdown(data) {
  let licenseChoice = licenseOptions.filter(function(license) {
    return license.license === data.license;
  });
  
  return `# ${data.title}   ${renderLicenseBadge(licenseChoice)}
  
  ## Description

  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## License
  ### [${data.license}](${renderLicenseLink(licenseChoice)})

  ${renderLicenseSection(licenseChoice)}

  ## Contributing

  ${data.contribute}

  ## Tests

  ${data.testing}

  ## Questions

  GitHub Profile: [${data.gitHub}](https://github.com/${data.gitHub})

  Email: ${data.email}

  `;
}

module.exports = { 
  generateMarkdown, 
};
