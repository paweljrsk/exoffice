import { expect, Locator, Page } from '@playwright/test';
import { exofficePwd, exofficeUrl, exofficeUserName, leadsURL } from '../data/config';

export class leadsList {

    readonly page: Page;
    readonly forename: Locator;
    readonly surname: Locator;
    readonly cellPhoneNumber: Locator;
    readonly searchBtn: Locator;
    readonly takeLeadBtn: Locator;

constructor(page: Page) {
    this.page = page;
    this.forename = page.locator("//div/div[label='Imię']/div/input")
    this.surname = page.locator("//div/div[label='Nazwisko']/div/input")
    this.cellPhoneNumber = page.locator("//div/div[label='Telefon komórkowy']/div/input")
    this.searchBtn = page.locator('//div/button[text()="Szukaj"]')
    this.takeLeadBtn = page.locator('//td["Imię_test_123456789 Nazwisko_test_123456789"]/a >> nth=0')
}

async openLeadsUrl() {
    await this.page.goto(`${exofficeUrl}${leadsURL}`);
}


async fillSearchInputs(forename:string, surname:string, cellPhoneNumber:string) {
    await this.forename.fill(forename);
    await this.surname.fill(surname);
    await this.cellPhoneNumber.fill(cellPhoneNumber);
    await this.searchBtn.click();
}

async clickTakeLead() {
    await this.takeLeadBtn.click()
}

}