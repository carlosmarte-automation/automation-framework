
```js
import assert from "node:assert";
assert((await page.title()) === "Example Domain");
```

```js
  expect(util.inspect(api)).toContain(`{
  username: 'foo',
  key: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXbar',
  region: 'us',
  headless: false,
  proxy: undefined`);
```

```js
var client = webdriverjs.remote({
     host: 'ondemand.saucelabs.com',
     port: 80,
     user: "****",
     key: "****",
     logLevel: 'debug'
}).init({
    sessionId: runningInstanceSessId
}).call(function () {
     console.log('done');
});
```