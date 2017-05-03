package com.xplitit.xplitit;

import com.android.volley.Response;
import com.android.volley.toolbox.StringRequest;
import java.util.HashMap;
import java.util.Map;

public class RegisterRequest extends StringRequest {

    private static final String SIGNUP_REQUEST_URL = "http://xplitit.hostei.com/signup.php";
    private Map<String, String> params;

    public RegisterRequest(String email, String confirmEmail, String username, String password, Response.Listener<String> listener){
        super(Method.POST, SIGNUP_REQUEST_URL, listener, null);
        params = new HashMap<>();
        params.put("email", email);
        params.put("confirmEmail", confirmEmail);
        params.put("username", username);
        params.put("password", password);
    }

    @Override
    public Map<String, String> getParams() {
        return params;
    }
}
