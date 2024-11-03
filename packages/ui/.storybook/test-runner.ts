import type { TestRunnerConfig } from '@storybook/test-runner';

const config: TestRunnerConfig = {
  async preRender(page) {
    // Add any pre-render steps here
  },
  async postRender(page) {
    // Add any post-render steps here
  },
};

export default config; 