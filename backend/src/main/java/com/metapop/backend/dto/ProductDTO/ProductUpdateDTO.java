package com.metapop.backend.dto.ProductDTO;

import lombok.Getter;

import java.util.List;

@Getter
public class ProductUpdateDTO {
    private String name;
    private Long price;
    private Long amount;
    private String info;
    private List<String> imgList;
    private String tableName;
}
