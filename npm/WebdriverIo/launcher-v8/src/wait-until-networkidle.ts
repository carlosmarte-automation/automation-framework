
const waitUntilNetworkIdle = (browser: any, threshold = 100) => browser.waitUntil(
    () =>
      browser.executeAsync(function (done:any) {
        let current:any = 0;
        let timestamp:any = new Date().getTime();
        let element:any = null;

        const mutationObserver = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            if (mutation.type === "attributes") return;
            if (mutation.target === element) return;
            timestamp = new Date().getTime();
            element = mutation.target;
            current++;
          });
        });

        const interval = setInterval(() => {
          const diff = new Date().getTime() - timestamp;
          if (diff >= threshold) {
            done(current);
            mutationObserver.disconnect();
            clearInterval(interval);
          }
        }, 500);

        mutationObserver.observe(document.documentElement, {
          attributes: false,
          characterData: true,
          childList: true,
          subtree: true,
          attributeOldValue: false,
          characterDataOldValue: true,
        });
      }),
    {
      timeout: 60 * 1000 * 10, // 60 seconds
      timeoutMsg: "application network",
    }
  );

  export default waitUntilNetworkIdle