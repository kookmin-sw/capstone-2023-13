package com.metapop.backend.dto.ProductDTO;

import lombok.Getter;

@Getter
public class ProductUpdateDTO {
    private String name;
    private Long price;
    private Long amount;
    private String info;
}
