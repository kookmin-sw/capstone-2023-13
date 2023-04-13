package com.metapop.backend.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
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

    @PrePersist
    public void prePersist() {
        this.orderDate = LocalDateTime.now();
    }

    @Builder
    public Orders(Long buyerId, Long sellerId, Long state, Long totalPrice){
        this.buyerId = buyerId;
        this.sellerId = sellerId;
        this.state = state;
        this.totalPrice = totalPrice;
    }
}
