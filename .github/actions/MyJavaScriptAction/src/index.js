const core = require('@actions/core');

async function run() {
  try {
    const who = core.getInput('who', { required: true });
    const greeting = `Hello, ${who}!`;
    core.setOutput('greeting', greeting);
    core.info(greeting);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();