<p align="center"><br><img src="https://user-images.githubusercontent.com/236501/85893648-1c92e880-b7a8-11ea-926d-95355b8175c7.png" width="128" height="128" /></p>
<h3 align="center">Android Security Provider</h3>
<p align="center"><strong><code>@capacitor-community/security-provider</code></strong></p>
<p align="center">
  Check and update the Android Security Provider in a  Capacitor app.
</p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2022?style=flat-square" />
  <a href="https://www.npmjs.com/package/@capacitor-community/security-provider"><img src="https://img.shields.io/npm/l/@capacitor-community/security-provider?style=flat-square" /></a>
<br>
  <a href="https://www.npmjs.com/package/@capacitor-community/security-provider"><img src="https://img.shields.io/npm/dw/@capacitor-community/security-provider?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@capacitor-community/security-provider"><img src="https://img.shields.io/npm/v/@capacitor-community/security-provider?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="#contributors-"><img src="https://img.shields.io/badge/all%20contributors-1-orange?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
</p>

## About

Capacitor plugin with a method to check and update the Android Security Provider.

Android relies on a security Provider to provide secure network communications. However, from time to time, vulnerabilities are found in the default security provider. To protect against these vulnerabilities, Google Play services provides a way to automatically update a device's security provider to protect against known exploits. By calling Google Play services methods, you can help ensure that your app is running on a device that has the latest updates to protect against known exploits.

For example, a vulnerability was discovered in OpenSSL (CVE-2014-0224) that can leave apps open to an on-path attack that decrypts secure traffic without either side knowing. Google Play services version 5.0 offers a fix, but apps must check that this fix is installed. By using the Google Play services methods, you can help ensure that your app is running on a device that's secured against that attack.

## Install

```bash
npm install @capacitor-community/security-provider
npx cap sync
```

## Usage

```typescript
import { CapacitorSecurityProvider } from '@capacitor-community/security-provider';
...
    const result = await CapacitorSecurityProvider.installIfNeeded();
    if (!result.status == SecurityProviderStatus.Success && result.status != SecurityProviderStatus.NotImplemented) {
        // Do not proceed. The Android Security Provider failed to verify / install.
    }
```

## API

<docgen-index>

* [`installIfNeeded()`](#installifneeded)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### installIfNeeded()

```typescript
installIfNeeded() => Promise<{ status: SecurityProviderStatus; }>
```

**Returns:** <code>Promise&lt;{ status: <a href="#securityproviderstatus">SecurityProviderStatus</a>; }&gt;</code>

--------------------


### Enums


#### SecurityProviderStatus

| Members                                       | Value                                                  | Description                                                                                                                                       |
| --------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`Success`**                                 | <code>'Success'</code>                                 | This indicates that the provider was already up to date or was successfully updated                                                               |
| **`NotImplemented`**                          | <code>'NotImplemented'</code>                          | This will occur on iOS and Web as these platforms cannot call the Android Security Provider                                                       |
| **`GooglePlayServicesRepairableException`**   | <code>'GooglePlayServicesRepairableException'</code>   | Indicates that Google Play services is out of date, disabled, etc. If this is returned a native dialog will notify and prompt the user to update. |
| **`GooglePlayServicesNotAvailableException`** | <code>'GooglePlayServicesNotAvailableException'</code> | Indicates a non-recoverable error; the ProviderInstaller can't install an up-to-date Provider. You should abort running the application.          |

</docgen-api>
