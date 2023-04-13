package com.metapop.backend.service;

import com.metapop.backend.dto.OrdersDTO.OrdersSaveDTO;
import com.metapop.backend.repository.OrdersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class OrdersService {

    private final OrdersRepository ordersRepository;

    public String registration(OrdersSaveDTO ordersSaveDTO) {
        ordersRepository.save(ordersSaveDTO.toEntity());
        return "주문 저장 완료";
    }
}
