package com.metapop.backend.controller;

import com.metapop.backend.dto.OrdersDTO.OrdersSaveDTO;
import com.metapop.backend.dto.OrdersDTO.OrdersUpdateDTO;
import com.metapop.backend.entity.Orders;
import com.metapop.backend.entity.User;
import com.metapop.backend.repository.UserRepository;
import com.metapop.backend.service.OrdersService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Tag(name = "order", description = "주문 API")
@RestController
@RequestMapping("orders")
@CrossOrigin(origins = "*")
public class OrdersController {

    private String secretKey = "MetaPop";

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrdersService ordersService;

    @Operation(summary = "", description = "주문 등록 API")
    @PostMapping("/register")
    public ResponseEntity<String> registration(@RequestBody OrdersSaveDTO ordersSaveDTO) {
        return ordersService.registration(ordersSaveDTO);
    }

    @Operation(summary = "", description = "주문 상세 정보 조회 API")
    @GetMapping("/info/detail/{orders_id}")
    public Optional<Orders> infodetail(@PathVariable Long orders_id) {
        return ordersService.infodetail(orders_id);
    }

    @Operation(summary = "", description = "내 판매 주문 전체 정보 조회 API")
    @GetMapping("/info/sell")
    public List<Orders> sellList(@RequestHeader("Authorization") String jwtToken) {
        Claims claims = Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(jwtToken).getBody();
        User user = userRepository.findByEmail(claims.getSubject());
        return ordersService.sellList(user.getId());
    }

    @Operation(summary = "", description = "내 구매 주문 전체 정보 조회 API")
    @GetMapping("/info/buy")
    public List<Orders> buyList(@RequestHeader("Authorization") String jwtToken) {
        Claims claims = Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(jwtToken).getBody();
        User user = userRepository.findByEmail(claims.getSubject());
        return ordersService.buyList(user.getId());
    }

    @Operation(summary = "", description = "주문 정보 수정 API")
    @PutMapping("/update/{orders_id}")
    public Orders update(@PathVariable Long orders_id, @RequestBody OrdersUpdateDTO ordersUpdateDTO) {
        return ordersService.update(orders_id, ordersUpdateDTO);
    }

    @Operation(summary = "", description = "주문 삭제 API")
    @DeleteMapping("/remove/{orders_id}")
    public String remove(@PathVariable Long orders_id) {
        return ordersService.delete(orders_id);
    }
}
