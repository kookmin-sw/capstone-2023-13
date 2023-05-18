package com.metapop.backend.dto.OrdersDTO;

import lombok.Getter;

import java.util.List;

@Getter
public class OrdersUpdateDTO {
    private Long state;
    private Long totalPrice;
    private List<Long> productListId;
}
