const puppeteer = require('puppeteer');
let browser, page;

beforeEach(async () => {
    browser = await puppeteer.launch({
        headless: false
    });
    page = await browser.newPage();
    await page.goto('localhost:3000');
});

afterEach(async ()=>{
    await browser.close();
});

test('Clicking login launches Google oauth flow', async () => {
    await page.click('.right a');

    const url = await page.url();

    expect(url).toMatch(/accounts\.google\.com/);
});

test('When signed in, shows logout button', async ()=>{
    const id = '5ae9c7661b9ab7460938f2e3';


    await page.setCookie({name: 'session', value: sessionString});
    await page.setCookie({name: 'session.sig', value: sig});
    await page.goto('localhost:3000');
    await page.waitFor('a[href="/auth/logout"]');

    const text = await page.$eval('a[href="/auth/logout"]',el=>el.innerHTML);

    expect(text).toEqual('Logout');

});
