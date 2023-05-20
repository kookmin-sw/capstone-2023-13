package com.metapop.backend.service;

import com.metapop.backend.dto.ProductDTO.ProductSaveDTO;
import com.metapop.backend.dto.ProductDTO.ProductUpdateDTO;
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

    public List<Product> infotablename(Long store_id, String table_name) {
        Store store = storeRepository.findById(store_id).orElseThrow();
        List<Product> products = productRepository.findByStoreIdAndTableName(store, table_name);
        return products;
    }

    public Product update(Long product_id, ProductUpdateDTO productUpdateDTO) {
        Product product = productRepository.findById(product_id).orElseThrow();
        product.update(productUpdateDTO);
        return product;
    }

    public String delete(Long product_id) {
        Product product = productRepository.findById(product_id).orElseThrow();
        productRepository.delete(product);
        return "삭제 완료";
    }
}
