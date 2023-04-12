package com.metapop.backend.entity;

import com.metapop.backend.dto.StoreDTO.StoreUpdateDTO;
import lombok.*;

import javax.persistence.*;

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

    @Builder
    public Store(User user, String name){
        this.owner = user;
        this.name = name;
    }

    public void update(StoreUpdateDTO storeUpdateDTO) {
        this.name = storeUpdateDTO.getName();
    }

}
