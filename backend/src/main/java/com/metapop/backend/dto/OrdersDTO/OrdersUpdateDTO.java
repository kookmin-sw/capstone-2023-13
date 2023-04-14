package com.metapop.backend.dto.OrdersDTO;

import lombok.Getter;

@Getter
public class OrdersUpdateDTO {
    private Long buyerId;
    private Long sellerId;
    private Long state;
    private Long totalPrice;
}
