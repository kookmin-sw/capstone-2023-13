package com.metapop.backend.repository;

import com.metapop.backend.entity.Store;
import com.metapop.backend.entity.StoreCustomizing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoreCustomizingRepository extends JpaRepository<StoreCustomizing, Long> {
    StoreCustomizing findByStoreId(Store store_id);
}
