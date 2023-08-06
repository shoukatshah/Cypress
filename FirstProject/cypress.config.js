const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "webpack",
    },
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "webpack",
    },
  },
});
