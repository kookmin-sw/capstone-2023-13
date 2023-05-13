package com.metapop.backend.entity;

import com.metapop.backend.dto.UserDTO.UserUpdateDTO;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "user")
@NoArgsConstructor
@Getter
@Setter
public class User implements UserDetails {
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
    private String nickname;

    @Column(nullable = false)
    private String bank;

    @Column(nullable = false)
    private String account;

    @Column(nullable = false)
    private String address;

    @Builder
    public User(String email, String password, String name, String nickname, String bank, String account, String address){
        this.email = email;
        this.password = cryptopassword(password);
        this.name = name;
        this.nickname = nickname;
        this.bank = bank;
        this.account = account;
        this.address = address;
    }

    public void update(UserUpdateDTO userUpdateDTO) {
        this.email = userUpdateDTO.getEmail();
        this.password = cryptopassword(userUpdateDTO.getPassword());
        this.name = userUpdateDTO.getName();
        this.nickname = userUpdateDTO.getNickname();
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

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        return getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}