package com.metapop.backend.controller;

import com.metapop.backend.dto.StoreDTO.StoreSaveDTO;
import com.metapop.backend.dto.StoreDTO.StoreUpdateDTO;
import com.metapop.backend.entity.Store;
import com.metapop.backend.entity.User;
import com.metapop.backend.repository.UserRepository;
import com.metapop.backend.service.StoreService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Tag(name = "store", description = "상점 API")
@RestController
@RequestMapping("stores")
@CrossOrigin(origins = "*")
public class StoreController {

    private String secretKey = "MetaPop";

    @Autowired
    private StoreService storeService;
    @Autowired
    private UserRepository userRepository;

    @Operation(summary = "", description = "상점 등록 API")
    @PostMapping("/register")
    public String registration(@RequestBody StoreSaveDTO storeSaveDTO, @RequestHeader("Authorization") String jwtToken) {
        Claims claims = Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(jwtToken).getBody();
        User user = userRepository.findByEmail(claims.getSubject());
        return storeService.registration(user, storeSaveDTO);
    }

    @Operation(summary = "", description = "상점 정보 조회 API")
    @GetMapping("/info/detail")
    public Store infodetail(@RequestHeader("Authorization") String jwtToken) {
        Claims claims = Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(jwtToken).getBody();
        User user = userRepository.findByEmail(claims.getSubject());
        return storeService.infodetail(user);
    }

    @Operation(summary = "", description = "상점 전체 조회 API")
    @GetMapping("/info")
    public List<Store> info() {
        List<Store> store = storeService.info();
        return store;
    }

    @Operation(summary = "", description = "상점 수정 API")
    @PutMapping("/update")
    public String update(@RequestBody StoreUpdateDTO storeUpdateDTO, @RequestHeader("Authorization") String jwtToken) {
        Claims claims = Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(jwtToken).getBody();
        User user = userRepository.findByEmail(claims.getSubject());
        return storeService.update(user, storeUpdateDTO);
    }

    @Operation(summary = "", description = "상점 삭제 API")
    @DeleteMapping("/remove")
    public String remove(@RequestHeader("Authorization") String jwtToken) {
        Claims claims = Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(jwtToken).getBody();
        User user = userRepository.findByEmail(claims.getSubject());
        return storeService.delete(user);
    }
}
