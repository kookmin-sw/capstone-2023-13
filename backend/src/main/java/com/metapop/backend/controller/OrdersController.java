package com.metapop.backend.controller;

import com.metapop.backend.dto.OrdersDTO.OrdersSaveDTO;
import com.metapop.backend.entity.Orders;
import com.metapop.backend.entity.Product;
import com.metapop.backend.service.OrdersService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Tag(name = "order", description = "주문 API")
@RestController
@RequestMapping("orders")
@CrossOrigin(origins = "*")
public class OrdersController {

    @Autowired
    private OrdersService ordersService;

    @Operation(summary = "", description = "주문 등록 API")
    @PostMapping("/register")
    public String registration(@RequestBody OrdersSaveDTO ordersSaveDTO) {
        return ordersService.registration(ordersSaveDTO);
    }

    @Operation(summary = "", description = "주문 상세 정보 조회 API")
    @GetMapping("/info/detail/{orders_id}")
    public Optional<Orders> infodetail(@PathVariable Long orders_id) {
        return ordersService.infodetail(orders_id);
    }
}
