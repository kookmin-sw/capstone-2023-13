package com.metapop.backend.service;

import com.metapop.backend.dto.StoreDTO.StoreSaveDTO;
import com.metapop.backend.dto.StoreDTO.StoreUpdateDTO;
import com.metapop.backend.entity.Product;
import com.metapop.backend.entity.Store;
import com.metapop.backend.entity.StoreCustomizing;
import com.metapop.backend.entity.User;
import com.metapop.backend.repository.ProductRepository;
import com.metapop.backend.repository.StoreCustomizingRepository;
import com.metapop.backend.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class StoreService {

    private final StoreRepository storeRepository;
    private final ProductRepository productRepository;
    private final StoreCustomizingRepository storeCustomizingRepository;

    public String registration(User user, StoreSaveDTO storeSaveDTO){
        Store Exist = storeRepository.findByOwner(user);
        if(Exist != null) {
            return "해당 아이디는 이미 상점이 존재합니다.";
        }
        else{
            storeRepository.save(storeSaveDTO.toEntity(user));
            return "상점 등록 완료";
        }
    }

    public Store infodetail(User user) {
        Store store = storeRepository.findByOwner(user);
        return store;
    }

    public List<Store> info() {
        List<Store> store = storeRepository.findAll();
        return store;
    }

    public Store infosign(String sign_name) {
        Store store = storeRepository.findBySignName(sign_name);
        return store;
    }

    public ResponseEntity<String> existstore(User user) {
        Store Exist = storeRepository.findByOwner(user);
        if(Exist != null) {
            return ResponseEntity.status(400).body("등록 불가");
        }
        else{
            return  ResponseEntity.ok("등록 가능");
        }
    }
    public String update(User user, StoreUpdateDTO storeUpdateDTO) {
        Store store = storeRepository.findByOwner(user);
        store.update(storeUpdateDTO);
        return "수정 완료";
    }

    public String delete(User user) {
        Store store = storeRepository.findByOwner(user);
        if (store == null){
            return "등록되어 있는 상점이 존재하지 않습니다.";
        }
        else{
            List<Product> products = productRepository.findByStoreId(store);
            if (products != null) {
                for (Product product: products) {
                    productRepository.delete(product);
                }
            }
            StoreCustomizing storeCustomizing = storeCustomizingRepository.findByStoreId(store);
            if (storeCustomizing != null) {
                storeCustomizingRepository.delete(storeCustomizing);
            }
            storeRepository.delete(store);
            return "삭제 완료";
        }
    }
}
