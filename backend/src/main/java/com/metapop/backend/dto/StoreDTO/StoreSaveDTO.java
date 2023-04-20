package com.metapop.backend.dto.StoreDTO;

import com.metapop.backend.entity.Store;
import com.metapop.backend.entity.User;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class StoreSaveDTO {
    private Long userId;
    private String name;
    private LocalDateTime period;
    private String info;

    public Store toEntity(User user) {
        return Store.builder()
                .user(user)
                .name(name)
                .period(period)
                .info(info)
                .build();
    }
}
