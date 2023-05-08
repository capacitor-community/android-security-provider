import { WebPlugin } from '@capacitor/core';

import type { CapacitorSecurityProviderPlugin } from './definitions';
import { SecurityProviderStatus } from './definitions';

export class CapacitorSecurityProviderWeb
  extends WebPlugin
  implements CapacitorSecurityProviderPlugin
{
  async installIfNeeded(): Promise<{ status: SecurityProviderStatus }> {
    return { status: SecurityProviderStatus.NotImplemented };
  }
}
