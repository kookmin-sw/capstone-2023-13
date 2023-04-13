package com.metapop.backend.controller;

import com.metapop.backend.dto.OrdersDTO.OrdersSaveDTO;
import com.metapop.backend.service.OrdersService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
