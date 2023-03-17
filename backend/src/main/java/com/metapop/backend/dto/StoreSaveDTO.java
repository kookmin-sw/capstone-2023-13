package com.metapop.backend.dto;

import com.metapop.backend.entity.Store;
import com.metapop.backend.entity.User;
import lombok.Getter;

@Getter
public class StoreSaveDTO {
    private Long userId;
    private String name;

    public Store toEntity(User user) {
        return Store.builder()
                .user(user)
                .name(name)
                .build();
    }
}
