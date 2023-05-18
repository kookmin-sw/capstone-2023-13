package com.metapop.backend.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "storecustomizing")
@NoArgsConstructor
@Getter
@Setter
public class StoreCustomizing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "store_id", nullable = false)
    private Store storeId;

    @Column(nullable = false)
    private String tile;

    @Column(nullable = false)
    private String wall;

    @Column(nullable = false)
    private String door;

    @ElementCollection
    @CollectionTable(name = "storecustomizing_deco_list", joinColumns = @JoinColumn(name = "orders_id", referencedColumnName = "id"))
    private List<String> decoList = new ArrayList<>();

    @ElementCollection
    @CollectionTable(name = "storecustomizing_table_list", joinColumns = @JoinColumn(name = "orders_id", referencedColumnName = "id"))
    private List<String> tableList = new ArrayList<>();

    @Builder
    public StoreCustomizing(Store store, String tile, String wall, String door, List<String> decoList, List<String> tableList) {
        this.storeId = store;
        this.tile = tile;
        this.wall = wall;
        this.door = door;
        this.decoList = decoList;
        this.tableList = tableList;
    }
}
