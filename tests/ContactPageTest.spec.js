import { test, expect } from '../fixtures/GlobalFixture.js';

test.beforeEach("Precondition", async({page}) => {
    await page.goto("/");
});

test("@e2e @Regression Verify user is on Contact page", async({page, contactPage})=>{

    await contactPage.clickOnContactLink();

  //  await expect(page.url()).toContain("contacts");

    await expect(page).toHaveURL(/contacts/);
});

test("@e2e @Regression @Sanity create new contact", async({page, contactPage}) => {
    await contactPage.clickOnContactLink();

    await contactPage.clickOnCreateButton();

    await contactPage.enterFirstname("Pratiksha");

    await contactPage.enterLastname("Hundekar");

    await contactPage.enterEmail("pratiksha@gnail.com");

    await contactPage.clickOnSaveButton();
});

