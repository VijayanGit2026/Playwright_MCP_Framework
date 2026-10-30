import { test } from "../fixtures/fixtureFile.js";
import { logger } from "../utils/loggerUtils.js";

test.beforeAll(async () => {
  logger("Suite started");
});

test.beforeEach(async ({ context, page }) => {
  await context.clearCookies();
  await page.goto("/");
});

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    if (!page.isClosed()) {
      try {
        await page.screenshot({
          path: testInfo.outputPath("failure.png"),
          fullPage: true,
        });

        logger("Failure screenshot captured");
      } catch (error) {
        logger(`Screenshot capture failed: ${error.message}`);
      }
    } else {
      logger("Page is already closed. Screenshot skipped.");
    }
  }
});

test.afterAll(async () => {
  logger("Suite ended");
});

