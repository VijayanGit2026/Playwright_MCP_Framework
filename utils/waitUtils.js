export async function waitForElement(locator) {
    await locator.waitFor({
        state: "visible",
        timeout: 60000
    });
}