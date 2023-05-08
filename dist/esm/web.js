import { WebPlugin } from '@capacitor/core';
import { SecurityProviderStatus } from './definitions';
export class CapacitorSecurityProviderWeb extends WebPlugin {
    async installIfNeeded() {
        return { status: SecurityProviderStatus.NotImplemented };
    }
}
//# sourceMappingURL=web.js.map