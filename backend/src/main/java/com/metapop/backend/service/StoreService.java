package com.metapop.backend.service;

import com.metapop.backend.dto.StoreSaveDTO;
import com.metapop.backend.entity.Store;
import com.metapop.backend.entity.User;
import com.metapop.backend.repository.StoreRepository;
import com.metapop.backend.repository.UserRepository;
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
}
