const { defineConfig } = require('cypress')
const { initPlugin } = require('cypress-plugin-snapshots/plugin')
const { 
  addMatchImageSnapshotPlugin, 
  } = require('cypress-image-snapshot/plugin');

module.exports = defineConfig({
  env: {
    "cypress-plugin-snapshots": {
      "imageConfig": {
        "createDiffImage": true,                // Should a "diff image" be created, can be disabled for performance
        "threshold": 0.01,                      // Amount in pixels or percentage before snapshot image is invalid
        "thresholdType": "percent",             // Can be either "pixel" or "percent"
      },
      // "name": "custom image name",            // Naming resulting image file with a custom name rather than concatenating test titles
      // "separator": "custom image separator",  // Naming resulting image file with a custom separator rather than using the default ` #`
      // "updateSnapshots": true,
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
      addMatchImageSnapshotPlugin(on, config); 
      return config;
    },
  }
})