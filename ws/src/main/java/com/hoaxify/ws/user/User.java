package com.hoaxify.ws.user;

import com.hoaxify.ws.annotations.UniqueUsername;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotNull
	@Size(min = 4, max = 255)
	@Column(unique = true)
	@UniqueUsername
	private String username;
	@NotNull
	@Size(min = 4, max = 255)
	private String displayName;

	@NotNull
	@Size(min = 8, max = 255)
	@Pattern(regexp="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$")
	private String password;
}
