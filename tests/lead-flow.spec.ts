import { test, expect } from '@playwright/test';
import { leadCellPhoneNumber, leadForename, leadSurname } from '../data/data';
import { globalPage } from '../pages/global.page';
import { leadMatchNewClient } from '../pages/lead-match-new-client.page';
import { leadMatch } from '../pages/lead-match.page';
import { leadData } from '../pages/lead.page';
import { leadsList } from '../pages/leads-list.page';

// export const randomNumber = Math.floor(Math.random() * (999998 - 111111 + 1)) + 1
// export const leadForename:string = 'imię_test' + randomNumber
// export const leadSurname:string = 'nazwisko_test' + randomNumber
// export const leadCellPhoneNumber:string = `512111224`

    test('should get consent definitions', async ({ request, baseURL }) => {
        const getRequest = await request.get(`${baseURL}consent-definitions`)
        console.log(baseURL)
        console.log(await getRequest.json())
        });
  
    test('should post lead', async ({ request, baseURL }) => {
      const postRequest = await request.post(`${baseURL}leads`, {
          data: {
              "originId": null,
              "isDraft": true,
              "forename": leadForename,
              "surname": leadSurname,
              "cellPhoneNumber": leadCellPhoneNumber,
              "emailAddress":"test@wp.pl",
              "productTypeCode":"KG",
              "campaignName":"porownywarka_gotowkowa",
              "partnerId":"",
              "partnerName":"Expander_SG",
              "additionalFields":{
                  "simulationId":"0882e242-a8c6-41e2-8cc1-834fb5b2ee8e",
                  "age":null,
                  "monthlyIncome":null,
                  "peopleInTheFamily":null,
                  "monthlyExpenses":null,
                  "monthlySumOfLoansRepaid":null,
                  "sumOfLoansRepaid":null,
                  "loanPurpose":null,
                  "mainSourceOfIncome":null,
                  "repaymentOfLiabilities":null,
                  "zip":null,
                  "form_name":null,
                  "campaign_name":null},
                  "consents":[
                      {"consentDefinitionId":"a9b376f8-2a68-43a7-befb-3968f369900f","value":false},
                      {"consentDefinitionId":"fdd68c29-409c-46e9-bb15-53372a40c23e","value":false}]
          }
      })
      console.log(await postRequest.json())
      expect(postRequest.ok()).toBeTruthy();
      });

        
    test('Should create new lead and connect with new client', async ({ page }) => { 
        const global = new globalPage(page);
        const lead_data = new leadData(page);
        const leads_list = new leadsList(page);
        const lead_match = new leadMatch(page);
        const lead_match_new_client = new leadMatchNewClient(page);
        console.log(leadForename, leadSurname, leadCellPhoneNumber)
        await global.openHomeUrl("XXX", "YYYY");
        await global.closeReminderModal()
        await leads_list.openLeadsUrl();
        await leads_list.fillForename(leadForename);
        await leads_list.fillSurname(leadSurname);
        await leads_list.clickSearchBtn();
        await leads_list.clickTakeLead();
        await lead_data.clickClientConnect();
        await lead_match.addNewClient();
        await lead_match_new_client.addNewDeal();
        await lead_match_new_client.DealProductType("200000");
        await lead_match_new_client.saveMatching();
        await page.pause()
        await page.waitForNavigation({ url: 'https://staging.pl/' })
        await expect(await page.url()).toContain("https://staging.pl")
        })

