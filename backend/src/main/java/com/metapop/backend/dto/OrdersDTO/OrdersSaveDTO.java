package com.metapop.backend.dto.OrdersDTO;

import com.metapop.backend.entity.Orders;
import lombok.Getter;

@Getter
public class OrdersSaveDTO {
    private Long buyerId;
    private Long sellerId;
    private Long state;
    private Long totalPrice;

    public Orders toEntity() {
        return Orders.builder()
                .buyerId(buyerId)
                .sellerId(sellerId)
                .state(state)
                .totalPrice(totalPrice)
                .build();
    }
}
