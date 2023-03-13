package com.metapop.backend.service;

import com.metapop.backend.dto.UserUpdateDTO;
import com.metapop.backend.entity.User;
import com.metapop.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private BCryptPasswordEncoder encoder;
    private final UserRepository userRepository;

    public void join(User user) {
        userRepository.save(user);

        String password = user.getPassword();

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(password);
        user.setPassword(encodedPassword);
    }

    public boolean isEmailDuplicate(String email) {
        User findUser = userRepository.findByEmail(email);
        return findUser != null;
    }

    public User findByEmail(String email) {
        User findUser = userRepository.findByEmail(email);
        return findUser;
    }

    public Optional<User> getById(Long id) {
        return userRepository.findById(id);
    }

    public boolean comparePassword(String email,String password) {
        User findUser = userRepository.findByEmail(email);

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        boolean isMatched = passwordEncoder.matches(password, findUser.getPassword());

        if(isMatched) {
            return true;
        }
        else{
            return false;
        }
    }

    public User updateUserInfo(Long id, UserUpdateDTO userUpdateDTO) {
        User user = userRepository.findById(id).orElseThrow();
        user.update(userUpdateDTO);
        return user;
    }
}