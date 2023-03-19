package com.metapop.backend.repository;

import com.metapop.backend.entity.Store;
import com.metapop.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoreRepository extends JpaRepository<Store, Long> {
    Store findByOwner(User owner);
}
