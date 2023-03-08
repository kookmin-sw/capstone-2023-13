package com.metapop.backend.controller;

import com.metapop.backend.dto.LoginDTO;
import com.metapop.backend.entity.User;
import com.metapop.backend.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "user", description = "유저 API")
@RestController
@RequestMapping("users")
public class UserController {
    @Autowired
    private UserService userService;

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
    public ResponseEntity<String> login(@RequestBody LoginDTO loginDto) {
        if(userService.isEmailDuplicate(loginDto.getEmail())) {
            if(userService.comparePassword(loginDto.getEmail(),loginDto.getPassword())) {
                return ResponseEntity.ok("Login Success!");
            }
        }
        return ResponseEntity.badRequest().body("Login Fail!");
    }
}