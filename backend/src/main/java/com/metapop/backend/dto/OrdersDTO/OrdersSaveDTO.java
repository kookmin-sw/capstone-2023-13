package com.metapop.backend.dto.OrdersDTO;

import com.metapop.backend.entity.Orders;
import com.metapop.backend.entity.User;
import lombok.Getter;

import java.util.List;

@Getter
public class OrdersSaveDTO {
    private Long buyerId;
    private Long sellerId;
    private Long state;
    private Long totalPrice;
    private List<Long> productListId;
    private List<Long> productAmountList;

    public Orders toEntity(User buyer, User seller) {
        return Orders.builder()
                .buyer(buyer)
                .seller(seller)
                .state(state)
                .totalPrice(totalPrice)
                .productList(productListId)
                .productAmountList(productAmountList)
                .build();
    }
}
