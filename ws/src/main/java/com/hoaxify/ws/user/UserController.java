package com.hoaxify.ws.user;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class UserController {

	@PostMapping("/api/1.0/users")
	@CrossOrigin
	public void createUser(@RequestBody User user){
		log.info(user.toString());
	}
}
