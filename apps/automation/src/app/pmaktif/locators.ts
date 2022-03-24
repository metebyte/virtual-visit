import { By } from 'selenium-webdriver'

export class PMAKTIFLocators {
  static phoneNumberInput: By = By.xpath('//input[@id="phoneNumber"]')
  static passwordInput: By = By.xpath('//input[@id="password"]')
  static dealerNotFound: By = By.xpath(
    '//button[starts-with(@class, "BrandButton")]'
  )
  static virtualVisitButton: By = By.xpath(
    '//a[contains(@class, "chefs-shop-button")]'
  )
  static performansVideoIFrame: By = By.xpath(
    '//iframe[contains(@class, "sp-fancybox-iframe")]'
  )
  static closeFancyBoxButton: By = By.xpath(
    '//div[@id="close-button-164632048205"]'
  )
  static virtualVisitIFrame: By = By.xpath('//iframe[@id="ommaPlayer"]')
  static playButton: By = By.xpath('//ui-control-play-big')
  static videoDiv: By = By.xpath('//div[@id="sp_root"]')
  static videoSeekableProgressBar: By = By.xpath(
    '//ui-control-timeline-seekable[@style="left: 0%; right: 0%;"]'
  )
  static surveyProgress: By = By.xpath(
    '//ui-timeline-item-point[position() = (last()-1)]'
  )
  static inlinePlayButton: By = By.xpath('//ui-control-play')
  static surveyFrame: By = By.xpath('//div[@scene-element]//iframe')
  static surveyEmoji: By = By.xpath(
    '//section[@class="emojis"]//div[position() = last()]/img'
  )
  static menuButton: By = By.xpath('//a[@class="menu-button"]')
  static logOutButton: By = By.xpath(
    '//div[@class="menu-container menu-list"]/div[contains(@class, "logout-btn")]'
  )
}
