package com.metapop.backend.repository;

import com.metapop.backend.entity.Orders;
import com.metapop.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrdersRepository extends JpaRepository<Orders, Long> {
    List<Orders> findBySellerId(User user);
    List<Orders> findByBuyerId(User user);
}
