const AxeBuilder = require('@axe-core/webdriverio').default;
const { remote } = require('webdriverio');

(async () => {
  const client = await remote({
    logLevel: 'error',
    capabilities: {
      browserName: 'chrome'
    }
  });

  await client.url('https://github.com/');

  const builder = new AxeBuilder({ client });
  try {
    const results = await builder
      // enables legacy mode
      .setLegacyMode()
      .analyze();
    console.log(results);
  } catch (e) {
    // do something with the error
  }
  await client.deleteSession();
})();