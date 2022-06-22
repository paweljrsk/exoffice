import { expect, Locator, Page } from '@playwright/test';
import { exofficePwd, exofficeUrl, exofficeUserName } from '../data/config';

export class globalPage {

    readonly page: Page;
    readonly userName: Locator;
    readonly password: Locator;
    readonly signIngBtn: Locator;
    readonly remindBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator('#username')
        this.password = page.locator('#password')
        this.signIngBtn = page.locator('#kc-form-buttons')
        this.remindBtn = page.locator('text=Przypomnij mi za 60 min');
    }

    async openHomeUrl(username:string, password:string) {
        await this.page.goto(exofficeUrl);
        await this.userName.fill(username)
        await this.password.fill(password)
        await this.signIngBtn.click()
    }

    async closeReminderModal() {
        await this.remindBtn.click();
    }

    public async getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}
