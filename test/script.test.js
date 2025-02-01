const showMessage = require('../script');

beforeEach(() => {
  document.body.innerHTML = '<div><p id="message"></p></div>';
});

test('should update message in the DOM', () => {
  showMessage();
  expect(document.getElementById("message").innerText).toBe("Hello, Jenkins is working!");
});
