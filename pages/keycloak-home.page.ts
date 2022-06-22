import { expect, Locator, Page } from '@playwright/test';
import { exofficePwd, exofficeUrl, exofficeUserName } from '../data/config';

export class keyCloakPage {

    readonly page: Page;
    readonly userName: Locator;
    readonly password: Locator;
    readonly signIngBtn: Locator;

constructor(page: Page) {
    this.page = page;
    this.userName = page.locator('#username')
    this.password = page.locator('#password')
    this.signIngBtn = page.locator('#kc-form-buttons')
}

async openHomeUrl() {
    await this.page.goto(exofficeUrl);
}

async fillUserName() {
    await this.userName.fill(exofficeUserName);
} 

async fillPassword() {
    await this.password.fill(exofficePwd);
} 

async clickSignInBtn() {
    await this.signIngBtn.click();
} 

}