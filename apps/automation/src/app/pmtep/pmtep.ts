import { By, Key, until, WebDriver, WebElement } from 'selenium-webdriver'
import { environment } from '../../environments/environment'
import { PMTEPLocators } from './locators'

export class PMTEP {
  private browser: WebDriver

  constructor(webDriver: WebDriver) {
    this.browser = webDriver
  }

  async logInPMTEP(
    emailAddress: string,
    password: string,
    rememberMe: boolean
  ) {
    await this.browser.get(environment.PMTEP_DEALERS_URL)
    await this.browser
      .wait(until.elementLocated(PMTEPLocators.emailInput))
      .sendKeys(emailAddress)
    await this.browser
      .wait(until.elementLocated(PMTEPLocators.passwordInput))
      .sendKeys(password)
    if (rememberMe)
      await this.browser
        .wait(until.elementLocated(PMTEPLocators.rememberMeCheckBox))
        .click()
    await this.browser
      .wait(until.elementLocated(PMTEPLocators.logInButton))
      .click()
  }

  async goToTransporterContact(phoneNumber: string) {
    await this.browser.get(environment.PMTEP_DEALERS_URL)

    await this.browser
      .wait(
        until.elementIsVisible(
          await this.browser.findElement(PMTEPLocators.searchByPhoneNumberTab)
        )
      )
      .click()

    await this.browser
      .wait(
        until.elementIsVisible(
          await this.browser.findElement(
            PMTEPLocators.searchByPhoneNumberWrapper
          )
        )
      )
      .click()

    await this.browser.findElement(PMTEPLocators.searchByPhoneNumberInput)

    await this.browser
      .wait(
        until.elementIsVisible(
          await this.browser.findElement(PMTEPLocators.searchByPhoneNumberInput)
        )
      )
      .sendKeys(phoneNumber)
      .then(async () => {
        await this.browser.sleep(1500)
        await this.browser
          .findElement(PMTEPLocators.searchByPhoneNumberInput)
          .sendKeys(Key.ENTER)
      })

    await this.browser
      .wait(
        until.elementIsVisible(
          await this.browser.findElement(PMTEPLocators.transporterContactTab)
        )
      )
      .click()
  }

  async changeDealer(dealerCode: string, phoneNumber: string) {
    await this.browser
      .wait(
        until.elementIsVisible(
          await this.browser.findElement(PMTEPLocators.changeDealerButton)
        )
      )
      .click()

    await this.browser
      .wait(
        until.elementIsVisible(
          await this.browser.findElement(PMTEPLocators.changeDealerModalInput)
        )
      )
      .sendKeys(dealerCode)

    await this.browser
      .wait(
        until.elementIsVisible(
          await this.browser.findElement(
            PMTEPLocators.changeDealerModalSaveButton
          )
        )
      )
      .click()

    await this.goToTransporterContact(phoneNumber)

    await this.browser
      .wait(
        until.elementIsVisible(
          await this.browser.findElement(
            PMTEPLocators.transporterContactStatusSelect
          )
        )
      )
      .then(async (selectElement) => {
        await this.selectOption(selectElement, 'Aktif')
      })

    await this.browser
      .wait(
        until.elementIsVisible(
          await this.browser.findElement(
            PMTEPLocators.transporterContactIsMainCheckBox
          )
        )
      )
      .click()

    await this.browser
      .wait(
        until.elementIsVisible(
          await this.browser.findElement(
            PMTEPLocators.transporterContactTypeSelect
          )
        )
      )
      .then(async (selectElement) => {
        await this.selectOption(selectElement, 'OWNER')
      })

    await this.browser
      .wait(
        until.elementIsVisible(
          await this.browser.findElement(
            PMTEPLocators.transporterContactUpdateButton
          )
        )
      )
      .click()

    await this.browser
      .wait(
        until.elementIsVisible(
          await this.browser.findElement(
            PMTEPLocators.transporterContactUpdateAlertClose
          )
        )
      )
      .click()
  }

  async selectOption(selectElement: WebElement, textToSelect: string) {
    await selectElement.findElements(By.css('option')).then((options) => {
      options.map((option) => {
        option.getText().then((text) => {
          if (text == textToSelect) {
            option.click()
          }
        })
      })
    })
  }
}
