import { registerPlugin } from '@capacitor/core';
const CapacitorSecurityProvider = registerPlugin('CapacitorSecurityProvider', {
    web: () => import('./web').then(m => new m.CapacitorSecurityProviderWeb()),
});
export * from './definitions';
export { CapacitorSecurityProvider };
//# sourceMappingURL=index.js.map