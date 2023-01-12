import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'eendmg',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
