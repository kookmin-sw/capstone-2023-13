package com.metapop.backend.service;

import com.metapop.backend.dto.StoreCustomizingDTO.StoreCustomizingSaveDTO;
import com.metapop.backend.entity.Store;
import com.metapop.backend.repository.StoreCustomizingRepository;
import com.metapop.backend.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class StoreCustomzingService {

    private final StoreRepository storeRepository;
    private final StoreCustomizingRepository storeCustomizingRepository;


    public String registration(StoreCustomizingSaveDTO storeCustomizingSaveDTO){
        Store store = storeRepository.findById(storeCustomizingSaveDTO.getStoreId()).orElseThrow();
        storeCustomizingRepository.save(storeCustomizingSaveDTO.toEntity(store));
        return "상점 커스터마이징 등록 완료";
    }
}
