package com.metapop.backend.dto.UserDTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserUpdateDTO {
    private String email;
    private String password;
    private String name;
    private String nickname;
    private String bank;
    private String account;
    private String address;
}
