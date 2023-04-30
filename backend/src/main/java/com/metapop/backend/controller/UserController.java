package com.metapop.backend.controller;

import com.metapop.backend.Provider.JwtTokenProvider;
import com.metapop.backend.dto.UserDTO.*;
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
import java.util.Optional;

@Tag(name = "user", description = "유저 API")
@RestController
@RequestMapping("users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Operation(summary = "", description = "회원가입 API")
    @PostMapping("/signup")
    public ResponseEntity<String> join(@RequestBody User user) {
        if(userService.isEmailDuplicate(user.getEmail())) {
            return ResponseEntity.status(400).body("Email already exists");
        }
        userService.join(user);
        return ResponseEntity.ok("Join Success!");
    }

    @Operation(summary = "", description = "로그인 API")
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDTO loginDTO) {
        if(userService.isEmailDuplicate(loginDTO.getEmail())) {
            if(userService.comparePassword(loginDTO.getEmail(),loginDTO.getPassword())) {
                User user = userRepository.findByEmail(loginDTO.getEmail());
                if(user != null) {
                    return ResponseEntity.ok(jwtTokenProvider.createToken(user.getEmail(), user.getPassword()));
                }
                return ResponseEntity.status(400).body("사용자를 찾을 수 없습니다.");
            }
            return ResponseEntity.status(400).body("비밀번호가 틀렸습니다.");
        }
        return ResponseEntity.status(400).body("사용자를 찾을 수 없습니다.");
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
    @GetMapping("/info/{user_id}")
    public Optional<User> info(@PathVariable Long user_id) {
        Optional<User> user = userRepository.findById(user_id);
        return user;
    }

    @Operation(summary = "", description = "유저 정보 수정 API")
    @PutMapping("/update/{user_id}")
    public ResponseEntity<?> updateInfo(@PathVariable Long user_id, @RequestBody UserUpdateDTO userUpdateDTO) {
        User user = userService.updateUserInfo(user_id, userUpdateDTO);
        return ResponseEntity.ok(user);
    }

    @Operation(summary = "", description = "비밀번호 찾기 API")
    @Transactional
    @PostMapping("/findpw")
    public ResponseEntity<?> findPw(@RequestBody FindPWDTO findPWDTO){
        User user = userRepository.findByEmail(findPWDTO.getEmail());
        if(userService.findPassword(findPWDTO)) {
            return ResponseEntity.ok(user.getNickname());
        }
        else{
            return ResponseEntity.ok("이메일과 이름이 일치하지 않습니다.");
        }
    }

    @Operation(summary = "", description = "내 정보 진입 API")
    @Transactional
    @PostMapping("/myinfo")
    public ResponseEntity<?> myInfo(@RequestBody LoginDTO loginDTO){
        if(userService.isEmailDuplicate(loginDTO.getEmail())) {
            if(userService.comparePassword(loginDTO.getEmail(),loginDTO.getPassword())) {
                return ResponseEntity.ok("내 정보 진입에 성공했습니다.");
            }
            return ResponseEntity.badRequest().body("비밀번호가 틀렸습니다.");
        }
        return ResponseEntity.badRequest().body("존재하지 않는 이메일입니다.");
    }

    @Operation(summary = "", description = "임시 비밀번호 이메일 전송 API")
    @Transactional
    @PostMapping("/send/Email")
    public ResponseEntity<String> sendEmail(@RequestParam("userEmail") String userEmail){
        MailDTO mailDTO = userService.createMailAndChangePassword(userEmail);
        userService.mailSend(mailDTO);

        return ResponseEntity.ok("임시 비밀번호 메일 전송, 변경 완료");
    }
}