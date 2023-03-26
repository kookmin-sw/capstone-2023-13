package com.metapop.backend.service;

import com.metapop.backend.dto.ProductSaveDTO;
import com.metapop.backend.entity.Store;
import com.metapop.backend.repository.ProductRepository;
import com.metapop.backend.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ProductService {

    private final StoreRepository storeRepository;
    private final ProductRepository productRepository;

    public String registration(ProductSaveDTO productSaveDTO){
        Store store = storeRepository.findById(productSaveDTO.getStoreId()).orElseThrow();
        productRepository.save(productSaveDTO.toEntity(store));
        return "상품 등록 완료";
    }
}
