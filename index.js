const { Builder, By, Key, util } = require("selenium-webdriver");
const Assert = require("assert")

async function googling() {
  //buka browser
  let driver = await new Builder().forBrowser("chrome").build();
  // buka url google
  await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login");
  await driver.findElement(By.name("txtUsername")).sendKeys("opensourcecms");
  await driver.findElement(By.name("txtPassword")).sendKeys("opensourcecms");
  await driver.findElement(By.name("Submit")).click();

  let text = await driver.findElement(By.xpath("//li")).getText();

  Assert.equal(text, "Welcome Admin", "Gagal");
  console.log("Berhasil")

}

googling();