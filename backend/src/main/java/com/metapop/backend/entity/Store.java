package com.metapop.backend.entity;

import com.metapop.backend.dto.StoreDTO.StoreUpdateDTO;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "store")
@NoArgsConstructor
@Getter
@Setter
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User owner;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private LocalDate period;

    @Column(nullable = false)
    private String info;

    @Column(nullable = false)
    private Float x;

    @Column(nullable = false)
    private Float y;

    @Column(nullable = false)
    private Float z;

    @Builder
    public Store(User user, String name, LocalDate period, String info, Float x,  Float y,  Float z){
        this.owner = user;
        this.name = name;
        this.period = period;
        this.info = info;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public void update(StoreUpdateDTO storeUpdateDTO) {
        this.name = storeUpdateDTO.getName();
        this.period = storeUpdateDTO.getPeriod();
        this.info = storeUpdateDTO.getInfo();
        this.x = storeUpdateDTO.getX();
        this.y = storeUpdateDTO.getY();
        this.z = storeUpdateDTO.getZ();
    }
}
