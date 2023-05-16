package com.metapop.backend.controller;

import com.metapop.backend.Provider.JwtTokenProvider;
import com.metapop.backend.dto.UserDTO.*;
import com.metapop.backend.entity.User;
import com.metapop.backend.repository.UserRepository;
import com.metapop.backend.service.UserService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.Date;

@Tag(name = "user", description = "유저 API")
@RestController
@RequestMapping("users")
@CrossOrigin(origins = "*")
public class UserController {

    private String secretKey = "MetaPop";

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Operation(summary = "", description = "회원가입 API")
    @PostMapping("/signup")
    public ResponseEntity<String> join(@RequestBody SignUpDTO signUpDTO) {
        if(userService.isEmailDuplicate(signUpDTO.getEmail())) {
            return ResponseEntity.status(400).body("Email already exists");
        }
        userService.join(signUpDTO);
        return ResponseEntity.ok("Join Success!");
    }

    @Operation(summary = "", description = "이메일 중복 확인 API")
    @PostMapping("/emailDup")
    public ResponseEntity<String> emailDup(@RequestBody User email) {
        User user = userService.findByEmail(email.getEmail());
        if (user != null) {
            return ResponseEntity.ok("Email already exists");
        }
        else {
            return ResponseEntity.status(400).body("Email not exists");
        }
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
    public ResponseEntity<String> logout(@RequestHeader("Authorization") String jwtToken) {
        Date now = new Date();
        Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(jwtToken);
        claims.getBody().setExpiration(now);
        return ResponseEntity.ok().body("로그아웃이 완료되었습니다.");
    }

    @Operation(summary = "", description = "유저 정보 조회 API")
    @GetMapping("/info")
    public User info(@RequestHeader("Authorization") String jwtToken) {
        Claims claims = Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(jwtToken).getBody();
        User user = userRepository.findByEmail(claims.getSubject());
        return user;
    }

    @Operation(summary = "", description = "유저 정보 수정 API")
    @PutMapping("/update")
    public User updateInfo(@RequestBody UserUpdateDTO userUpdateDTO, @RequestHeader("Authorization") String jwtToken) {
        Claims claims = Jwts.parser().setSigningKey(secretKey.getBytes()).parseClaimsJws(jwtToken).getBody();
        User user = userRepository.findByEmail(claims.getSubject());
        userService.updateUserInfo(user, userUpdateDTO);
        return user;
    }

    @Operation(summary = "", description = "비밀번호 찾기 API")
    @Transactional
    @PostMapping("/findpw")
    public ResponseEntity<String> findPw(@RequestBody FindPWDTO findPWDTO){
        if(userService.findPassword(findPWDTO)) {
            MailDTO mailDTO = userService.createMailAndChangePassword(findPWDTO.getEmail());
            userService.mailSend(mailDTO);
            return ResponseEntity.ok("임시 비밀번호 메일 전송, 변경 완료");
        }
        else{
            return ResponseEntity.status(400).body("이메일과 이름이 일치하지 않습니다.");
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
