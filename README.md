# EON Tech Test Automation Framework Setup
## Installation required on local machine

1.  Install the latest stable version of java.
    #### Download link: https://www.java.com/en/download/
2.  Install the latest stable version of Node.js (NPM will be defaulted).
    #### Download link: https://nodejs.org/en/download/
3.  Install the latest version of chrome browser.
    #### Download link: https://www.google.com/chrome/
4.  Install the latest version of git.
    #### Download link: https://git-scm.com/downloads/

## Check the installation on the local machine

1.  Run the command "node --version" in the terminal to verify the node installation
2.  Run the command "npm --version" in the terminal to verify the npm installation
3.  Run the command "java --version" in the terminal to verify the java installation
4.  Run the command "git --version" in the terminal to verify the git installation

## Clone the git-hub repository

Clone the git-hub repository to your local machine,
#### Reference link: https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository/

## Install Node Module dependencies

Goto Terminal and Run the command "npm install" to install all the node module dependencies

### Run Automated Test using NPM scripts

Goto Explorer --> NPM SCRIPTS--> Click on the script "test" (Run) button to run e2e test script

### Run Automated Test using terminal

Goto Terminal and Run the following command,

"npm run test" to run the e2e automated test pack

## Project Folder Structure

1.  The code for the wdio config files are maintained under the root directory
2.  The code for the base file is maintained under the test/config directory
3.  The test scenarios for the feature files are maintained under the test/features directory
4.  The code for the page wise object repositories are maintained under the test/pageObjects directory
5.  The code for the scenario step implementaions are maintained under the test/stepDefinitions directory
6.  The contents validation for the test scripts are maintained under the test/contents directory

## Html Report

The html report will be generated under the test/target directory. To view cucumber html report open "test/target/index.html" in a browser

## Logs

The test execution logs will be generated under the test/logs directory
