const {By} = require("selenium-webdriver")

const search = async (driver, searchTerm)=>{
    await driver.findElement(By.name('q')).sendKeys(`${searchTerm}\n`)
    await driver.findElement(By.xpath('(//a/div[text()="Images"])[1]')).click()
    await driver.sleep(5000)
}

module.exports = {
    search
}