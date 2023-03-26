package com.metapop.backend.dto;

import com.metapop.backend.entity.Product;
import com.metapop.backend.entity.Store;
import lombok.Getter;

@Getter
public class ProductSaveDTO {
    private Long storeId;
    private String name;
    private Long price;
    private String info;

    public Product toEntity(Store store) {
        return Product.builder()
                .store(store)
                .name(name)
                .price(price)
                .info(info)
                .build();
    }
}
