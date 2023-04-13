package com.metapop.backend.service;

import com.metapop.backend.dto.OrdersDTO.OrdersSaveDTO;
import com.metapop.backend.entity.Orders;
import com.metapop.backend.entity.Product;
import com.metapop.backend.repository.OrdersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class OrdersService {

    private final OrdersRepository ordersRepository;

    public String registration(OrdersSaveDTO ordersSaveDTO) {
        ordersRepository.save(ordersSaveDTO.toEntity());
        return "주문 저장 완료";
    }

    public Optional<Orders> infodetail(Long orders_id) {
        return ordersRepository.findById(orders_id);
    }
}
