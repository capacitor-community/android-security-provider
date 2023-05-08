import { WebPlugin } from '@capacitor/core';
import type { CapacitorSecurityProviderPlugin } from './definitions';
import { SecurityProviderStatus } from './definitions';
export declare class CapacitorSecurityProviderWeb extends WebPlugin implements CapacitorSecurityProviderPlugin {
    installIfNeeded(): Promise<{
        status: SecurityProviderStatus;
    }>;
}
