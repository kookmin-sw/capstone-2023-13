package com.metapop.backend.service;

import com.metapop.backend.dto.ProductSaveDTO;
import com.metapop.backend.entity.Product;
import com.metapop.backend.entity.Store;
import com.metapop.backend.repository.ProductRepository;
import com.metapop.backend.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

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

    public List<Product> info(Long store_id) {
        Store store = storeRepository.findById(store_id).orElseThrow();
        List<Product> product = productRepository.findByStoreId(store);
        return product;
    }

    public Optional<Product> infodetail(Long product_id) {
        return productRepository.findById(product_id);
    }
}
