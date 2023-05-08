import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorSecurityProviderPlugin)
public class CapacitorSecurityProviderPlugin: CAPPlugin {
    private let implementation = CapacitorSecurityProvider()

    @objc func installIfNeeded(_ call: CAPPluginCall) {
        call.resolve([
            "status": "NotImplemented"
        ])
    }
}
