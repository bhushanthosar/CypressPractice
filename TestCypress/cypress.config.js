const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'n2oko1',
  retries: {
    runMode: 1
    },
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 6000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
  env:{
    "url": 'https://rahulshettyacademy.com',
  }
});
