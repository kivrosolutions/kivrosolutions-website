const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto("http://localhost:3000");
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "screenshot-home.png", fullPage: false });
  console.log("Home screenshot taken");

  // Hover over Services to see mega menu
  const servicesBtn = page.locator('button:has-text("Services")');
  if ((await servicesBtn.count()) > 0) {
    await servicesBtn.hover();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: "screenshot-services-menu.png", fullPage: false });
    console.log("Services mega menu screenshot taken");
  }

  // Move mouse away first
  await page.mouse.move(0, 0);
  await page.waitForTimeout(500);

  // Hover over About to see mega menu
  const aboutBtn = page.locator('button:has-text("About")');
  if ((await aboutBtn.count()) > 0) {
    await aboutBtn.hover();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: "screenshot-about-menu.png", fullPage: false });
    console.log("About mega menu screenshot taken");
  }

  await browser.close();
  console.log("All screenshots taken successfully");
})();
