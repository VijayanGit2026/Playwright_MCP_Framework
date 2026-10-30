export async function dropdownHandling(element, value) {
    await element.selectOption({
        value: value
    });
}