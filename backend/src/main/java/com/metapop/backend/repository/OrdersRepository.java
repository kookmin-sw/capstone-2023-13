package com.metapop.backend.repository;

import com.metapop.backend.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrdersRepository extends JpaRepository<Orders, Long> {
    List<Orders> findBySellerId(Long user_id);
    List<Orders> findByBuyerId(Long user_id);
}
