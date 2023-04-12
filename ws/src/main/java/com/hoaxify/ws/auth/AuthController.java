package com.hoaxify.ws.auth;

import com.fasterxml.jackson.annotation.JsonView;
import com.hoaxify.ws.error.ApiError;
import com.hoaxify.ws.shared.Views;
import com.hoaxify.ws.user.User;
import com.hoaxify.ws.user.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.web.servlet.error.BasicErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
@Slf4j
public class AuthController {

    @Autowired
    UserRepository userRepository;



    @JsonView(Views.Base.class)
    @PostMapping("/api/1.0/auth")
    ResponseEntity<?> handleAuthentication(@RequestHeader(name = "Authorization") String authorization) {

        String base64encoded = authorization.split("Basic ")[1];
        String decode = new String(Base64.getDecoder().decode(base64encoded));
        String[] parts = decode.split(":");
        String username = parts[0];
        User inDB = userRepository.findByUsername(username);
        return ResponseEntity.ok(inDB);
    }


}
