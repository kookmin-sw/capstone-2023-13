package com.metapop.backend.dto.StoreCustomizingDTO;

import com.metapop.backend.entity.Store;
import com.metapop.backend.entity.StoreCustomizing;
import lombok.Getter;

import java.util.List;

@Getter
public class StoreCustomizingSaveDTO {
    private Long storeId;
    private String tile;
    private String wall;
    private String door;
    private List<String> decoList;
    private List<String> tableList;

    public StoreCustomizing toEntity(Store store) {
        return StoreCustomizing.builder()
                .store(store)
                .tile(tile)
                .wall(wall)
                .door(door)
                .decoList(decoList)
                .tableList(tableList)
                .build();
    }
}
