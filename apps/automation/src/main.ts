import { Builder } from 'selenium-webdriver'
import { PMAKTIF } from './app/pmaktif/pmaktif'
import { PMTEP } from './app/pmtep/pmtep'
import { environment } from './environments/environment'
import dealerData from './data.json'

const webDriver = new Builder().forBrowser('chrome').build()
const webDriver2 = new Builder().forBrowser('chrome').build()
const pmtep = new PMTEP(webDriver)
const pmaktif = new PMAKTIF(webDriver2)

let number = 1
let dealerTotal = dealerData.length

asyncForEach(dealerData, async (data) => {
  if (number == 1) await logInPMTEP()
  console.log(`Kalan Bayii Sayısı: ${dealerTotal - number}`)
  console.log(`${number++} - ${data.CustomerCode} - ${data.CustomerName}`)
  await doSteps(data.CustomerCode)
})

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

async function logInPMTEP() {
  await pmtep.logInPMTEP(
    environment.PMTEP_EMAIL_ADRESS,
    environment.PMTEP_PASSWORD,
    environment.PMTEP_REMEMBER_ME
  )
}

async function doSteps(customerCode: string) {
  await pmtep.goToTransporterContact(
    environment.PMTEP_TRANSPORTER_CONTACT_PHONE_NUMBER
  )
  await pmtep.changeDealer(
    customerCode,
    environment.PMTEP_TRANSPORTER_CONTACT_PHONE_NUMBER
  )
  await pmaktif.logInPMAKTIF()
}
