package com.metapop.backend.dto.StoreDTO;

import com.metapop.backend.entity.Store;
import com.metapop.backend.entity.User;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class StoreSaveDTO {
    private String name;
    private LocalDate period;
    private String info;
    private String signName;

    public Store toEntity(User user) {
        return Store.builder()
                .user(user)
                .name(name)
                .period(period)
                .info(info)
                .signName(signName)
                .build();
    }
}
