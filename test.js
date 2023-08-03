const { spawn } = require("child_process");
const { Builder } = require("selenium-webdriver");

// Start the React.js app on localhost:3000
const appProcess = spawn("npm", ["start"]);

// Wait for the app to start (you can add a delay here if needed)
setTimeout(async () => {
    // Run Selenium tests
    try {
        await new Builder().forBrowser("chrome").build().executeScript(`
      const mocha = new Mocha({ timeout: 10000 });
      mocha.addFile('./src/login.test.js');
      mocha.run((failures) => {
        process.exitCode = failures ? 1 : 0;
        appProcess.kill(); // Kill the React.js app process after the tests
      });
    `);
    } catch (error) {
        console.error("Error running tests:", error);
        appProcess.kill(); // Kill the React.js app process if an error occurs
    }
}, 10000); // Adjust the delay as needed based on your app's startup time
