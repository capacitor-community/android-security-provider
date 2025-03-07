import { CapacitorSecurityProvider, SecurityProviderStatus } from '@capacitor-community/security-provider';
import { Capacitor } from '@capacitor/core';

window.onload = async () => {
    const status = document.getElementById('status');
    if (Capacitor.getPlatform() !== 'android') {
        status.innerText = 'Try on an Android device';
        return;
    }
    console.log('CapacitorSecurityProvider.installIfNeeded');
    const result = await CapacitorSecurityProvider.installIfNeeded();
    console.log(result);
    status.innerText = result.status;
    if (result.status !== SecurityProviderStatus.Success) {
        alert('Play Services might be disabled / invalid.');
    }
}


