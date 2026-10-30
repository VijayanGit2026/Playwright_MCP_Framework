import { expect } from "@playwright/test";

import { test } from "../fixtures/fixtureFile.js";
import userData from "../testData/user.json" with { type: "json" };
import "../Hooks/hooks.js";

test("Valid login", async ({ page, loginPage }) => {
  await loginPage.login(
    userData.valid.username,
    userData.valid.password
  );

  await expect(page).toHaveURL(/inventory\.html$/);
  await expect(page.getByText("Products")).toBeVisible();
});

test("Invalid username and password", async ({ loginPage }) => {
  await loginPage.login(
    userData.invalid.username,
    userData.invalid.password
  );

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toHaveText(
    "Epic sadface: Username and password do not match any user in this service"
  );
});

test("Empty username", async ({ loginPage }) => {
  await loginPage.login("", userData.valid.password);

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toHaveText(
    "Epic sadface: Username is required"
  );
});

test("Empty password", async ({ loginPage }) => {
  await loginPage.login(userData.valid.username, "");

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toHaveText(
    "Epic sadface: Password is required"
  );
});

test("Locked-out user", async ({ loginPage }) => {
  await loginPage.login("locked_out_user", userData.valid.password);

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toHaveText(
    "Epic sadface: Sorry, this user has been locked out."
  );
});
