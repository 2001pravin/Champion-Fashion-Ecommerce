package com.champion.response;


import org.springframework.stereotype.Component;

@Component
public class AuthResponse {
	private String jwt;
	private String message;
	
	public String getJwt() {
		return jwt;
	}
	public void setJwt(String jwt) {
		this.jwt = jwt;
	}
		public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	
	

}
