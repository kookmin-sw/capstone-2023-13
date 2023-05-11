package com.metapop.backend.service;

import com.metapop.backend.dto.UserCustomizingDTO.UserCustomizingSaveDTO;
import com.metapop.backend.dto.UserCustomizingDTO.UserCustomizingUpdateDTO;
import com.metapop.backend.entity.User;
import com.metapop.backend.entity.UserCustomizing;
import com.metapop.backend.repository.UserCustomizingRepository;
import com.metapop.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserCustomizingService {

    private final UserCustomizingRepository userCustomizingRepository;

    public ResponseEntity<String> registration(User user, UserCustomizingSaveDTO userCustomizingSaveDTO){
        UserCustomizing Exist = userCustomizingRepository.findByPlayer(user);
        if(Exist != null) {
            return ResponseEntity.status(400).body("유저 커스터마이징이 이미 존재 합니다.");
        } else {
            userCustomizingRepository.save(userCustomizingSaveDTO.toEntity(user));
            return ResponseEntity.ok("유저 커스터마이징 등록 완료");
        }
    }

    public UserCustomizing info(User user) {
        UserCustomizing userCustomizing = userCustomizingRepository.findByPlayer(user);
        return userCustomizing;
    }

    public ResponseEntity<String> update(User user, UserCustomizingUpdateDTO userCustomizingUpdateDTO) {
        UserCustomizing userCustomizing = userCustomizingRepository.findByPlayer(user);
        userCustomizing.update(userCustomizingUpdateDTO);
        return ResponseEntity.ok("수정 완료");
    }
}
