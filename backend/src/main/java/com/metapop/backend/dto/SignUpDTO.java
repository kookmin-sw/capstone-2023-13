package com.metapop.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignUpDTO {
    private String email;
    private String password;
    private String name;
    private String bank;
    private String account;
    private String address;
}