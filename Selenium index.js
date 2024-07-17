const{Builder,By,Key,util}=require("selenium-webdriver");
async function Arti() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("file:///C:/Users/JAZZ-PC/Downloads/Arthi%202398933/Arthi/index.html");
    await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
  }
  
  Arti();
