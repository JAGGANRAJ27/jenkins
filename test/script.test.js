// Import the function to be tested
const showMessage = require('../script');

// Jest setup: reset the DOM before each test
beforeEach(() => {
  // Set up a simple DOM structure
  document.body.innerHTML = '<div><p id="message"></p></div>';
});

test('should update message in the DOM', () => {
  showMessage();

  // Assert that the message in the DOM is updated correctly
  expect(document.getElementById("message").innerText).toBe("Hello, Jenkins is working!");
});
