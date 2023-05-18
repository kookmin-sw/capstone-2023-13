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

    @ManyToOne
    @JoinColumn(name = "buyer_id", nullable = false)
    private User buyerId;

    @ManyToOne
    @JoinColumn(name = "seller_id", nullable = false)
    private User sellerId;

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
    public Orders(User buyer, User seller, Long state, Long totalPrice, List<Long> productList, List<Long> productAmountList) {
        this.buyerId = buyer;
        this.sellerId = seller;
        this.state = state;
        this.totalPrice = totalPrice;
        this.productList = productList;
        this.productAmountList = productAmountList;
    }

    public void update(OrdersUpdateDTO ordersUpdateDTO) {
        this.state = ordersUpdateDTO.getState();
        this.totalPrice = ordersUpdateDTO.getTotalPrice();
        this.productList = ordersUpdateDTO.getProductListId();
    }
}
