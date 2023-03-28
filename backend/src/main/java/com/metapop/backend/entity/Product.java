package com.metapop.backend.entity;

import com.metapop.backend.dto.ProductDTO.ProductUpdateDTO;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "product")
@NoArgsConstructor
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "store_id", nullable = false)
    private Store storeId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Long price;

    @Column(nullable = false)
    private String info;

    @Builder
    public Product(Store store, String name, Long price, String info){
        this.storeId = store;
        this.name = name;
        this.price = price;
        this.info = info;
    }

    public void update(ProductUpdateDTO productUpdateDTO) {
        this.name = productUpdateDTO.getName();
        this.price = productUpdateDTO.getPrice();
        this.info = productUpdateDTO.getInfo();
    }
}
