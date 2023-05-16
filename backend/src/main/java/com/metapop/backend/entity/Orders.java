package com.metapop.backend.entity;

import com.metapop.backend.dto.OrdersDTO.OrdersUpdateDTO;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
@NoArgsConstructor
@Getter
@Setter
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long buyerId;

    @Column(nullable = false)
    private Long sellerId;

    @Column(nullable = false)
    private LocalDateTime orderDate;

    @Column(nullable = false)
    private Long state;

    @Column(nullable = false)
    private Long totalPrice;

    @ElementCollection
    @CollectionTable(name = "orders_product_list", joinColumns = @JoinColumn(name = "orders_id", referencedColumnName = "id"))
    private List<Long> productList = new ArrayList<>();

    @ElementCollection
    @CollectionTable(name = "orders_product_amount_list", joinColumns = @JoinColumn(name = "orders_id", referencedColumnName = "id"))
    private List<Long> productAmountList = new ArrayList<>();

    @PrePersist
    public void prePersist() {
        this.orderDate = LocalDateTime.now();
    }

    @Builder
    public Orders(Long buyerId, Long sellerId, Long state, Long totalPrice, List<Long> productList, List<Long> productAmountList) {
        this.buyerId = buyerId;
        this.sellerId = sellerId;
        this.state = state;
        this.totalPrice = totalPrice;
        this.productList = productList;
        this.productAmountList = productAmountList;
    }

    public void update(OrdersUpdateDTO ordersUpdateDTO) {
        this.buyerId = ordersUpdateDTO.getBuyerId();
        this.sellerId = ordersUpdateDTO.getSellerId();
        this.state = ordersUpdateDTO.getState();
        this.totalPrice = ordersUpdateDTO.getTotalPrice();
        this.productList = ordersUpdateDTO.getProductListId();
    }
}
