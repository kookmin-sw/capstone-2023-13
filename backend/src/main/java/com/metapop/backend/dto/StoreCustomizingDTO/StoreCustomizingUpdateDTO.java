package com.metapop.backend.dto.StoreCustomizingDTO;

import lombok.Getter;

import java.util.List;

@Getter
public class StoreCustomizingUpdateDTO {
    private String tile;
    private String wall;
    private String door;
    private List<String> decoList;
    private List<String> tableList;
}
