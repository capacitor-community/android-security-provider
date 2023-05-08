import { registerPlugin } from '@capacitor/core';

import type { CapacitorSecurityProviderPlugin } from './definitions';

const CapacitorSecurityProvider =
  registerPlugin<CapacitorSecurityProviderPlugin>('CapacitorSecurityProvider', {
    web: () => import('./web').then(m => new m.CapacitorSecurityProviderWeb()),
  });

export * from './definitions';
export { CapacitorSecurityProvider };
