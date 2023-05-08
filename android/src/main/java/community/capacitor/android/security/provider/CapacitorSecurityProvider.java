package community.capacitor.android.security.provider;

import android.content.Context;
import android.util.Log;
import com.google.android.gms.common.GoogleApiAvailability;
import com.google.android.gms.common.GooglePlayServicesNotAvailableException;
import com.google.android.gms.common.GooglePlayServicesRepairableException;
import com.google.android.gms.security.ProviderInstaller;

public class CapacitorSecurityProvider {

    private Context context;

    public CapacitorSecurityProvider(Context context) {
        this.context = context;
    }

    public String installIfNeeded() {
        String status = "Success";
        try {
            ProviderInstaller.installIfNeeded(this.context);
        } catch (GooglePlayServicesRepairableException e) {
            // Indicates that Google Play services is out of date, disabled, etc.

            // Prompt the user to install/update/enable Google Play services.
            GoogleApiAvailability.getInstance().showErrorNotification(context, e.getConnectionStatusCode());

            // Notify the WorkManager that a soft error occurred.
            status = "GooglePlayServicesRepairableException";
        } catch (GooglePlayServicesNotAvailableException e) {
            // Indicates a non-recoverable error; the ProviderInstaller can't
            // install an up-to-date Provider.

            // Notify the WorkManager that a hard error occurred.
            status = "GooglePlayServicesNotAvailableException";
        }

        // If this is reached, you know that the provider was already up to date
        // or was successfully updated.
        status = "Success";
        return status;
    }
}
