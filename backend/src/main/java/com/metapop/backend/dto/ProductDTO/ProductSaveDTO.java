package com.metapop.backend.dto.ProductDTO;

import com.metapop.backend.entity.Product;
import com.metapop.backend.entity.Store;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ProductSaveDTO {
    private Long storeId;
    private String name;
    private Long price;
    private Long amount;
    private String info;
    private List<String> imgList;

    public Product toEntity(Store store) {
        return Product.builder()
                .store(store)
                .name(name)
                .price(price)
                .amount(amount)
                .info(info)
                .imgList(imgList)
                .build();
    }
}
