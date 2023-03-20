package com.metapop.backend.service;

import com.metapop.backend.dto.StoreSaveDTO;
import com.metapop.backend.dto.TokenDTO;
import com.metapop.backend.entity.Store;
import com.metapop.backend.entity.User;
import com.metapop.backend.repository.StoreRepository;
import com.metapop.backend.repository.UserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class StoreService {

    private final StoreRepository storeRepository;
    private final UserRepository userRepository;
    private final UserService userService;

    public String registration(StoreSaveDTO storeSaveDTO){
        User user = userRepository.findById(storeSaveDTO.getUserId()).orElseThrow();
        Store Exist = storeRepository.findByOwner(user);
        if(Exist != null) {
            return "해당 아이디는 이미 상점이 존재합니다.";
        }
        else{
            storeRepository.save(storeSaveDTO.toEntity(user));
            return "상점 등록 완료";
        }
    }

    public String delete(Long user_id, TokenDTO tokenDTO) {
        Claims token = Jwts.parser().setSigningKey("metapop").parseClaimsJws(tokenDTO.getToken()).getBody();
        if (user_id == this.userService.getById(Long.valueOf(token.getIssuer())).get().getId()){
            return "삭제 완료";
        }
        else {
            return "삭제 실패";
        }
    }
}
