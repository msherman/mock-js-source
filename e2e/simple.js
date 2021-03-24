import { RequestHook } from 'testcafe';

class MyHook extends RequestHook {
    constructor (requestFilterRules, responseEventConfigureOpts) {
        super(requestFilterRules, responseEventConfigureOpts);
    }

    async onRequest (e) {
        console.log(e.requestOptions.url);
    }

    async onResponse (e) {
    }
}

fixture `Getting Started`
    .requestHooks(new MyHook(/cdn/, {
        logRequestHeaders: true,
        logResponseHeaders: true}))
    .page `localhost:4200`;

test('Mock the CDN', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button');
});