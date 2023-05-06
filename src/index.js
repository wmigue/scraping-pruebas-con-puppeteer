const puppeteer = require('puppeteer')
const path = require('path')

//DEFINICIONES

const configs = {
    'verNavegador': [{ headless: true }, { headless: false }]
}

const GetBrowserInstance = async () => await puppeteer.launch(configs.verNavegador[1])
const GetPageInstance = async (browserInstance) => await browserInstance.newPage()

const openUrl = async (url, pageInstance) => {
    await pageInstance.goto(url)
}

const typing = async (pageInstance, domElement, text) => {
    await pageInstance.type(domElement, text)
    return pageInstance
}

const screenShot = async (pageInstance, whereSave) => {
    await pageInstance.screenshot({ path: whereSave })
}

const pathAndNameToSave = (pathUps, namePNG) => {
    return path.join(__dirname, pathUps, namePNG)
}


const closeBrowser = (browserInstance) => {
    browserInstance.close()
}





//instancias patron fachada
const facade1 = async () => {
    const browserInstance = await GetBrowserInstance()
    const pageInstance = await GetPageInstance(browserInstance)
    await openUrl('https://www.google.com', pageInstance)
    await typing(pageInstance, de, 'syslab.com.ar/SL')
    await screenShot(pageInstance, pathToSave)
    closeBrowser(browserInstance)
}




//INSTANCIAS
const de = "#APjFqb"
const pathToSave = pathAndNameToSave('../screenshots', 'screenshot1.png')
facade1()

