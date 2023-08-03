const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Login Functionality", function () {
    let driver;
    const loginUrl = "http://localhost:3000"; // Replace with the URL of your React.js app on localhost

    before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
    });

    after(async function () {
        await driver.quit();
    });

    it("should display error message when login fails", async function () {
        await driver.get(loginUrl);

        // Find the email and password input elements and submit the login form without filling them
        await driver.findElement(By.name("email")).sendKeys("1", Key.RETURN);
        await driver.findElement(By.name("password")).sendKeys("1", Key.RETURN);

        // Wait for the error message to appear
        await driver.wait(
            until.elementLocated(By.className("error-message")),
            5000
        );

        // Verify that the error message is displayed
        const errorMessage = await driver
            .findElement(By.className("error-message"))
            .getText();
        expect(errorMessage).to.equal("Please fill in all fields.");
    });

    // Add more test cases as needed
});
