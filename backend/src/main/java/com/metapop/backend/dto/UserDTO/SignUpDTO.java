package com.metapop.backend.dto.UserDTO;

import com.metapop.backend.entity.Orders;
import com.metapop.backend.entity.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignUpDTO {
    private String email;
    private String password;
    private String name;
    private String nickname;
    private String bank;
    private String account;
    private String address;

    public User toEntity() {
        return User.builder()
                .email(email)
                .password(password)
                .name(name)
                .nickname(nickname)
                .bank(bank)
                .account(account)
                .address(address)
                .build();
    }
}