import { By } from 'selenium-webdriver'

export class PMTEPLocators {
  static emailInput: By = By.xpath('//input[@id="cookieEmail"]')
  static passwordInput: By = By.xpath('//input[@id="cookiePwd"]')
  static rememberMeCheckBox: By = By.xpath(
    '//div[contains(@class, "checkbox loginboxcheckboxarea")]'
  )
  static logInButton: By = By.xpath(
    '//div[contains(@class, "loginbuttonarea")]/button'
  )
  static dealersBox: By = By.xpath(
    '//a[contains(@class, "boxclick") and contains(@href, "/Pos/contact")]'
  )
  static searchByPhoneNumberTab: By = By.xpath(
    '//a[@href="#mobilenosearch" and contains(text(), "Telefon Numarası")]'
  )
  static searchByPhoneNumberWrapper: By = By.xpath(
    '//span[@aria-expanded="false" and @aria-labelledby="select2-js_PosSelect_MobileNo-container"]'
  )
  static searchByPhoneNumberInput: By = By.xpath(
    '//span[@class="select2-search select2-search--dropdown"]/input'
  )
  static searchByPhoneNumberResult: By = By.xpath(
    '//div[@class="select2-result-repository__title"]'
  )
  static transporterContactTab: By = By.xpath(
    '//li[@role="presentation"]/a[@href="#user_411949"]'
  )
  static changeDealerButton: By = By.xpath(
    '//div[@id="subtab_411949"]//div[@class="pull-right cutom-buttons"]/button[@data-target="#change-pos"]'
  )
  static changeDealerModalInput: By = By.xpath(
    '//div[@class="modal in"]//input[@id="txt_ChangePos"]'
  )
  static changeDealerModalSaveButton: By = By.xpath(
    '//div[@class="modal in"]//button[@class="btn btn-blue btn_changePos"]'
  )
  static transporterContactStatusSelect: By = By.xpath(
    '//div[@id="subtab_411949"]//select[@name="Status"]'
  )
  static transporterContactIsMainCheckBox: By = By.xpath(
    '//input[@data-id="411949" and contains(@class, "custom-checkbox ck_IsMain")]'
  )
  static transporterContactTypeSelect: By = By.xpath(
    '//div[@id="subtab_411949"]//select[@name="Contact_Type_ID"]'
  )
  static transporterContactUpdateButton: By = By.xpath(
    '//div[@id="subtab_411949"]//button[@data-id="411949" and @name="js_DefaultInfo"]'
  )
  static transporterContactUpdateAlertClose: By = By.xpath(
    '//div[contains(@class, "alert alert-success")]/button[contains(@type, "button") and contains(@class, "close")]'
  )
}
