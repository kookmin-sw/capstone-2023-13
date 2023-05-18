package com.metapop.backend.service;

import com.metapop.backend.dto.OrdersDTO.OrdersSaveDTO;
import com.metapop.backend.dto.OrdersDTO.OrdersUpdateDTO;
import com.metapop.backend.entity.Orders;
import com.metapop.backend.entity.Product;
import com.metapop.backend.entity.User;
import com.metapop.backend.repository.OrdersRepository;
import com.metapop.backend.repository.ProductRepository;
import com.metapop.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class OrdersService {

    private final OrdersRepository ordersRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    public ResponseEntity<String> registration(OrdersSaveDTO ordersSaveDTO) {
        Integer idx = 0;
        for (Long productId: ordersSaveDTO.getProductListId()) {
            Product product = productRepository.findById(productId).orElseThrow();
            if(product.getAmount() == 0) {
                    return ResponseEntity.status(400).body("주문 할 양이 없습니다.");
            }
            else {
                product.setAmount(product.getAmount() - ordersSaveDTO.getProductAmountList().get(idx));
            }
            idx = idx + 1;
        }
        User buyer = userRepository.findById(ordersSaveDTO.getBuyerId()).orElseThrow();
        User seller = userRepository.findById(ordersSaveDTO.getSellerId()).orElseThrow();
        ordersRepository.save(ordersSaveDTO.toEntity(buyer, seller));
        return ResponseEntity.ok("주문 저장 완료");
    }

    public Optional<Orders> infodetail(Long orders_id) {
        return ordersRepository.findById(orders_id);
    }

    public List<Orders> sellList(User user) {
        return ordersRepository.findBySellerId(user);
    }

    public List<Orders> buyList(User user) {
        return ordersRepository.findByBuyerId(user);
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
