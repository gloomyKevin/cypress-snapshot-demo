const { defineConfig } = require('cypress')
const { initPlugin } = require('cypress-plugin-snapshots/plugin')

module.exports = defineConfig({
  env: {
    "cypress-plugin-snapshots": {
      "imageConfig": {
        "threshold": 0.01
      }
    }
  },
  e2e: {
    excludeSpecPattern: [
      "**/__snapshots__/*",
      "**/__image_snapshots__/*"
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      initPlugin(on, config);
      return config;
    },
  }
})