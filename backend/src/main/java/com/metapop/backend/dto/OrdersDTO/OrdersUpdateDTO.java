package com.metapop.backend.dto.OrdersDTO;

import lombok.Getter;

import java.util.List;

@Getter
public class OrdersUpdateDTO {
    private Long buyerId;
    private Long sellerId;
    private Long state;
    private Long totalPrice;
    private List<Long> productListId;
}
