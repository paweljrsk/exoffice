import { expect, Locator, Page } from '@playwright/test';


export class leadMatch {
    readonly page: Page;
    readonly addNewClientBtn: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addNewClientBtn = page.locator('text=Dodaj nowego klienta');

    }

    async addNewClient() {
        await this.addNewClientBtn.click()
    }
}