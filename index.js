const core = require('@actions/core');
const github = require('@actions/github');

try {
  console.log('GitHub action started...');
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`Event payload ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
