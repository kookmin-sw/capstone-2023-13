package com.metapop.backend.service;

import com.metapop.backend.entity.User;
import com.metapop.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void join(User user) {
        userRepository.save(user);
    }

    public boolean isEmailDuplicate(String email) {
        User findUser = userRepository.findByEmail(email);
        return findUser != null;
    }

    public boolean comparePassword(String email,String password) {
        User findUser = userRepository.findByEmail(email);
        if(findUser.getPassword().equals(password)) {
            return true;
        }
        else{
            return false;
        }

    }
}