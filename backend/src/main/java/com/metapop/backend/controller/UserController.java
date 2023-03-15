package com.metapop.backend.controller;

import com.metapop.backend.dto.LoginDTO;
import com.metapop.backend.dto.MailDTO;
import com.metapop.backend.dto.TokenDTO;
import com.metapop.backend.dto.UserUpdateDTO;
import com.metapop.backend.entity.User;
import com.metapop.backend.repository.UserRepository;
import com.metapop.backend.service.UserService;
import io.jsonwebtoken.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import java.util.Date;

@Tag(name = "user", description = "유저 API")
@RestController
@RequestMapping("users")
@CrossOrigin(origins = "*")
    public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    @Operation(summary = "", description = "회원가입 API")
    @PostMapping("/signup")
    public ResponseEntity<String> join(@RequestBody User user) {
        if(userService.isEmailDuplicate(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email already exists");
        }

        userService.join(user);
        return ResponseEntity.ok("Join Success!");
    }

    @Operation(summary = "", description = "로그인 API")
    @PostMapping("/login")
    public String login(@RequestBody LoginDTO loginDTO, HttpServletResponse response) {
        if(userService.isEmailDuplicate(loginDTO.getEmail())) {
            if(userService.comparePassword(loginDTO.getEmail(),loginDTO.getPassword())) {
                User user = userService.findByEmail(loginDTO.getEmail());
                String issuer = user.getId().toString();
                String jwt = Jwts.builder()
                        .setIssuer(issuer)
                        .setExpiration(new Date(System.currentTimeMillis() + 60 * 24 * 1000))
                        .signWith(SignatureAlgorithm.HS512, "metapop")
                        .compact();

                Cookie cookie = new Cookie("Token", jwt);
                response.addCookie(cookie);

                return jwt;
            }
        }
        return "Wrong Email or Password";
    }

    @Operation(summary = "", description = "로그아웃 API")
    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletResponse response) {
        Cookie cookie = new Cookie("Token", "");
        cookie.setMaxAge(0);
        response.addCookie(cookie);

        return ResponseEntity.ok("Logout Success!");
    }

    @Operation(summary = "", description = "유저 정보 조회 API")
    @PostMapping("/info")
    public ResponseEntity<?> info(@RequestBody TokenDTO tokenDTO) {
        try {
            if(tokenDTO == null) {
                return ResponseEntity.status(400).body("토큰이 없습니다.");
            }

            Claims token = Jwts.parser().setSigningKey("metapop").parseClaimsJws(tokenDTO.getToken()).getBody();

            return ResponseEntity.ok(this.userService.getById(Long.valueOf(token.getIssuer())));
        } catch (ExpiredJwtException e) {
            return ResponseEntity.status(400).body("토큰이 만료 되었습니다.");
        } catch (JwtException e) {
            return ResponseEntity.status(400).body("토큰이 다릅니다.");
        }
    }

    @Operation(summary = "", description = "유저 정보 수정 API")
    @PutMapping("/update/{user_id}")
    public ResponseEntity<?> updateInfo(@PathVariable Long user_id, @RequestBody UserUpdateDTO userUpdateDTO) {
        User user = userService.updateUserInfo(user_id, userUpdateDTO);
        return ResponseEntity.ok(user);
    }

    @Operation(summary = "", description = "임시 비밀번호 이메일 전송 API")
    @Transactional
    @PostMapping("/findpw")
    public ResponseEntity<String> findPw(@RequestParam("userEmail") String userEmail){
        MailDTO mailDTO = userService.createMailAndChangePassword(userEmail);
        userService.mailSend(mailDTO);

        return ResponseEntity.ok("임시 비밀번호 변경 완료");
    }
}