package community.capacitor.android.security.provider;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CapacitorSecurityProvider")
public class CapacitorSecurityProviderPlugin extends Plugin {

    private CapacitorSecurityProvider implementation;

    @Override
    public void load() {
        implementation = new CapacitorSecurityProvider(getContext());
    }

    @PluginMethod
    public void installIfNeeded(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("status", implementation.installIfNeeded());
        call.resolve(ret);
    }
}
