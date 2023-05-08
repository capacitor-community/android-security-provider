export var SecurityProviderStatus;
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
})(SecurityProviderStatus || (SecurityProviderStatus = {}));
//# sourceMappingURL=definitions.js.map