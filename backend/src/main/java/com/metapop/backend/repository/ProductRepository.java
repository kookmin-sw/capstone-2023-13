package com.metapop.backend.repository;

import com.metapop.backend.entity.Product;
import com.metapop.backend.entity.Store;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByStoreId(Store store);

    Product findById(Product product);
}
