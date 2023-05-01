package com.metapop.backend.service;

import com.metapop.backend.dto.OrdersDTO.OrdersSaveDTO;
import com.metapop.backend.dto.OrdersDTO.OrdersUpdateDTO;
import com.metapop.backend.entity.Orders;
import com.metapop.backend.repository.OrdersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
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

    public List<Orders> sellList(Long user_id) {
        return ordersRepository.findBySellerId(user_id);
    }

    public List<Orders> buyList(Long user_id) {
        return ordersRepository.findByBuyerId(user_id);
    }

    public Orders update(Long orders_id, OrdersUpdateDTO ordersUpdateDTO) {
        Orders orders = ordersRepository.findById(orders_id).orElseThrow();
        orders.update(ordersUpdateDTO);
        return orders;
    }

    public String delete(Long orders_id) {
        Orders orders = ordersRepository.findById(orders_id).orElseThrow();
        ordersRepository.delete(orders);
        return "삭제 완료";
    }
}
