module.exports = {
  default: {
    require: [
      'step-definitions/*.js',
      'support/*.js'
    ],
    format: [
      'progress',
      'json:reports/json/cucumber-report.json'
    ]
  }
};

