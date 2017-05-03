package com.xplitit.xplitit;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.EditText;
import android.widget.TextView;
import static com.xplitit.xplitit.R.id.tvWelcomeMsg;

public class UserAreaActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_user_area);

        final TextView WelcomeMsg = (TextView) findViewById(tvWelcomeMsg);
        final EditText etUsername = (EditText) findViewById(R.id.etUsername);

        Intent intent = getIntent();
        String username = intent.getStringExtra("username");

        String message = "Welcome to Xplitit";
        WelcomeMsg.setText(message);
        etUsername.setText(username);

    }
}
