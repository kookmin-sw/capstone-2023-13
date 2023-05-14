package com.metapop.backend.dto.UserCustomizingDTO;

import com.metapop.backend.entity.User;
import com.metapop.backend.entity.UserCustomizing;
import lombok.Getter;

@Getter
public class UserCustomizingSaveDTO {
    private String custombody;
    private String customhair;
    private String customeye;
    private String customoutfit;

    public UserCustomizing toEntity(User user) {
        return UserCustomizing.builder()
                .user(user)
                .custombody(custombody)
                .customhair(customhair)
                .customeye(customeye)
                .customoutfit(customoutfit)
                .build();
    }
}
