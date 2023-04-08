package com.hoaxify.ws.user;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class UserController {

	@Autowired
	UserRepository userRepository;

	@PostMapping("/api/1.0/users")
	public void createUser(@RequestBody User user){
		userRepository.save(user);
		log.info(user.toString());
	}
}
