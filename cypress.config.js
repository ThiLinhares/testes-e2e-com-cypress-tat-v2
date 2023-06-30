/* eslint-disable no-trailing-spaces */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {  
    defaultCommandTimeout: 10000,
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
  }, 
  projectId: "3ixuzh",
})
