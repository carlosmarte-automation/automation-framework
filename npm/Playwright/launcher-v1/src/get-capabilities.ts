// @ts-nocheck
import invariant from 'automation-framework-invariant';

export const chromeCapabilities = () =>  {
    return {
        capabilities: {
            browserName: 'chrome'
        }
    }
};

const getCapabilities = (options = {}) => {
    invariant.isObject(options, 'options arg is required');

    switch(options.type) {
        case "chrome":
            return chromeCapabilities(options)
        default:
            return chromeCapabilities(options)
    }
}

export default getCapabilities;
