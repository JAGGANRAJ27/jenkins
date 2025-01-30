module.exports = {
    reporters: [
      'default',
      ['jest-junit', { outputDirectory: 'jest-test-results', outputName: 'jest-junit.xml' }],
    ],
  };
  