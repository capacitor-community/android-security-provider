var capacitorSecurityProvider = (function (exports, core) {
    'use strict';

    exports.SecurityProviderStatus = void 0;
    (function (SecurityProviderStatus) {
        /**
         * This indicates that the provider was already up to date or was successfully updated
         */
        SecurityProviderStatus["Success"] = "Success";
        /**
         * This will occur on iOS and Web as these platforms cannot call the Android Security Provider
         */
        SecurityProviderStatus["NotImplemented"] = "NotImplemented";
        /**
         * Indicates that Google Play services is out of date, disabled, etc.
         * If this is returned a native dialog will notify and prompt the user to update.
         */
        SecurityProviderStatus["GooglePlayServicesRepairableException"] = "GooglePlayServicesRepairableException";
        /**
         * Indicates a non-recoverable error; the ProviderInstaller can't
         * install an up-to-date Provider.
         * You should abort running the application.
         */
        SecurityProviderStatus["GooglePlayServicesNotAvailableException"] = "GooglePlayServicesNotAvailableException";
    })(exports.SecurityProviderStatus || (exports.SecurityProviderStatus = {}));

    const CapacitorSecurityProvider = core.registerPlugin('CapacitorSecurityProvider', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorSecurityProviderWeb()),
    });

    class CapacitorSecurityProviderWeb extends core.WebPlugin {
        async installIfNeeded() {
            return { status: exports.SecurityProviderStatus.NotImplemented };
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CapacitorSecurityProviderWeb: CapacitorSecurityProviderWeb
    });

    exports.CapacitorSecurityProvider = CapacitorSecurityProvider;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
