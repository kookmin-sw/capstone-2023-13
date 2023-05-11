package com.metapop.backend.controller;

import com.metapop.backend.dto.UserCustomizingDTO.UserCustomizingSaveDTO;
import com.metapop.backend.dto.UserCustomizingDTO.UserCustomizingUpdateDTO;
import com.metapop.backend.entity.User;
import com.metapop.backend.entity.UserCustomizing;
import com.metapop.backend.repository.UserRepository;
import com.metapop.backend.service.UserCustomizingService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "usercustomizing", description = "유저 커스터마이징 API")
@RestController
@RequestMapping("usercustomizings")
@CrossOrigin(origins = "*")
public class UserCustomizingController {

    private String secretKey = "MetaPop";

    @Autowired
    private UserCustomizingService userCustomizingService;

    @Autowired
    private UserRepository userRepository;

    @Operation(summary = "", description = "유저 커스터마이징 등록 API")
    @PostMapping("/register")
    public ResponseEntity<String> registration(@RequestBody UserCustomizingSaveDTO userCustomizingSaveDTO, @RequestHeader("Authorization") String jwtToken) {
        Claims claims = Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(jwtToken).getBody();
        User user = userRepository.findByEmail(claims.getSubject());
        return userCustomizingService.registration(user, userCustomizingSaveDTO);
    }

    @Operation(summary = "", description = "유저 커스터마이징 정보 조회 API")
    @GetMapping("/info")
    public UserCustomizing info(@RequestHeader("Authorization") String jwtToken) {
        Claims claims = Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(jwtToken).getBody();
        User user = userRepository.findByEmail(claims.getSubject());
        return userCustomizingService.info(user);
    }

    @Operation(summary = "", description = "유저 커스터마이징 수정 API")
    @PutMapping("/update")
    public ResponseEntity<String> update(@RequestBody UserCustomizingUpdateDTO userCustomizingUpdateDTO, @RequestHeader("Authorization") String jwtToken) {
        Claims claims = Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(jwtToken).getBody();
        User user = userRepository.findByEmail(claims.getSubject());
        return userCustomizingService.update(user, userCustomizingUpdateDTO);
    }

    @Operation(summary = "", description = "유저 커스터마이징 삭제 API")
    @DeleteMapping("/remove")
    public ResponseEntity<String> remove(@RequestHeader("Authorization") String jwtToken) {
        Claims claims = Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(jwtToken).getBody();
        User user = userRepository.findByEmail(claims.getSubject());
        return userCustomizingService.delete(user);
    }
}
