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

    public void registration(StoreSaveDTO storeSaveDTO){
        User user = userRepository.findById(storeSaveDTO.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("해당 유저가 존재하지 않습니다."));
        storeRepository.save(storeSaveDTO.toEntity(user));
    }
}
