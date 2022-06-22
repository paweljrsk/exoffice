import { expect, Locator, Page } from "@playwright/test";

export class leadData {

    readonly page: Page;
    readonly clientConnectBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.clientConnectBtn = page.locator('text=Połącz z klientem');
    }

    async clickClientConnect() {
        await this.clientConnectBtn.click();
    }

}