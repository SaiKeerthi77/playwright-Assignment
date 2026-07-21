import {test} from "@playwright/test"
test ("selector assignmet ",async ({page})=> {
    await page.goto("http://leaftaps.com/opentaps/control/main")
    //user name 
    await page.locator('.inputLogin').nth(0).fill('democsr2')
    //password
    await page.locator('#password').fill('crmsfa')
    //login button 
    await page.locator('input[type="submit"]').click()
    //Click CRM/SFA
    await page.locator('#button').click()

    //Click Leads
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click()
    await page.waitForTimeout(2000)
    //Click Create Lead.
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click()
    await page.waitForTimeout(2000)

    //create lead details 
    await page.locator('#createLeadForm_companyName').fill('Test Leaf')
    await page.locator('#createLeadForm_firstName').fill('Sai')
    await page.locator('#createLeadForm_lastName').fill('Keerthi')
    await page.locator('#createLeadForm_personalTitle').fill('Mrs')
    await page.locator('[name="generalProfTitle"]').fill('Quality Analyst')
    await page.locator('[name="annualRevenue"]').fill('300000')
    await page.locator('[name="departmentName"]').fill('Testing')
    await page.waitForTimeout(2000)
    

    //source Dropdown
    const sourceDropdown = page.locator('[name="dataSourceId"]> options')
    const countDropdown =  await sourceDropdown.count()
    console.log("The dropdown count is ",sourceDropdown)
    for(let index=0;index<countDropdown;index++){
        console.log(await sourceDropdown.nth(index).innerText())
    }
     //phone number
     await page.locator('#createLeadForm_primaryPhoneNumber').fill('9876543245')
     await page.waitForTimeout(2000)
     //createlead
    await page.locator('.smallSubmit').click()
  
})