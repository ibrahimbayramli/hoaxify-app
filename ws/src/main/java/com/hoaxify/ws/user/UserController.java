package com.hoaxify.ws.user;


import com.hoaxify.ws.shared.GenericResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping("/api/1.0/users")
	@ResponseStatus(HttpStatus.CREATED)
	public GenericResponse createUser(@RequestBody User user){
		userService.save(user);
		log.info(user.toString());

		return new GenericResponse("User Created");
	}
}
