import BasePage from './BasePage.js';

export default class ContactPage extends BasePage
{
    constructor(page)
    {
        super(page);

        this.contactLink = page.locator("//a[@href='/contacts']");

        this.createButton = page.getByRole('button', {name : 'Create'});

       // this.createButton = page.locator("//button[text()='Create']");

        this.firstname = page.getByRole('textbox', {name : 'First Name'});

        this.lastname = page.getByRole('textbox', {name : 'Last Name'});

        this.email = page.getByRole('textbox', {name : 'Email'});

        this.saveButton = page.getByRole('button', {name : 'Save'});
    }

    async clickOnContactLink()
    {
        await this.click(this.contactLink);
    }

    async clickOnCreateButton()
    {
        await this.click(this.createButton);
    }

    async enterFirstname(fname)
    {
        await this.fill(this.firstname, fname);
    }

    async enterLastname(lname)
    {
        await this.fill(this.lastname, lname);
    }

    async enterEmail(email)
    {
        await this.fill(this.email, email);
    }

    async clickOnSaveButton()
    {
        await this.click(this.saveButton);
    }
}