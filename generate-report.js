const reporter = require('cucumber-html-reporter');
 
const options = {
theme: 'bootstrap',
jsonFile: './reports/json/cucumber-report.json',
output: './reports/html/cucumber-report.html',
reportSuiteAsScenarios: true,
launchReport: true,
metadata: {
"Browser": "Chrome",
"Platform": "Windows",
"Executed": "Local"
}
};
 
reporter.generate(options);
