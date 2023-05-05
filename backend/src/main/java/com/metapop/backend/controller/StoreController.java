package com.metapop.backend.controller;

import com.metapop.backend.dto.StoreDTO.StoreSaveDTO;
import com.metapop.backend.dto.StoreDTO.StoreUpdateDTO;
import com.metapop.backend.dto.UserDTO.TokenDTO;
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

import java.util.Date;

@Tag(name = "store", description = "상점 API")
@RestController
@RequestMapping("stores")
@CrossOrigin(origins = "*")
public class StoreController {

    private String secretKey = "MetaPop";
    Date now = new Date();

    @Autowired
    private StoreService storeService;
    @Autowired
    private UserRepository userRepository;

    @Operation(summary = "", description = "상점 등록 API")
    @PostMapping("/register")
    public String registration(@RequestBody StoreSaveDTO storeSaveDTO) {
        return storeService.registration(storeSaveDTO);
    }

    @Operation(summary = "", description = "상점 정보 조회 API")
    @GetMapping("/info/{user_id}")
    public Store info(@PathVariable Long user_id) {
        return storeService.info(user_id);
    }

    @Operation(summary = "", description = "상점 수정 API")
    @PutMapping("/update")
    public String update(@RequestBody StoreUpdateDTO storeUpdateDTO, @RequestHeader("Authorization") String jwtToken) {
        Claims claims = Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(jwtToken).getBody();
        User user = userRepository.findByEmail(claims.getSubject());
        return storeService.update(user.getId(), storeUpdateDTO);
    }

    @Operation(summary = "", description = "상점 삭제 API")
    @DeleteMapping("/remove/{user_id}")
    public String remove(@PathVariable Long user_id, @RequestBody TokenDTO tokenDTO) {
        return storeService.delete(user_id, tokenDTO);
    }
}
