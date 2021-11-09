import { Key, until, WebDriver } from 'selenium-webdriver'
import { NoSuchElementError } from 'selenium-webdriver/lib/error'
import { environment } from '../../environments/environment'
import { PMAKTIFLocators } from './locators'

export class PMAKTIF {
  private browser: WebDriver
  constructor(webDriver: WebDriver) {
    this.browser = webDriver
  }

  async logInPMAKTIF() {
    await this.browser.get(environment.PMAKTIF_BASE_URL)
    await this.browser.sleep(500)

    await this.browser
      .wait(
        until.elementIsVisible(
          await this.browser.findElement(PMAKTIFLocators.phoneNumberInput)
        )
      )
      .sendKeys(environment.PMAKTIF_PHONE_NUMBER)

    await this.browser
      .wait(
        until.elementIsVisible(
          await this.browser.findElement(PMAKTIFLocators.passwordInput)
        )
      )
      .sendKeys(environment.PMAKTIF_PASSWORD, Key.ENTER)

    await this.browser.wait(until.urlContains('feed'), 10000).then(async () => {
      await this.browser
        .wait(until.elementLocated(PMAKTIFLocators.virtualVisitButton), 10000)
        .then(
          async (element) => {
            await element.click()
          },
          async () => {
            return
          }
        )

      await this.browser
        .wait(until.elementLocated(PMAKTIFLocators.virtualVisitIFrame), 10000)
        .then(async (frame) => {
          await this.browser.switchTo().frame(frame)
        })

      await this.browser
        .wait(until.elementLocated(PMAKTIFLocators.playButton), 20000)
        .then(async (element) => {
          await element.isDisplayed().then(async () => {
            await element.click()
            await this.browser
              .wait(until.elementLocated(PMAKTIFLocators.videoDiv))
              .click()
          })
        })

      await this.browser
        .wait(until.elementLocated(PMAKTIFLocators.videoSeekableProgressBar))
        .then(async () => {
          const surveyProgress = await this.browser.wait(
            until.elementLocated(PMAKTIFLocators.surveyProgress)
          )
          const inlinePlayButton = await this.browser.wait(
            until.elementLocated(PMAKTIFLocators.inlinePlayButton)
          )
          await this.browser.sleep(500)
          await this.browser.actions().click(surveyProgress).perform()
          await this.browser.sleep(500)
          await this.browser.actions().click(inlinePlayButton).perform()
        })

      await this.browser
        .wait(until.elementLocated(PMAKTIFLocators.surveyFrame))
        .then(async (frame) => {
          await this.browser.switchTo().frame(frame)
        })

      await this.browser
        .wait(
          until.elementIsVisible(
            await this.browser.findElement(PMAKTIFLocators.surveyEmoji)
          )
        )
        .click()

      await this.browser.switchTo().defaultContent()

      await this.browser
        .wait(
          until.elementIsVisible(
            await this.browser.findElement(PMAKTIFLocators.menuButton)
          )
        )
        .click()
        .then(async () => {
          await this.browser
            .wait(
              until.elementIsVisible(
                await this.browser.findElement(PMAKTIFLocators.logOutButton)
              )
            )
            .click()
        })
    })
  }
}
