package com.metapop.backend.entity;

import com.metapop.backend.dto.UserUpdateDTO;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;

@Entity
@Table(name = "user")
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String bank;

    @Column(nullable = false)
    private String account;

    @Column(nullable = false)
    private String address;

    public void update(UserUpdateDTO userUpdateDTO) {
        this.email = userUpdateDTO.getEmail();
        this.password = cryptopassword(userUpdateDTO.getPassword());
        this.name = userUpdateDTO.getName();
        this.bank = userUpdateDTO.getBank();
        this.account = userUpdateDTO.getAccount();
        this.address = userUpdateDTO.getAddress();
    }

    public void updatePw(String password) {
        this.password = cryptopassword(password);
    }

    public String cryptopassword(String password) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(password);
        return encodedPassword;
    }
}